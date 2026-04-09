# MedLinka — Software Architecture Document

> **Audience guide:** Sections 1–4 are for all readers. Section 5 (Logical View) targets end-users and business stakeholders. Section 6 (Process View) targets system integrators and performance engineers. Section 7 (Development View) targets developers and project managers. Section 8 (Physical View) targets system engineers and DevOps. Section 9 (Scenarios) is for all readers and serves as validation of the architecture.

---

## Change History

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| 1.0 | 2026-04-10 | MedLinka Team | Initial release — full 4+1 reorganization |

---

## Table of Contents

1. Scope
2. References
3. Software Architecture Overview
4. Architectural Goals and Constraints
5. Logical View
6. Process View
7. Development View
8. Physical View
9. Scenarios
10. Size and Performance
11. Quality

Appendix A — Acronyms and Abbreviations  
Appendix B — Definitions / Glossary  
Appendix C — Design Principles and Rationale

---

## 1. Scope

MedLinka addresses the difficulty many people face when accessing affordable healthcare. Physical distance from hospitals, cost barriers, and lack of digital health tools leave many patients without timely care. MedLinka is a modular web application that bridges patients and medical resources by centralizing three core services: AI-assisted symptom triage, doctor consultation booking, and pharmacy ordering with automated medication reminders.

**What MedLinka covers:**

- Secure user registration and profile management for patients and doctors
- AI-powered symptom analysis via an external language model API
- Video-based doctor consultation scheduling and execution
- Medicine catalogue browsing, ordering, and prescription tracking
- Automated push, email, and SMS reminders for medication intake

**What MedLinka explicitly does not cover:**

- Real-time hardware sensor integration or external health device synchronization
- In-person hospital management or electronic health record (EHR) interoperability
- Payment processing (marked [TBD] for a future release)
- Native mobile applications (web-only in this version; native app deferred pending usage data)

This document follows the Kruchten 4+1 Architectural View Model and is intended to serve as both a team reference and a project deliverable for SWE 332 Software Architecture.

---

## 2. References

| # | Title | Source |
|---|-------|--------|
| R1 | Architectural Blueprints — The "4+1" View Model of Software Architecture | Philippe Kruchten, IEEE Software, Vol. 12 No. 6, November 1995 |
| R2 | 4+1 Architectural View Model | Wikipedia — https://en.wikipedia.org/wiki/4%2B1_architectural_view_model |
| R3 | SWE 332 Software Architecture — Lecture 1 Slides | Course material, semester 2025–2026 |
| R4 | SWE 332 Software Architecture — Lecture 2 Slides | Course material, semester 2025–2026 |
| R5 | Arc42 Architecture Template | https://arc42.org/overview/ |
| R6 | GitHub Markdown Guide | https://docs.github.com/en/get-started/writing-on-github |
| R7 | Project Part 2 Requirements and Submission Guidelines | SWE 332 course portal |

---

## 3. Software Architecture Overview

MedLinka is designed as a modular web application. The architecture separates user-facing concerns (the frontend), business logic (the Django backend), asynchronous task processing (Celery workers), and external service integrations into distinct, independently maintainable units.

The fundamental architectural strategy is **modular decomposition with a service-layer abstraction**. Each major domain — AI triage, consultation, pharmacy, and reminders — is implemented as a separate Django application. External dependencies (OpenAI, Video API, Notification Service) are each wrapped behind a dedicated service class so that no view or model directly imports a third-party SDK. This means replacing any external provider requires changing exactly one file.

### 3.1 Architectural Style

The system follows a **layered client-server** style with an **asynchronous task queue** extension:

- The client (browser) communicates with the server over HTTPS using a request-response model.
- The Django application server processes synchronous requests and delegates long-running or time-scheduled work to Celery workers via a Redis message broker.
- External APIs are consumed from the server side only — never from the browser — to protect API keys and enforce the medical disclaimer wrapper.

**Alternative styles considered:**

| Style | Rationale for rejection |
|-------|------------------------|
| Microservices | Operational complexity far exceeds the team size and academic timeframe. Microservices are appropriate when independent deployment of services is required; MedLinka does not yet have that requirement. |
| Serverless (AWS Lambda) | Stateless function execution is unsuitable for the session-based authentication and long-lived video consultation flows that MedLinka requires. |

### 3.2 Correspondence Between Views

The table below maps each element across the four main views, following Kruchten (1995) §"Correspondence Between Views."

| Logical class / category | Process task | Development module | Physical node |
|--------------------------|-------------|-------------------|---------------|
| `User`, `DoctorProfile` | Handled synchronously in the Django request-response cycle | `account/` Django app | EC2 App Server |
| `TriageSession`, `AIAdvice` | `ai_triage` synchronous view + optional async logging minor task | `ai_triage/` Django app | EC2 App Server → OpenAI API |
| `ConsultationBooking`, `AvailabilitySlot` | Synchronous booking transaction | `consultation/` Django app | EC2 App Server → RDS |
| `MedicineOrder`, `OrderItem` | Synchronous order transaction | `pharmacy/` Django app | EC2 App Server → RDS |
| `PrescriptionSchedule`, `ReminderTask` | Major Celery task — independently scheduled and retried | `reminder/` Django app + `celery.py` | EC2 Worker Node → ElastiCache Redis → Notification API |
| `Notification` | Minor task — dispatched by the reminder major task | `notification/` Django app | EC2 Worker Node → Twilio / Firebase |

The Scenarios in Section 9 trace the two primary user journeys through both the Logical and Process views.

---

## 4. Architectural Goals and Constraints

### 4.1 Stakeholders

