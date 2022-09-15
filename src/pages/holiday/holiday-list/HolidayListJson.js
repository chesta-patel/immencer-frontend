import String from '../../../utils/String'

export const holidayListForm = [
  {
    id: 1,
    label_name: `${String.organization_meta_id}`,
    type: 'number',
    name: `${String.organization_meta_id}`,
    required: `${String.Please_enter} ${String.organization_meta_id}`,
    placeholder: `${String.enter} ${String.organization_meta_id}`,
  },
  {
    id: 2,
    label_name: `${String.name}`,
    type: 'text',
    name: `${String.name}`,
    required: `${String.Please_enter} ${String.name}`,
    placeholder: `${String.enter} ${String.name}`,
  },
  {
    id: 3,
    label_name: `${String.description}`,
    type: 'text',
    name: `${String.description}`,
    required: `${String.Please_enter} ${String.description}`,
    placeholder: `${String.enter} ${String.description}`,
  },
  {
    id: 4,
    label_name: `${String.date}`,
    type: 'date',
    name: `${String.date}`,
    required: `${String.Please_enter} ${String.date}`,
  },
  {
    id: 5,
    label_name: `${String.type}`,
    type: 'text',
    name: `${String.type}`,
    required: `${String.Please_enter} ${String.type}`,
    placeholder: `${String.enter} ${String.type}`,
  },
  {
    id: 6,
    label_name: `${String.approved_date} `,
    type: 'date',
    name: `${String.approved_date} `,
    required: `${String.Please_enter} ${String.approved_date}  `,
  },
  {
    id: 7,
    label_name: `${String.is_active}`,
    type: 'select',
    name: 'select',
    option: [
      { value: `${String.active}`, label: `${String.active}` },
      { value: `${String.in_active}`, label: `${String.in_active}` },
    ],
  },
  {
    id: 8,
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
  },
]
export const holidayListTable = [
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
    name: `${String.date}`,
  },
  {
    id: 4,
    name: `${String.type}`,
  },

  {
    id: 5,
    name: `${String.approved} ${String.date}`,
  },
  {
    id: 6,
    name: `${String.created_by}`,
  },
  {
    id: 7,
    name: `${String.is_active}`,
  },
  {
    id: 8,
    name: `${String.is_delete}`,
  },
]
