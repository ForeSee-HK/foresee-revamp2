# Project README

## Quick Access Links

* **Main Branch (Production):** [https://foresee-hk.com/](https://foresee-hk.com/)
* **Dev Branch:** [https://dev.foresee-revamp2.pages.dev/](https://dev.foresee-revamp2.pages.dev/)

## Feature/Fix Development Workflow

1.  **Branching:** Create a new branch from the `dev` branch. Use the following naming convention:
    * `feature/your-feature-name`
    * `fix/your-bug-fix`

2.  **Development:** Implement your feature or bug fix on your branch.

3.  **Pull Request:** Submit a Pull Request (PR) to the `dev` branch.

4.  **Review and Approval:** Ensure your PR is reviewed and approved by the team.

5.  **Deployment:** Once the PR is approved, it will be automatically deployed to the development environment via Cloudflare.

## Getting Started (Development Setup)

1.  **Prerequisites:**
    * **Node.js:** Ensure you have Node.js installed (version 18 or later).  You can download it from [nodejs.org](https://nodejs.org/).
    * **Vite:** This project uses Vite as the build tool.

2.  **Installation:** Install project dependencies:

    ```bash
    npm i
    ```

3.  **Starting the Development Server:**

    ```bash
    npm run dev
    ```
    This will start the Vite development server.  The console will display the address (usually `http://localhost:5173`) where you can access the application in your browser.

4.  **Important Tips for Vite and React Development:**
    * **Vite Configuration:** Vite's configuration is handled by `vite.config.js` or `vite.config.ts`.  You can customize build options, add plugins, and configure the development server here.  See the [Vite documentation](https://vitejs.dev/) for details.
    * **React Development:**
        * **Component Structure:** Organize your React components in a clear and maintainable structure (e.g., by feature or by type).
        * **Hot Module Replacement (HMR):** Vite provides very fast HMR.  When you modify a component, the browser will update almost instantly without a full page reload.
        * **Debugging:** Use your browser's developer tools (usually by pressing F12) to inspect the React component tree, debug JavaScript, and check network requests.
        * **React DevTools:** Consider installing the React DevTools browser extension to enhance your debugging experience.
    * **Common Issues:**
        * **Dependency Issues:** If you encounter errors related to missing dependencies, try deleting `node_modules` and `package-lock.json` (or `yarn.lock`, or `pnpm-lock.yaml`) and then running `npm install` again.
        * **Port Conflicts:** If the development server fails to start because the port is in use, you can change the port in `vite.config.js` or by using a command-line flag (`npm run dev -- --port 3000`).