| Stakeholder | Role | Key expectations |
|-------------|------|-----------------|
| Patient | Primary end-user | Fast symptom triage, reliable booking, timely reminders |
| Doctor | Secondary end-user | Clear schedule management, reliable video connection |
| Development team (5 students) | Builders and maintainers | Clean module boundaries, clear task ownership |
| Academic supervisor | Evaluator | Compliance with 4+1 model, documented rationale |
| Future maintainers | Post-course owners | Readable code, documented decisions, testable modules |

### 4.2 Quality Goals (Priority Order)

| Priority | Quality Attribute | Description | Measurable target |
|----------|------------------|-------------|-------------------|
| 1 | Security / Privacy | Health data must not be exposed to unauthorized parties | All PII fields encrypted at rest; HTTPS enforced on all endpoints; 100% of expired tokens rejected |
| 2 | Reliability | Core flows must not silently fail | Celery tasks retry up to 3 times; 0 empty orders or bookings written to DB |
| 3 | Performance | Users must not wait on key interactions | Dashboard load p95 < 2,000 ms; AI response p95 < 5,000 ms (network-bound) |
| 4 | Modifiability | Swapping an external provider must be low-cost | Changing AI provider requires editing ≤ 1 file (`ai_triage/service.py`) |
| 5 | Accessibility | Platform must be usable by elderly users | WCAG AA compliance; all interactive elements keyboard-navigable |
| 6 | Scalability | System must grow without redesign | EC2 autoscaling group handles 10× user growth without architectural change |

### 4.3 Constraints

| Constraint | Type | Explanation |
|------------|------|-------------|
| Python mandatory for backend | Technical | Set by course requirements; no alternative considered |
| One academic semester timeline | Organizational | Limits scope; drives the decision to defer native mobile apps and payment processing |
| Free or open-source APIs only (where possible) | Budget | OpenAI free tier used during development; Daily.co / Twilio free tiers for video and notifications |
| Team of 5 students | Organizational | Module ownership must be clearly assigned; monorepo preferred over distributed repos |
| Django framework | Technical | Chosen to satisfy the Python constraint while providing built-in ORM, admin, and auth |

### 4.4 Architecture Drivers Summary

The primary architecture drivers, in Kruchten's terminology, are:

- **Design objective:** Deliver a working healthcare platform within one semester with a team of five.
- **Functional requirements:** AI triage, consultation booking, pharmacy ordering, medication reminders.
- **Quality attributes:** Security and reliability are non-negotiable; performance and modifiability are high priority.
- **Constraints:** Python backend, academic timeline, zero budget for paid infrastructure during development.
- **Concerns:** Medical advice liability (addressed by the mandatory disclaimer wrapper), data privacy (addressed by encryption at rest and HTTPS).

---

## 5. Logical View

> **Reader:** End-users, business stakeholders, and developers seeking to understand what the system does in terms of its key objects and their relationships.

### 5.1 Introduction

The logical view describes the object-oriented decomposition of MedLinka. It focuses on functional requirements — the services the system provides to its users — and is organized around five class categories, each corresponding to a bounded domain. The goal is a single, coherent object model shared across all parts of the system, following Kruchten's (1995) guidance that "a single coherent object model" prevents premature specialization.

### 5.2 Class Categories and Responsibilities

**Category 1 — Identity and Access (`account`)**

| Class | Responsibility |
|-------|---------------|
| `User` | Stores credentials, role (patient / doctor), contact info, and account status. Base class for all users. |
| `DoctorProfile` | Extends `User`; stores medical specialty, license number, and bio. Associated with `AvailabilitySlot`. |
| `PatientProfile` | Extends `User`; stores date of birth and medical history summary. |

**Category 2 — AI Triage (`ai_triage`)**

| Class | Responsibility |
|-------|---------------|
| `TriageSession` | Represents one AI chat conversation. Linked to a `User`. Stores session ID and creation timestamp. |
| `AIAdvice` | A single AI response within a `TriageSession`. Stores raw AI output, the wrapped disclaimer text, and the suggested medical specialty. |

**Category 3 — Consultation (`consultation`)**

| Class | Responsibility |
|-------|---------------|
| `AvailabilitySlot` | A 30-minute window on a doctor's calendar. States: `open`, `booked`, `cancelled`. |
| `ConsultationBooking` | Links a `PatientProfile` to an `AvailabilitySlot`. Stores status and the video room token. |

**Category 4 — Pharmacy (`pharmacy`)**

| Class | Responsibility |
|-------|---------------|
| `Category` | Groups medicines into browsable sections (e.g., Antibiotics, Pain Relief). |
| `Medicine` | Catalogue item. Stores name, dosage form, strength, price, stock, and `requires_prescription` flag. |
| `Cart` | One active cart per user. States: `active`, `checked_out`, `abandoned`. |
| `CartItem` | Join between `Cart` and `Medicine`. Stores quantity and unit price at time of adding. |
| `Order` | Created on checkout. Stores status, total, delivery address snapshot, and payment status. |
| `OrderItem` | Permanent line item on an `Order`. Stores `dosage_instructions` — the field read by the reminder module. |

**Category 5 — Reminders and Notifications (`reminder`, `notification`)**

| Class | Responsibility |
|-------|---------------|
| `PrescriptionSchedule` | Generated from an `OrderItem`. Defines frequency, start date, and end date for a medication. |
| `ReminderTask` | A single scheduled notification instance. References `PrescriptionSchedule`. States: `pending`, `sent`, `failed`. |
| `Notification` | Record of a dispatched message. Stores channel (push / email / SMS), delivery status, and timestamp. |

### 5.3 Key Relationships

