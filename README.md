# 🚀 Pankaj Sharma - Professional Portfolio

Welcome to the source code for my professional portfolio website. This project is a modern, sleek, and highly interactive single-page application designed to showcase my experience as a **Tech Lead & Salesforce Architect** with over 7+ years of expertise in the Salesforce ecosystem.

## ✨ Features

-   **Sleek Aesthetics**: A premium chocolate/brown theme with mocha and cream accents, designed for a professional look and feel.
-   **Smooth Interactions**: Seamless scrolling and parallax effects powered by Framer Motion.
-   **Image-Heavy Design**: Optimized for visual storytelling with image-rich sections and interactive cards.
-   **Liquid Performance**: Implemented **React Lazy Loading** and **Suspense** to ensure fast initial page loads and smooth section transitions.
-   **Fully Responsive**: A mobile-first approach ensuring a premium experience on everything from smartphones to large desktop monitors.
-   **Skeleton Loaders**: Custom image loaders that provide a smooth, pulsing UI state while high-res assets are being fetched.

## 🛠️ Built With

This portfolio is built using modern web development technologies:

-   **[React](https://reactjs.org/)** & **[TypeScript](https://www.typescriptlang.org/)**: For a robust and type-safe component-based architecture.
-   **[Vite](https://vitejs.dev/)**: As the lightning-fast build tool and development server.
-   **[Tailwind CSS](https://tailwindcss.com/)**: For a custom-designed, utility-first styling system.
-   **[Framer Motion](https://www.framer.com/motion/)**: For sophisticated layout animations and scroll-triggered transitions.
-   **[Lucide React](https://lucide.dev/)**: For clean and consistent iconography.

## 📁 Project Structure

```text
src/
 ├── assets/        # Optimization-ready high-res images and icons
 ├── components/    # Reusable UI components (Hero, Skills, Experience, etc.)
 ├── App.tsx        # Main application shell and lazy-loading logic
 ├── index.css      # Core design system and Tailwind overrides
 └── main.tsx       # Application entry point
```

## 🚀 Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/pramodPersonalGit/Pankaj_Portfolio.git
    cd Pankaj_Portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173/Pankaj_Portfolio/`.

## 📦 Deployment

This project is configured for automated deployment to **GitHub Pages**.

To deploy the latest version:
```bash
npm run deploy
```
This runs the `predeploy` script (building the production bundle) and then uses the `gh-pages` package to push the `dist` directory to the `gh-pages` branch.

---
*Created with ❤️ by Pankaj Sharma*
