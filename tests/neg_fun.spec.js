const { test, expect } = require("@playwright/test");

const URL = "https://www.swifttranslator.com/";
const INPUT = "textarea";

// ================= Reusable Function =================
async function getSinhalaTranslation(page, singlishText) {
  await page.goto(URL);
  await page.fill(INPUT, singlishText);
  await page.waitForTimeout(20000);

  const fullText = await page.textContent("body");
  const match = fullText.match(/Sinhala\s*([අ-ෆ].+?)(?:🔁|Clear|English)/);
  return match ? match[1].trim() : null;
}

// ================= Result Checker =================
function checkResult(actual, expected, testName, isNegative = false) {
  if (!isNegative && actual === expected) {
    console.log(`✅ ${testName} Passed`);
  } else if (isNegative && actual !== expected) {
    console.log(`✅ ${testName} Failed as Expected`);
  } else {
    console.log(`❌ ${testName} Failed`);
    console.log("Expected:", expected);
    console.log("Actual  :", actual);
  }
}

/* ===================================================
   ✅ POSITIVE FUNCTIONAL TEST CASES (24) 
=================================================== */

test("Pos_Fun_0001", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "mama adha campus yanavaa.");
  const expected = "මම අද campus යනවා.";
  checkResult(actual, expected, "Pos_Fun_0001");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0002", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "assignment eka ivara karalaa mama nidhaagannavaa.");
  const expected = "assignment එක ඉවර කරලා මම නිදාගන්නවා.";
  checkResult(actual, expected, "Pos_Fun_0002");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0003", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "lecture eka patan gannee kiiyatadha?");
  const expected = "lecture එක පටන් ගන්නේ කීයටද?";
  checkResult(actual, expected, "Pos_Fun_0003");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0004", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "mata pdf eka whatsapp karanna");
  const expected = "මට pdf එක whatsapp කරන්න";
  checkResult(actual, expected, "Pos_Fun_0004");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0005", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "sir aave naeththam api canteen ekata yamu.");
  const expected = "sir ආවෙ නැත්තම් අපි canteen එකට යමු.";
  checkResult(actual, expected, "Pos_Fun_0005");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0006", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "iiyee exam eka godak amaaruyi.");
  const expected = "ඊයේ exam එක ගොඩක් අමාරුයි.";
  checkResult(actual, expected, "Pos_Fun_0006");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0007", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "api heta trip eka yamu.");
  const expected = "අපි හෙට trip එක යමු.";
  checkResult(actual, expected, "Pos_Fun_0007");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0008", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "mata eeka karanna baee.");
  const expected = "මට ඒක කරන්න බෑ.";
  checkResult(actual, expected, "Pos_Fun_0008");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0009", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "oyaalaa okkoma library enavadha?");
  const expected = "ඔයාලා ඔක්කොම library එනවද?";
  checkResult(actual, expected, "Pos_Fun_0009");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0010", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "karuNaakaralaa mata deadline eka extend karanna.");
  const expected = "කරුණාකරලා මට deadline එක extend කරන්න.";
  checkResult(actual, expected, "Pos_Fun_0010");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0011", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "kohomadha machan, vaeda ivaradha?");
  const expected = "කොහොමද මචන්, වැඩ ඉවරද?";
  checkResult(actual, expected, "Pos_Fun_0011");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0012", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "mata bus ekata Rs. 150 k oonee.");
  const expected = "මට bus එකට Rs. 150 ක් ඕනේ.";
  checkResult(actual, expected, "Pos_Fun_0012");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0013", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "class eka thiyennee 8.30 AM ta.");
  const expected = "class එක තියෙන්නේ 8.30 AM ට.";
  checkResult(actual, expected, "Pos_Fun_0013");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0014", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "project presentation eka may 20.");
  const expected = "project presentation eka may 20.";
  checkResult(actual, expected, "Pos_Fun_0014");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0015", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "mata JAVA code eka email karanna puluvandha?");
  const expected = "මට JAVA code එක email කරන්න පුලුවන්ද?";
  checkResult(actual, expected, "Pos_Fun_0015");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0016", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "api KFC eken kaeema kamu.");
  const expected = "අපි KFC එකෙන් කෑම කමු.";
  checkResult(actual, expected, "Pos_Fun_0016");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0017", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "anee mandhaa eyaa hinaa velaa  kathaa kalaa.");
  const expected = "අනේ මන්දා එයා හිනා වෙලා  කතා කලා.";
  checkResult(actual, expected, "Pos_Fun_0017");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0018", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "mata OTP eka sms ekak vidhihata aavaa.");
  const expected = "මට OTP එක sms එකක් විදිහට ආවා.";
  checkResult(actual, expected, "Pos_Fun_0018");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0019", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "iiyee raee godak vaehapu nisaa paraval okkoma vathuren vaehilaa thibunaa.");
  const expected = "ඊයේ රෑ ගොඩක් වැහපු නිසා පරවල් ඔක්කොම වතුරෙන් වැහිලා තිබුනා.";
  checkResult(actual, expected, "Pos_Fun_0019");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0020", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "adha havasa 5 ta meeting ekak thiyenavaa. oyaata puluvannam enna. naeththam record eka ahanna. api project eka gaena katha karanavaa.");
  const expected = "අද හවස 5 ට meeting එකක් තියෙනවා. ඔයාට පුලුවන්නම් එන්න. නැත්තම් record එක අහන්න. අපි project එක ගැන කත කරනවා.";
  checkResult(actual, expected, "Pos_Fun_0020");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0021", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "api iita passe party ekak dhamu!");
  const expected = "අපි ඊට පස්සෙ party එකක් දමු!";
  checkResult(actual, expected, "Pos_Fun_0021");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0022", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "oyaa inne canteen ekeadha library ekeadha?");
  const expected = "ඔයා ඉන්නේ canteen එකේද library එකේද?";
  checkResult(actual, expected, "Pos_Fun_0022");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0023", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "samaavenna, mama parakku unaa.");
  const expected = "සමාවෙන්න, මම පරක්කු වුනා.";
  checkResult(actual, expected, "Pos_Fun_0023");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0024", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "oyaage laptop ekee thiyena final project file eka mata ikmanata email karanna puluvandha?");
  const expected = "ඔයාගෙ laptop එකේ තියෙන final project file එක මට ඉක්මනට email කරන්න පුලුවන්ද?";
  checkResult(actual, expected, "Pos_Fun_0024");
  expect(actual).toBe(expected);
});

