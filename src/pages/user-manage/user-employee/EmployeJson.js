import String from '../../../utils/String'

export const employeForm = [
  {
    id: 1,
    label_name: `${String.user_id}`,
    type: 'number',
    name: `${String.user_id}`,
    required: `${String.Please_enter} ${String.user_id}`,
    placeholder: `${String.enter} ${String.user_id}`,
  },
  {
    id: 2,
    label_name: `${String.role_id}`,
    type: 'number',
    name: `${String.role_id}`,
    required: `${String.Please_enter} ${String.role_id}`,
    placeholder: `${String.enter} ${String.role_id}`,
  },
  {
    id: 3,
    label_name: `${String.created_by}`,
    type: 'text',
    name: `${String.created_by}`,
    required: `${String.Please_enter} ${String.created_by}`,
    placeholder: `${String.enter} ${String.created_by}`,
  },
  {
    id: 4,
    label_name: `${String.updated_by}`,
    type: 'text',
    name: `${String.updated_by}`,
    required: `${String.Please_enter} ${String.updated_by}`,
    placeholder: `${String.enter} ${String.updated_by}`,
  },
  {
    id: 5,
    label_name: `${String.code}`,
    type: 'number',
    name: `${String.code}`,
    required: `${String.Please_enter} ${String.code}`,
    placeholder: `${String.enter} ${String.code}`,
  },
  {
    id: 6,
    label_name: `${String.status}`,
    type: 'select',
    name: `${String.status}`,
    option: [
      { value: `${String.active}`, label: `${String.active}` },
      { value: `${String.pending}`, label: `${String.pending}` },
      { value: `${String.suspend}`, label: `${String.suspend}` },
    ],
  },
  {
    id: 7,
    label_name: `${String.start_at}`,
    type: 'date',
    name: `${String.start_att}`,
    required: `${String.Please_enter} ${String.start_at}`,
    placeholder: `${String.enter} ${String.start_at}`,
  },
  {
    id: 8,
    label_name: `${String.end_at}`,
    type: 'date',
    name: `${String.end_at}`,
    required: `${String.Please_enter} ${String.end_at}`,
    placeholder: `${String.enter} ${String.end_at}`,
  },
  {
    id: 9,
    label_name: `${String.note}`,
    type: 'number',
    name: `${String.note}`,
    required: `${String.Please_enter} ${String.note}`,
    placeholder: `${String.enter} ${String.note}`,
  },
  {
    id: 10,
    label_name: `${String.is_active}`,
    type: 'select',
    name: 'select',
    option: [
      { value: `${String.active}`, label: `${String.active}` },
      { value: `${String.in_active}`, label: `${String.in_active}` },
    ],
  },
  {
    id: 11,
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

export const employeTable = [
  {
    id: 1,
    name: `${String.user_id}`,
  },
  {
    id: 2,
    name: `${String.role_id}`,
  },
  {
    id: 3,
    name: `${String.created_by}`,
  },
  {
    id: 4,
    name: `${String.updated_by}`,
  },

  {
    id: 5,
    name: `${String.code}`,
  },
  {
    id: 6,
    name: `${String.status}`,
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
