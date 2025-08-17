import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 0,
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: null, // ✅ don't override
    launchOptions: {
      args: ['--window-size=2560,2560'], // ✅ force window size
    },
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  {
    name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
  },
  {
     name: 'webkit',
      use: { ...devices['Desktop Safari'] },
  },
  ],
  
});
