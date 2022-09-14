import commonString from '../../utils/String'
const menu = [
  {
    icon: 'dashlite',
    text: `${commonString.dashboard}`,
    link: '/',
  },
  {
    icon: 'users',
    text: `${commonString.user_manage}`,
    active: false,
    subMenu: [
      {
        text: `${commonString.role}`,
        link: '/user-manage/role',
      },
      {
        text: `${commonString.permission}`,
        link: '/user-manage/user-permission',
      },
      {
        text: `${commonString.setup_role_permission}`,
        link: '/user-manage/setup-role-permission',
      },
      {
        text: `${commonString.user}`,
        link: '/user-manage/user-info',
      },
      {
        text: `${commonString.employee}`,
        link: '/user-manage/employee',
      },
    ],
  },
  {
    icon: 'archived',
    text: `${commonString.assets}`,
    active: false,
    subMenu: [
      {
        text: `${commonString.assets_type}`,
        link: '/assets/assets-type',
      },
      {
        text: `${commonString.assets_application}`,
        link: '/assets/assets-application',
      },
    ],
  },
  {
    icon: 'calendar-alt',
    text: `${commonString.leave}`,
    active: false,
    subMenu: [
      {
        text: `${commonString.leave_type}`,
        link: '/leave/leave-type',
      },
      {
        text: `${commonString.leave_application}`,
        link: '/leave/leave-application',
      },
    ],
  },
  {
    icon: 'calendar-booking',
    text: `${commonString.holiday}`,
    active: false,
    subMenu: [
      {
        text: `${commonString.holiday_list}`,
        link: '/holiday/holiday-list',
      },
      {
        text: `${commonString.holiday_type}`,
        link: '/holiday/holiday-type',
      },
    ],
  },
  {
    icon: 'file-docs',
    text: `${commonString.company_document}`,
    link: '/company-info/company-document',
  },
  {
    icon: 'policy',
    text: `${commonString.company_policy}`,
    link: '/company-info/company-policy',
  },
  {
    heading: `${commonString.misc_pages}`,
  },
  {
    icon: 'signin',
    text: `${commonString.auth_page}`,
    active: false,
    subMenu: [
      {
        text: `${commonString.login}`,
        link: '/auth-login',
        newTab: true,
      },

      {
        text: `${commonString.forgot_password}`,
        link: '/auth-reset',
        newTab: true,
      },
      {
        text: `${commonString.success}`,
        link: '/auth-success',
        newTab: true,
      },
    ],
  },
  {
    icon: 'files',
    text: `${commonString.error_page}`,
    active: false,
    subMenu: [
      {
        text: `404 ${commonString.classic}`,
        link: '/errors/404-classic',
        newTab: true,
      },
      {
        text: `504 ${commonString.classic}`,
        link: '/errors/504-classic',
        newTab: true,
      },
      {
        text: `404 ${commonString.modern}`,
        link: '/errors/404-modern',
        newTab: true,
      },
      {
        text: `504 ${commonString.modern}`,
        link: '/errors/504-modern',
        newTab: true,
      },
    ],
  },
]
export default menu
