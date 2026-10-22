# বাজার দর | BazarDor

**Today's market prices, at a glance.**

🔗 **Live Demo:** [https://your-live-link.vercel.app](https://your-live-link.vercel.app)

---

## About

**BazarDor (বাজার দর)** is a Bangla-first market price tracker for Bangladesh. It shows the daily prices of everyday essentials such as rice, lentils, oil, vegetables, fish, meat, eggs and spices, along with how each price has changed and how prices compare across markets and divisions.

---

## Key Features

1. **Price movement tracking:** The home page highlights the top 6 products whose prices went up and the top 6 whose prices went down today, with ▲ / ▼ indicators and percentage change.
2. **Browse by category:** Pick a category from the navigation bar to see its products. The active category is highlighted.
3. **Sort by price:** On each category page, sort products from low to high or high to low.
4. **Market-wise price details:** Each product page shows the minimum, maximum and average price, plus a full table of prices by market and division.
5. **Authentication and profile:** Sign up and sign in with email and password, or with Google or GitHub. Users can view their profile and update their name.

**Also included:** a live price ticker (marquee), a fully responsive layout, loading skeletons and a custom 404 page.

---

## Tech Stack

| Area | Technology |
|------|------------|
| Framework | [Next.js](https://nextjs.org/) (App Router, Server Components), [React](https://react.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/), [daisyUI](https://daisyui.com/), [HeroUI](https://www.heroui.com/) |
| Authentication | [Better Auth](https://www.better-auth.com/) (Email/Password, Google, GitHub) |
| Database | [MongoDB](https://www.mongodb.com/) via the Better Auth MongoDB adapter |
| Data source | Programming Hero BazarDor Open API |
| Other | `react-toastify` (notifications), `react-marquee-text` (price ticker), `next/font` (Noto Sans Bengali) |

---

## Project Structure

```
app/
├── (auth)/
│   ├── sign-in/page.jsx        # Sign in
│   └── sign-up/page.jsx        # Sign up
├── api/auth/[...all]/route.js  # Better Auth API handler
├── category/[categoryId]/      # Products by category
├── detailsPage/[id]/           # Product details and market-wise prices
├── profile/page.jsx            # User profile
├── components/                 # Header, Hero, NavCategory, ProductCard, Marquee, Footer ...
├── lib/                        # auth.js (server), auth-client.js (client)
├── layout.js                   # Root layout
├── page.js                     # Home page
├── loading.js                  # Loading skeleton
└── not-found.js                # 404 page
```

---

## API

Data comes from the [Programming Hero BazarDor Open API](https://openapi.programming-hero.com/api/bazardor):

| Endpoint | Description |
|----------|-------------|
| `GET /categories` | List of all categories |
| `GET /products` | All products |
| `GET /products?category=<slug>` | Products in a category |
| `GET /products/<id>` | Product details with market-wise prices |

Responses are revalidated every 30 minutes.

---

## Developer

Developed by **hasibsiam119**