exports.config = {
  runner: "local",

  specs: ["tests/specs/negative_login.spec.js"],

  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      browserName: "chrome",
      acceptInsecureCerts: true,
    },
  ],

  logLevel: "error",

  bail: 0,

  baseUrl: "https://automationexercise.com",

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "mocha",

  reporters: [
    [
      "spec",
      {
        showPreface: false,
        realtimeReporting: true,
        addConsoleLogs: true,
        onlyFailures: true,
        symbols: {
          passed: "[PASS]",
          failed: "[FAIL]",
        },
      },
    ],
    [
      "html-nice",
      {
        outputDir: "./reports/html",
        filename: "report.html",
        reportTitle: "Login Test Automation Report",
        linkScreenshots: true,
        collapseTests: false,
        showInBrowser: false,
        useOnAfterCommandForScreenshot: false,
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  afterTest: async function (test, context, { error, passed }) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },
};
