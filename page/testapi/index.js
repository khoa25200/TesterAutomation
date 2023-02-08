const { I } = inject()
const apiLocator = require('./locator')
const timeout = require('../common/timeout')

module.exports = {
    testApi(api, apiEdit) {
        // create api
        I.click(apiLocator.thietLapText)
        I.waitForElement(apiLocator.apiKeysText, timeout.loading_element)
        I.click(apiLocator.apiKeysText)
        I.waitForElement(apiLocator.taoAPIKeyButton, timeout.loading_element)
        I.click(apiLocator.taoAPIKeyButton)
        I.waitForElement(apiLocator.apiField, timeout.loading_element)
        I.fillField(apiLocator.apiField, api)
        I.waitForElement(apiLocator.taoApiVaXemApiButton, timeout.loading_element)
        I.click(apiLocator.taoApiVaXemApiButton)
        I.waitForElement(apiLocator.xongButton, timeout.loading_element)
        I.click(apiLocator.xongButton)
        I.waitForElement(apiLocator.apiText, timeout.loading_element)
        I.see(api, apiLocator.apiText)

        // edit api
        I.waitForElement(apiLocator.editButton, timeout.loading_element)
        I.click(apiLocator.editButton)
        I.waitForElement(apiLocator.apiEditField, timeout.loading_element)
        I.fillField(apiLocator.apiEditField, apiEdit)
        I.waitForElement(apiLocator.luuVaThayDoiButton, timeout.loading_element)
        I.click(apiLocator.luuVaThayDoiButton)

        // delete api
        I.waitForElement(apiLocator.deleteButton, timeout.loading_element)
        I.click(apiLocator.deleteButton)
        I.waitForElement(apiLocator.dongYButton, timeout.loading_element)
        I.click(apiLocator.dongYButton)
        I.waitForElement(apiLocator.batDauKhoiTaoApiKeyText, timeout.loading_element)
        I.see('Bắt đầu khởi tạo API Key', apiLocator.batDauKhoiTaoApiKeyText)
    },
}