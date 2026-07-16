# Database Design

## Overview

Incident Vault uses a relational database (PostgreSQL) to securely manage users, incidents, evidence, categories, and generated reports.

The database is designed to:

- Maintain data integrity
- Support future AI-powered features
- Enable efficient searching and filtering
- Preserve relationships between incidents and evidence
- Ensure scalability and future expansion

**Database:** PostgreSQL

---

# Design Principles

- Use UUIDs for all primary keys to improve security and scalability.
- Normalize data to reduce redundancy.
- Use foreign keys to maintain relationships.
- Store timestamps for auditing.
- Design the schema to support future AI features without major restructuring.

---

# Naming Conventions

- Table names use plural nouns.
- Primary Keys: `<table>_id`
- Foreign Keys reference the parent table.
- Timestamp fields use snake_case.
- All timestamps are stored in UTC.

---

# Tables

## Users

Stores registered users and authentication information.

| Field | Type | Constraints | Description |
|--------|------|-------------|-------------|
| user_id | UUID | PK | Unique user identifier |
| full_name | VARCHAR(100) | NOT NULL | User's full name |
| email | VARCHAR(255) | UNIQUE, NOT NULL | User email address |
| password_hash | TEXT | NOT NULL | Encrypted password |
| created_at | TIMESTAMP | NOT NULL | Account creation time |
| updated_at | TIMESTAMP | NOT NULL | Last account update |

---

## Incidents

Stores incident records created by users.

| Field | Type | Constraints | Description |
|--------|------|-------------|-------------|
| incident_id | UUID | PK | Unique incident identifier |
| user_id | UUID | FK → Users(user_id) | Incident owner |
| category_id | UUID | FK → Categories(category_id) | Incident category |
| title | VARCHAR(150) | NOT NULL | Incident title |
| description | TEXT | NOT NULL | Detailed incident description |
| incident_date | DATE | NOT NULL | Date of incident |
| incident_time | TIME | NULL | Time of incident |
| location | TEXT | NULL | Physical location (optional) |
| platform | VARCHAR(100) | NULL | Online platform (optional) |
| status | VARCHAR(20) | DEFAULT 'Draft' | Current incident status |
| visibility | VARCHAR(20) | DEFAULT 'Private' | Access level |
| severity | VARCHAR(20) | NULL | Risk level |
| ai_summary | TEXT | NULL | AI-generated summary |
| created_at | TIMESTAMP | NOT NULL | Record creation time |
| updated_at | TIMESTAMP | NOT NULL | Last modification time |
| is_deleted | BOOLEAN | DEFAULT FALSE | Soft delete flag |

### Incident Status

- Draft
- Reported
- Archived

### Visibility

- Private
- Shared

### Severity Levels

- Low
- Medium
- High
- Critical

---

## Evidence

Stores digital evidence linked to incidents.

| Field | Type | Constraints | Description |
|--------|------|-------------|-------------|
| evidence_id | UUID | PK | Unique evidence identifier |
| incident_id | UUID | FK → Incidents(incident_id) | Parent incident |
| original_file_name | TEXT | NOT NULL | Original uploaded filename |
| stored_file_name | TEXT | NOT NULL | Internal filename used by the system |
| file_type | VARCHAR(30) | NOT NULL | File type |
| file_path | TEXT | NOT NULL | Storage location |
| uploaded_at | TIMESTAMP | NOT NULL | Upload timestamp |

### Supported File Types

- Image (.jpg, .jpeg, .png)
- PDF (.pdf)
- Audio (.mp3, .wav)
- Video (.mp4)

---

## Categories

Stores predefined incident categories.

| Field | Type | Constraints | Description |
|--------|------|-------------|-------------|
| category_id | UUID | PK | Unique category identifier |
| name | VARCHAR(100) | UNIQUE, NOT NULL | Category name |

### Default Categories

- Harassment
- Bullying
- Cyberbullying
- Stalking
- Domestic Violence
- Workplace Misconduct
- Discrimination
- Fraud / Scam
- Other

---

## Reports

Stores metadata about generated reports.

| Field | Type | Constraints | Description |
|--------|------|-------------|-------------|
| report_id | UUID | PK | Unique report identifier |
| incident_id | UUID | FK → Incidents(incident_id) | Related incident |
| report_type | VARCHAR(50) | NOT NULL | Report format (PDF) |
| report_path | TEXT | NOT NULL | Generated report location |
| generated_at | TIMESTAMP | NOT NULL | Report generation timestamp |

---

# Relationships

- One User can create many Incidents.
- One Incident belongs to one User.
- One Incident can have multiple Evidence files.
- One Category can be assigned to multiple Incidents.
- One Incident can generate multiple Reports.

---

# Indexing Strategy

Indexes should be created on frequently searched fields:

- email
- incident_date
- category_id
- status
- severity
- created_at

These indexes improve search performance as the application grows.

---

# Security Considerations

- Passwords are never stored in plain text.
- Passwords are hashed using a secure hashing algorithm (e.g., bcrypt).
- UUIDs reduce predictability of record identifiers.
- Sensitive evidence is stored separately from the database.
- AI summaries never modify the original incident description.
- Soft deletes preserve evidence for recovery while hiding records from users.

---

# Future Expansion

The database is designed to support future features without major restructuring, including:

- AI-powered incident classification
- OCR for screenshots
- Speech-to-text transcription
- Trusted contacts
- Anonymous reporting
- Blockchain-based evidence verification
- Audit logs
- Multi-language support
- Mobile synchronization