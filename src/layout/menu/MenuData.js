import commanString from '../../utils/CommanString'
const menu = [
  {
    icon: 'dashlite',
    text: `${commanString.dashboard}`,
    link: '/',
  },
  {
    icon: 'users',
    text: `${commanString.user_manage}`,
    active: false,
    subMenu: [
      {
        text: `${commanString.role}`,
        link: '/user-manage/role',
      },
      {
        text: `${commanString.permission}`,
        link: '/user-manage/user-permission',
      },
      {
        text: `${commanString.setup_role_permission}`,
        link: '/user-manage/setup-role-permission',
      },
      {
        text: `${commanString.user}`,
        link: '/user-manage/user-info',
      },
      {
        text: `${commanString.employee}`,
        link: '/user-manage/employee',
      },
    ],
  },
  {
    icon: 'archived',
    text: `${commanString.assets}`,
    active: false,
    subMenu: [
      {
        text: `${commanString.assets_type}`,
        link: '/assets/assets-type',
      },
      {
        text: `${commanString.assets_application}`,
        link: '/assets/assets-application',
      },
    ],
  },
  {
    icon: 'calendar-alt',
    text: `${commanString.leave}`,
    active: false,
    subMenu: [
      {
        text: `${commanString.leave_type}`,
        link: '/leave/leave-type',
      },
      {
        text: `${commanString.leave_application}`,
        link: '/leave/leave-application',
      },
    ],
  },
  {
    icon: 'calendar-booking',
    text: `${commanString.holiday}`,
    active: false,
    subMenu: [
      {
        text: `${commanString.holiday_list}`,
        link: '/holiday/holiday-list',
      },
      {
        text: `${commanString.holiday_type}`,
        link: '/holiday/holiday-type',
      },
    ],
  },
  {
    icon: 'file-docs',
    text: `${commanString.company_document}`,
    link: '/company-info/company-document',
  },
  {
    icon: 'policy',
    text: `${commanString.company_policy}`,
    link: '/company-info/company-policy',
  },
  {
    heading: `${commanString.misc_pages}`,
  },
  {
    icon: 'signin',
    text: `${commanString.auth_page}`,
    active: false,
    subMenu: [
      {
        text: `${commanString.login}`,
        link: '/auth-login',
        newTab: true,
      },

      {
        text: `${commanString.forgot_password}`,
        link: '/auth-reset',
        newTab: true,
      },
      {
        text: `${commanString.success}`,
        link: '/auth-success',
        newTab: true,
      },
    ],
  },
  {
    icon: 'files',
    text: `${commanString.error_page}`,
    active: false,
    subMenu: [
      {
        text: `404 ${commanString.classic}`,
        link: '/errors/404-classic',
        newTab: true,
      },
      {
        text: `504 ${commanString.classic}`,
        link: '/errors/504-classic',
        newTab: true,
      },
      {
        text: `404 ${commanString.modern}`,
        link: '/errors/404-modern',
        newTab: true,
      },
      {
        text: `504 ${commanString.modern}`,
        link: '/errors/504-modern',
        newTab: true,
      },
    ],
  },
]
export default menu