- `User` ← inheritance — `DoctorProfile`, `PatientProfile`
- `TriageSession` → association → `User` (one user, many sessions)
- `AIAdvice` → composition → `TriageSession` (advice cannot exist without a session)
- `ConsultationBooking` → association → `PatientProfile` and `AvailabilitySlot`
- `AvailabilitySlot` → association → `DoctorProfile`
- `Order` → composition → `OrderItem` (items cannot exist without an order)
- `PrescriptionSchedule` → association → `OrderItem` (one order item generates one schedule)
- `ReminderTask` → composition → `PrescriptionSchedule`

### 5.4 Diagram Description

**Diagram type:** Class diagram (UML notation)  
**Legend:**

| Symbol | Meaning |
|--------|---------|
| Solid box | Class |
| Arrow with hollow triangle head | Inheritance (subclass → superclass) |
| Solid line with open arrow | Association |
| Solid line with filled diamond | Composition (child cannot exist without parent) |
| Dashed box grouping | Class category (Django app boundary) |

The diagram is organized left-to-right: `account` category on the left, `ai_triage` and `consultation` in the center-top, `pharmacy` in the center-bottom, and `reminder` / `notification` on the right. The `OrderItem.dosage_instructions` field is highlighted as the critical bridge between the pharmacy and reminder categories.

### 5.5 Rationale

The system is decomposed by domain (account, triage, consultation, pharmacy, reminders) rather than by technical layer (controllers, services, repositories) because domain decomposition maps directly to team ownership — each of the five team members owns one domain — and produces module boundaries that remain stable as features evolve. Technical layering was considered but rejected because it tends to scatter related business logic across multiple files and does not align with how the team is structured.

---

## 6. Process View

> **Reader:** System integrators, performance engineers, and developers responsible for concurrency and error handling.

### 6.1 Introduction

The process view describes the runtime behavior of MedLinka: what executes when, on which thread of control, and how tasks communicate. It addresses concurrency, fault tolerance, and the system's response to external stimuli. This view is necessary because MedLinka has one class of work that cannot run synchronously in the HTTP request cycle — medication reminder scheduling — and this asynchronous boundary is the most critical architectural decision in the process dimension.

### 6.2 Major and Minor Tasks

Following Kruchten's (1995) terminology, a **major task** is an independently schedulable execution unit that can be started, stopped, and retried independently. A **minor task** is introduced locally for implementation reasons.

| Task | Type | Description | Communication mechanism |
|------|------|-------------|------------------------|
| Django WSGI worker | Major | Handles HTTP requests synchronously. One worker per Gunicorn process. | HTTPS request-response |
| Celery reminder scheduler | Major | Picks up `ReminderTask` entries and dispatches notifications at the scheduled time. Can be replicated for load. | Asynchronous message queue (Redis) |
| Notification dispatcher | Minor | Sub-task within a Celery worker. Selects the correct channel (push / email / SMS) and calls the Notification API. | Internal function call within the worker process |
| AI disclaimer wrapper | Minor | Executes within the Django worker thread immediately after the OpenAI API response is received. Appends the legal disclaimer before the response is returned. | Synchronous function call |
| Session logger | Minor | Writes the `TriageSession` record to the database after the AI response is returned. | Synchronous ORM write |

### 6.3 Process Flow

The two primary process flows are:

**Flow A — AI Triage and Consultation Booking (synchronous)**

1. Browser sends HTTPS POST `/triage/chat/` with symptom text.
2. Django worker validates the request and authenticates the user.
3. Django worker calls `ai_triage.service.analyze(symptoms)` — a synchronous call to the OpenAI API.
4. The AI disclaimer wrapper appends the legal disclaimer to the raw response (minor task, same thread).
5. The session logger writes the `TriageSession` and `AIAdvice` records to PostgreSQL (minor task, same thread).
6. Django worker returns the wrapped response to the browser.
7. Browser displays the suggestion and a "Book now" call-to-action.
8. User clicks "Book now"; browser sends HTTPS POST `/consultations/book/`.
9. Django worker checks `AvailabilitySlot` availability in PostgreSQL and writes the `ConsultationBooking` record atomically.
10. Django worker returns booking confirmation and video room token to the browser.

**Flow B — Medicine Order and Reminder Scheduling (synchronous + asynchronous)**

1. User confirms checkout; browser sends HTTPS POST `/pharmacy/checkout/`.
2. Django worker validates cart, checks stock, writes `Order` and `OrderItem` records, decrements stock — all in a single database transaction.
3. Django worker publishes a `generate_reminder_schedule` task message to the Redis queue and returns the order confirmation to the browser immediately (the user does not wait for scheduling to complete).
4. Celery worker picks up the message, reads `OrderItem.dosage_instructions`, and creates `PrescriptionSchedule` and `ReminderTask` records.
5. At each scheduled time, the Celery beat scheduler triggers the notification dispatcher minor task.
6. The notification dispatcher calls the Notification API (Twilio / Firebase) to send push, email, or SMS.
7. The `ReminderTask` record is updated to `sent` or `failed`. On failure, Celery retries up to 3 times with exponential backoff.

### 6.4 Fault Tolerance

| Failure point | Behavior |
|--------------|---------|
| OpenAI API timeout | Django returns a graceful error: "AI unavailable — please describe your symptoms directly to a doctor." No retry — retrying a triage request with stale user input has no value. |
| Celery worker crash mid-reminder | Redis broker retains the message. When the worker restarts, it picks up the message and retries. Maximum 3 retries. After 3 failures, the `ReminderTask` is marked `failed` and a Sentry alert fires. |
| Database write failure during checkout | The entire checkout transaction is rolled back atomically. The user sees an error and is invited to retry. No partial order is written. |
| Video API token generation failure | The booking is written to the database (the slot is reserved) but the video token is `null`. The doctor and patient both receive an email instructing them to retry joining. [TO UPDATE: implement token regeneration endpoint] |

