import String from '../../../utils/String'

export const holidayListForm = [
  {
    id: 1,
    label_name: `${String.type}`,
    type: 'select',
    name: `${String.type}`,
    required: `${String.Please_enter} ${String.type}`,
    placeholder: `${String.enter} ${String.type}`,
    key_name: 'type',
    option: [
      { value: 'Select type', label: 'Select type' },
      { value: 'Paid', label: 'Paid' },
      { value: 'Optional', label: 'Optional' },
      { value: 'Compulsory', label: 'Compulsory' },
    ],
  },
  {
    id: 2,
    label_name: `${String.title}`,
    type: 'text',
    name: `${String.title}`,
    required: `${String.Please_enter} ${String.title}`,
    placeholder: `${String.enter} ${String.title}`,
    key_name: 'title',
  },
  {
    id: 3,
    label_name: `${String.date}`,
    type: 'date',
    name: `${String.date}`,
    required: `${String.Please_enter} ${String.date}`,
    key_name: 'date',
  },
  {
    id: 4,
    label_name: `${String.description}`,
    type: 'textarea',
    name: `${String.description}`,
    required: `${String.Please_enter} ${String.description}`,
    placeholder: `${String.enter} ${String.description}`,
    key_name: 'description',
  },
]
export const holidayListTable = [
  {
    id: 1,
    name: `${String.title}`,
    key_name: [`title`],
  },
  {
    id: 2,
    name: `${String.date}`,
    key_name: [`date`],
  },
  {
    id: 3,
    name: `${String.type}`,
    key_name: [`typeName`],
  },
  {
    id: 4,
    name: `${String.description}`,
    key_name: [`description`],
  },
  {
    id: 5,
    name: `${String.action}`,
    key_name: [``],
  },
]
