import String from '../../../utils/String'

export const userInfo = [
  {
    id: 1,
    name: `${String.avatar}`,
  },
  {
    id: 2,
    name: `${String.first_name}`,
  },
  {
    id: 3,
    name: `${String.last_name}`,
  },
  {
    id: 4,
    name: `${String.role_id}`,
  },
  {
    id: 5,
    name: `${String.department}`,
  },
  {
    id: 6,
    name: `${String.mobile_number}`,
  },
  {
    id: 7,
    name: `${String.email}`,
  },
  {
    id: 8,
    name: `${String.registered_at}`,
  },
  {
    id: 9,
    name: `${String.is_active}`,
  },
  {
    id: 10,
    name: `${String.is_delete}`,
  },
]

export const userCreate = [
  {
    id: 1,
    label_name: `${String.first_name}`,
    type: 'text',
    name: `${String.first_name}`,
    placeholder: `${String.enter} ${String.first_name}`,
    required: 'Required *',
  },
  {
    id: 2,
    label_name: `${String.middle_name}`,
    type: 'text',
    name: `${String.middle_name}`,
    placeholder: `${String.enter} ${String.middle_name}`,
    required: 'Required *',
  },
  {
    id: 3,
    label_name: `${String.last_name}`,
    type: 'text',
    name: `${String.last_name}`,
    placeholder: `${String.enter} ${String.last_name}`,
    required: 'Required *',
  },
  {
    id: 4,
    label_name: `${String.employee_code}`,
    type: 'text',
    name: `${String.employee_code}`,
    placeholder: `${String.enter} ${String.employee_code}`,
    required: 'Required *',
  },
  {
    id: 5,
    label_name: `${String.company_email}`,
    type: 'email',
    name: `${String.company_email}`,
    placeholder: `${String.enter} ${String.company_email}`,
    required: 'Required *',
  },
  {
    id: 6,
    label_name: `${String.employment} ${String.status}`,
    type: 'select',
    name: `${String.employment} ${String.status}`,
    option: [
      {
        value: `${String.permanent}`,
        label: `${String.permanent}`,
      },
      { value: `${String.training}`, label: `${String.training}` },
      {
        value: `${String.ex_employee}`,
        label: `${String.ex_employee}`,
      },
    ],
  },

  {
    id: 7,
    label_name: `${String.department}`,
    type: 'select',
    name: `${String.department}`,
    option: [
      { value: `${String.admin}`, label: `${String.admin}` },
      { value: `${String.user}`, label: `${String.user}` },
    ],
  },
  {
    id: 8,
    label_name: `${String.designation}`,
    type: 'select',
    name: `${String.designation}`,
    option: [
      { value: `${String.admin}`, label: `${String.admin}` },
      { value: `${String.user}`, label: `${String.user}` },
      { value: `${String.hr}`, label: `${String.hr}` },
    ],
  },
  {
    id: 9,
    label_name: `${String.manager_team_lead}`,
    type: 'select',
    name: `${String.manager_team_lead}`,
    option: [
      {
        value: `${String.amit_kasetiya}`,
        label: `${String.amit_kasetiya}`,
      },
    ],
  },
  {
    id: 10,
    label_name: `${String.joining_date}`,
    type: 'date',
    name: `${String.joining_date}`,
    required: 'Required *',
  },
  {
    id: 11,
    label_name: `${String.onboarding_date}`,
    type: 'date',
    name: `${String.onboarding_date}`,
    required: 'Required *',
  },
  {
    id: 12,
    label_name: `${String.relieving_date}`,
    type: 'date',
    name: `${String.relieving_date}`,
    required: 'Required *',
  },
  {
    id: 13,
    label_name: `${String.birth_day}`,
    type: 'date',
    name: `${String.birth_day}`,
    required: 'Required *',
    today: new Date().toISOString().split('T')[0],
  },
  {
    id: 14,
    label_name: `${String.nationality}`,
    type: 'select',
    name: `${String.nationality}`,
  },
  {
    id: 15,
    label_name: `${String.blood_group}`,
    type: 'select',
    name: `${String.blood_group}`,
    option: [
      { value: `${String.a}`, label: `${String.a}` },
      { value: `${String.a_plus}`, label: `${String.a_plus}` },
      { value: `${String.b}`, label: `${String.b}` },
      { value: `${String.b_plus}`, label: `${String.b_plus}` },
      { value: `${String.o}`, label: `${String.o}` },
      { value: `${String.o_plus}`, label: `${String.o_plus}` },
    ],
  },
  {
    id: 16,
    label_name: `${String.gender}`,
    type: 'select',
    name: `${String.gender}`,
    option: [
      { value: `${String.male}`, label: `${String.male}` },
      { value: `${String.female}`, label: `${String.female}` },
    ],
  },

  {
    id: 17,
    label_name: `${String.personal_email}`,
    type: 'email',
    name: `${String.personal_email}`,
    required: 'Required *',
    placeholder: `${String.Please_enter} ${String.personal_email}`,
  },
  {
    id: 18,
    label_name: `${String.mobile_number}`,
    type: 'number',
    name: `${String.mobile}`,
    required: 'Required *',
    placeholder: `${String.Please_enter} ${String.mobile}`,
  },
  {
    id: 19,
    label_name: `${String.whatsapp_mobile}`,
    type: 'number',
    name: `${String.whatsapp_mobile}`,
    placeholder: `${String.Please_enter} ${String.whatsapp_mobile}`,
    required: 'Required *',
  },
  {
    id: 20,
    label_name: `${String.parent_mobile}`,
    type: 'number',
    name: `${String.parent_mobile}`,
    required: 'Required *',
    placeholder: `${String.Please_enter} ${String.parent_mobile}`,
  },
  {
    id: 21,
    label_name: `${String.aadhaar_card_number}`,
    type: 'number',
    name: `${String.aadhaar_card_number}`,
    placeholder: `${String.Please_enter} ${String.aadhaar_card_number}`,
    required: 'Required *',
  },
  {
    id: 22,
    label_name: `${String.pan_card_number}`,
    type: 'number',
    name: `${String.pan_card_number}`,
    placeholder: `${String.Please_enter} ${String.pan_card_number}`,
    required: 'Required *',
  },
]

