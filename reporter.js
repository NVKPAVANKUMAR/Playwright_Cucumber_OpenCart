const reporter = require('cucumber-html-reporter')
var os = require('os');
const options = {
  theme: 'bootstrap',
  jsonFile: 'test-results/cucumber_report.json',
  output: 'test-results/cucumber_report.html',
  reportSuiteAsScenario: true,
  scenarioTimestamp: true,
  reportSuiteAsScenarios: true,
  screenshotsDirectory: "screenshots",
  storeScreenshots: true,
  launchReport: true,
  metadata: {
    'App Version': '2.0.0',
    'Test Environment': 'STAGING',
    Browser: "Chrome",
    Platform: `${os.type()} ${os.release()} ${os.platform()}`,
  },
}

reporter.generate(options)
