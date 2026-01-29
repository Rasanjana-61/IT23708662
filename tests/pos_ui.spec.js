const { test, expect } = require('@playwright/test');

const URL = 'https://www.swifttranslator.com/';

// Helper: detect Sinhala characters on page
async function hasSinhalaText(page) {
  const text = await page.textContent('body');
  return /[අ-ෆ]/.test(text);
}

test.describe('Positive UI Test Cases', () => {

  test('Pos_UI_0001 - Sinhala output updates automatically in real time', async ({ page }) => {
    await page.goto(URL);

    const input = page.locator('textarea').first();

    // Type slowly to simulate real-time typing
    await input.type('mama gedhara yanavaa', { delay: 150 });
    await page.waitForTimeout(2000);

    // Validate Sinhala output appears while typing
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

});
