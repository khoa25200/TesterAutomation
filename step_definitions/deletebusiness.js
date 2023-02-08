const deleteBusiness = require('../page/deleteBusiness/index.js')
const tenDoanhNghiep = 'K19406C_Nhom5'

Given('I delete business', () => {
    deleteBusiness.deleteBusiness(tenDoanhNghiep)
})  