# System Architecture

## Overview

Incident Vault follows a relational database architecture to securely store users, incidents, evidence, categories, and generated reports.

## Core Entities

### User
Stores account information for authenticated users.

### Incident
Stores detailed records of incidents created by users.

### Evidence
Stores files associated with incidents, including images, videos, audio, and documents.

### Category
Stores predefined incident categories for consistent classification.

### Report
Stores metadata about generated incident reports.

## Relationships

- One User can create many Incidents.
- One Incident belongs to one User.
- One Incident can contain multiple Evidence files.
- One Category can be assigned to multiple Incidents.
- One Incident can generate multiple Reports.

## Database Type

Relational Database (PostgreSQL)