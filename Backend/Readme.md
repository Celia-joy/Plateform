# 🍽️ PlateForm API

A RESTful API built with **Express.js** and **MongoDB** that powers a full restaurant management platform — handling multi-role authentication, table reservations with zero collision guarantee, menu management, real-time order tracking, and automated email reminders.

---

## 🧠 Business Rules

- A user must **register** and **login** before making a reservation or placing an order
- **No double bookings** — a table cannot be reserved by two customers for the same date and time slot
- Reservations follow a strict lifecycle: `pending → confirmed → seated → completed → cancelled`
- Only a **client_admin** can manage their restaurant's tables, menu items, and staff
- Only a **super_admin** can create and manage restaurants on the platform
- Only **staff** can update an order's preparation status
- An **order** is always linked to an existing reservation
- Customers receive an **email confirmation** when their reservation is created
- Customers receive a **reminder email** the day before their reservation
- Staff and client_admin receive a **notification** when a new reservation is placed

---

## 👤 Roles

| Role | Description |
|------|-------------|
| `super_admin` | Platform-level: manages all restaurants on PlateForm |
| `client_admin` | Restaurant owner: manages tables, menus, staff, and reservations for their restaurant |
| `staff` | Waiter or manager: views orders and updates their status |
| `customer` | End user: makes reservations and places orders |

---

## 🗄️ Data Models

### User
| Field | Type | Description |
|-------|------|-------------|
| `name` | String | Full name of the user |
| `email` | String | Unique email address |
| `password` | String | Hashed password (bcryptjs) |
| `role` | String | One of: `super_admin`, `client_admin`, `staff`, `customer` |
| `restaurant` | ObjectId | Reference to Restaurant (for `client_admin` and `staff` only) |

### Restaurant
| Field | Type | Description |
|-------|------|-------------|
| `name` | String | Restaurant name |
| `slug` | String | URL-friendly unique identifier (e.g. `le-petit-bistro`) |
| `address` | String | Physical address |
| `phone` | String | Contact phone number |
| `owner` | ObjectId | Reference to User (`client_admin`) |
| `isActive` | Boolean | Whether the restaurant is live on the platform |

### Table
| Field | Type | Description |
|-------|------|-------------|
| `restaurant` | ObjectId | Reference to Restaurant |
| `tableNumber` | Number | Unique number within the restaurant |
| `capacity` | Number | Number of seats at this table |
| `isAvailable` | Boolean | Whether the table is active and bookable |

### MenuItem
| Field | Type | Description |
|-------|------|-------------|
| `restaurant` | ObjectId | Reference to Restaurant |
| `name` | String | Name of the dish or drink |
| `description` | String | Short description |
| `price` | Number | Price in the local currency |
| `category` | String | One of: `appetizer`, `main`, `dessert`, `drink` |
| `isAvailable` | Boolean | Whether this item is currently on the menu |

### Reservation
| Field | Type | Description |
|-------|------|-------------|
| `customer` | ObjectId | Reference to User |
| `restaurant` | ObjectId | Reference to Restaurant |
| `table` | ObjectId | Reference to Table |
| `date` | Date | Date of the reservation |
| `timeSlot` | String | Time of reservation (e.g. `19:00`) |
| `partySize` | Number | Number of guests |
| `status` | String | `pending`, `confirmed`, `seated`, `completed`, `cancelled` |
| `specialRequests` | String | Optional notes from the customer |

### Order
| Field | Type | Description |
|-------|------|-------------|
| `reservation` | ObjectId | Reference to Reservation |
| `items` | Array | List of `{ menuItem, quantity, notes }` |
| `status` | String | `pending`, `preparing`, `served`, `paid` |
| `totalAmount` | Number | Calculated total of all items |

---

## 🛣️ API Endpoints

### Auth
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/auth/register` | Public | Register a new user (customer by default) |
| POST | `/api/auth/login` | Public | Login and receive a JWT token |

### Restaurants
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/restaurants` | Super Admin | Create a new restaurant on the platform |
| GET | `/api/restaurants` | Super Admin | List all restaurants |
| GET | `/api/restaurants/:slug` | Public | Get restaurant info by slug (for booking page) |
| PUT | `/api/restaurants/:id` | Super Admin | Update restaurant details |

