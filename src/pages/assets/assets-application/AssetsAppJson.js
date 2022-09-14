import commonString from '../../../utils/String'

export const assetAppForm = [
  {
    id: 1,
    label_class: 'form-label',
    label_name: `${commonString.employee_id}`,
    input_class: 'form-control',
    type: 'number',
    name: `${commonString.employee_id}`,
    required: `${commonString.Please_enter} ${commonString.employee_id}`,
    placeholder: `${commonString.enter} ${commonString.employee_id}`,
  },
  {
    id: 2,
    label_class: 'form-label',
    label_name: `${commonString.assetsType_id}`,
    input_class: 'form-control',
    type: 'number',
    name: `${commonString.assetsType_id}`,
    required: `${commonString.Please_enter} ${commonString.assetsType_id}`,
    placeholder: `${commonString.enter} ${commonString.assetsType_id}`,
  },
  {
    id: 3,
    label_class: 'form-label',
    label_name: `${commonString.start_date}`,
    input_class: 'form-control',
    type: 'date',
    name: `${commonString.start_date}`,
    placeholder: `${commonString.enter} ${commonString.start_date}`,
    required: `${commonString.Please_enter} ${commonString.start_date}`,
  },
  {
    id: 4,
    label_class: 'form-label',
    label_name: `${commonString.end_date}`,
    input_class: 'form-control',
    type: 'date',
    name: 'form-label',
    required: `${commonString.Please_enter} ${commonString.end_date}`,
    placeholder: `${commonString.enter} ${commonString.end_date}`,
  },
  {
    id: 5,
    label_class: 'form-label',
    label_name: `${commonString.attachment}`,
    input_class: 'form-control',
    type: 'text',
    name: `${commonString.attachment}`,
    required: `${commonString.Please_enter} ${commonString.attachment}`,
    placeholder: `${commonString.enter} ${commonString.attachment}`,
  },
  {
    id: 7,
    label_class: 'form-label',
    label_name: `${commonString.remark}`,
    input_class: 'form-control',
    type: 'text',
    name: `${commonString.remark}`,
    required: `${commonString.Please_enter} ${commonString.remark}`,
    placeholder: `${commonString.enter} ${commonString.remark}`,
  },
  {
    id: 4,
    label_class: 'form-label',
    label_name: `${commonString.status}`,
    input_class: 'form-control',
    type: 'select',
    name: 'select',
    option: [
      { value: `${commonString.active}`, label: `${commonString.active}` },
      { value: `${commonString.pending}`, label: `${commonString.pending}` },
      { value: `${commonString.suspend}`, label: `${commonString.suspend}` },
    ],
  },
  {
    id: 4,
    label_class: 'form-label',
    label_name: `${commonString.updated_by}`,
    input_class: 'form-control',
    type: 'text',
    name: `${commonString.updated_by}`,
    placeholder: `${commonString.enter} ${commonString.updated_by}`,
    required: `${commonString.Please_enter} ${commonString.updated_by}`,
  },
  {
    id: 8,
    label_class: 'form-label',
    label_name: `${commonString.is_active}`,
    input_class: 'form-control',
    type: 'select',
    name: 'select',
    option: [
      { value: `${commonString.active}`, label: `${commonString.active}` },
      { value: `${commonString.inactive}`, label: `${commonString.inactive}` },
    ],
  },
  {
    id: 9,
    label_class: 'form-label',
    label_name: `${commonString.is_delete}`,
    input_class: 'form-control',
    type: 'select',
    name: 'select',
    option: [
      {
        value: `${commonString.is_delete}`,
        label: `${commonString.is_delete}`,
      },
      {
        value: `${commonString.is_not_deleted}`,
        label: `${commonString.is_not_deleted}`,
      },
    ],
  },
]

export const assetAppTable = [
  {
    id: 1,
    name: `${commonString.employee_id}`,
    className: `${commonString.sub_text}`,
  },
  {
    id: 2,
    name: `${commonString.assetsType_id}`,
    className: `${commonString.sub_text}`,
  },
  {
    id: 3,
    name: `${commonString.start_date}`,
    className: `${commonString.sub_text}`,
  },
  {
    id: 4,
    name: `${commonString.end_date}`,
    className: `${commonString.sub_text}`,
  },
  {
    id: 5,
    name: `${commonString.is_delete}`,
    className: `${commonString.sub_text}`,
  },
  {
    id: 6,
    name: `${commonString.status}`,
    className: `${commonString.sub_text}`,
  },
  {
    id: 7,
    name: `${commonString.updated_by}`,
    className: `${commonString.sub_text}`,
  },
  {
    id: 8,
    name: `${commonString.is_active}`,
    className: `${commonString.sub_text}`,
  },
]
