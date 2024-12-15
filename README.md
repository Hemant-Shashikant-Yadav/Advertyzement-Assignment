# FoodFacts Explorer 🥗

A modern web application for exploring food products and their nutritional information using the Open Food Facts database.

## 🌟 Features

- **Product Search & Discovery**
  - Search products by name or barcode
  - Filter by categories
  - Sort by name or nutrition grade
  - Infinite scroll loading

- **Detailed Product Information**
  - Nutritional facts and grades
  - Ingredient lists
  - Allergen information
  - Manufacturing details
  - Product images

- **User Interface**
  - Responsive design for all devices
  - Beautiful, organic color scheme
  - Smooth animations and transitions
  - Accessible components
  - Loading states and error handling

## 🛠️ Technology Stack

- **Frontend Framework**
  - React 18
  - TypeScript
  - Vite

- **Styling & UI**
  - Tailwind CSS
  - shadcn/ui components
  - Lucide icons
  - Custom animations

- **Routing & State Management**
  - React Router v7
  - React Hooks for state management

- **API Integration**
  - Open Food Facts API
  - Custom hooks for data fetching

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components from shadcn/ui
│   └── ...              # Custom components
├── hooks/               # Custom React hooks
│   ├── useProducts.ts   # Products fetching logic
│   └── useProductDetails.ts
├── lib/                 # Utility functions and constants
│   ├── colors.ts        # Color palette definitions
│   └── utils.ts         # Helper functions
├── pages/               # Page components
│   ├── ProductListPage.tsx
│   └── ProductDetailPage.tsx
├── styles/             # Global styles and animations
│   ├── animations.css
│   └── globals.css
└── types/              # TypeScript type definitions
    └── index.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Hemant-Shashikant-Yadav/Advertyzement-Assignment.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Code Organization

### Components
- Each component is in its own file
- Components are organized by feature/responsibility
- Shared components are in the `components` directory
- Page-specific components are co-located with their pages

### Custom Hooks
- Data fetching logic is extracted into custom hooks
- Hooks follow the `use` prefix naming convention
- Each hook has a single responsibility

### Utilities
- Helper functions are organized in the `lib` directory
- Constants and configuration are separated from logic
- Type definitions are centralized in `types` directory

### Styling
- Tailwind classes for component-specific styling
- Global styles and animations in dedicated files
- Consistent color palette defined in `colors.ts`

## 🎨 Design System

### Colors
- Primary: Terra cotta (Warm, engaging)
- Secondary: Sage green (Natural, calming)
- Accent: Honey gold (Energetic highlights)
- Background: Cream (Soft, readable)

### Typography
- Headers: Bold, gradient effects
- Body: Clean, highly readable
- Consistent spacing and sizing

### Components
- Consistent border radius
- Subtle shadows for depth
- Smooth hover transitions
- Loading states and animations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Open Food Facts](https://world.openfoodfacts.org/) for their comprehensive food database
- [shadcn/ui](https://ui.shadcn.com/) for beautiful, accessible components
- [Lucide](https://lucide.dev/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---
