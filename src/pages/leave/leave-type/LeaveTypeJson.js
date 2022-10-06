import String from '../../../utils/String'

export const leaveForm = [
  {
    id: 1,
    label_name: `${String.organization_meta_id}`,
    type: 'number',
    name: `${String.organization_meta_id}`,
    required: `${String.Please_enter} ${String.organization_meta_id}`,
    placeholder: `${String.enter} ${String.organization_meta_id}`,
    key_name: `${String.organization_meta_id}`,
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
    label_name: `${String.description}`,
    type: 'text',
    name: `${String.description}`,
    required: `${String.Please_enter} ${String.description}`,
    placeholder: `${String.enter} ${String.description}`,
    key_name: `${String.description}`,
  },
  {
    id: 4,
    label_name: `${String.is_active}`,
    type: 'select',
    name: 'select',
    option: [
      { value: `${String.active}`, label: `${String.active}` },
      { value: `${String.in_active}`, label: `${String.in_active}` },
    ],
    key_name: `${String.is_active}`,
  },
  {
    id: 4,
    label_name: `${String.is_delete}`,
    type: 'select',
    name: 'select',
    option: [
      {
        value: `${String.is_delete}`,
        label: `${String.is_delete}`,
      },
      {
        value: `${String.is_not_deleted}`,
        label: `${String.is_not_deleted}`,
      },
    ],
    key_name: `${String.is_delete}`,
  },
]

export const leaveTable = [
  {
    id: 1,
    name: `${String.organization_meta_id}`,
  },
  {
    id: 2,
    name: `${String.name}`,
  },
  {
    id: 3,
    name: `${String.description}`,
  },
  {
    id: 4,
    name: `${String.is_active}`,
  },

  {
    id: 5,
    name: `${String.is_delete}`,
  },
]
