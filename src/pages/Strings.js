import commonString from '../utils/String'

const com = {
  export_icon: commonString.download_cloud,
  export_btn: commonString.export,
  form_btn: commonString.submit,
  form_cancel: commonString.cancel,
  table_apply_btn: commonString.apply,
  search_icon: commonString.search,
  search_input_placeholder: commonString.search_by_user_name,
  input_search_icon: commonString.search,
  filter_icon: commonString.filter_alt,
  table_filter_user: `${commonString.filter} ${commonString.user}`,
  filter_have_blc: commonString.have_balance,
  kyc: commonString.kyc_verified,
  filter_role: commonString.role,
  filter_status: commonString.status,
  filter_btn: commonString.filter,
  reset_filter: `${commonString.reset} ${commonString.filter}`,
  save_filter: `${commonString.save} ${commonString.filter}`,
  row_show: commonString.show,
  shorting_order: commonString.order,
  asc_order: commonString.asc_order,
  desc_order: commonString.desc_order,
}

export const roleString = [
  {
    ...com,
    head_title: commonString.role,
    header: commonString.role,
    form_title: `${commonString.create} ${commonString.role}`,
  },
]

export const permissionString = [
  {
    ...com,
    head_title: commonString.permission,
    header: commonString.permission,
    form_title: `${commonString.create} ${commonString.permission}`,
  },
]

export const setupRoleString = [
  {
    ...com,
    head_title: commonString.setup_role_permission,
    header: commonString.setup_role_permission,
    form_title: `${commonString.role} ${commonString.permission}`,
  },
]

export const userString = [
  {
    ...com,
    head_title: commonString.user_info,
    header: commonString.user_info,
    form_title: commonString.user_info,
  },
]

export const employeString = [
  {
    ...com,
    head_title: commonString.employee,
    header: commonString.employee,
    form_title: `${commonString.create} ${commonString.employee}`,
  },
]

export const assetsTypeString = [
  {
    ...com,
    head_title: commonString.assets_type,
    header: commonString.assets_type,
    form_title: `${commonString.create} ${commonString.assets_type}`,
  },
]
export const assetsAppString = [
  {
    ...com,
    head_title: commonString.assets_application,
    header: commonString.assets_application,
    form_title: `${commonString.create} ${commonString.assets_application}`,
  },
]

export const leaveTypeString = [
  {
    ...com,
    head_title: commonString.leave_type,
    header: commonString.leave_type,
    form_title: `${commonString.create} ${commonString.leave_type}`,
  },
]
export const leaveAppString = [
  {
    ...com,
    head_title: commonString.leave_application,
    header: commonString.leave_type,
    form_title: `${commonString.create} ${commonString.leave_application}`,
  },
]

export const holidayListStrig = [
  {
    ...com,
    head_title: commonString.holiday_list,
    header: commonString.holiday_list,
    form_title: `${commonString.create} ${commonString.holiday_list}`,
  },
]
export const holidayTypeString = [
  {
    ...com,
    head_title: commonString.holiday_type,
    header: commonString.holiday_type,
    form_title: `${commonString.create} ${commonString.holiday_type}`,
  },
]

export const companyDocString = [
  {
    ...com,
    head_title: commonString.company_document,
    header: commonString.company_document,
    form_title: `${commonString.create} ${commonString.company_document}`,
  },
]

export const companyPolicyString = [
  {
    ...com,
    head_title: commonString.company_policy,
    header: commonString.company_policy,
    form_title: `${commonString.create} ${commonString.company_policy}`,
  },
]
