import String from '../../utils/String'
import immenceLogo from '../../assets/images/immence_logo_white.svg'
const menu = [
  {
    icon: immenceLogo,
    iconType: 'img',
    text: `${String.dashboard}`,
    link: '/',
  },
  {
    icon: 'users',
    iconType: 'icon',
    text: `${String.employee}`,
    link: '/employee',
  },
  {
    icon: 'archived',
    iconType: 'icon',
    text: `${String.assets}`,
    link: '/assets',
  },
  {
    icon: 'calendar-alt',
    iconType: 'icon',
    text: `${String.leave}`,
    link: '/leave',
  },
  {
    icon: 'calendar-booking',
    iconType: 'icon',
    text: `${String.holiday}`,
    link: '/holiday',
  },
  {
    icon: 'file-docs',
    iconType: 'icon',
    text: `${String.company_document}`,
    link: '/company-document',
  },
  {
    icon: 'policy',
    iconType: 'icon',
    text: `${String.company_policy}`,
    link: '/company-policy',
  },
  {
    icon: 'user',
    iconType: 'icon',
    text: `${String.master}`,
    active: false,
    subMenu: [
      {
        text: `${String.assets_type}`,
        // link: '/assets/assets-type',
        link: '',
      },
      {
        text: `${String.leave_type}`,
        // link: '/leave/leave-type',
        link: '',
      },
      {
        text: `${String.holiday_type}`,
        // link: '/holiday/holiday-type',
        link: '',
      },
    ],
  },
]
export default menu
