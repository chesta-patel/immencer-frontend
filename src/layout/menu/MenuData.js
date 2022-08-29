const menu = [
  {
    icon: 'dashlite',
    text: 'Default Dashboard',
    link: '/',
  },
  {
    icon: 'users',
    text: 'User Manage',
    active: false,
    subMenu: [
      {
        text: 'Role',
        link: '/user-manage/role',
      },
      {
        text: 'Permission',
        link: '/user-manage/user-permission',
      },
      {
        text: 'Setup Role Permission',
        link: '/user-manage/setup-role-permission',
      },
      {
        text: 'User',
        link: '/user-manage/user-info',
      },
      {
        text: 'Employee',
        link: '/user-manage/employee',
      },
    ],
  },
  {
    icon: 'archived',
    text: 'Assets',
    active: false,
    subMenu: [
      {
        text: 'Assets Type',
        link: '/assets/assets-type',
      },
      {
        text: 'Assets Application',
        link: '/assets/assets-application',
      },
    ],
  },
  {
    icon: 'calendar-alt',
    text: 'Leave',
    active: false,
    subMenu: [
      {
        text: 'Leave Type',
        link: '/leave/leave-type',
      },
      {
        text: 'Leave Application',
        link: '/leave/leave-application',
      },
    ],
  },
  {
    icon: 'calendar-booking',
    text: 'Holiday',
    active: false,
    subMenu: [
      {
        text: 'Holiday List',
        link: '/Holiday/holiday-list',
      },
      {
        text: 'Holiday Type',
        link: '/holiday/holiday-type',
      },
    ],
  },
  {
    icon: 'file-docs',
    text: 'Company Document',
    link: '/company-info/company-document',
  },
  {
    icon: 'policy',
    text: 'Company Policy',
    link: '/company-info/company-policy',
  },
  {
    heading: 'Misc Pages',
  },
  {
    icon: 'signin',
    text: 'Auth Pages',
    active: false,
    subMenu: [
      {
        text: 'Login / Signin',
        link: '/auth-login',
        newTab: true,
      },

      {
        text: 'Forgot Password',
        link: '/auth-reset',
        newTab: true,
      },
      {
        text: 'Success / Confirm',
        link: '/auth-success',
        newTab: true,
      },
    ],
  },
  {
    icon: 'files',
    text: 'Error Pages',
    active: false,
    subMenu: [
      {
        text: '404 Classic',
        link: '/errors/404-classic',
        newTab: true,
      },
      {
        text: '504 Classic',
        link: '/errors/504-classic',
        newTab: true,
      },
      {
        text: '404 Modern',
        link: '/errors/404-modern',
        newTab: true,
      },
      {
        text: '504 Modern',
        link: '/errors/504-modern',
        newTab: true,
      },
    ],
  },
]
export default menu