/* ===================================================
   ❌ NEGATIVE FUNCTIONAL TEST CASES (11)
=================================================== */

// test("Neg_Fun_0001", async ({ page }) => {
//   const actual = await getSinhalaTranslation(page, "mata exam eka hariyata karanna baaa");
//   const expected = "මට exam එක හරියට කරන්න බැහැ";
//   checkResult(actual, expected, "Neg_Fun_0001", true);
//   expect(actual).not.toBe(expected);
// });

// test("Neg_Fun_0002", async ({ page }) => {
//   const actual = await getSinhalaTranslation(page, "mama adha campus yanavaaa");
//   const expected = "මම අද කැම්පස් යනවා.";
//   checkResult(actual, expected, "Neg_Fun_0002", true);
//   expect(actual).not.toBe(expected);
// });

// test("Neg_Fun_0003", async ({ page }) => {
//   const actual = await getSinhalaTranslation(page, "oya mokadda karannne");
//   const expected = "ඔයා මොකද්ද කරන්නේ?";
//   checkResult(actual, expected, "Neg_Fun_0003", true);
//   expect(actual).not.toBe(expected);
// });

// test("Neg_Fun_0004", async ({ page }) => {
//   const actual = await getSinhalaTranslation(page, "mata pdf eka watsapp karanna");
//   const expected = "මට pdf එක whatsapp කරන්න.";
//   checkResult(actual, expected, "Neg_Fun_0004", true);
//   expect(actual).not.toBe(expected);
// });

// test("Neg_Fun_0005", async ({ page }) => {
//   const actual = await getSinhalaTranslation(page, "api adha canteen yamu yamu");
//   const expected = "අපි අද canteen යමු.";
//   checkResult(actual, expected, "Neg_Fun_0005", true);
//   expect(actual).not.toBe(expected);
// });

// test("Neg_Fun_0006", async ({ page }) => {
//   const actual = await getSinhalaTranslation(page, "mama oyata adarei adarei");
//   const expected = "මම ඔයාට ආදරෙයි.";
//   checkResult(actual, expected, "Neg_Fun_0006", true);
//   expect(actual).not.toBe(expected);
// });

// test("Neg_Fun_0007", async ({ page }) => {
//   const actual = await getSinhalaTranslation(page, "oya adha campus enne na");
//   const expected = "ඔයා අද කැම්පස් එන්නේ නෑ.";
//   checkResult(actual, expected, "Neg_Fun_0007", true);
//   expect(actual).not.toBe(expected);
// });

// test("Neg_Fun_0008", async ({ page }) => {
//   const actual = await getSinhalaTranslation(page, "mama oyata phone karan na");
//   const expected = "මම ඔයාට phone කරන්නෙ නෑ.";
//   checkResult(actual, expected, "Neg_Fun_0008", true);
//   expect(actual).not.toBe(expected);
// });

// test("Neg_Fun_0009", async ({ page }) => {
//   const actual = await getSinhalaTranslation(page, "oya hari lassaniiii");
//   const expected = "ඔයා හරි ලස්සනයි.";
//   checkResult(actual, expected, "Neg_Fun_0009", true);
//   expect(actual).not.toBe(expected);
// });

// test("Neg_Fun_0010", async ({ page }) => {
//   const actual = await getSinhalaTranslation(page, "api adha gedara yannaaa");
//   const expected = "අපි අද ගෙදර යනවා.";
//   checkResult(actual, expected, "Neg_Fun_0010", true);
//   expect(actual).not.toBe(expected);
// });

// test("Neg_Fun_0011", async ({ page }) => {
//   const actual = await getSinhalaTranslation(page, "mata exam eka hariyata karanna baa");
//   const expected = "මට exam එක හරියට කරන්න බැහැ";
//   checkResult(actual, expected, "Neg_Fun_0011", true);
//   expect(actual).not.toBe(expected);
// });
