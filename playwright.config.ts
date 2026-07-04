import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.BASE_URL || 'https://demoqa.com';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? parseInt(process.env.RETRIES || '2', 10) : 0,
  workers: process.env.CI ? parseInt(process.env.WORKERS || '1', 10) : undefined,
  outputDir: './test-results/runs',
  preserveOutput: 'failures-only',

  reporter: process.env.CI
    ? [['blob'], ['list']]
    : [
        ['html',  { outputFolder: 'test-results/html-report', open: 'never' }],
        ['json',  { outputFile: 'test-results/results.json' }],
        ['junit', { outputFile: 'test-results/results.xml' }],
        ['list'],
      ],

  use: {
    baseURL: BASE_URL,
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 8000,
    navigationTimeout: 15000,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: { args: ['--no-sandbox'] },
      },
    },
  ],
});
