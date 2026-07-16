# Database Design

## Overview

Incident Vault uses a relational database to securely manage users, incidents, evidence, categories, and reports.

The database is designed to:

- Maintain data integrity
- Support future AI features
- Allow efficient searching and filtering
- Preserve relationships between incidents and evidence

Database: PostgreSQL


## Users

| Field | Type | Description |
|--------|------|-------------|
| user_id | UUID | Primary Key |
| full_name | VARCHAR(100) | User's full name |
| email | VARCHAR(255) | Unique email |
| password_hash | TEXT | Encrypted password |
| created_at | TIMESTAMP | Account creation date |


## Incidents

| Field | Type | Description |
|--------|------|-------------|
| incident_id | UUID | Primary Key |
| user_id | UUID | Foreign Key |
| category_id | UUID | Foreign Key |
| title | VARCHAR(150) | Incident title |
| description | TEXT | Detailed description |
| incident_date | DATE | Date of incident |
| incident_time | TIME | Time of incident |
| location | TEXT | Incident location |
| status | VARCHAR(20) | Draft, Archived, Reported |
| visibility | VARCHAR(20) | Private, Shared |
| severity | VARCHAR(20) | Low, Medium, High, Critical |
| ai_summary | TEXT | AI-generated summary (optional) |
| created_at | TIMESTAMP | Record creation date |



## Evidence

| Field | Type | Description |
|--------|------|-------------|
| evidence_id | UUID | Primary Key |
| incident_id | UUID | Foreign Key |
| file_name | TEXT | Original filename |
| file_type | VARCHAR(30) | Image, PDF, Audio, Video |
| file_path | TEXT | Storage location |
| uploaded_at | TIMESTAMP | Upload date |


## Categories

| Field | Type | Description |
|--------|------|-------------|
| category_id | UUID | Primary Key |
| name | VARCHAR(100) | Category name |


## Reports

| Field | Type | Description |
|--------|------|-------------|
| report_id | UUID | Primary Key |
| incident_id | UUID | Foreign Key |
| report_type | VARCHAR(50) | PDF |
| generated_at | TIMESTAMP | Generation time |


## Relationships

- One User → Many Incidents
- One Incident → Many Evidence Files
- One Category → Many Incidents
- One Incident → Many Reports