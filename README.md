# Next.js Portfolio & Product Catalog

A Next.js project built with React, TypeScript, and Tailwind CSS. This project includes a personal portfolio and a Product Catalog mini-project to practise Next.js concepts, Server Components, Client Components, data fetching, URL search parameters, and React Context.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Features

### Day 6 – Portfolio

- Home, About, Projects, and Contact pages.
- Dynamic project detail pages using the App Router.
- Reusable components such as Navbar and Footer.
- Shared project data maintained in a separate data file.
- Responsive UI using Tailwind CSS.

### Day 7 – Product Catalog

- Fetches product data from the DummyJSON API.
- Displays products using a Server Component.
- Search products by title.
- Filter products by category.
- Uses URL search parameters to maintain search and filter values.
- Dynamic product detail pages using `/products/[id]`.
- Add products to the cart.
- Shared cart state using React Context.
- Displays the cart count in the Navbar.
- Dedicated `/cart` page to view and remove products.
- Calculates the total cart price.

## Server Components and Client Components

Next.js App Router components are Server Components by default. Client Components are used when browser-side interactivity or React client hooks are required.

### Server Components

| Component / File | Responsibility | Why Server Component? |
|---|---|---|
| `app/layout.tsx` | Root layout shared across pages | Provides the application structure and renders the shared layout. |
| `app/products/page.tsx` | Fetches and displays products | Uses async/await for server-side data fetching and filtering. |
| `app/products/[id]/page.tsx` | Fetches individual product details | Fetches product data using the dynamic route ID. |

### Client Components

| Component / File | Responsibility | Why Client Component? |
|---|---|---|
| `ProductSearch.tsx` | Searches products | Uses Next.js navigation hooks and input events. |
| `CategoryFilter.tsx` | Filters products by category | Uses URL search parameters and change events. |
| `AddToCartButton.tsx` | Adds products to the cart | Handles click events and accesses cart Context. |
| `CartContext.tsx` | Manages shared cart state | Uses `createContext`, `useContext`, and `useState`. |
| `Providers.tsx` | Wraps the application with CartProvider | Provides the client-side Context to child components. |
| `CartCount.tsx` | Displays the cart count in Navbar | Reads the shared cart state using `useCart()`. |
| `app/cart/page.tsx` | Displays cart products, removes products, and calculates total | Uses Context and interactive remove buttons. |

**Note:** The Navbar and Footer are existing shared components. Their Server or Client classification depends on their own implementation and imports.

## Important Next.js Concepts Practised

- Server Components and Client Components.
- The `"use client"` directive and client boundaries.
- Server-side data fetching using `fetch()`.
- Dynamic routes and route parameters.
- URL search parameters using `useSearchParams()` and `URLSearchParams`.
- Client-side navigation using `useRouter()` and `usePathname()`.
- React Context API for shared state management.
- Custom hooks using `useContext()`.
- Suspense boundaries.
- Serializable props between Server and Client Components.
- Hydration and hydration mismatch handling.
- Environment variables and `server-only`.

## API Used

Product data is fetched from [DummyJSON](https://dummyjson.com/products).

- Products API: `https://dummyjson.com/products`
- Individual product API: `https://dummyjson.com/products/{id}`

## Cart Implementation

The cart uses React Context to share its state across components.

- `CartProvider` manages the cart state.
- `addToCart()` adds products.
- `removeFromCart()` removes products.
- `useCart()` provides access to the shared cart data.
- `CartCount` displays the number of cart entries.
- The Cart page displays products and calculates the total price.

**Current limitation:** Cart data is stored in React state and is not persisted after a browser refresh.

## Project Structure

```text
app/
├── components/
│   └── cart/
│       ├── AddToCartButton.tsx
│       ├── CartContext.tsx
│       ├── CartCount.tsx
│       └── Providers.tsx
├── products/
│   ├── [id]/
│   │   └── page.tsx
│   └── page.tsx
├── cart/
│   └── page.tsx
├── layout.tsx
└── page.tsx

types/
└── product.ts

data/
└── projects.ts

public/
```

Other existing portfolio files and configuration files are maintained in the project.

## Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [DummyJSON API](https://dummyjson.com/)

## Deployment

The project can be deployed using [Vercel](https://vercel.com/).

For deployment instructions, refer to the [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).
