import commonString from '../../../utils/String'

export const holidayListForm = [
  {
    id: 1,
    label_class: 'form-label',
    label_name: `${commonString.organization_meta_id}`,
    input_class: 'form-control',
    type: 'number',
    name: `${commonString.organization_meta_id}`,
    required: `${commonString.Please_enter} ${commonString.organization_meta_id}`,
    placeholder: `${commonString.enter} ${commonString.organization_meta_id}`,
  },
  {
    id: 2,
    label_class: 'form-label',
    label_name: `${commonString.name}`,
    input_class: 'form-control',
    type: 'text',
    name: `${commonString.name}`,
    required: `${commonString.Please_enter} ${commonString.name}`,
    placeholder: `${commonString.enter} ${commonString.name}`,
  },
  {
    id: 3,
    label_class: 'form-label',
    label_name: `${commonString.description}`,
    input_class: 'form-control',
    type: 'text',
    name: `${commonString.description}`,
    required: `${commonString.Please_enter} ${commonString.description}`,
    placeholder: `${commonString.enter} ${commonString.description}`,
  },
  {
    id: 4,
    label_class: 'form-label',
    label_name: `${commonString.date}`,
    input_class: 'form-control',
    type: 'date',
    name: `${commonString.date}`,
    required: `${commonString.Please_enter} ${commonString.date}`,
  },
  {
    id: 5,
    label_class: 'form-label',
    label_name: `${commonString.type}`,
    input_class: 'form-control',
    type: 'text',
    name: `${commonString.type}`,
    required: `${commonString.Please_enter} ${commonString.type}`,
    placeholder: `${commonString.enter} ${commonString.type}`,
  },
  {
    id: 6,
    label_class: 'form-label',
    label_name: `${commonString.approved_date} `,
    input_class: 'form-control',
    type: 'date',
    name: `${commonString.approved_date} `,
    required: `${commonString.Please_enter} ${commonString.approved_date}  `,
  },
  {
    id: 7,
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
    id: 8,
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
export const holidayListTable = [
  {
    id: 1,
    name: `${commonString.organization_meta_id}`,
    className: `${commonString.sub_text}`,
  },
  {
    id: 2,
    name: `${commonString.name}`,
    className: `${commonString.sub_text}`,
  },
  {
    id: 3,
    name: `${commonString.date}`,
    className: `${commonString.sub_text}`,
  },
  {
    id: 4,
    name: `${commonString.type}`,
    className: `${commonString.sub_text}`,
  },

  {
    id: 5,
    name: `${commonString.approved} ${commonString.date}`,
    className: `${commonString.sub_text}`,
  },
  {
    id: 6,
    name: `${commonString.created_by}`,
    className: `${commonString.sub_text}`,
  },
  {
    id: 6,
    name: `${commonString.is_active}`,
    className: `${commonString.sub_text}`,
  },
  {
    id: 7,
    name: `${commonString.is_delete}`,
    className: `${commonString.sub_text}`,
  },
]
