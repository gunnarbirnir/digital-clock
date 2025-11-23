import { test, expect } from '@playwright/test';
import { getTestUrl } from './utils';

test('default', async ({ page }) => {
  await page.goto(getTestUrl({ time: '12:34' }));
  await expect(page).toHaveScreenshot('default.png');
});

test('bigger', async ({ page }) => {
  await page.goto(getTestUrl({ time: '12:34', height: 300 }));
  await expect(page).toHaveScreenshot('bigger.png');
});

test('smaller', async ({ page }) => {
  await page.goto(getTestUrl({ time: '12:34', height: 100 }));
  await expect(page).toHaveScreenshot('smaller.png');
});

test('bold numbers', async ({ page }) => {
  await page.goto(getTestUrl({ time: '12:34', numberThickness: 30 }));
  await expect(page).toHaveScreenshot('bold-numbers.png');
});

test('slim numbers', async ({ page }) => {
  await page.goto(getTestUrl({ time: '12:34', numberThickness: 10 }));
  await expect(page).toHaveScreenshot('slim-numbers.png');
});

test('bigger inset', async ({ page }) => {
  await page.goto(getTestUrl({ time: '12:34', numberInset: 2 }));
  await expect(page).toHaveScreenshot('bigger-inset.png');
});

test('no inset', async ({ page }) => {
  await page.goto(getTestUrl({ time: '12:34', numberInset: 0 }));
  await expect(page).toHaveScreenshot('no-inset.png');
});

test('no glow', async ({ page }) => {
  await page.goto(getTestUrl({ time: '12:34', hideGlow: true }));
  await expect(page).toHaveScreenshot('no-glow.png');
});

test('no large glow', async ({ page }) => {
  await page.goto(getTestUrl({ time: '12:34', hideLargeGlow: true }));
  await expect(page).toHaveScreenshot('no-large-glow.png');
});

test('custom active color', async ({ page }) => {
  await page.goto(
    getTestUrl({
      time: '19:58',
      activeColor: '00ff00',
    })
  );
  await expect(page).toHaveScreenshot('custom-active-color.png');
});

test('custom inactive color', async ({ page }) => {
  await page.goto(
    getTestUrl({
      time: '16:27',
      inactiveColor: 'AA336A',
    })
  );
  await expect(page).toHaveScreenshot('custom-inactive-color.png');
});
