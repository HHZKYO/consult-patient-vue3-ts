// 表单校验

// 手机号校验规则
const mobileRules = [
  { required: true, message: '请输入手机号' },
  { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确' }
]

// 手机密码校验规则
const passwordRules = [
  { required: true, message: '请输入密码' },
  { pattern: /^\w{8,24}$/, message: '密码需8-24个字符' }
]

// 手机验证码校验规则
const codeRules = [
  { required: true, message: '请输入短信验证码' },
  { pattern: /^\d{6}$/, message: '请输入正确短信验证码' }
]

export { mobileRules, passwordRules, codeRules }
