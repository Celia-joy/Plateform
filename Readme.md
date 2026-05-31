# 🍽️ PlateForm

> A full-featured restaurant management platform — connecting restaurants, hotels, and cafés with their staff and end customers.

**PlateForm** handles table reservations with zero collision guarantee, real-time order tracking, menu management, multi-role dashboards, and automated email notifications — built as a hands-on learning project to master Express.js and React from beginner to pro.

---

## 📖 Table of Contents

1. [Project Vision](#1-project-vision)
2. [Who Uses PlateForm](#2-who-uses-plateform)
3. [Tech Stack](#3-tech-stack)
4. [Monorepo Structure](#4-monorepo-structure)
5. [Backend — API Reference](#5-backend--api-reference)
6. [Frontend — Pages & Features](#6-frontend--pages--features)
7. [Getting Started](#7-getting-started)
8. [Environment Variables](#8-environment-variables)
9. [Authentication & Role-Based Access](#9-authentication--role-based-access)
10. [Reservation Collision Guard](#10-reservation-collision-guard)
11. [Email Notifications](#11-email-notifications)
12. [Design System](#12-design-system)
13. [React Learning Roadmap](#13-react-learning-roadmap)
14. [Component Architecture](#14-component-architecture)
15. [State Management Strategy](#15-state-management-strategy)
16. [API Layer — Frontend Services](#16-api-layer--frontend-services)
17. [Coding Conventions](#17-coding-conventions)
18. [Git Workflow](#18-git-workflow)
19. [Contributing](#19-contributing)
20. [License](#20-license)

---

## 1. Project Vision

PlateForm solves a real hospitality pain point: **table reservation collisions**. When a guest tries to book a table, they should never find out it was already taken — nor should two guests ever show up for the same spot.

Beyond reservations, PlateForm gives restaurant owners a full control room: manage menus, track orders in real time, oversee staff, and monitor customer activity from a single dashboard.

**Core goals:**
- Zero reservation collisions through real-time slot management
- Multi-role access: super admin / client admin / staff / customer
- Clean RESTful API built with Express.js and MongoDB
- Mobile-first React UI matching the Figma designs
- Production-ready code quality from day one

---

## 2. Who Uses PlateForm

| Role | Description |
|------|-------------|
| `super_admin` | Platform-level: manages all restaurants on PlateForm |
| `client_admin` | Restaurant/hotel/café owner: manages tables, menus, staff, and reservations for their restaurant |
| `staff` | Waiter or manager: views orders and updates their preparation status |
| `customer` | End user: makes table reservations and places orders via a public booking link |

---

## 3. Tech Stack

### Backend
| Package | Purpose |
|---------|---------|
| `express` | Web framework |
| `mongoose` | MongoDB ODM — schemas and queries |
| `dotenv` | Load environment variables from `.env` |
| `bcryptjs` | Hash and compare passwords securely |
| `jsonwebtoken` | Create and verify JWT tokens for auth |
| `nodemailer` | Send reservation confirmation and reminder emails |
| `node-cron` | Schedule daily reservation reminder checks |
| `express-validator` | Validate and sanitize incoming request data |
| `nodemon` | Auto-restart server during development |

### Frontend
| Package | Purpose |
|---------|---------|
| `react` | Component-based UI framework |
| `vite` | Fast dev server and build tool |
| `react-router-dom` | Client-side routing |
| `axios` | HTTP client with auth interceptors |
| `tailwindcss` | Utility-first styling |
| `react-hook-form` | Form handling and validation |
| `recharts` | Revenue and stats charts |
| `lucide-react` | Icon library |
| `react-hot-toast` | Toast notifications |

---

## 4. Monorepo Structure

```
plateform/
│
├── Backend/                          # Express.js REST API
│   ├── config/
│   │   ├── env.js                    # Loads and exports environment variables
│   │   └── mailer.js                 # Nodemailer configuration
│   ├── Controllers/
│   │   ├── auth.controller.js        # Register & login logic
│   │   ├── restaurant.controller.js  # Create, list, and view restaurants
│   │   ├── table.controller.js       # Add, update, and remove tables
│   │   ├── menu.controller.js        # Add, update, and remove menu items
│   │   ├── reservation.controller.js # Make, view, and manage reservations
│   │   └── order.controller.js       # Create and track orders
│   ├── Database/
│   │   └── mongodb.js                # Mongoose connection
│   ├── middleware/
│   │   ├── auth.middleware.js        # JWT verification + role-based access
│   │   └── error.middleware.js       # Global error handler
│   ├── Models/
│   │   ├── user.model.js
│   │   ├── restaurant.model.js
│   │   ├── table.model.js
│   │   ├── menuItem.model.js
│   │   ├── reservation.model.js
│   │   └── order.model.js
│   ├── Routes/
│   │   ├── auth.routes.js
│   │   ├── restaurant.routes.js
│   │   ├── table.routes.js
│   │   ├── menu.routes.js
│   │   ├── reservation.routes.js
│   │   └── order.routes.js
│   ├── utils/
│   │   └── reminder.js               # node-cron job for reservation reminders
│   ├── .env.development.local
│   ├── .env.production.local
│   ├── .gitignore
│   ├── app.js                        # Express app entry point
│   └── package.json
│
└── Frontend/                         # React + Vite client app
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── ui/                   # Atoms: Button, Input, Badge, Avatar
    │   │   ├── layout/               # Templates: DashboardLayout, AuthLayout
    │   │   └── shared/               # Molecules: FormField, OrderStatusPill
    │   ├── pages/
    │   │   ├── LandingPage.jsx
    │   │   ├── auth/
    │   │   │   ├── LoginPage.jsx
    │   │   │   ├── SignupPage.jsx
    │   │   │   ├── CheckEmailPage.jsx
    │   │   │   ├── LinkSentPage.jsx
    │   │   │   └── ResetPasswordPage.jsx
    │   │   ├── dashboard/
    │   │   │   ├── OverviewPage.jsx
    │   │   │   ├── OrdersPage.jsx
    │   │   │   ├── MenusPage.jsx
    │   │   │   ├── ClientsPage.jsx
    │   │   │   ├── StaffPage.jsx
    │   │   │   ├── NotificationsPage.jsx
    │   │   │   └── TableBookingPage.jsx
    │   │   ├── orders/
    │   │   │   └── OrderDetailPage.jsx
    │   │   ├── menus/
    │   │   │   └── CreateMenuItemPage.jsx
    │   │   ├── clients/
    │   │   │   ├── AddClientPage.jsx
    │   │   │   └── ClientDetailPage.jsx
    │   │   └── settings/
    │   │       └── SettingsPage.jsx
    │   ├── context/
    │   │   ├── AuthContext.jsx
    │   │   └── AppContext.jsx
    │   ├── hooks/
    │   │   ├── useAuth.js
    │   │   ├── useOrders.js
    │   │   └── useMenuItems.js
    │   ├── services/
    │   │   ├── api.js                # Axios instance with auth interceptor
    │   │   ├── authService.js
    │   │   ├── ordersService.js
    │   │   ├── reservationService.js
    │   │   └── menuService.js
    │   ├── utils/
    │   │   ├── formatDate.js
    │   │   ├── formatCurrency.js
    │   │   └── constants.js
    │   ├── App.jsx
    │   └── main.jsx
    ├── .env.example
    ├── tailwind.config.js
    ├── vite.config.js
    └── package.json
```

---

## 5. Backend — API Reference

### Data Models

#### User
| Field | Type | Description |
|-------|------|-------------|
| `name` | String | Full name |
| `email` | String | Unique email address |
| `password` | String | Hashed with bcryptjs |
| `role` | String | `super_admin` / `client_admin` / `staff` / `customer` |
| `restaurant` | ObjectId | Reference to Restaurant (for `client_admin` and `staff`) |

#### Restaurant
| Field | Type | Description |
|-------|------|-------------|
| `name` | String | Restaurant name |
| `slug` | String | URL-friendly identifier (e.g. `le-petit-bistro`) |
| `address` | String | Physical address |
| `phone` | String | Contact number |
| `owner` | ObjectId | Reference to User (`client_admin`) |
| `isActive` | Boolean | Whether the restaurant is live on the platform |

#### Table
| Field | Type | Description |
|-------|------|-------------|
| `restaurant` | ObjectId | Reference to Restaurant |
| `tableNumber` | Number | Unique number within the restaurant |
| `capacity` | Number | Number of seats |
| `isAvailable` | Boolean | Whether the table is bookable |

#### MenuItem
| Field | Type | Description |
|-------|------|-------------|
| `restaurant` | ObjectId | Reference to Restaurant |
| `name` | String | Dish or drink name |
| `description` | String | Short description |
| `price` | Number | Price in local currency |
| `category` | String | `appetizer` / `main` / `dessert` / `drink` |
| `isAvailable` | Boolean | Whether this item is currently served |

#### Reservation
| Field | Type | Description |
|-------|------|-------------|
| `customer` | ObjectId | Reference to User |
| `restaurant` | ObjectId | Reference to Restaurant |
| `table` | ObjectId | Reference to Table |
| `date` | Date | Date of the reservation |
| `timeSlot` | String | Time of booking (e.g. `19:00`) |
| `partySize` | Number | Number of guests |
| `status` | String | `pending` / `confirmed` / `seated` / `completed` / `cancelled` |
| `specialRequests` | String | Optional notes from the customer |

#### Order
| Field | Type | Description |
|-------|------|-------------|
| `reservation` | ObjectId | Reference to Reservation |
| `items` | Array | List of `{ menuItem, quantity, notes }` |
| `status` | String | `pending` / `preparing` / `served` / `paid` |
| `totalAmount` | Number | Calculated total of all items |

---

### API Endpoints

#### Auth
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/auth/register` | Public | Register a new user |
| POST | `/api/auth/login` | Public | Login and receive a JWT token |

#### Restaurants
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/restaurants` | Super Admin | Create a restaurant |
| GET | `/api/restaurants` | Super Admin | List all restaurants |
| GET | `/api/restaurants/:slug` | Public | Get restaurant by slug (for booking page) |
| PUT | `/api/restaurants/:id` | Super Admin | Update restaurant details |

#### Tables
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/tables` | Client Admin | Add a table |
| GET | `/api/tables` | Client Admin | List tables in their restaurant |
| PUT | `/api/tables/:id` | Client Admin | Update a table |
| DELETE | `/api/tables/:id` | Client Admin | Remove a table |

#### Menu
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/menu` | Client Admin | Add a menu item |
| GET | `/api/menu/:restaurantId` | Public | Get all menu items for a restaurant |
| PUT | `/api/menu/:id` | Client Admin | Update a menu item |
| DELETE | `/api/menu/:id` | Client Admin | Remove a menu item |

#### Reservations
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/reservations` | Customer | Make a reservation |
| GET | `/api/reservations` | Customer / Staff / Client Admin | List reservations (scoped by role) |
| GET | `/api/reservations/:id` | Customer / Staff | Get a single reservation |
| PUT | `/api/reservations/:id/status` | Staff / Client Admin | Update reservation status |
| DELETE | `/api/reservations/:id` | Customer | Cancel a reservation |

#### Orders
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/orders` | Customer / Staff | Create an order for a reservation |
| GET | `/api/orders/:reservationId` | Staff / Client Admin | Get orders for a reservation |
| PUT | `/api/orders/:id/status` | Staff | Update order preparation status |

---

## 6. Frontend — Pages & Features

### 🔐 Authentication Flow
- **Landing Page** — "How it works" explainer + signup CTA
- **Create Account** — Restaurant registration form
- **Login** — Email + password login
- **Check Your Email** — Email verification step with resend link
- **Reset Password** — Enter email to receive reset link

### 📊 Dashboard (Client Admin)
- **Overview** — Quick stats: total orders, revenue, active reservations
- **Orders** — Today's totals, revenue bar chart, order list with status tags
- **Menus** — Grid of menu items by category
- **Clients** — All customers with filters (Orders / Refund / Rejected)
- **Staff** — Manage staff accounts for the restaurant
- **Notifications** — In-app alerts: new order, payment confirmed, new reservation
- **Settings** — Account settings and logout

### 📋 Order Management
- **Orders List** — Tabs: Today / Scheduled / Reported
- **Order Detail** — Status controls (confirm, stop, cancel), itemized breakdown

### 🍴 Menu Management
- **Menu View** — Item grid with category filter
- **Create Item** — Form to add a new dish or drink

### 👥 Client Management
- **All Clients** — Table: name, order count, last order, total revenue
- **Client Detail** — Individual booking and order history

### 📅 Public Booking
- **`/book/:slug`** — Public reservation page for end customers
- **Booking Confirmed** — Success screen with reservation number

---

## 7. Getting Started

### Prerequisites
- Node.js v18+ ([download here](https://nodejs.org))
- A MongoDB Atlas account ([create one here](https://cloud.mongodb.com))
- A Gmail account for email notifications

### Backend Setup

```bash
# 1. Navigate to the backend folder
cd Backend

# 2. Install dependencies
npm install

# 3. Create your environment file
touch .env.development.local
# Fill in the values — see Environment Variables section below

# 4. Start the development server
npm run dev
```

The API will run on `http://localhost:5000`

### Frontend Setup

```bash
# 1. Navigate to the frontend folder
cd Frontend

# 2. Install dependencies
npm install

# 3. Copy environment file
cp .env.example .env
# Fill in VITE_API_BASE_URL=http://localhost:5000/api

# 4. Start the development server
npm run dev
```

The app will run on `http://localhost:5173`

### Available Scripts

#### Backend
```bash
npm run dev      # Start with nodemon (auto-restart)
npm start        # Start in production mode
```

#### Frontend
```bash
npm run dev      # Start dev server with HMR
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 8. Environment Variables

### Backend — `.env.development.local`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

### Frontend — `.env`

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=PlateForm
```

> ⚠️ Never commit `.env` files. Both are already in `.gitignore`.

---

## 9. Authentication & Role-Based Access

The API uses **JWT (JSON Web Tokens)**. After login, include the token in every protected request:

```
Authorization: Bearer <your_token_here>
```

The JWT payload contains `userId` and `role`. Routes are protected at two levels:

- **`protect`** — verifies the token and attaches `req.user`
- **`requireRole(...roles)`** — checks that `req.user.role` is allowed

```js
// Example: only client_admin and super_admin can add a table
router.post('/', protect, requireRole('client_admin', 'super_admin'), addTable)
```

**Ownership check** — `client_admin` can only modify resources that belong to their own restaurant. This is enforced inside each controller by comparing `req.user.restaurant` against the resource's `restaurant` field.

---

## 10. Reservation Collision Guard

When a customer attempts to book a table, the API checks for an existing reservation on the same table, date, and time slot:

```
Find any reservation where:
  table    = requested table ID
  date     = requested date
  timeSlot = requested time slot
  status   NOT IN ['cancelled']
```

- **Match found** → `409 Conflict` — the slot is already taken
- **No match** → reservation is created and a confirmation email is sent

This is the core business rule of PlateForm — equivalent to checking copy availability in a library system.

---

## 11. Email Notifications

| Trigger | Recipient | Content |
|---------|-----------|---------|
| Reservation created | Customer | Confirmation with date, time, table, and restaurant |
| 24 hours before reservation | Customer | Full booking reminder |
| New reservation placed | Client Admin / Staff | Alert for incoming booking |

A **cron job** runs daily via `node-cron`. It queries all reservations where `date` is tomorrow and `status` is `confirmed`, then sends reminder emails via `nodemailer`.

---

## 12. Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#2D5016` | Sidebar, primary buttons |
| `accent` | `#F5C518` | CTAs, highlights, active states |
| `surface` | `#1A3A0A` | Card backgrounds |
| `text-on-dark` | `#FFFFFF` | Text on green backgrounds |
| `text-body` | `#1A1A1A` | Body text on light backgrounds |
| `border` | `#E5E5E5` | Dividers, input borders |
| `danger` | `#DC2626` | Errors, cancel actions |
| `success` | `#16A34A` | Confirmed states |

### Typography
- **Font**: Inter or DM Sans (system sans-serif as fallback)
- **Logo**: `Plate` in white + `Form` in accent yellow

### Component Patterns
- Cards: `rounded-xl` (12px)
- Inputs: `rounded-lg` (8px)
- Sidebar: dark green background, icon + label navigation
- Buttons: filled accent yellow (primary), outlined (secondary)
- Status badges: colored pills — green (active), yellow (pending), red (cancelled)

---

## 13. React Learning Roadmap

### Phase 1 — Fundamentals (Weeks 1–2)
**Concepts:** JSX, components, props, useState, event handlers

**Build:** Login/Signup pages (static), Button/Input/Badge UI components, landing section

**Learn:** Props vs state, conditional rendering, lists with `.map()` and `key`

---

### Phase 2 — Routing & Layout (Week 3)
**Concepts:** React Router v6, nested routes, protected routes, layout components

**Build:** All auth routes, dashboard layout with sidebar, route protection

**Learn:** `<BrowserRouter>`, `useNavigate`, `useParams`, `Outlet`, `NavLink`

---

### Phase 3 — Data Fetching (Week 4)
**Concepts:** useEffect, Axios, loading states, error handling

**Build:** Orders list from API, clients table with real data, loading spinners

**Learn:** useEffect dependency array, async/await inside effects, cleanup functions

---

### Phase 4 — Global State (Week 5)
**Concepts:** createContext, useContext, useReducer

**Build:** AuthContext, notification state, settings context

**Learn:** Prop drilling problem, Provider pattern, useReducer for complex state

---

### Phase 5 — Forms & Validation (Week 6)
**Concepts:** React Hook Form, controlled vs uncontrolled inputs

**Build:** Add Client form, Create Menu Item form, all auth forms with validation

**Learn:** `register`, `handleSubmit`, `errors`, validation rules, inline error messages

---

### Phase 6 — Custom Hooks (Week 7)
**Concepts:** Custom hooks, separation of concerns

**Build:** `useAuth()`, `useOrders()`, `useMenuItems()`

**Learn:** When to extract a hook, reusing logic, Single Responsibility Principle

---

### Phase 7 — Performance (Week 8)
**Concepts:** useMemo, useCallback, React.memo, lazy loading

**Build:** Optimized orders table, lazy-loaded pages, memoized filter logic

**Learn:** When to optimize, `React.lazy` + `Suspense`, stable references

---

## 14. Component Architecture

Components follow **Atomic Design** principles:

```
Atoms       →  Button, Input, Badge, Avatar, Spinner
Molecules   →  FormField, OrderStatusPill, MenuItemCard
Organisms   →  OrdersTable, ClientsTable, Sidebar, TopNav
Templates   →  DashboardLayout, AuthLayout
Pages       →  OrdersPage, LoginPage, SettingsPage
```

### Component Template

```jsx
// src/components/ui/Button.jsx
import PropTypes from 'prop-types'

function Button({ children, variant = 'primary', onClick, disabled = false }) {
  const base = 'px-4 py-2 rounded-lg font-medium transition-colors'
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent/90',
    outline: 'border border-primary text-primary hover:bg-primary/5',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline', 'danger']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default Button
```

---

## 15. State Management Strategy

| What | Where | Tool |
|------|-------|------|
| Auth user + token | Global | AuthContext |
| Current page data | Page component | useState + useEffect |
| Form data | Form component | React Hook Form |
| Notifications | Global | AppContext |
| Complex async state | Feature hook | useReducer inside custom hook |

Start with built-in React tools. Migrate to **Zustand** when the app grows complex enough.

---

## 16. API Layer — Frontend Services

The Axios instance in `src/services/api.js` automatically attaches the auth token:

```js
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('plateform_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default api
```

Each service file exports clean functions:

```js
// src/services/reservationService.js
import api from './api.js'

export const createReservation = (data) => api.post('/reservations', data)
export const getMyReservations = () => api.get('/reservations')
export const cancelReservation = (id) => api.delete(`/reservations/${id}`)
```

---

## 17. Coding Conventions

### Backend
- ES Modules (`import/export`) throughout — always include `.js` extension in imports
- PascalCase for `Controllers/`, `Models/`, `Routes/`, `Database/` folders
- camelCase for `config/`, `middleware/`, `utils/` folders and all filenames
- Every controller exports named functions
- All errors go through `next(error)` to the global error handler

### Frontend
- PascalCase for component files (`OrdersPage.jsx`)
- camelCase for utils and hooks (`formatDate.js`, `useAuth.js`)
- One component per file — no exceptions
- Tailwind utility classes only — no raw CSS
- PropTypes on every component that receives props
- No `console.log` in commits

---

## 18. Git Workflow

```bash
# Create a feature branch for each feature
git checkout -b feat/reservation-controller

# Commit often with descriptive messages
git commit -m "feat: add collision guard to reservation controller"
git commit -m "fix: correct timeSlot validation in reservation model"
git commit -m "style: align sidebar active state with design tokens"

# Push and open a PR
git push origin feat/reservation-controller
```

### Commit Message Format

```
type: short description (max 72 chars)

type = feat | fix | style | refactor | docs | chore
```

---

## 19. Contributing

This is a learning project — contributions and suggestions are welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit following the conventions above
4. Push and open a Pull Request describing what you built and why

---

## 20. License

MIT License. See `LICENSE` for details.

---

<div align="center">
  Built with ❤️ while learning full-stack development — one route at a time.
</div>