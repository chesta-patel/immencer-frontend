import commonString from '../../../utils/String'

export const holidayTypeForm = [
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
    id: 5,
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

export const holidayTypeTable = [
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
    name: `${commonString.description}`,
    className: `${commonString.sub_text}`,
  },
  {
    id: 4,
    name: `${commonString.is_active}`,
    className: `${commonString.sub_text}`,
  },

  {
    id: 5,
    name: `${commonString.is_delete}`,
    className: `${commonString.sub_text}`,
  },
]