### 6.5 Diagram Description

**Diagram type:** Sequence diagram (UML notation)  
**Legend:**

| Symbol | Meaning |
|--------|---------|
| Vertical dashed line | Lifeline — an active participant in the interaction |
| Solid arrow with filled head | Synchronous call (caller waits for response) |
| Dashed arrow with open head | Asynchronous return or response |
| Rectangle on lifeline | Activation box — the period during which a participant is executing |
| Dashed arrow to queue | Message published to Redis; caller does not wait |

Two diagrams are produced: one for Flow A (symptom → consultation) and one for Flow B (order → reminder). Each diagram respects Miller's Law — no more than 7 participants per diagram.

### 6.6 Cross-Cutting Concerns

**Input validation:** All incoming HTTP request data is validated at the Django serializer layer before any business logic executes. Invalid input returns HTTP 400 with a structured error envelope: `{ "status": "error", "message": "...", "field": "..." }`. No raw exception text is ever returned to the client.

**Exception management and logging:** All unhandled exceptions are captured by Sentry (structured error tracking). Django middleware logs every request with its status code, duration, and authenticated user ID (never the request body, which may contain health data). Celery task failures are logged with task ID, exception type, and retry count.

**Data migration and backup:** Django migrations are the single source of truth for schema changes. PostgreSQL automated backups are taken daily via RDS automated backup (retention: 7 days). [TO UPDATE: define point-in-time recovery procedure before production launch]

### 6.7 Rationale

The decision to handle reminder scheduling asynchronously via Celery and Redis, rather than synchronously within the HTTP cycle or via a simple cron job, was made for three reasons. First, reminder dispatch involves a third-party API call that can take 1–3 seconds per notification; blocking the HTTP worker on this would degrade perceived performance significantly. Second, Celery provides built-in retry logic and failure tracking that a cron job does not. Third, the Redis broker decouples the Django app from the worker, meaning reminder processing can be scaled independently if usage grows. The downside of this decision is operational complexity: Redis and Celery must be deployed, monitored, and kept alive alongside the main application. This is a real cost accepted consciously given the reliability benefit.

---

## 7. Development View

> **Reader:** Developers and project managers responsible for code organization, task allocation, and release planning.

### 7.1 Introduction

The development view describes the static organization of MedLinka's source code as it lives in the repository. It defines the layer hierarchy, module boundaries, and the rules that govern how modules may depend on each other. This view is the primary reference for new team members joining the project and for planning which team member owns which module.

### 7.2 Layer Hierarchy

MedLinka's codebase is organized into five layers. A module in a given layer may only import from modules in the same layer or lower layers. This rule is enforced during code review.

```
Layer 5 — Delivery & Infrastructure
  infra/           (Dockerfile, docker-compose, nginx config)
  requirements/    (base.txt, dev.txt, prod.txt)

Layer 4 — Application Entry Points
  config/          (settings/, urls.py, wsgi.py, asgi.py)
  celery.py        (Celery app and beat schedule)

Layer 3 — Domain Applications
  account/         (models, views, serializers, urls)
  ai_triage/       (models, views, service.py, serializers)
  consultation/    (models, views, serializers, urls)
  pharmacy/        (models, views, serializers, urls)
  reminder/        (models, tasks.py, schedule.py)
  notification/    (models, dispatch.py)

Layer 2 — Shared Utilities
  core/            (base model classes, standard response envelope, shared validators)
  exceptions/      (custom exception classes and handlers)

Layer 1 — Static Assets and Templates
  frontend/        (templates/, static/ — CSS, JS, HTML)

Layer 0 — External (not owned by this codebase)
  PostgreSQL, Redis, OpenAI API, Video API, Notification API
```

### 7.3 Module Responsibilities

| Module | Layer | Owner | Responsibility |
|--------|-------|-------|---------------|
| `config/` | 4 | Team lead | Django settings (dev / staging / prod split), root URL routing, WSGI/ASGI entrypoints |
| `celery.py` | 4 | Reminder owner | Celery application instance, beat schedule definition |
| `account/` | 3 | Member 1 | User model, registration, login, JWT token issuance, role-based access control |
| `ai_triage/` | 3 | Member 2 | TriageSession and AIAdvice models, OpenAI service wrapper, disclaimer injection |
| `consultation/` | 3 | Member 3 | AvailabilitySlot and ConsultationBooking models, video token generation |
| `pharmacy/` | 3 | Member 4 | Medicine catalogue, Cart, Order, OrderItem models, stock management |
| `reminder/` | 3 | Member 5 | PrescriptionSchedule, ReminderTask models, Celery task definitions |
| `notification/` | 3 | Member 5 | Notification dispatch logic for push / email / SMS channels |
| `core/` | 2 | Team lead | `BaseModel` (UUID primary key, timestamps), standard API response envelope, shared field validators |
| `exceptions/` | 2 | Team lead | Custom exception classes, DRF exception handler override |
| `frontend/` | 1 | All members | HTML templates, CSS (modular), JavaScript (vanilla or minimal framework) |
| `infra/` | 5 | Team lead | Docker, Nginx, environment variable templates |
| `requirements/` | 5 | Team lead | Pinned dependency files split by environment |

### 7.4 Key Design Rules

The following rules govern development across all modules and are enforced in code review:

