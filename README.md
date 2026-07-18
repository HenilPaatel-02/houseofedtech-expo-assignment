# 🎬 House Of EdTech Assignment

A modern movie streaming application built with React Native, Expo, TypeScript, and React Native Paper.

The project demonstrates clean architecture, reusable components, responsive UI, skeleton loading states, dark/light theme support, and polished micro-interactions, inspired by production apps like Disney+ Hotstar.

---

## 📸 Screenshots & Demo

### Home

### Detail

### Profile

<table>
  <tr>
    <td align="center"><b>Home</b></td>
    <td align="center"><b>Detail</b></td>
    <td align="center"><b>Profile</b></td>
  </tr>
  <tr>
    <td><img src="assets/screenshots/home.png" width="200" /></td>
    <td><img src="assets/screenshots/detail.png" width="200" /></td>
    <td><img src="assets/screenshots/profile.png" width="200" /></td>
  </tr>
</table>

---

---

## ✨ Features

- Home screen with Featured Hero Banner
- Trending, Recommended and Continue Watching carousels
- Movie Detail screen
- Profile & Settings screen
- Light / Dark Theme
- Skeleton Loaders
- Pull To Refresh
- Empty & Error States
- Micro-interactions using React Native Reanimated
- Responsive UI
- TypeScript
- Mock API Architecture

## 📱 Screens

1. **Home** — Hero banner, horizontal carousels, categorized content rows
2. **Detail** — Rich metadata, genre chips, related movies
3. **Profile / Settings** — Theme switcher, app info

---

## 🛠 Tech Stack

| Technology                   | Purpose                      |
| ---------------------------- | ---------------------------- |
| React Native                 | Mobile development           |
| Expo SDK 57                  | Development platform         |
| TypeScript (strict)          | Type safety                  |
| React Navigation             | Native Stack + Bottom Tabs   |
| React Native Paper           | Material Design 3 components |
| NativeWind                   | Tailwind CSS utility styling |
| Expo Image                   | Optimized image loading      |
| React Native Reanimated      | Animations                   |
| React Native Gesture Handler | Gesture support              |
| AsyncStorage                 | Theme persistence            |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo Go app (for physical device testing) or an Android/iOS emulator

### Environment Variables

None required — this project uses a local Mock API layer with static JSON data, so no API keys or `.env` file are needed.

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/HenilPaatel-02/houseofedtech-expo-assignment.git

# 2. Navigate to the project
cd houseofedtech-expo-assignment

# 3. Install dependencies
npm install

# 4. Start the Metro bundler
npx expo start
```

### Running the App

```bash
npx expo run:android   # Android (requires Android Studio/emulator)
npx expo run:ios       # iOS (macOS only)
```

Or scan the QR code shown in the terminal using the **Expo Go** app on your phone.

### Verifying Code Quality

```bash
npm run type-check   # TypeScript strict mode check
npm run lint          # ESLint
npm run format         # Prettier formatting
```

---

## 📂 Project Structure

```
src/
├── animations/          # Shared Reanimated animation presets
├── components/
│   ├── common/           # Shared buttons, wrappers
│   ├── skeleton/          # Skeleton loader primitives
│   ├── empty/              # Empty state component
│   └── error/                # Error state component
├── features/
│   ├── home/               # Home screen: components, hooks, services, mock data
│   ├── detail/               # Detail screen: components, hooks, services, mock data
│   └── profile/               # Profile screen
├── navigation/            # Root Stack + Bottom Tabs navigators
├── services/                 # Cross-feature service utilities
├── theme/                     # Light/dark theme, ThemeContext, color tokens
├── hooks/                      # Shared custom hooks
├── constants/                   # Spacing, radius, sizes tokens
├── types/                        # Shared TypeScript types
└── utils/                          # Helper functions
```

---

## 🧩 Architecture Overview

The project follows a **feature-based architecture**, where each feature owns its components, hooks, services, mock data, and types:

```
Feature (e.g. "home")
  ├── components/   → UI building blocks specific to this feature
  ├── hooks/         → useHome(), business logic & state
  ├── services/       → Mock API layer with simulated delay
  ├── data/             → Static JSON mock data
  └── types/             → Feature-specific TypeScript interfaces
```

Screens themselves stay intentionally thin — a screen consumes a single hook (e.g. `useHome()`, `useMovieDetails()`) and renders based on `{ data, loading, error }`. No fetching, mock data, or business logic lives inside a screen component.

This structure improves scalability, readability, and makes each feature easy to extend or swap for a real API without touching UI code.

---

## 🎯 Design Decisions

### React Native Paper

Chosen for Material Design 3 components, built-in theming, accessibility support out of the box, and reduced development time compared to building every primitive (buttons, chips, inputs) from scratch.

### Feature-Based Folder Structure

Instead of grouping files by type (`all components/`, `all hooks/`), the project groups by feature — each feature is self-contained with its own components, hooks, services, and mock data. This makes it easy to reason about a single screen's logic in isolation and reduces the chance of one feature's changes accidentally breaking another.

### Mock API Layer

A dedicated service layer (e.g. `home.service.ts`, `detail.service.ts`) simulates real network calls with artificial delay (`setTimeout`-based `Promise` wrappers). This mirrors how a real backend integration would behave and means swapping mock data for a live API later only requires changing the service layer — the hooks and UI components remain untouched.

### Theme Management

A custom `ThemeContext` manages light, dark, and system theme modes. The selected preference is persisted via `AsyncStorage`, so the user's choice survives app restarts. All screens read colors through a `useAppColors()` hook rather than importing static color constants, ensuring every component reacts correctly when the theme changes.

---

## ⚡ Performance Optimizations

- **Component memoization** — reusable UI components wrapped in `React.memo` to avoid unnecessary re-renders
- **Stable callbacks** — `useCallback` used for navigation handlers, refresh actions, and button presses
- **Cached computations** — `useMemo` used for derived values to avoid recalculating on every render
- **Optimized lists** — horizontal carousels use `FlatList` with `initialNumToRender`, `maxToRenderPerBatch`, `windowSize`, and `removeClippedSubviews` tuned for smooth scrolling
- **Optimized images** — `expo-image` used over the default `Image` component for better caching and smoother loading transitions
- **Skeleton loading** — reduces perceived load time and prevents layout shift compared to a blank screen or spinner
- **Reanimated** — micro-interactions run on the UI thread for a consistent 60 FPS, independent of JS thread load

---

## 📈 Future Improvements

- TMDB API integration (replacing mock data)
- Authentication
- Search screen
- Movie categories / genre filtering
- Favorites & watchlist persistence
- Real video streaming playback
- Offline downloads
- Pagination / infinite scroll on carousels

---

## 👨‍💻 Author

**Henil Patel**

- GitHub: [github.com/HenilPaatel-02](https://github.com/HenilPaatel-02)
- LinkedIn: [linkedin.com/in/henilpatel02](https://www.linkedin.com/in/henilpatel02)

---

## 📄 License

This project was developed as part of the House of Edtech React Native Assignment and is intended for educational and evaluation purposes only.

---

## ✅ Assignment Checklist

- Feature-Based Architecture
- TypeScript
- Reusable Components
- React Navigation
- React Native Paper
- Dark / Light Theme
- Skeleton Loaders
- Empty & Error States
- Responsive UI
- Micro-interactions
- Performance Optimizations
- Clean Code
- Production-Ready Structure
