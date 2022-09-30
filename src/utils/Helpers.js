import {
  regex_validate_mobile_number,
  regex_validate_aadhaar_card_number,
  regex_validate_pan_card_number,
} from './constants'

export const getToken = () => {
  return localStorage.getItem('token')
}

export const setToken = (val) => {
  return localStorage.setItem('token', val)
}

export const removeToken = () => {
  return localStorage.removeItem('token')
}

export const validateByRegex = (type, number) => {
  let checkValidation
  switch (type) {
    case 'mobile-number':
      checkValidation = regex_validate_mobile_number.test(number)
      break
    case 'aadhaar-card-number':
      checkValidation = regex_validate_aadhaar_card_number.test(number)
      break

    case 'pan-card-number':
      checkValidation = regex_validate_pan_card_number.test(number)
      break

    default:
      checkValidation = false
      break
  }
  return checkValidation
}
