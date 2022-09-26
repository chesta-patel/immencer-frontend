import String from '../../../utils/String'

export const leaveAppForm = [
  {
    id: 1,
    label_name: `${String.employee_id}`,
    type: 'number',
    name: `${String.employee_id}`,
    required: `${String.Please_enter} ${String.employee_id}`,
    placeholder: `${String.enter} ${String.employee_id}`,
  },
  {
    id: 2,
    label_name: `${String.leave_type_id}`,
    type: 'number',
    name: `${String.leave_type_id}`,
    required: `${String.Please_enter} ${String.leave_type_id}`,
    placeholder: `${String.enter} ${String.leave_type_id}`,
  },
  {
    id: 3,
    label_name: `${String.start_date}`,
    type: 'date',
    name: `${String.start_date}`,
    required: `${String.Please_enter} ${String.start_date}`,
  },
  {
    id: 4,
    label_name: `${String.end_date}`,
    type: 'date',
    name: `${String.end_date}`,
    required: `${String.Please_enter} ${String.end_date}`,
  },
  {
    id: 5,
    label_name: `${String.attachment}`,
    type: 'text',
    name: `${String.date}`,
    required: `${String.Please_enter} ${String.attachment}`,
    placeholder: `${String.enter} ${String.attachment}`,
  },
  {
    id: 6,
    label_name: `${String.remark}`,
    type: 'text',
    name: `${String.remark}`,
    required: `${String.Please_enter} ${String.remark}`,
    placeholder: `${String.enter} ${String.remark}`,
  },
  {
    id: 7,
    label_name: `${String.status}`,
    type: 'select',
    name: `${String.status}`,
    option: [
      { value: `${String.pending}`, label: `${String.pending}` },
      { value: `${String.approved}`, label: `${String.approved}` },
      { value: `${String.reject}`, label: `${String.reject}` },
    ],
  },
  {
    id: 8,
    label_name: `${String.approved_date}`,
    type: 'date',
    name: `${String.approved_date}`,
    required: `${String.Please_enter} ${String.approved} ${String.date}`,
  },
  {
    id: 9,
    label_name: `${String.updated_by}`,
    type: 'text',
    name: `${String.updated_by}`,
    required: `${String.Please_enter} ${String.updated_by} `,
    placeholder: `${String.enter} ${String.updated_by}`,
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

export const leaveAppTable = [
  {
    id: 1,
    name: `${String.employee_id}`,
  },
  {
    id: 2,
    name: `${String.leave_type_id}`,
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
    name: `${String.status}`,
  },
  {
    id: 6,
    name: `${String.approved_by}`,
  },
  {
    id: 7,
    name: `${String.updated_by}`,
  },
  {
    id: 8,
    name: `${String.is_active}`,
  },
  {
    id: 9,
    name: `${String.is_delete}`,
  },
]
