import { defineConfig, devices } from '@playwright/test';

const PORT = process.env.TEST_PORT || '59241';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  // WebServer désactivé pour utiliser le serveur existant
  // webServer: {
  //   command: `npm run dev -- -p ${PORT}`,
  //   url: `http://localhost:${PORT}`,
  //   reuseExistingServer: true,
  //   timeout: 120000,
  // },
});

