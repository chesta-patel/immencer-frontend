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
    link: '/assets',
  },
  {
    icon: 'calendar-alt',
    text: `${String.leave}`,
    link: '/leave',
  },
  {
    icon: 'calendar-booking',
    text: `${String.holiday}`,
    link: '/holiday',
  },
  {
    icon: 'file-docs',
    text: `${String.company_document}`,
    link: '/company-document',
  },
  {
    icon: 'policy',
    text: `${String.company_policy}`,
    link: '/company-policy',
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
