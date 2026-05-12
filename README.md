# 🍽️ PlateForm

> A full-featured restaurant management platform — built to learn React from beginner to pro.

**PlateForm** connects restaurants, hotels, and cafés (clients) with their staff and end customers. It handles table reservations, order management, menu configuration, and client dashboards — all in one polished app.

---

## 📖 Table of Contents

1. [Project Vision](#1-project-vision)
2. [Who Uses PlateForm](#2-who-uses-plateform)
3. [App Pages & Features](#3-app-pages--features)
4. [Tech Stack](#4-tech-stack)
5. [Project Structure](#5-project-structure)
6. [Getting Started](#6-getting-started)
7. [Environment Variables](#7-environment-variables)
8. [Design System](#8-design-system)
9. [React Learning Roadmap](#9-react-learning-roadmap)
10. [Component Architecture](#10-component-architecture)
11. [State Management Strategy](#11-state-management-strategy)
12. [Routing Structure](#12-routing-structure)
13. [API Layer](#13-api-layer)
14. [Coding Conventions](#14-coding-conventions)
15. [Git Workflow](#15-git-workflow)
16. [Contributing](#16-contributing)
17. [License](#17-license)

---

## 1. Project Vision

PlateForm solves a real hospitality pain point: **table reservation collisions**. When a restaurant guest tries to book a table, they should never find out it was already taken — nor should two guests ever show up for the same spot. Beyond reservations, PlateForm gives restaurant owners a full control room: manage menus, track orders in real time, oversee staff, and monitor client activity from a single dashboard.

**Core goals:**
- Zero reservation collisions through real-time slot management
- Multi-role access (super admin / client admin / staff / end customer)
- Clean, mobile-first UI matching the Figma designs
- Production-ready code quality from day one

---

## 2. Who Uses PlateForm

| Role | Description |
|------|-------------|
| **Super Admin** | Anthropic-level: manages all restaurant clients on the platform |
| **Client Admin** | Restaurant/hotel/café owner: manages their own business settings, staff, menus |
| **Staff Member** | Waiter or manager at a restaurant: views and updates orders |
| **End Customer** | The person making a table reservation via a public booking link |

---

## 3. App Pages & Features

### 🔐 Authentication Flow
- **Landing / Signup** — Register a new restaurant on PlateForm ("How it works" explainer)
- **Create Account** — Restaurant registration form
- **Login** — Email + password login
- **Check Your Email** — Verify email step (with "Resend email" link)
- **Link Sent** — Magic link confirmation screen
- **Reset Password** — Enter email to receive reset link
- **Order Confirmed** — Booking success screen with order number (#Order15)

### 📊 Dashboard (Client Admin)
- **Overview** — All clients listed with quick stats
- **Orders** — Today's totals, revenue chart (bar graph), order list with status tags
- **Menus** — Manage menu items: appetizers, mains, desserts, drinks
- **Clients** — List of all end customers with filters (Orders / Refund / Rejected)
- **Add New Client** — Form to onboard a new restaurant to the platform
- **Staff** — (implied) manage staff accounts per restaurant
- **Notifications** — In-app alerts (new order, payment confirmed, etc.)
- **Settings** — Account settings, appearance, logout

### 📋 Order Management
- **Orders List** — Tabs: Today / Scheduled / Reported / +
- **Order Detail** — Status (Sign, Stop, Cancel), amount, table items listed

### 🍴 Menu Management
- **Menu View** — Grid: items with categories (Dessert, Appetizer, Main, Drink)
- **Create Item** — Form to add a new dish

### 👥 Client Management
- **All Clients** — Table with client names, order count, last order, revenue
- **Client Detail** — Individual booking/order history

---

## 4. Tech Stack

| Category | Choice | Why |
|----------|--------|-----|
| **Framework** | React 18 | Component-based UI, great ecosystem, industry standard |
| **Build Tool** | Vite | Extremely fast dev server and HMR |
| **Language** | JavaScript (JSX) | Beginner-friendly; TypeScript can be added later |
| **Styling** | Tailwind CSS | Utility-first, fast to write, matches design tokens |
| **Routing** | React Router v6 | Most popular React router, declarative and clean |
| **State** | React Context + useReducer → Zustand (Phase 2) | Learn built-ins first, then scale |
| **Forms** | React Hook Form | Minimal re-renders, easy validation |
| **Icons** | Lucide React | Clean, consistent icon set |
| **Charts** | Recharts | React-native charting for the revenue dashboard |
| **HTTP** | Axios | Cleaner than fetch, interceptors for auth headers |
| **Notifications** | React Hot Toast | Lightweight toast notifications |
| **Dev Tools** | ESLint + Prettier | Code quality and consistent formatting |

---

## 5. Project Structure

```
src/
├── assets/
├── components/
│   ├── ui/
│   ├── layout/
│   └── shared/
├── pages/
│   ├── LandingPage.jsx          ← stays here
│   ├── auth/
│   │   ├── LoginPage.jsx
│   │   ├── SignupPage.jsx
│   │   ├── CheckEmailPage.jsx
│   │   ├── LinkSentPage.jsx
│   │   └── ResetPasswordPage.jsx
│   ├── dashboard/               ← create this folder
│   │   ├── OverviewPage.jsx
│   │   ├── OrdersPage.jsx
│   │   ├── MenusPage.jsx
│   │   ├── ClientsPage.jsx
│   │   └── NotificationsPage.jsx
│   ├── orders/                  ← create this folder
│   │   ├── OrderListPage.jsx
│   │   └── OrderDetailPage.jsx
│   ├── menus/                   ← create this folder
│   │   ├── MenuListPage.jsx
│   │   └── CreateMenuItemPage.jsx
│   ├── clients/                 ← create this folder
│   │   ├── ClientListPage.jsx
│   │   ├── AddClientPage.jsx
│   │   └── ClientDetailPage.jsx
│   └── settings/                ← create this folder
│       └── SettingsPage.jsx
├── context/
│   ├── AuthContext.jsx
│   └── AppContext.jsx
├── hooks/
│   ├── useAuth.js
│   ├── useOrders.js
│   └── useMenuItems.js
├── services/
│   ├── api.js
│   ├── authService.js
│   ├── ordersService.js
│   └── menuService.js
├── utils/
│   ├── formatDate.js
│   ├── formatCurrency.js
│   └── constants.js
├── App.jsx
└── main.jsx
├── .env.example
├── .eslintrc.js
├── .prettierrc
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 6. Getting Started

### Prerequisites
- Node.js v18+ installed ([download here](https://nodejs.org))
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/plateform.git
cd plateform

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env
# Then fill in your values in .env

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
npm run dev        # Start development server with HMR
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
npm run format     # Run Prettier on all files
```

---

## 7. Environment Variables

Create a `.env` file in the root (copy from `.env.example`):

```env
VITE_API_BASE_URL=http://localhost:3001/api
VITE_APP_NAME=PlateForm
```

> ⚠️ Never commit your `.env` file. It's already in `.gitignore`.

---

## 8. Design System

PlateForm uses a consistent design language throughout:

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#2D5016` (dark green) | Sidebar, primary buttons |
| `accent` | `#F5C518` (golden yellow) | CTAs, highlights, active states |
| `surface` | `#1A3A0A` (deep green) | Card backgrounds |
| `text-on-dark` | `#FFFFFF` | Text on green backgrounds |
| `text-body` | `#1A1A1A` | Body text on light backgrounds |
| `border` | `#E5E5E5` | Dividers, input borders |
| `danger` | `#DC2626` | Error states, cancel actions |
| `success` | `#16A34A` | Confirmed states |

### Typography
- **Font**: System sans-serif (can be swapped to Inter or DM Sans)
- **Logo**: `Plate` in white, `Form` in accent yellow

### Component Patterns
- Rounded corners: `rounded-xl` (12px) for cards, `rounded-lg` (8px) for inputs
- Sidebar: dark green background, icon + label navigation
- Buttons: filled accent yellow for primary, outlined for secondary
- Status badges: colored pills (green = active, yellow = pending, red = cancelled)

---

## 9. React Learning Roadmap

This project is designed to teach React progressively. Each phase introduces new concepts as you build real features.

### Phase 1 — React Fundamentals (Weeks 1–2)
**Concepts:** JSX, components, props, useState, event handlers

**What you'll build:**
- Static versions of Login and Signup pages
- Button, Input, and Badge UI components
- The "How it works" landing section

**Topics covered:**
- What is a component?
- Props vs state
- Handling form inputs with `useState`
- Conditional rendering (`if`, ternary, `&&`)
- Lists with `.map()` and `key` prop

---

### Phase 2 — Routing & Layout (Week 3)
**Concepts:** React Router v6, nested routes, protected routes, layout components

**What you'll build:**
- All auth page routes (Login, Signup, Check Email, Reset Password)
- The main app layout with sidebar and top nav
- Route protection (redirect to login if not authenticated)

**Topics covered:**
- `<BrowserRouter>`, `<Routes>`, `<Route>`
- `useNavigate`, `useParams`, `useLocation`
- Outlet for nested layouts
- Link vs NavLink (for active sidebar highlighting)

---

### Phase 3 — useEffect & Data Fetching (Week 4)
**Concepts:** useEffect, Axios, loading states, error handling

**What you'll build:**
- Orders list that fetches from an API
- Clients table with real data
- Loading spinners and error messages

**Topics covered:**
- The useEffect hook and dependency array
- Fetch on mount, fetch on dependency change
- Async/await inside effects
- Cleanup functions

---

### Phase 4 — Context & Global State (Week 5)
**Concepts:** createContext, useContext, useReducer

**What you'll build:**
- AuthContext (stores logged-in user, token)
- App-level notification state
- Theme/settings context

**Topics covered:**
- Prop drilling problem and why Context solves it
- Provider pattern
- useReducer for complex state (like a cart or order list)
- Combining context + reducer (mini Redux pattern)

---

### Phase 5 — Forms & Validation (Week 6)
**Concepts:** React Hook Form, form validation, controlled vs uncontrolled inputs

**What you'll build:**
- Add New Client form
- Create Menu Item form
- All auth forms with validation messages

**Topics covered:**
- `register`, `handleSubmit`, `watch`, `errors` from React Hook Form
- Input validation rules (required, minLength, pattern)
- Displaying inline error messages

---

### Phase 6 — Custom Hooks & Code Organization (Week 7)
**Concepts:** Custom hooks, separation of concerns

**What you'll build:**
- `useAuth()` hook
- `useOrders()` hook with filtering logic
- `useMenuItems()` hook

**Topics covered:**
- When and why to extract a custom hook
- Reusing logic across components
- Single Responsibility Principle in React

---

### Phase 7 — Performance & Advanced Patterns (Week 8)
**Concepts:** useMemo, useCallback, React.memo, lazy loading

**What you'll build:**
- Optimized Orders table (no unnecessary re-renders)
- Lazy-loaded page chunks
- Memoized filter/sort logic on client list

**Topics covered:**
- When to optimize (and when not to)
- Code splitting with `React.lazy` + `Suspense`
- Stable references with useCallback
- Expensive calculations with useMemo

---

## 10. Component Architecture

Components follow **Atomic Design** principles:

```
Atoms          →  Button, Input, Badge, Avatar, Spinner
Molecules      →  FormField (label + input + error), OrderStatusPill, MenuItemCard
Organisms      →  OrdersTable, ClientsTable, Sidebar, TopNav
Templates      →  DashboardLayout, AuthLayout
Pages          →  OrdersPage, LoginPage, SettingsPage
```

### Component File Template

```jsx
// src/components/ui/Button.jsx

// 1. Imports
import PropTypes from 'prop-types'

// 2. Component function
function Button({ children, variant = 'primary', onClick, disabled = false }) {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors'
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent/90',
    outline: 'border border-primary text-primary hover:bg-primary/5',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  )
}

// 3. PropTypes (document your props!)
Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline', 'danger']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

// 4. Default export
export default Button
```

---

## 11. State Management Strategy

| What | Where | Tool |
|------|-------|------|
| Auth user + token | Global | AuthContext |
| Current page data | Page component | useState + useEffect |
| Form data | Form component | React Hook Form |
| Notification list | Global | AppContext |
| Complex async state | Feature hook | useReducer inside custom hook |

We start with built-in React tools (Context, useState, useReducer). When the app grows complex enough, we can migrate to **Zustand** — which is much simpler than Redux.

---

## 12. Routing Structure

```
/                          → Landing / Signup explanation
/signup                    → Create account form
/login                     → Login form
/check-email               → Check your email screen
/link-sent                 → Magic link sent screen
/reset-password            → Reset password form

/dashboard                 → Overview (protected)
/dashboard/orders          → Orders list
/dashboard/orders/:id      → Order detail
/dashboard/menus           → Menu management
/dashboard/menus/new       → Create menu item
/dashboard/clients         → All clients
/dashboard/clients/new     → Add new client
/dashboard/clients/:id     → Client detail
/dashboard/notifications   → Notifications
/dashboard/settings        → Settings

/book/:restaurantSlug      → Public table booking page (for end customers)
/booking-confirmed         → Order confirmed screen
```

---

## 13. API Layer

All API calls live in `src/services/`. The Axios instance (`api.js`) automatically attaches the auth token:

```js
// src/services/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

// Automatically add token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('plateform_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default api
```

Each service file exports clean functions:

```js
// src/services/ordersService.js
import api from './api'

export const getOrders = () => api.get('/orders')
export const getOrderById = (id) => api.get(`/orders/${id}`)
export const updateOrderStatus = (id, status) => api.patch(`/orders/${id}`, { status })
```

---

## 14. Coding Conventions

- **File names:** PascalCase for components (`OrdersPage.jsx`), camelCase for utils (`formatDate.js`)
- **Component names:** Always PascalCase
- **Variables/functions:** camelCase
- **CSS:** Tailwind utility classes only; no raw CSS unless absolutely necessary
- **One component per file** — no exceptions
- **No inline styles** — use Tailwind classes
- **PropTypes** on every component that receives props
- **No `console.log` in commits** — use a debugger or remove before pushing
- **Comments:** Explain *why*, not *what*. The code explains what.

---

## 15. Git Workflow

```bash
# Create a feature branch for each page or feature
git checkout -b feat/orders-page

# Commit often with descriptive messages
git commit -m "feat: add orders table with status filters"
git commit -m "fix: correct date formatting on order cards"
git commit -m "style: align sidebar icons with design"

# Push and open a PR for review
git push origin feat/orders-page
```

### Commit Message Format

```
type: short description (max 72 chars)

type = feat | fix | style | refactor | docs | chore
```

---

## 16. Contributing

This is a learning project — contributions and suggestions are welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes following the conventions above
4. Push to the branch and open a Pull Request
5. Describe what you built and why

---

## 17. License

MIT License. See `LICENSE` for details.

---

<div align="center">
  Built with ❤️ while learning React — one component at a time.
</div>