1. No domain application (`Layer 3`) may import from another domain application directly. Cross-domain communication must pass through a service function or a shared `core/` utility.
2. The `ai_triage/service.py` file is the only location permitted to import the OpenAI SDK. All other modules call `ai_triage.service.analyze()`.
3. Every API endpoint must return the standard response envelope defined in `core/`: `{ "status": "ok" | "error", "data": {...}, "message": "..." }`.
4. All models must inherit from `core.BaseModel` to inherit the UUID primary key and `created_at` / `updated_at` timestamps.
5. Naming conventions: model class names are PascalCase singular nouns; URL patterns are kebab-case; Python variables and functions are snake_case.

### 7.5 Diagram Description

**Diagram type:** Package diagram (UML notation)  
**Legend:**

| Symbol | Meaning |
|--------|---------|
| Large rectangle | Package (module or layer) |
| Dashed arrow | Import dependency (source imports from target) |
| Solid horizontal line | Layer boundary |
| Label inside rectangle | Module name and primary responsibility |

The diagram shows five horizontal bands (layers 1–5). Within Layer 3, six domain application packages are shown side by side. Dashed arrows from each domain package point downward to `core/` and `exceptions/` in Layer 2. No horizontal dashed arrows exist between domain packages (enforcing Rule 1 above).

### 7.6 Reuse and Portability

The `ai_triage/service.py` abstraction is the primary reuse point. Because all AI calls pass through a single interface (`analyze(symptoms: str) -> AIAdviceDTO`), the underlying model (OpenAI, Anthropic, Google) can be swapped without touching any view, serializer, or model. The same pattern applies to `notification/dispatch.py` — all notification channels are invoked through a single `dispatch(user_id, message, channels)` function.

### 7.7 Rationale

Django was chosen as the backend framework over Flask and FastAPI. Flask was rejected because it provides no ORM, admin panel, or authentication system, requiring the team to build these from scratch within a one-semester timeline. FastAPI was rejected because it optimizes for async performance at the cost of a steeper learning curve and less mature ecosystem for admin tooling. Django provides the broadest set of built-in tools for a team of five students with a fixed deadline. The downside accepted is that Django is heavier than the alternatives; this is a justified trade-off given the timeline constraint.

---

## 8. Physical View

> **Reader:** System engineers, DevOps engineers, and anyone responsible for deploying, monitoring, or scaling MedLinka.

### 8.1 Introduction

The physical view describes how MedLinka's software components are mapped onto hardware and cloud infrastructure. It accounts for the non-functional requirements of availability, reliability, performance, and scalability. Two configurations are described: the development configuration (used by the team during building) and the production configuration (the target deployment).

### 8.2 Development Configuration

The development configuration runs entirely on each developer's local machine using Docker Compose. It is not representative of production but mirrors its topology:

| Container | Image | Role |
|-----------|-------|------|
| `web` | Python 3.12 + Django | Django development server (hot reload enabled) |
| `worker` | Python 3.12 + Celery | Celery worker (single process) |
| `db` | PostgreSQL 16 | Local database (data persisted in Docker volume) |
| `redis` | Redis 7 | Local message broker and Celery result backend |

All containers communicate over a private Docker bridge network. No external APIs are called in development unless the developer explicitly sets real API keys in `.env.dev`.

### 8.3 Production Configuration (AWS)

The production configuration is hosted on AWS within a single VPC (Virtual Private Cloud):

| Node | AWS Service | Software | Role |
|------|------------|---------|------|
| CloudFront | AWS CloudFront | — | CDN, HTTPS termination, static asset caching |
| App Server | EC2 (t3.medium) | Nginx + Gunicorn + Django | HTTP request processing, business logic |
| Celery Worker | EC2 (t3.small) | Celery + Beat scheduler | Asynchronous task processing, reminder dispatch |
| Database | RDS (PostgreSQL 16, db.t3.micro) | PostgreSQL | Primary relational data store |
| Cache / Broker | ElastiCache (Redis 7) | Redis | Celery message broker |
| Static Files | S3 + CloudFront | — | CSS, JS, images |

**External nodes (outside the VPC):**

| Service | Provider | Purpose |
|---------|----------|---------|
| OpenAI API | OpenAI | AI symptom analysis |
| Video API | Daily.co | Real-time doctor-patient video consultation |
| Notification API | Twilio (SMS/email) + Firebase (push) | Medication reminders |

### 8.4 Process-to-Node Mapping

Following Kruchten (1995), the process view tasks map to physical nodes as follows:

| Process task (from Section 6) | Physical node |
|-------------------------------|--------------|
| Django WSGI workers | EC2 App Server |
| Celery reminder scheduler + notification dispatcher | EC2 Celery Worker |
| AI disclaimer wrapper + session logger | EC2 App Server (runs in Django worker thread) |
| Redis message queue | ElastiCache |
| All persistent data writes | RDS PostgreSQL |

### 8.5 Scalability Path

The current production configuration is designed for a small user base (< 1,000 concurrent users). The following incremental scaling steps require no architectural change:

1. Add more Gunicorn workers on the App Server EC2 (vertical scaling).
2. Add a second App Server EC2 behind an AWS Application Load Balancer (horizontal scaling).
3. Add an RDS Read Replica to offload read-heavy queries (e.g., medicine catalogue browsing).
4. Add a second Celery Worker EC2 to scale reminder dispatch throughput.

[TO UPDATE: Define the autoscaling trigger thresholds (CPU %, request queue depth) before the production launch.]

### 8.6 Diagram Description

**Diagram type:** Deployment diagram (UML notation)  
**Legend:**

