# 🎭 Playwright Automation Framework

This project contains end-to-end automation tests using **Playwright** with **TypeScript** and **Page Object Model (POM)** design.  
The tests are written on [DemoQA](https://demoqa.com) sample application for demonstration purposes.

---

## 🚀 Features
- ✅ Page Object Model (POM) structure
- ✅ Test execution in **Chromium, Firefox, WebKit**
- ✅ Headed / Headless execution
- ✅ Assertions for:
  - Labels & placeholders
  - Textbox input
  - Checkbox selection
  - Radio button selection & disabled verification
- ✅ Parallel execution
- ✅ HTML Test Reports

---

## 📦 Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/automation-by-anshika/playwright-demoqa-tests.git
   cd D://playwright-framework

2. **Install dependencies**
    npm install
    
3. **Install Playwright browsers**
    npm install
▶️ **Running Tests**
Run all tests - npx playwright test
Run in headed mode (UI visible) - npx playwright test --headed
Run a specific test file -npx playwright test tests/element.spec.ts
Run in debug mode - npx playwright test --debug
🌐 **Run Tests on Different Browsers**
projects: [
  { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  { name: 'webkit', use: { ...devices['Desktop Safari'] } },
],
Run on all browsers - npx playwright test

**Run on a specific browser**
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

📊 **Reports**
Generate an HTML report: npx playwright test --reporter=html
Open the last HTML report: npx playwright show-report

**Project Structure**
📦 playwright-automation
 ┣ 📂 pages
 ┃ ┗ 📜 ElementPage.ts        # Page Object file
 ┣ 📂 tests
 ┃ ┗ 📜 element.spec.ts       # Test cases
 ┣ 📜 playwright.config.ts    # Config for browsers & reporters
 ┣ 📜 package.json            # Project dependencies
 ┣ 📜 README.md               # Documentation


👩‍💻 **Author**
**Anshika Yadav**
**Automation Tester | SDET | Test Automation Enthusiast**

---

Would you like me to also prepare a **`playwright.config.ts`** (multi-browser + reporter setup) so your README matches an actual runnable project?

