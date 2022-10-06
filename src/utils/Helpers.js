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

export const getFormData = (object) => {
  const formData = new FormData()
  Object.keys(object).forEach((key) => formData.append(key, object[key]))
  return formData
}

export const logFormData = (formData) => {
  const formDataObj = Object.fromEntries(formData.entries())
}

export const checkIsEmptyObjectKey = (objData, type) => {
  let isEmpty

  switch (type) {
    case 'every':
      isEmpty = !Object.values(objData).every(
        (x) => x !== null && x !== '' && x !== undefined
      )
      break

    case 'some':
      isEmpty = !Object.values(objData).some(
        (x) => x !== null && x !== '' && x !== undefined
      )
      break

    default:
      break
  }
  return isEmpty
}