| Symbol | Meaning |
|--------|---------|
| 3D box (node) | Physical hardware or cloud infrastructure node |
| Rectangle inside a node | Software component deployed on that node |
| Solid arrow | Synchronous HTTPS or TCP communication |
| Dashed arrow | Asynchronous communication (message queue) |
| Dashed boundary rectangle | Logical grouping (e.g., AWS VPC) |

The diagram shows the browser on the left connecting via HTTPS to CloudFront, which routes to the EC2 App Server. The App Server connects synchronously to RDS and ElastiCache and asynchronously (via Redis) to the Celery Worker. The Celery Worker connects to the Notification API. Both the App Server and Celery Worker connect to external APIs (OpenAI, Video API) over HTTPS.

### 8.7 Tailoring Note

Because MedLinka currently has one primary process type (synchronous HTTP request handling) and one asynchronous process type (Celery reminder tasks), the process view is simplified compared to a fully distributed system. The physical view therefore shows only two server-side nodes (App Server and Worker), rather than a complex multi-node cluster. This simplification is appropriate for the current scale and is explicitly acknowledged per Kruchten's (1995) guidance: "views that are useless can be omitted or simplified."

### 8.8 Rationale

AWS was chosen over Heroku for production because Heroku's free tier was discontinued, and AWS provides HIPAA-eligible infrastructure components (RDS, S3, EC2), fine-grained IAM access control, and a clear path to autoscaling. The downside accepted is significantly greater configuration complexity. For the development phase, Heroku or Railway remain viable alternatives and may be used for staging. [TBD: Finalize staging environment provider before Phase 3 delivery.]

---

## 9. Scenarios

> **Reader:** All stakeholders. These scenarios validate that the architecture supports the most critical user journeys and are the starting point for integration testing.

Each scenario below is traced through the Logical View (which classes are involved) and the Process View (which tasks execute and how they communicate), following Kruchten's (1995) guidance that scenarios "describe sequences of interactions between objects and between processes."

### 9.1 Scenario A — Symptom Triage to Consultation Booking

**Purpose:** Validates that the AI triage flow correctly hands off to the consultation booking flow.  
**Primary views traced:** Logical (Category 2 and 3) + Process (Flow A)  
**Stakeholder:** Patient

**Script:**

1. The `User` object authenticates via `/auth/login/`. The Django worker issues a JWT token. *(Logical: `User`; Process: Django WSGI worker)*
2. The patient opens the AI Chat page and submits a text description of their symptoms.
3. The browser sends `POST /triage/chat/` with the symptom text and the JWT token in the Authorization header.
4. The Django worker creates a `TriageSession` record in PostgreSQL, then calls `ai_triage.service.analyze(symptoms)`.
5. The service sends the symptom text to the OpenAI API (synchronous HTTPS call, timeout: 10 seconds).
6. OpenAI returns a raw specialty recommendation.
7. The AI disclaimer wrapper (minor task, same thread) appends the legal disclaimer: "This is not a medical diagnosis. Please consult a qualified doctor."
8. The session logger (minor task, same thread) writes the `AIAdvice` record to PostgreSQL.
9. The Django worker returns the wrapped advice and the suggested specialty to the browser.
10. The browser displays the advice and a "Book a doctor" button filtered by the suggested specialty.
11. The patient selects an `AvailabilitySlot` and confirms. The browser sends `POST /consultations/book/`.
12. The Django worker checks the slot is still `open` in PostgreSQL, writes a `ConsultationBooking` record with status `confirmed`, and calls the Video API to generate a room token.
13. The Django worker returns the booking confirmation and the video room URL to the browser.
14. The patient sees a confirmation screen with the appointment time and a "Join call" link.

**Validation:** This scenario confirms that the `AIAdvice → ConsultationBooking` handoff works end-to-end and that the disclaimer wrapper (a critical legal requirement) executes without fail on every response.

**Failure case:** If the OpenAI API is unavailable at step 5, the system returns a graceful error at step 9 without writing an `AIAdvice` record. The "Book a doctor" button is still shown, allowing the patient to proceed without AI assistance.

---

### 9.2 Scenario B — Medicine Order to Medication Reminder

**Purpose:** Validates that a confirmed medicine order automatically generates a reminder schedule without blocking the user's checkout response.  
**Primary views traced:** Logical (Category 4 and 5) + Process (Flow B) + Physical (App Server → Worker handoff)  
**Stakeholder:** Patient

**Script:**

