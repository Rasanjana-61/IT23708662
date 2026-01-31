# Playwright Automation - Singlish to Sinhala Translator Testing

## 📋 Project Overview

This project contains automated end-to-end tests for the **Swift Translator** web application (https://www.swifttranslator.com/), which translates Singlish (colloquial Sri Lankan English) to Sinhala script. The test suite is built using **Playwright** and validates both functional and UI aspects of the translator.

**Student ID:** IT23708662  
**Repository:** [Rasanjana-61/IT23708662](https://github.com/Rasanjana-61/IT23708662)

---

## 🎯 Test Coverage

The test suite includes **35 comprehensive test cases** organized into three categories within a single test file:

### 1. **Positive Functional Tests** (24 Tests)
Tests that validate the correct translation behavior for various Singlish inputs:

- **Basic Sentences:** Simple daily sentences, compound sentences, interrogative, imperative commands
- **Tense Variations:** Past, present, and future tense sentences
- **Complex Structures:** Negations, plural pronouns, polite requests, conjunctions
- **Mixed Content:** English technical terms, brand names, abbreviations (OTP, SMS)
- **Special Formats:** Currency (Rs.), time (8.30 AM), dates (May 20)
- **Informal Language:** Greetings, apologies, informal expressions
- **Long-form Content:** Paragraphs with mixed Singlish and English

**Test Cases:** Pos_Fun_0001 through Pos_Fun_0024

### 2. **Negative Functional Tests** (10 Tests)
Tests that validate system behavior with invalid or edge-case inputs:

- Misspelled words
- Missing spaces between words
- Distorted Singlish spelling
- Invalid date/time formats
- Numeric-only input
- Special characters only
- Excessive character repetition
- Excessive line breaks
- Over-shortened English words

**Test Cases:** Neg_Fun_0001 through Neg_Fun_0010

### 3. **Positive UI Tests** (1 Test)
Tests that validate user interface behavior:

- Real-time translation updates as the user types

**Test Cases:** Pos_UI_0001

---

## 🛠️ Technology Stack

- **Testing Framework:** [Playwright](https://playwright.dev/) v1.58.1
- **Language:** JavaScript (Node.js)
- **Browsers Tested:** Chromium, Firefox, WebKit
- **Node Types:** @types/node v25.1.0

---

## 📁 Project Structure

```
IT23708662/
├── test/
│   └── testcases.spec.js     # All test cases (35 tests)
├── playwright.config.js      # Playwright configuration
├── package.json              # Project dependencies
├── package-lock.json         # Dependency lock file
├── .gitignore                # Git ignore rules
├── .github/                  # GitHub workflows (if any)
├── playwright-report/        # HTML test reports (generated)
├── test-results/             # Test execution results (generated)
└── README.md                 # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rasanjana-61/IT23708662.git
   cd IT23708662
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

---

## ▶️ Running Tests

### Run All Tests
```bash
npm test
# or
npx playwright test
```

### Run Tests in Headed Mode (See Browser)
```bash
npm run test:headed
# or
npx playwright test --headed
```

### Run Tests with UI Mode
```bash
npm run test:ui
# or
npx playwright test --ui
```

### Run Tests in a Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### Run a Specific Test Case
```bash
npx playwright test -g "Pos_Fun_0001"
npx playwright test -g "Neg_Fun_0005"
npx playwright test -g "Pos_UI_0001"
```

### Run Only Positive Functional Tests
```bash
npx playwright test -g "Pos_Fun"
```

### Run Only Negative Functional Tests
```bash
npx playwright test -g "Neg_Fun"
```

---

## 📊 Viewing Test Reports

After running tests, view the HTML report:

```bash
npm run test:report
# or
npx playwright show-report
```

This will open an interactive HTML report in your browser showing:
- Test execution results
- Screenshots and videos of failures
- Detailed error traces
- Performance metrics

---

## 🧪 Test Case Examples

### Example 1: Simple Daily Sentence (Pos_Fun_0001)
```javascript
Input: "mama adha campus yanavaa"
Expected: "මම අද campus යනවා."
```

### Example 2: Mixed English Technical Terms (Pos_Fun_0015)
```javascript
Input: "mata java code eka email karanna puluvandha?"
Expected: "මට java code එක email කරන්න පුළුවන්ද?"
```

### Example 3: Misspelled Word (Neg_Fun_0001)
```javascript
Input: "mama adha cmpus yanavaa" (misspelled "campus")
Expected: Should NOT match "මම අද කැම්පස් යනවා."
```

### Example 4: Real-time UI Update (Pos_UI_0001)
```javascript
Action: Type "mama adha campus yanavaa"
Expected: "මම අද campus යනවා."
```

---

## ⚙️ Configuration

The `playwright.config.js` file contains:

- **Test Directory:** `./test`
- **Parallel Execution:** Enabled
- **Retries:** 2 retries on CI, 0 locally
- **Reporter:** HTML report
- **Trace:** Captured on first retry
- **Browsers:** Chromium, Firefox, WebKit

### Customizing Configuration

Edit `playwright.config.js` to:
- Change timeout values
- Add more browsers
- Configure screenshots/videos
- Set base URL
- Adjust parallelization

---

## 🔍 Helper Functions

The test file includes two reusable helper functions:

### `getSinhalaTranslation(page, singlishText)`
Navigates to the translator, inputs Singlish text, and returns the Sinhala translation.

```javascript
async function getSinhalaTranslation(page, singlishText) {
  await page.goto(URL);
  await page.fill(INPUT, singlishText);
  await page.waitForTimeout(3000);
  const sinhalaText = await page.inputValue(INPUT);
  return sinhalaText;
}
```

### `checkResult(actual, expected, testName, shouldFail = false)`
Logs test results and validates expectations.

```javascript
function checkResult(actual, expected, testName, shouldFail = false) {
  if (shouldFail) {
    console.log(`❌ ${testName}: Expected to FAIL`);
  } else {
    console.log(`✅ ${testName}: ${actual === expected ? "PASS" : "FAIL"}`);
  }
}
```

---

## 📝 Test Naming Convention

Tests follow a structured naming pattern:

- **Pos_Fun_XXXX:** Positive Functional Test (24 tests)
- **Neg_Fun_XXXX:** Negative Functional Test (10 tests)
- **Pos_UI_XXXX:** Positive UI Test (1 test)

Where `XXXX` is a 4-digit sequential number (e.g., 0001, 0002).

---

## 🐛 Troubleshooting

### Tests Failing Due to Network Issues
- Ensure stable internet connection
- The target website (swifttranslator.com) must be accessible
- Increase timeout values in test files if needed

### Browser Installation Issues
```bash
# Reinstall Playwright browsers
npx playwright install --force
```

### Tests Timing Out
- The tests use a 3-second wait time after input
- Check if the website is responding slowly
- Adjust `waitForTimeout` values if needed

### Sinhala Text Not Detected
- Verify the website's translation functionality is working
- Check if the translator is returning expected results
- Ensure proper Unicode support in your terminal/console

---

## 📄 License

ISC License

---

## 👤 Author

**Pramod Rasanjana**  
Student ID: IT23708662

---

## 🔗 Links

- **GitHub Repository:** [https://github.com/Rasanjana-61/IT23708662](https://github.com/Rasanjana-61/IT23708662)
- **Target Application:** [https://www.swifttranslator.com/](https://www.swifttranslator.com/)
- **Playwright Documentation:** [https://playwright.dev/](https://playwright.dev/)

---

## 📌 Notes

- All tests use a 3-second wait time after input to allow translation processing
- Tests validate exact Sinhala output matching
- The test suite covers common Singlish usage patterns in Sri Lankan context
- Negative tests are designed to fail (expected behavior) to validate error handling
- All 35 test cases are consolidated in a single file for easier maintenance

---

## 🔄 Continuous Integration

This project is configured for CI/CD with:
- Automatic retries on failure (2 retries)
- Single worker on CI to avoid race conditions
- HTML reports generated after each run
- GitHub Actions workflow support (if configured)

---

## 📈 Future Enhancements

- [ ] Add performance testing for translation speed
- [ ] Implement visual regression testing
- [ ] Add API testing if backend endpoints are available
- [ ] Expand test coverage for mobile viewports
- [ ] Add accessibility (a11y) testing
- [ ] Implement test data management with external JSON files
- [ ] Add screenshot comparison tests
- [ ] Create separate test suites for smoke, regression, and full tests

---

**Last Updated:** January 2026
