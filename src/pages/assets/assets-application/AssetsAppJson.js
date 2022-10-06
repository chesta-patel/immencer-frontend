import String from '../../../utils/String'

export const assetAppForm = [
  {
    id: 1,
    label_name: `${String.employee_id}`,
    type: 'number',
    name: `${String.employee_id}`,
    required: `${String.Please_enter} ${String.employee_id}`,
    placeholder: `${String.enter} ${String.employee_id}`,
    key_name: `${String.employee_id}`,
  },
  {
    id: 2,
    label_name: `${String.assetsType_id}`,
    type: 'number',
    name: `${String.assetsType_id}`,
    required: `${String.Please_enter} ${String.assetsType_id}`,
    placeholder: `${String.enter} ${String.assetsType_id}`,
    key_name: `${String.assetsType_id}`,
  },
  {
    id: 3,
    label_name: `${String.start_date}`,
    type: 'date',
    name: `${String.start_date}`,
    placeholder: `${String.enter} ${String.start_date}`,
    required: `${String.Please_enter} ${String.start_date}`,
    key_name: `${String.start_date}`,
  },
  {
    id: 4,
    label_name: `${String.end_date}`,
    type: 'date',
    name: `${String.end_date}`,
    required: `${String.Please_enter} ${String.end_date}`,
    placeholder: `${String.enter} ${String.end_date}`,
    key_name: `${String.end_date}`,
  },
  {
    id: 5,
    label_name: `${String.attachment}`,
    type: 'text',
    name: `${String.attachment}`,
    required: `${String.Please_enter} ${String.attachment}`,
    placeholder: `${String.enter} ${String.attachment}`,
    key_name: `${String.attachment}`,
  },
  {
    id: 7,
    label_name: `${String.remark}`,
    type: 'text',
    name: `${String.remark}`,
    required: `${String.Please_enter} ${String.remark}`,
    placeholder: `${String.enter} ${String.remark}`,
    key_name: `${String.remark}`,
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
    id: 4,
    label_name: `${String.updated_by}`,
    type: 'text',
    name: `${String.updated_by}`,
    placeholder: `${String.enter} ${String.updated_by}`,
    required: `${String.Please_enter} ${String.updated_by}`,
    key_name: `${String.updated_by}`,
  },
  {
    id: 8,
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
    id: 9,
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

export const assetAppTable = [
  {
    id: 1,
    name: `${String.employee_id}`,
  },
  {
    id: 2,
    name: `${String.assetsType_id}`,
  },
  {
    id: 3,
    name: `${String.start_date}`,
  },
  {
    id: 4,
    name: `${String.end_date}`,
  },
  {
    id: 5,
    name: `${String.is_delete}`,
  },
  {
    id: 6,
    name: `${String.status}`,
  },
  {
    id: 7,
    name: `${String.updated_by}`,
  },
  {
    id: 8,
    name: `${String.is_active}`,
  },
]