1. The patient browses the medicine catalogue (reads from `Medicine` records in PostgreSQL via the `pharmacy/` module).
2. The patient adds items to their `Cart`. Each `CartItem` stores the `unit_price` at time of adding — not looked up again at checkout.
3. The patient confirms checkout. The browser sends `POST /pharmacy/checkout/`.
4. The Django worker opens a database transaction and: validates the cart is not empty, checks `Medicine.stock_qty > 0` for each item, creates the `Order` record, creates `OrderItem` records (copying `dosage_instructions` from the prescription detail or the doctor's note), decrements `Medicine.stock_qty` for each item, and commits the transaction.
5. The Django worker publishes a `generate_reminder_schedule` message to the Redis queue. *(Process: asynchronous message, no waiting)*
6. The Django worker immediately returns an order confirmation response to the browser. The patient does not wait for reminder generation.
7. The Celery worker picks up the `generate_reminder_schedule` message from Redis.
8. The Celery worker reads `OrderItem.dosage_instructions` (e.g., "Take 1 tablet 3 times daily after meals for 7 days"), parses the frequency and duration, and creates a `PrescriptionSchedule` record and the corresponding `ReminderTask` records (one per scheduled dose).
9. At the first scheduled time, the Celery beat scheduler triggers the notification dispatcher minor task.
10. The notification dispatcher reads the patient's preferred channel from `PatientProfile`, calls the Notification API (Twilio or Firebase), and marks the `ReminderTask` as `sent`.
11. If the Notification API returns an error, the task is marked `failed` and retried up to 3 times with exponential backoff. After 3 failures, a Sentry alert fires and the `ReminderTask` remains `failed` for manual review.

**Validation:** This scenario confirms that: (a) the checkout transaction is atomic — no partial orders exist; (b) the asynchronous handoff to Celery does not delay the user's checkout response; (c) the reminder system recovers from transient notification failures.

**Failure case:** If the stock check at step 4 reveals that a medicine is out of stock, the transaction is rolled back and the patient receives an HTTP 409 Conflict response identifying the out-of-stock item.

---

### 9.3 Scenario C — Doctor Availability Management

**Purpose:** Validates the doctor-facing workflow for setting availability and receiving booking notifications.  
**Primary views traced:** Logical (Category 1 and 3) + Process (Flow A, doctor side) + Physical (Notification API)  
**Stakeholder:** Doctor

**Script:**

1. The doctor authenticates and the system confirms `DoctorProfile.role == "doctor"` (role-based access control enforced at the view layer).
2. The doctor opens the availability calendar and submits a set of `AvailabilitySlot` records for the following week via `POST /availability/`.
3. The Django worker validates that no overlapping slots exist for this doctor, writes the slots to PostgreSQL, and returns a confirmation.
4. When a patient books a slot (Scenario A, step 12), the `AvailabilitySlot` status transitions from `open` to `booked`.
5. The booking event triggers a `notify_doctor` minor task (within the Django worker thread) that calls the Notification API to send the doctor an email with the patient's name, the appointment time, and the AI triage summary from the associated `TriageSession` (if available).
6. The doctor receives the notification, opens the MedLinka dashboard, and sees the patient's pre-brief information (symptom summary + suggested specialty) before joining the call.

**Validation:** This scenario confirms that the doctor is not cold-called into a consultation — they receive structured patient context before the call begins, which is a key design requirement identified in the doctor-facing interface analysis.

---

## 10. Size and Performance

### 10.1 Size Estimates

| Artifact | Estimated size |
|----------|---------------|
| Django codebase (Python) | ~3,000–5,000 SLOC across 6 domain apps |
| HTML templates | ~15 pages × ~100 lines = ~1,500 lines |
| CSS (modular) | ~500–800 lines |
| Total database tables | ~15 (6 domain apps × average 2–3 models each) |
| Expected concurrent users (Phase 1) | < 100 |
| Expected concurrent users (Phase 2) | < 1,000 |

### 10.2 Performance Targets

| Metric | Target | Mechanism |
|--------|--------|-----------|
| Dashboard page load (p95) | < 2,000 ms | Django ORM query optimization; CloudFront CDN for static assets |
| AI triage response (p95) | < 5,000 ms | Bounded by OpenAI API latency; local server is not the bottleneck |
| Checkout transaction (p95) | < 1,000 ms | Single atomic PostgreSQL transaction; no external API calls in the critical path |
| Reminder scheduling (async) | Reminder task created within 30 seconds of order confirmation | Celery worker polling interval ≤ 5 seconds |
| Video room token generation | < 2,000 ms | Daily.co API typical latency; retried on failure |

### 10.3 Performance Risks

| Risk | Mitigation |
|------|-----------|
| OpenAI API latency spike | 10-second timeout enforced; graceful fallback UI |
| N+1 query on medicine catalogue | `select_related()` and `prefetch_related()` enforced on list views [TO UPDATE: add query profiling before production] |
| Redis memory exhaustion under high reminder volume | Set Redis `maxmemory` policy to `allkeys-lru`; monitor with CloudWatch |

---

## 11. Quality

### 11.1 Security and Privacy

All communication between client and server is over HTTPS (TLS 1.2 minimum, enforced by CloudFront). JWT tokens are short-lived (access: 15 minutes; refresh: 7 days) and stored in `httpOnly` cookies, not `localStorage`, to prevent XSS token theft. Sensitive PII fields (date of birth, medical history summary) are encrypted at rest using `django-encrypted-model-fields`. API keys for OpenAI, Daily.co, and Twilio are stored in environment variables only — never in source code or committed to the repository.

**Security concern — medical advice liability:** Every AI response is wrapped by the disclaimer wrapper before it reaches the browser. This is enforced at the service layer, not the view layer, so it cannot be bypassed by adding a new view. The disclaimer text is: *"This is not a medical diagnosis. Please consult a qualified doctor before acting on this advice."*

### 11.2 Reliability

Input validation is enforced at the Django REST Framework serializer layer for all incoming API requests. Invalid input returns HTTP 400 with a structured error response before any business logic executes. This prevents empty orders, double-bookings, and invalid prescription schedules from reaching the database.

The `ConsultationBooking` creation uses a database-level row lock (`select_for_update()`) to prevent two patients from booking the same `AvailabilitySlot` concurrently.

Celery tasks use `acks_late=True`, meaning a task is only acknowledged as complete after it has finished executing. If the worker crashes mid-task, the message remains in the queue and is redelivered to the next available worker.

### 11.3 Code Quality and Maintainability

The project follows PEP 8 for all Python code, enforced by a `flake8` pre-commit hook. All public functions and classes include docstrings. The UI (HTML/CSS templates) is strictly separated from the business logic (Python) — no Python logic appears inside templates beyond basic variable rendering and template tags.

Tests are organized in `tests/` mirroring the domain structure: `tests/account/`, `tests/ai_triage/`, etc. Unit tests cover all service-layer functions. Integration tests cover the two primary scenarios (Scenario A and B from Section 9). [TO UPDATE: Set minimum test coverage threshold before production; suggested 70%.]

### 11.4 Accessibility

The frontend is designed to meet WCAG 2.1 Level AA. All interactive elements are keyboard-navigable. Color contrast ratios meet the 4.5:1 minimum for normal text. Forms include visible focus indicators and descriptive `aria-label` attributes. The interface uses plain language to remain accessible to elderly users. [TO UPDATE: Run axe-core accessibility audit before production launch and fix all critical findings.]

---

## Appendix A — Acronyms and Abbreviations

| Acronym | Expansion |
|---------|-----------|
| AI | Artificial Intelligence |
| API | Application Programming Interface |
| AWS | Amazon Web Services |
| CDN | Content Delivery Network |
| CRUD | Create, Read, Update, Delete |
| EC2 | Elastic Compute Cloud (AWS) |
| EHR | Electronic Health Record |
| HTTPS | Hypertext Transfer Protocol Secure |
| JWT | JSON Web Token |
| ORM | Object-Relational Mapper |
| PII | Personally Identifiable Information |
| RDS | Relational Database Service (AWS) |
| RTL | Right-to-Left (Arabic language support) |
| SLOC | Source Lines of Code |
| SMS | Short Message Service |
| TLS | Transport Layer Security |
| VPC | Virtual Private Cloud (AWS) |
| WCAG | Web Content Accessibility Guidelines |
| WSGI | Web Server Gateway Interface |

---

## Appendix B — Definitions / Glossary

| Term | Definition |
|------|-----------|
| Availability slot | A 30-minute window on a doctor's calendar marked as bookable. |
| Brownfield domain | A system type in which changes are made to an existing codebase (vs. greenfield). MedLinka is a greenfield system in a mature domain (telemedicine). |
| Celery | An open-source distributed task queue for Python. Used by MedLinka for asynchronous reminder scheduling. |
| Consultation booking | A confirmed appointment linking one patient to one doctor's availability slot, including a video room token. |
| Disclaimer wrapper | The service-layer function that appends the legal medical disclaimer to every AI response before it leaves the server. |
| Django | A high-level Python web framework with built-in ORM, admin panel, and authentication. MedLinka's backend framework. |
| Dosage instructions | A text field on `OrderItem` describing when and how to take a medication (e.g., "1 tablet 3× daily after meals for 7 days"). Parsed by the reminder module to generate the notification schedule. |
| Gunicorn | A Python WSGI HTTP server. Runs Django in production, managed by Nginx as a reverse proxy. |
| Prescription schedule | A reminder plan generated from an `OrderItem`, defining the frequency and duration of a medication course. |
| Redis | An in-memory data store used by MedLinka as the Celery message broker and task result backend. |
| Triage session | A single AI chat conversation in which a patient describes symptoms and receives a specialty recommendation. |
| Backend | The server-side part of the application responsible for business logic, data storage, and API communication. |
| Telemedicine | The delivery of medical consultation and healthcare services through digital communication technologies. |

---

## Appendix C — Design Principles and Rationale

This appendix records the most important design decisions for future maintainers, following Kruchten's (1995) recommendation to produce "Software Design Guidelines which capture the most important design decisions that must be respected to maintain the architectural integrity of the system."

| Decision | Alternatives considered | Chosen approach | Rationale | Trade-off accepted |
|----------|------------------------|-----------------|-----------|-------------------|
| Backend framework | Flask, FastAPI, Django | Django | Built-in ORM, admin, auth, and migrations reduce from-scratch implementation within one semester | Heavier than Flask/FastAPI; acceptable given the timeline constraint |
| AI provider | Build own model, Google Vertex AI, OpenAI | OpenAI GPT-4o via API | Best accuracy for medical Q&A; well-documented; fastest to integrate | Vendor lock-in; per-token cost scales with users |
| Database | MySQL, MongoDB, PostgreSQL | PostgreSQL | Relational integrity for linked medical records; strong Django ORM support; supports JSON columns for flexibility | Requires more schema planning than NoSQL |
| Async task queue | In-process scheduler, cron job, Celery + Redis | Celery + Redis | Built-in retry logic, independent scalability, failure tracking | Adds Redis dependency and worker infrastructure |
| Video consultation | Build WebRTC, Twilio Video, Daily.co | Daily.co | HIPAA-eligible; fast SDK; free tier sufficient for development | Monthly cost at scale; third-party uptime dependency |
| Module decomposition | Technical layers, microservices, domain apps | Django domain apps | Maps to team ownership; stable boundaries as features evolve | Cross-domain calls require explicit service interfaces |
| AI safety enforcement layer | View-layer check, middleware, service-layer wrapper | Service-layer wrapper in `ai_triage/service.py` | Cannot be bypassed by adding a new view; enforced at the only point where AI calls are made | All AI logic is concentrated in one module; must be reviewed carefully |
| 2nd Law of Software Architecture (Why > How) | — | Documented in this appendix | Every decision is recorded with its rationale and alternatives, not just the outcome | More upfront documentation effort required |

**Deferred decisions ([TBD]):**

| Decision | Reason for deferral |
|----------|-------------------|
| Native mobile applications | Defer until web usage data justifies investment |
| Payment processing integration | Scope exceeds one-semester timeline; not a core healthcare feature |
| Staging environment provider (Heroku vs Railway) | Cost comparison pending; decision needed before Phase 3 |
| Autoscaling trigger thresholds | Requires load testing data that does not yet exist |
| Test coverage minimum threshold | To be set after initial test suite is established |
