import String from '../../../utils/String'

export const assetAppForm = [
  {
    id: 1,
    label_name: `${String.code}`,
    type: 'number',
    name: `${String.code}`,
    required: `${String.Please_enter} ${String.code}`,
    placeholder: `${String.enter} ${String.code}`,
    key_name: `${String.code}`,
  },
  {
    id: 2,
    label_name: `${String.name}`,
    type: 'text',
    name: `${String.name}`,
    required: `${String.Please_enter} ${String.name}`,
    placeholder: `${String.enter} ${String.name}`,
    key_name: `${String.name}`,
  },
  {
    id: 3,
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
    id: 4,
    label_name: `${String.status}`,
    type: 'select',
    name: 'select',
    option: [
      { value: `${String.active}`, label: `${String.active}` },
      { value: `${String.pending}`, label: `${String.pending}` },
      { value: `${String.suspend}`, label: `${String.suspend}` },
    ],
    key_name: `${String.status}`,
  },
  {
    id: 5,
    label_name: `${String.serialNumber}`,
    type: 'text',
    name: `${String.serialNumber}`,
    required: `${String.Please_enter} ${String.serialNumber}`,
    placeholder: `${String.enter} ${String.serialNumber}`,
    key_name: `${String.serialNumber}`,
  },
  {
    id: 6,
    label_name: `${String.assign}`,
    type: 'number',
    name: `${String.assign}`,
    required: `${String.Please_enter} ${String.assign}`,
    placeholder: `${String.enter} ${String.assign}`,
    key_name: `${String.assign}`,
  },
  {
    id: 7,
    label_name: `${String.assignDate}`,
    type: 'date',
    name: `${String.assignDate}`,
    required: `${String.Please_enter} ${String.assignDate}`,
    key_name: 'assignDate',
  },
  {
    id: 8,
    label_name: `${String.description}`,
    type: 'text',
    name: `${String.description}`,
    required: `${String.Please_enter} ${String.description}`,
    placeholder: `${String.enter} ${String.description}`,
    key_name: 'description',
  },
  {
    id: 9,
    label_name: `${String.note}`,
    type: 'text',
    name: `${String.note}`,
    required: `${String.Please_enter} ${String.note}`,
    placeholder: `${String.enter} ${String.note}`,
    key_name: 'note',
  },
]

export const assetAppTable = [
  {
    id: 1,
    name: `${String.code}`,
  },
  {
    id: 2,
    name: `${String.name}`,
  },
  {
    id: 3,
    name: `${String.type}`,
  },
  {
    id: 4,
    name: `${String.status}`,
  },
  {
    id: 5,
    name: `${String.action}`,
  },
]
