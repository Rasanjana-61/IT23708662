# Playwright Automation - Singlish to Sinhala Translator Testing

## 📋 Project Overview

This project contains automated end-to-end tests for the **Swift Translator** web application (https://www.swifttranslator.com/), which translates Singlish (colloquial Sri Lankan English) to Sinhala script. The test suite is built using **Playwright** and validates both functional and UI aspects of the translator.

**Student ID:** IT23708662  
**Repository:** [Rasanjana-61/IT23708662](https://github.com/Rasanjana-61/IT23708662)

---

## 🎯 Test Coverage

The test suite includes **35 comprehensive test cases** organized into three categories:

### 1. **Positive Functional Tests** (`pos_fun.spec.js`) - 24 Tests
Tests that validate the correct translation behavior for various Singlish inputs:

- **Basic Sentences:** Simple daily sentences, compound sentences, interrogative, imperative commands
- **Tense Variations:** Past, present, and future tense sentences
- **Complex Structures:** Negations, plural pronouns, polite requests, conjunctions
- **Mixed Content:** English technical terms, brand names, abbreviations (OTP, SMS)
- **Special Formats:** Currency (Rs.), time (8.30 AM), dates (May 20)
- **Informal Language:** Greetings, apologies, informal expressions
- **Long-form Content:** Paragraphs with mixed Singlish and English

### 2. **Negative Functional Tests** (`neg_fun.spec.js`) - 10 Tests
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

### 3. **Positive UI Tests** (`pos_ui.spec.js`) - 1 Test
Tests that validate user interface behavior:

- Real-time translation updates as the user types

---

## 🛠️ Technology Stack

- **Testing Framework:** [Playwright](https://playwright.dev/) v1.58.0
- **Language:** JavaScript (Node.js)
- **Browsers Tested:** Chromium, Firefox, WebKit
- **Node Types:** @types/node v25.1.0

---

## 📁 Project Structure

```
IT23708662/
├── tests/
│   ├── pos_fun.spec.js       # Positive functional test cases (24 tests)
│   ├── neg_fun.spec.js       # Negative functional test cases (10 tests)
│   └── pos_ui.spec.js        # Positive UI test cases (1 test)
├── playwright.config.js      # Playwright configuration
├── package.json              # Project dependencies
├── package-lock.json         # Dependency lock file
├── .gitignore                # Git ignore rules
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
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test tests/pos_fun.spec.js
npx playwright test tests/neg_fun.spec.js
npx playwright test tests/pos_ui.spec.js
```

### Run Tests in Headed Mode (See Browser)
```bash
npx playwright test --headed
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
```

---

## 📊 Viewing Test Reports

After running tests, view the HTML report:

```bash
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
Expected: Sinhala text output detected
```

### Example 2: Mixed English Technical Terms (Pos_Fun_0015)
```javascript
Input: "mata java code eka email karanna puluvandha?"
Expected: Sinhala text output with preserved English terms
```

### Example 3: Misspelled Word (Neg_Fun_0001)
```javascript
Input: "mama adha cmpus yanavaa" (misspelled "campus")
Expected: Incorrect or no translation for misspelled word
```

### Example 4: Real-time UI Update (Pos_UI_0001)
```javascript
Action: Type "mama gedhara yanavaa" with 150ms delay between characters
Expected: Sinhala output appears in real-time while typing
```

---

## ⚙️ Configuration

The `playwright.config.js` file contains:

- **Test Directory:** `./tests`
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

### `hasSinhalaText(page)`
Detects if Sinhala Unicode characters (අ-ෆ) are present on the page.

```javascript
async function hasSinhalaText(page) {
  const text = await page.textContent('body');
  return /[අ-ෆ]/.test(text);
}
```

---

## 📝 Test Naming Convention

Tests follow a structured naming pattern:

- **Pos_Fun_XXXX:** Positive Functional Test
- **Neg_Fun_XXXX:** Negative Functional Test
- **Pos_UI_XXXX:** Positive UI Test

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
- Increase `waitForTimeout` values in test files
- Check if the website is responding slowly

### Sinhala Text Not Detected
- Verify the website's translation functionality is working
- Check if the Sinhala Unicode regex pattern needs updating

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

- All tests use a 2-3 second wait time after input to allow translation processing
- Tests validate Sinhala output presence using Unicode character detection
- The test suite covers common Singlish usage patterns in Sri Lankan context
- Negative tests ensure graceful handling of invalid inputs

---

## 🔄 Continuous Integration

This project is configured for CI/CD with:
- Automatic retries on failure (2 retries)
- Single worker on CI to avoid race conditions
- HTML reports generated after each run

---

## 📈 Future Enhancements

- [ ] Add performance testing for translation speed
- [ ] Implement visual regression testing
- [ ] Add API testing if backend endpoints are available
- [ ] Expand test coverage for mobile viewports
- [ ] Add accessibility (a11y) testing
- [ ] Implement test data management
- [ ] Add screenshot comparison tests

---

**Last Updated:** January 2026
