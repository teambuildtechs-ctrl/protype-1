# Cocoa Cafe — Modern Web Platform

A premium, modern full-stack web platform built for **Cocoa Cafe** (Virar West, Maharashtra). Features an interactive menu, slide-over cart, online ordering checkout, table reservations, customer accounts, and a staff admin dashboard.

---

## ☕ Cafe Details
* **Name**: Cocoa Cafe
* **Tagline**: *Coffee • Desserts • Food • Experiences — Crafted for every craving.*
* **Location**: Shop No. B-1, The Malange, near Madhuram Hotel Jakat Naka, Gokul Township, Virar West, Maharashtra 401303
* **Instagram**: [@cocoacafe.in](https://instagram.com/cocoacafe.in)
* **Contact**: +91 80078 90850 / 852

---

## ✨ Features

### 🛍️ Customer Experience
- **Hero & Storytelling**: Warm, dessert-and-coffee-focused aesthetic.
- **Interactive Menu (`/menu`)**:
  - Filter by category (Espresso Bar, Cold Brews, Pastries & Desserts, Pasta & Risotto, Bread, Appetisers, Burgers, Gelato).
  - Real-time search query filtering.
  - Vegetarian / Non-Vegetarian indicators and Bestseller / New badges.
- **Slide-Over Cart & Online Ordering (`/checkout`)**:
  - Global persistent cart via Zustand (persists across reloads).
  - Choice between **Store Pickup** and **Delivery**.
  - Dynamic calculations for subtotal, taxes (GST 5%), and delivery fees.
- **Table Reservation System (`/reserve`)**:
  - Online booking form (guests, date, time slots, special requests).
- **Brand Story & Gallery (`/about`, `/gallery`)**:
  - Philosophy and cafe atmosphere showcase with Instagram highlights.
- **Contact & Location (`/contact`)**:
  - Embedded Google Map, operating address, inquiry form, and floating **WhatsApp** chat button.
- **User Accounts (`/login`, `/signup`, `/profile`)**:
  - Powered by Supabase Auth with order history and loyalty points tracking.

### 🛡️ Admin & Staff Portal (`/admin`)
- **Overview Dashboard (`/admin`)**: Today's revenue, active kitchen orders, table bookings, and stock metrics.
- **Products Catalog (`/admin/products`)**:
  - Create, edit, and delete menu items and prices.
  - Quick-toggle for bestseller status and inventory availability.
- **Live Kitchen & Delivery Queue (`/admin/orders`)**:
  - Status progression: `Pending` → `Confirmed` → `Preparing` → `Ready` → `Out for Delivery` → `Delivered`.
- **Reservations Management (`/admin/reservations`)**:
  - Review guest requests, confirm bookings, or reschedule.

---

## 🛠️ Tech Stack & Dependencies
* **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **State Management**: [Zustand](https://github.com/pmndrs/zustand)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Database & Auth**: [Supabase](https://supabase.com/) (PostgreSQL schema included in `schema.sql`)

---

## 🚀 Setup & Installation

In Node.js projects, dependencies are managed through `package.json`. Make sure you have [Node.js](https://nodejs.org/) installed.

### 1. Clone the repository
```bash
git clone https://github.com/teambuildtechs-ctrl/protype-1.git
cd protype-1
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Supabase (Optional for local preview)
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Execute [`schema.sql`](./schema.sql) in your **Supabase SQL Editor** to initialize all tables and relationships.

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build
```bash
npm run build
npm run start
```
Verified with zero build errors across all 15 routes.
