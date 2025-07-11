 # About YourRouter

 YourRouter is a powerful client-side routing library for building Single Page Applications (SPAs) without full-page reloads and with zero external dependencies. It provides dynamic routing, template rendering, and redirection capabilities, all with full TypeScript support.

 ## Features

 - Client-side routing without page reloads
 - Dynamic route parameters and extended wildcard segments
 - Template rendering engine (optional)
 - Redirection without reloading the page
 - Zero runtime dependencies
 - Full TypeScript definitions

 ## Technologies

 - **Language & Tooling**: TypeScript, ECMAScript 2016+, Node.js
 - **Bundling & Build**: tsc, tsc-alias, concurrently, Vite
 - **Linting**: ESLint (Standard config) with @typescript-eslint
 - **Testing**:
   - Unit & Integration: Vitest, jsdom
   - End-to-End: Playwright (via Vitest e2e)
 - **CI/CD**: GitHub Actions for linting, testing, and npm publishing

 ## Installation

 Install via npm, yarn, or pnpm:

 ```bash
 npm install yourrouter
 yarn add yourrouter
 pnpm add yourrouter
 ```

 ## Quick Usage

 ```ts
 import Router from "yourrouter";

 // Initialize router with optional render target
 const router = Router.create({
   path404: "/notFound",
   renderId: "#app", // Optional: CSS selector for template mounting
 });

 // Define routes
 router.addRoute("/", () => {
   return () => "<h1>Home page!</h1>";
 });

 router.addRoute("/users/:id", () => {
   const params = Router.get().getRouteParams();
   return () => `<p>User ID: ${params.id}</p>`;
 });
 ```

 For complete API and advanced examples, see the [documentation site](https://ch3ber.github.io/yourRouter).

 ## Project Structure

 ```
 .
 ├── .github/                # Code of Conduct & CI workflows
 ├── docs/                   # Project images and documentation assets
 ├── scripts/                # Build & coverage helper scripts
 ├── src/                    # Source files (TypeScript)
 ├── __test__/               # Unit, integration, and e2e tests
 ├── lib/                    # Compiled output (generated)
 ├── package.json            # Project metadata & scripts
 ├── tsconfig*.json          # TypeScript configurations
 ├── vite.config.js          # Vite test server config
 ├── README.md               # Quick start & overview (GitHub)
 ├── CONTRIBUTING.md         # Contribution guidelines
 ├── TODOS.md                # Roadmap & outstanding tasks
 └── LICENSE                 # MIT License
 ```

 ## npm Scripts

 | Command                | Description                                                   |
 | ---------------------- | ------------------------------------------------------------- |
 | `npm run build`        | Clean, compile source & declarations, apply path aliases      |
 | `npm run build:watch`  | Watch and rebuild (for development)                           |
 | `npm run dev`          | Type-check in watch mode                                      |
 | `npm run lint`         | Run ESLint                                                    |
 | `npm run lint:fix`     | Run ESLint with automatic fixes                               |
 | `npm run test`         | Run unit & integration tests (jsdom)                          |
 | `npm run test:watch`   | Run tests in watch mode                                       |
 | `npm run test:coverage`| Run tests with coverage report                                |
 | `npm run test:vite`    | Build and launch Vite server for manual/browser testing       |

 ## Testing

 This project uses Vitest for unit, integration, and end-to-end testing:

 - **Unit & Integration**: `npm run test`
 - **Watch mode**: `npm run test:watch`
 - **Coverage report**: `npm run test:coverage`
 - **E2E & browser**: `npm run test:vite`

 Test configurations and mocks are located under the `__test__` directory.

 ## Continuous Integration & Deployment

 A GitHub Actions workflow (`.github/workflows/publish.yml`) automates:

 1. Linting & testing on each push
 2. Build & publish to npm on pushes to `main` (requires `NPM_TOKEN`)

 ## Documentation & Website

 - Live docs site: [https://ch3ber.github.io/yourRouter](https://ch3ber.github.io/yourRouter)
 - Documentation source: https://github.com/ch3ber/yourRouter-docs

 ## Contributing

 See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines and [CODE_OF_CONDUCT.md](.github/CODE_OF_CONDUCT.md) for community standards.

 ## License

 This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
