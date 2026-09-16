# Protype-1

A modern web application built with Next.js, featuring an admin dashboard, ordering system, and reservations.

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

## Setup & Installation

In Node.js projects, dependencies are managed through the `package.json` file (this acts as the "requirements file"). To install all required dependencies after cloning the project, simply run:

```bash
npm install
```

## Running the Development Server

Once the dependencies are installed, you can start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `src/app/admin` - Admin dashboard (Orders, Products, Reservations)
- `src/app/reserve` - Customer reservation page
- `src/components` - Reusable UI components

## Technologies Used

- **Next.js** - React framework
- **Tailwind CSS** - Styling
- **Supabase** - Database and Backend
- **Zustand** - State management
- **Lucide React** - Icons