### Tables
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/tables` | Client Admin | Add a table to their restaurant |
| GET | `/api/tables` | Client Admin | List all tables in their restaurant |
| PUT | `/api/tables/:id` | Client Admin | Update a table's details |
| DELETE | `/api/tables/:id` | Client Admin | Remove a table |

### Menu
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/menu` | Client Admin | Add a menu item |
| GET | `/api/menu/:restaurantId` | Public | Get all menu items for a restaurant |
| PUT | `/api/menu/:id` | Client Admin | Update a menu item |
| DELETE | `/api/menu/:id` | Client Admin | Remove a menu item |

### Reservations
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/reservations` | Customer | Make a reservation (checks for slot collision) |
| GET | `/api/reservations` | Customer / Staff / Client Admin | View reservations (scoped by role) |
| GET | `/api/reservations/:id` | Customer / Staff | View a single reservation |
| PUT | `/api/reservations/:id/status` | Staff / Client Admin | Update reservation status |
| DELETE | `/api/reservations/:id` | Customer | Cancel a reservation |

### Orders
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/orders` | Customer / Staff | Create an order for a reservation |
| GET | `/api/orders/:reservationId` | Staff / Client Admin | Get orders for a reservation |
| PUT | `/api/orders/:id/status` | Staff | Update order preparation status |

---

## 📁 Project Structure

```
plateform-api/
│
├── config/
│   ├── env.js                        # Loads environment variables
│   └── mailer.js                     # Nodemailer configuration
│
├── Controllers/
│   ├── auth.controller.js            # Register & login logic
│   ├── restaurant.controller.js      # Create, list, and view restaurants
│   ├── table.controller.js           # Add, update, and remove tables
│   ├── menu.controller.js            # Add, update, and remove menu items
│   ├── reservation.controller.js     # Make, view, and manage reservations
│   └── order.controller.js           # Create and track orders
│
├── Database/
│   └── mongodb.js                    # Mongoose connection
│
├── middleware/
│   ├── auth.middleware.js            # JWT verification + role-based access
│   └── error.middleware.js           # Global error handler
│
├── Models/
│   ├── user.model.js
│   ├── restaurant.model.js
│   ├── table.model.js
│   ├── menuItem.model.js
│   ├── reservation.model.js
│   └── order.model.js
│
├── Routes/
│   ├── auth.routes.js
│   ├── restaurant.routes.js
│   ├── table.routes.js
│   ├── menu.routes.js
│   ├── reservation.routes.js
│   └── order.routes.js
│
├── utils/
│   └── reminder.js                   # node-cron job for reservation reminders
│
├── .env.development.local
├── .env.production.local
├── .gitignore
├── app.js                            # Express app entry point
└── package.json
```

---

## ⚙️ Tech Stack

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

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/plateform-api.git
cd plateform-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables

Create a `.env.development.local` file in the root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

### 4. Run the development server
```bash
npm run dev
```

The server will start on `http://localhost:5000`

---

## 🔐 Authentication

This API uses **JWT (JSON Web Tokens)** for authentication. After logging in, include the token in the `Authorization` header of all protected requests:

```
Authorization: Bearer <your_token_here>
```

The JWT payload includes the user's `id` and `role`, which the auth middleware uses to grant or deny access per route.

### Role-based access

Routes are protected at two levels:

1. **`protect`** — verifies the token is valid and attaches `req.user`
2. **`requireRole(...roles)`** — checks that `req.user.role` is in the allowed list

Example: a route that only `client_admin` and `super_admin` can access:
```js
router.post('/', protect, requireRole('client_admin', 'super_admin'), addTable)
```

---

## 🚫 Reservation Collision Guard

When a customer attempts to make a reservation, the API checks whether the requested table is already booked for the same date and time slot:

```
Find any reservation where:
  table    = requested table ID
  date     = requested date
  timeSlot = requested time slot
  status   NOT IN ['cancelled']
```

If a match is found → the request is rejected with a `409 Conflict` error.
If no match is found → the reservation is created and a confirmation email is sent.

This is the core business rule of PlateForm, equivalent to checking copy availability in a library system.

---

## 📬 Email Notifications

| Trigger | Recipient | Content |
|---------|-----------|---------|
| Reservation created | Customer | Confirmation with date, time, table, and restaurant details |
| 24 hours before reservation | Customer | Reminder with full booking summary |
| New reservation placed | Client Admin / Staff | Alert for incoming booking |

A scheduled cron job runs **daily** using `node-cron`. It queries all reservations where:
- `date` is tomorrow
- `status` is `confirmed`

And sends a reminder email to each customer via `nodemailer`.

---

## 👤 Author

**Celia-joy**  
Built as a hands-on learning project to master Express.js backend development — from auth and role-based access to real-time order tracking and automated notifications.