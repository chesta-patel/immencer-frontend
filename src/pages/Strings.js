import commanString from '../utils/String'

const com = {
  export_icon: commanString.download_cloud,
  export_btn: commanString.export,
  form_btn: commanString.submit,
  form_cancel: commanString.cancle,
  table_apply_btn: commanString.apply,
  search_icon: commanString.search,
  search_input_placeholder: commanString.search_by_user_name,
  input_search_icon: commanString.search,
  filter_icon: commanString.filter_alt,
  table_filter_user: `${commanString.filter} ${commanString.user}`,
  filter_have_blc: commanString.have_balance,
  kyc: commanString.kyc_verified,
  filter_role: commanString.role,
  filter_status: commanString.status,
  filter_btn: commanString.filter,
  reset_filter: `${commanString.reset} ${commanString.filter}`,
  save_filter: `${commanString.save} ${commanString.filter}`,
  row_show: commanString.show,
  shorting_order: commanString.order,
  asc_order: commanString.asc_order,
  desc_order: commanString.desc_order,
}

export const roleString = [
  {
    ...com,
    head_title: commanString.role,
    header: commanString.role,
    form_title: `${commanString.create} ${commanString.role}`,
  },
]

export const permissionString = [
  {
    ...com,
    head_title: commanString.permission,
    header: commanString.permission,
    form_title: `${commanString.create} ${commanString.permission}`,
  },
]

export const setupRoleString = [
  {
    ...com,
    head_title: commanString.setup_role_permission,
    header: commanString.setup_role_permission,
    form_title: `${commanString.role} ${commanString.permission}`,
  },
]

export const userString = [
  {
    ...com,
    head_title: commanString.user_info,
    header: commanString.user_info,
    form_title: commanString.user_info,
  },
]

export const employeString = [
  {
    ...com,
    head_title: commanString.employee,
    header: commanString.employee,
    form_title: `${commanString.create} ${commanString.employee}`,
  },
]

export const assetsTypeString = [
  {
    ...com,
    head_title: commanString.assets_type,
    header: commanString.assets_type,
    form_title: `${commanString.create} ${commanString.assets_type}`,
  },
]
export const assetsAppString = [
  {
    ...com,
    head_title: commanString.assets_application,
    header: commanString.assets_application,
    form_title: `${commanString.create} ${commanString.assets_application}`,
  },
]

export const leaveTypeString = [
  {
    ...com,
    head_title: commanString.leave_type,
    header: commanString.leave_type,
    form_title: `${commanString.create} ${commanString.leave_type}`,
  },
]
export const leaveAppString = [
  {
    ...com,
    head_title: commanString.leave_application,
    header: commanString.leave_type,
    form_title: `${commanString.create} ${commanString.leave_application}`,
  },
]

export const holidayListStrig = [
  {
    ...com,
    head_title: commanString.holiday_list,
    header: commanString.holiday_list,
    form_title: `${commanString.create} ${commanString.holiday_list}`,
  },
]
export const holidayTypeString = [
  {
    ...com,
    head_title: commanString.holiday_type,
    header: commanString.holiday_type,
    form_title: `${commanString.create} ${commanString.holiday_type}`,
  },
]

export const companyDocString = [
  {
    ...com,
    head_title: commanString.company_document,
    header: commanString.company_document,
    form_title: `${commanString.create} ${commanString.company_document}`,
  },
]

export const companyPolicyString = [
  {
    ...com,
    head_title: commanString.company_policy,
    header: commanString.company_policy,
    form_title: `${commanString.create} ${commanString.company_policy}`,
  },
]
