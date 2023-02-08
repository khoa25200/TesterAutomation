const { I } = inject()
const homePageLocator = require('./locator')
const deleteBusiness = require('../deletebusiness')
const timeout = require('../common/timeout')
module.exports = {
    create_business(websiteDN, tenDN) {
        I.waitForElement(homePageLocator.home.taoDoanhNghiepButton, timeout.loading_element)
        I.click(homePageLocator.home.taoDoanhNghiepButton)
        I.waitForElement(homePageLocator.home.websiteDoanhNgiepInput, timeout.loading_element)
        I.fillField(homePageLocator.home.websiteDoanhNgiepInput, websiteDN)
        I.fillField(homePageLocator.home.tenDoanhNghiepInput, tenDN)
        I.click(homePageLocator.home.autoBankRadioButton)
        I.click(homePageLocator.home.taoDoanhNghiepConfirmButton)
        I.waitForElement(homePageLocator.menu.tenDoanNghiepText,timeout.loading_element)
        I.see(tenDN, homePageLocator.menu.tenDoanNghiepText);
        
        // I.waitForElement(homePageLocator.menu.thietLapText)
        // I.click(homePageLocator.menu.thietLapText)
        // I.waitForElement(homePageLocator.menu.thietLapText,timeout.loading_element)
        // I.click(homePageLocator.menu.thietLapKhacText)
        // I.waitForElement(homePageLocator.home.xoaDoanhNghiepDropdown, timeout.loading_element)
        // I.click(homePageLocator.home.xoaDoanhNghiepDropdown)
        // I.waitForElement(homePageLocator.home.xoaDoanhNghiepButton, timeout.loading_element)
        // I.click(homePageLocator.home.xoaDoanhNghiepButton)
        // I.waitForElement(homePageLocator.home.xoaDoanhNghiepInput, timeout.loading_element)
        // I.fillField(homePageLocator.home.xoaDoanhNghiepInput, tenDN)
        // I.waitForElement(homePageLocator.home.confirmButton, timeout.loading_element)
        // I.click(homePageLocator.home.confirmButton)
        // I.click(homePageLocator.menu.dangXuatText)
    }
}