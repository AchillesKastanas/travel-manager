Run npm install
Run npm run dev to start the development server
Open http://localhost:3000 in your browser to see the result

Deliverables
- Deployed App: https://welcome-pickups-project.vercel.app/
- Repo: https://github.com/AchillesKastanas/travel-manager
- Local Setup: npm install && npm run dev
- Assets/Figma: As per provided design access instructions

This project implements a responsive scheduled transfers feed based on provided Figma mockups. The app displays upcoming transfers in chronological order and includes modal transfer details, with support for mobile and desktop interactions. Built with Next.js + TypeScript + SCSS.

Tech Stack & Architecture
- Framework: Next.js
- Language: TypeScript
- Styling: SCSS (No CSS frameworks used)
- Data Handling: JSON files served via Next’s public folder, consumed through a custom useFetchData() hook.
- Modal Logic: Centralized modal context using React Context API for clean and scalable modal management.
- Responsiveness: Custom useResize() hook returns an isMobile boolean across the app. The app wrapper applies an isMobile class for contextual SCSS styling using .isMobile & {} structure.

Key Highlights
- Responsive Design: Follows Figma pixel-perfectly using rem units and flexbox layout. Aspect ratios were respected, and full responsiveness ensured.
- Custom Hooks:
  - useResize(): Global mobile/responsive logic.
  - useFetchData<T>(): Clean and reusable data-fetching hook with error/loading state handling.
- Componentization Methodology:
  - Components are designed for reusability. When mobile/desktop logic differs drastically, separate versions are stored in XMobile/XDesktop folders.
  - Shared components utilize conditional rendering based on isMobile.
- Utility Handling: Utility functions are created within a utils/ folder inside the relevant component directory, each isolated in its own file for readability and scalability.
- Design Fidelity:
  - All colors stored as SCSS variables (variables.scss).
  - Assets handled using svgr with a central index.ts for easy imports.
  - Fonts: Museo Sans (closest available match found online).

Modal Context Explained
The modal system is built using a React Context to globally manage modal open/close state. The context provides:
openModal(content: ReactNode)
closeModal()
It wraps the app with a <ModalProvider> and allows modal content to be injected from anywhere without prop drilling. The modal itself is rendered conditionally at the app root level.

Assets & Performance
- SVG Optimization: Assets were compressed and adjusted for flexibility and file size.
- Import Hygiene: All imports across .tsx files are sorted.
- Cross-Browser: Tested on Chromium and Gecko-based browsers (latest versions).
- Security: Zero vulnerabilities using latest npm.

Improvements With More Time
- Refactor SCSS to remove repetition and extract shared components (e.g., buttons, headers).
- Further modularize layout elements for scalability.
- Enhance accessibility (keyboard handling).
- Centralized approach for strings / support multiple languages
- Data caching system, so not everything is getting fetched needlessly
- Loading / Error states for data fetching. Base functionality is there, but not fully implemented

Thank you for taking the time and reviewing the whole application. If any questions arise, reach me at achilleasrinos@gmail.com

- Achilles Kastanas
