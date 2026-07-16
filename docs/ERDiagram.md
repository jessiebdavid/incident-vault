# Entity Relationship Diagram (ERD)

```text
+----------------+
|     USERS      |
+----------------+
| PK user_id     |
| full_name      |
| email          |
| password_hash  |
| created_at     |
+----------------+
        |
        | 1
        |
        | M
+----------------------+
|      INCIDENTS       |
+----------------------+
| PK incident_id       |
| FK user_id           |
| FK category_id       |
| title                |
| description          |
| incident_date        |
| incident_time        |
| location             |
| platform             |
| status               |
| visibility           |
| severity             |
| ai_summary           |
| created_at           |
| updated_at           |
+----------------------+
        |
   +----+----+
   |         |
   |1        |1
   |         |
   |M        |M
   ▼         ▼

+----------------+      +----------------+
|    EVIDENCE    |      |    REPORTS     |
+----------------+      +----------------+
| PK evidence_id |      | PK report_id   |
| FK incident_id |      | FK incident_id |
| file_name      |      | report_type    |
| file_type      |      | generated_at   |
| file_path      |      +----------------+
| uploaded_at    |
+----------------+

        ^
        |
        | M
        |
        | 1
+----------------+
|   CATEGORIES   |
+----------------+
| PK category_id |
| name           |
+----------------+
```

## Relationships

- One User can create many Incidents.
- One Incident belongs to one User.
- One Incident can have multiple Evidence files.
- One Category can be assigned to many Incidents.
- One Incident can generate multiple Reports.