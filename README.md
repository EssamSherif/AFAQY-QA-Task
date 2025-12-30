## Playwright Data-Driven Signup Test (AutomationExercise)

### Deliverables (as requested)
- **Automation source code**: this repository (Playwright + POM + DDT + Allure)
- **Amazon Search Textbox testcases + Business Case**: `docs/` (Excel contains 2 sheets)
- **GO Bus Bug reporting document(s)**: `Go_Bus-Bug-Reports/` (Markdown + `Attachments/`)

### What you get
- **Playwright (TypeScript)** automated E2E test
- **Data Driven Testing** via `test-data/users.json`
- **Random user generation** per run (unique email every time)
- **POM (Page Object Model)** under `src/pages`
- **Allure reporting** via `allure-playwright`

### Install

```bash
npm i
npx playwright install
```

### Run tests

```bash
npm test
```

Headed mode:

```bash
npm run test:headed
```

### Allure report
Run tests (they will produce `allure-results/` automatically), then:

```bash
npm run report:allure
npm run open:allure
```

### Test data
Edit/add base records in:
- `test-data/users.json`

Each record creates a separate test, and each test run generates a **new random user** (unique email), so the signup flow can repeat safely.


