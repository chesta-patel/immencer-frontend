import String from '../../../utils/String'

export const assetTypeForm = [
  {
    id: 1,
    label_name: `${String.assets_code}`,
    type: 'number',
    name: `${String.assets_code}`,
    required: `${String.Please_enter} ${String.assets_code}`,
    placeholder: `${String.enter} ${String.assets_code}`,
    key_name: `${String.assets_code}`,
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
    type: 'text',
    name: `${String.status}`,
    required: `${String.Please_enter} ${String.status}`,
    placeholder: `${String.enter} ${String.status}`,
    key_name: `${String.status}`,
  },
]

export const assetTypeTable = [
  {
    id: 1,
    name: `${String.assets_code}`,
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
