import String from '../../utils/String'
const menu = [
  {
    icon: 'dashlite',
    text: `${String.dashboard}`,
    link: '/',
  },
  {
    icon: 'users',
    text: `${String.employee}`,
    link: '/employee',
  },
  {
    icon: 'archived',
    text: `${String.assets}`,
    active: false,
    subMenu: [
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
  {
    icon: 'user',
    text: `${String.master}`,
    active: false,
    subMenu: [
      {
        text: `${String.assets_type}`,
        link: '/assets/assets-type',
      },
      {
        text: `${String.leave_type}`,
        link: '/leave/leave-type',
      },
      {
        text: `${String.holiday_type}`,
        link: '/holiday/holiday-type',
      },
    ],
  },
]
export default menu
