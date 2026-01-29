const { test, expect } = require('@playwright/test');

const URL = 'https://www.swifttranslator.com/';

// Helper: check Sinhala characters exist on page
async function hasSinhalaText(page) {
  const text = await page.textContent('body');
  return /[අ-ෆ]/.test(text);
}

test.describe('Positive Functional Test Cases (Pos_Fun)', () => {

  test('Pos_Fun_0001 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first().fill('mama adha campus yanavaa');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0002 - Compound sentence', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('assignment eka iwara karala mama nidagannava');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0003 - Interrogative sentence', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('lecture eka patan ganne kiiyatadha?');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0004 - Imperative command', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('mata pdf eka whatsapp karanna');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0005 - Compound with conjunction', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('sir aave neththam api canteen ekata yamu');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0006 - Past tense sentence', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('iiyee exam eka godak amaaruyi');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0007 - Future tense sentence', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('api heta trip eka yamu');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0008 - Negation sentence', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('mata eeka karanna baee');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0009 - Plural pronoun question', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('oyaalaa okkoma library enavadha?');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0010 - Polite request', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('karuNaakaralaa mata deadline eka extend karanna');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0011 - Informal greeting question', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('kohomadha machan, vaeda iwaradha?');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0012 - Currency usage', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('mata bus ekata Rs. 150 k oone');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0013 - Time format sentence', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('class eka thiyenne 8.30 AM ta');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0014 - Date mention', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('project presentation eka may 20');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0015 - Mixed English technical term', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('mata java code eka email karanna puluvandha?');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0016 - Brand/place name', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('api kfc eken kaema kamu');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0017 - Repeated word expression', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('anee manda eya heena wela heena wela katha kala');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0018 - Abbreviation usage', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('mata OTP eka SMS ekak vidihata aava');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0019 - Complex sentence (cause)', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('iiyee rae godak vaehapu nisaa paraval okkoma vathuren vaehilaa thibunaa');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0020 - Long mixed content paragraph', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first().fill(
      'ada havasa 5 ta meeting ekak thiyenava. oyaata puluwannam enna. neththam record eka ahanna. api project eka gena katha karanava'
    );
    await page.waitForTimeout(3000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0021 - Informal future expression', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('api iita passe party ekak dhumu');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0022 - Choice based question', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('oyaa inne canteen ekedha library ekedha?');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0023 - Apology sentence', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('samaavenna, mama parakku unaa');
    await page.waitForTimeout(2000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

  test('Pos_Fun_0024 - Long polite request with mixed English', async ({ page }) => {
    await page.goto(URL);
    await page.locator('textarea').first()
      .fill('oyaage laptop ekee thiyena final project file eka mata ikmanata email karanna puluvandha?');
    await page.waitForTimeout(3000);
    expect(await hasSinhalaText(page)).toBeTruthy();
  });

});
