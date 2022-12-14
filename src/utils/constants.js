const regex_validate_mobile_number =
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

const regex_validate_aadhaar_card_number =
  /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/

const regex_validate_pan_card_number = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/

const regex_validate_date_DD_MM_YYYY =
  /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/

const google_file_viewer_link = `https://docs.google.com/gview?url=`

export {
  regex_validate_mobile_number,
  regex_validate_aadhaar_card_number,
  regex_validate_pan_card_number,
  regex_validate_date_DD_MM_YYYY,
  google_file_viewer_link,
}
