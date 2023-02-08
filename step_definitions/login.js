const email = 'testtesstkhoa@mailinator.com';
const password = 'khoathanh1023A';
const loginFunction = require('../page/login/index.js')
const loginLocator = require('../page/login/locator')

Given('I login to Casso page', () => {
    loginFunction.login(loginLocator.url, email, password)
})
