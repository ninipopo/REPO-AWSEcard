const validate = {
   //* ==== 1. 只可輸入數字 ====
  OnlyNumPress (value) {
    return value.replace(/[^\d]+/g, '')
  },
  //* ==== 2. 手機號碼驗證 ====
  checkPhone (value) {
    const Rule = /^09[0-9]{8}$/
    if (Rule.test(value)) {
      return true
    }
    return '請輸入正確的手機格式'
  },
  //* ==== 3. 西元驗證 ====
  checkOTP (code) {
    const idRule = /^\d{8}$/
    if (idRule.test(code)) {
      return true
    }
    return '請輸入8位數字'
  }
}

// export default validate
