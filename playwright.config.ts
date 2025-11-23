import { defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  snapshotPathTemplate: '{testDir}/__screenshots__/{arg}{ext}',
  use: {
    baseURL: 'http://localhost:8080',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
      },
    },
    /* {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    }, */
    /* {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }, */
    /* {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    }, */
    /* {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    }, */
  ],

  webServer: {
    command: 'yarn start',
    url: 'http://localhost:8080',
    reuseExistingServer: !process.env.CI,
  },
});
