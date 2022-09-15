import String from '../../utils/String'
const menu = [
  {
    icon: 'dashlite',
    text: `${String.dashboard}`,
    link: '/',
  },
  {
    icon: 'users',
    text: `${String.user_manage}`,
    active: false,
    subMenu: [
      {
        text: `${String.role}`,
        link: '/user-manage/role',
      },
      {
        text: `${String.permission}`,
        link: '/user-manage/user-permission',
      },
      {
        text: `${String.setup_role_permission}`,
        link: '/user-manage/setup-role-permission',
      },
      {
        text: `${String.user}`,
        link: '/user-manage/user-info',
      },
      {
        text: `${String.employee}`,
        link: '/user-manage/employee',
      },
    ],
  },
  {
    icon: 'archived',
    text: `${String.assets}`,
    active: false,
    subMenu: [
      {
        text: `${String.assets_type}`,
        link: '/assets/assets-type',
      },
      {
        text: `${String.assets_application}`,
        link: '/assets/assets-application',
      },
    ],
  },
  {
    icon: 'calendar-alt',
    text: `${String.leave}`,
    active: false,
    subMenu: [
      {
        text: `${String.leave_type}`,
        link: '/leave/leave-type',
      },
      {
        text: `${String.leave_application}`,
        link: '/leave/leave-application',
      },
    ],
  },
  {
    icon: 'calendar-booking',
    text: `${String.holiday}`,
    active: false,
    subMenu: [
      {
        text: `${String.holiday_list}`,
        link: '/holiday/holiday-list',
      },
      {
        text: `${String.holiday_type}`,
        link: '/holiday/holiday-type',
      },
    ],
  },
  {
    icon: 'file-docs',
    text: `${String.company_document}`,
    link: '/company-info/company-document',
  },
  {
    icon: 'policy',
    text: `${String.company_policy}`,
    link: '/company-info/company-policy',
  },
]
export default menu
