import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      windowSize: '1500x900',
    }
  },
  include: {
    I: './steps_file'
  },
  mocha:{},
  bootstrap:null,
  hooks:[],
  name: 'Automation',
  fullPromiseBased: false,
  gherkin: {
    features: './features/*.feature',
    steps: './step_definitions/*.js'
  },
  plugins:{
    screenshotOnFail:{
      enable:true
    },
    pauseOnFail:{},
    retryFailedSteps:{
      enable:true
    },
    tryTo:{
      enable:true
    },
    autoDelay: {
      enabled: true
    }
  },
}