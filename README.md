# SIP Tracker & Portfolio Valuation System

A fintech backend application built using Node.js, Express.js, and SQLite for managing SIPs (Systematic Investment Plans), mutual funds, portfolio valuation, and investor authentication.

---

# Features

- Investor Management
- JWT Authentication & Authorization
- Mutual Fund Management
- AMC Management
- SIP Registration
- SIP Processing
- Investment Transaction Tracking
- Portfolio Holdings Calculation
- Net Worth Calculation
- NAV History Tracking
- Transaction Handling using BEGIN / COMMIT / ROLLBACK

---

# Tech Stack

- Node.js
- Express.js
- SQLite
- JWT Authentication
- bcrypt
- REST APIs

---

# Database Design

<img width="1043" height="757" alt="image" src="https://github.com/user-attachments/assets/4e94b918-456c-447e-85ab-87309429c784" />

Normalized relational schema (3NF) including:


- investors
- investor_auth
- portfolios
- amcs
- mutual_funds
- nav_history
- sips
- investment_transactions

---

# Authentication Flow

- User Registration
- Password Hashing using bcrypt
- JWT Token Generation
- Protected APIs using Middleware
- Role-based Authorization

---

# API Endpoints

## Auth APIs

| Method | Endpoint |
|---|---|
| POST | /api/auth/register |
| POST | /api/auth/login |

---

## Investor APIs

| Method | Endpoint |
|---|---|
| GET | /api/investors/:investorId |
| GET | /api/investors/:investorId/holdings |
| GET | /api/investors/:investorId/networth |

---

## Fund APIs

| Method | Endpoint |
|---|---|
| POST | /api/funds |
| GET | /api/funds |
| PUT | /api/funds/:fundId/nav |

---

## SIP APIs

| Method | Endpoint |
|---|---|
| POST | /api/sips |
| GET | /api/sips/:sipId |
| POST | /api/sips/:sipId/process |
| GET | /api/sips/:sipId/transactions |

---

# Transaction Handling

Implemented database transaction handling using:

```sql
BEGIN TRANSACTION
COMMIT
ROLLBACK
```

Used in:

- User Registration
- SIP Processing
- NAV Updates

---

# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/gnaneswar9676/sip-tracker-backend.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Create .env File

```env
PORT=3000
JWT_SECRET=your_secret_key
```

---

## Start Server

```bash
nodemon server.js
```

---

# Postman API Testing Screenshots

## Login API

![Login API](./screenshots/login.png)

---

## Create SIP API

![Create SIP](./screenshots/create-sip.png)

---

## Process SIP API

![Process SIP](./screenshots/process-sip.png)

---

## Holdings API

![Holdings](./screenshots/holdings.png)

---

## Networth API

![Networth](./screenshots/networth.png)

---





# Author

Gnaneswar K
