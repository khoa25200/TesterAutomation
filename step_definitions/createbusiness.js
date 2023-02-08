const tenDoanhNghiep = 'K19406C_Nhom5'
const websiteDN = 'https://eptteam.vn'
const createFunction = require('../page/homepage/index')

Given('I create a business', () => {
    createFunction.create_business(websiteDN, tenDoanhNghiep)
})
