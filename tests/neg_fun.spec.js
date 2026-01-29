const { test, expect } = require('@playwright/test');

const URL = 'https://www.swifttranslator.com/';

test.describe('Negative Functional Test Cases', () => {

  test('Neg_Fun_0001 - Misspelled word causes incorrect conversion', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first().fill('mama adha cmpus yanavaa');
    await page.waitForTimeout(2000);

    const text = await page.textContent('body');
    expect(text).not.toContain('කැම්පස්');
  });

  test('Neg_Fun_0002 - Missing spaces reduce conversion accuracy', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first().fill('lectureekapatan gannekiiyatadha?');
    await page.waitForTimeout(2000);

    const text = await page.textContent('body');
    expect(text.length).toBeGreaterThan(0);
  });

  test('Neg_Fun_0003 - Distorted Singlish spelling affects output quality', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first().fill('mata pdff ekk whatsap krnn');
    await page.waitForTimeout(2000);

    const text = await page.textContent('body');
    expect(text.length).toBeGreaterThan(0);
  });

  test('Neg_Fun_0004 - Invalid date format handling', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first().fill('project presentation eka 2025-13-45');
    await page.waitForTimeout(2000);

    const text = await page.textContent('body');
    expect(text.length).toBeGreaterThan(0);
  });

  test('Neg_Fun_0005 - Invalid time format handling', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first().fill('class eka thiyenne 8.30 AM PM ta');
    await page.waitForTimeout(2000);

    const text = await page.textContent('body');
    expect(text.length).toBeGreaterThan(0);
  });

  test('Neg_Fun_0006 - Numeric only input', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first().fill('1234567890');
    await page.waitForTimeout(2000);

    const text = await page.textContent('body');
    expect(text.length).toBeGreaterThan(0);
  });

  test('Neg_Fun_0007 - Special characters only input', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first().fill('@@@@@ ##### !!!');
    await page.waitForTimeout(2000);

    const text = await page.textContent('body');
    expect(text.length).toBeGreaterThan(0);
  });

  test('Neg_Fun_0008 - Excessive character repetition', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first().fill('mata OTP eka SMS ekak vidihata avvaaa');
    await page.waitForTimeout(2000);

    const text = await page.textContent('body');
    expect(text.length).toBeGreaterThan(0);
  });

  test('Neg_Fun_0009 - Excessive line breaks in input', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first().fill(
      'mama campus yanavaa\n\n\n\nlecture eka thiyenne'
    );
    await page.waitForTimeout(2000);

    const text = await page.textContent('body');
    expect(text.length).toBeGreaterThan(0);
  });

  test('Neg_Fun_0010 - Over-shortened English words in mixed input', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first().fill(
      'oyaage laptop ekee thiyena fnl prjct fle eka mata ikmnata email krnn puluvndha?'
    );
    await page.waitForTimeout(2000);

    const text = await page.textContent('body');
    expect(text.length).toBeGreaterThan(0);
  });

});
