const { I } = inject()
const homePageLocator = require('../homepage/locator')
const timeout = require('../common/timeout')

module.exports = {
    deleteBusiness(tenDN) {
        I.waitForElement(homePageLocator.menu.thietLapText)
        I.click(homePageLocator.menu.thietLapText)
        I.waitForElement(homePageLocator.menu.thietLapText,timeout.loading_element)
        I.click(homePageLocator.menu.thietLapKhacText)
        I.waitForElement(homePageLocator.home.xoaDoanhNghiepDropdown, timeout.loading_element)
        I.click(homePageLocator.home.xoaDoanhNghiepDropdown)
        I.waitForElement(homePageLocator.home.xoaDoanhNghiepButton, timeout.loading_element)
        I.click(homePageLocator.home.xoaDoanhNghiepButton)
        I.waitForElement(homePageLocator.home.xoaDoanhNghiepInput, timeout.loading_element)
        I.fillField(homePageLocator.home.xoaDoanhNghiepInput, tenDN)
        I.waitForElement(homePageLocator.home.confirmButton, timeout.loading_element)
        I.click(homePageLocator.home.confirmButton)
        //Verify if this is a first business
        // I.see('Hiện tại tài khoản của bạn chưa có "Doanh nghiệp" nào. Bạn vui lòng bấm vào nút phía dưới để có thể tạo "Doanh nghiệp"!')
        I.click(homePageLocator.menu.dangXuatText)
    },
}