export const AddressDetailform = [
  {
    id: 1,
    label_name: `${String.address_1}`,
    type: 'text',
    name: `${String.address_1}`,
    placeholder: `${String.enter} ${String.address_1}`,
    required: 'Required *',
  },
  {
    id: 2,
    label_name: `${String.address_2}`,
    type: 'text',
    name: `${String.address_2}`,
    placeholder: `${String.enter} ${String.address_2}`,
    required: 'Required *',
  },
  {
    id: 3,
    label_name: `${String.city}`,
    type: 'text',
    name: `${String.city}`,
    placeholder: `${String.enter} ${String.city}`,
    required: 'Required *',
  },
  {
    id: 6,
    label_name: `${String.postal_code}`,
    type: 'number',
    name: `${String.postal_code}`,
    placeholder: `${String.enter} ${String.postal_code}`,
    required: 'Required *',
  },
  {
    id: 5,
    label_name: `${String.state_region}`,
    type: 'text',
    name: `${String.state_region}`,
    placeholder: `${String.enter} ${String.state_region}`,
    required: 'Required *',
  },
  {
    id: 6,
    label_name: `${String.country}`,
    type: 'select',
    name: `${String.country}`,
    placeholder: `${String.enter} ${String.country}`,
    option: [{ value: `${String.indian}`, label: `${String.indian}` }],
  },
]

export const tableHeader = [
  {
    id: '',
    type: '',
    header: '',
  },
  {
    id: 'c1',
    type: 'checkbox',
    header: 'View',
  },
  {
    id: 'c2',
    type: 'checkbox',
    header: 'Add',
  },
  {
    id: 'c3',
    type: 'checkbox',
    header: 'Edit',
  },
  {
    id: 'c4',
    type: 'checkbox',
    header: 'Delete',
  },
]

export const tableRow = [
  {
    id: 'r1',
    name: 'Leave',
    type: 'checkbox',
  },
  {
    id: 'r2',
    name: 'Holiday',
    type: 'checkbox',
  },
  {
    id: 'r3',
    name: 'Asset',
    type: 'checkbox',
  },
]
