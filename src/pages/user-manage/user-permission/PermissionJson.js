import commonString from '../../../utils/String'

export const userPermission = [
  {
    id: 1,
    name: `${commonString.title}`,
    className: `${commonString.sub_text}`,
  },
  {
    id: 2,
    name: `${commonString.type}`,
    className: `${commonString.sub_text}`,
  },
  {
    id: 3,
    name: `${commonString.active}`,
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

export const formField = [
  {
    id: 1,
    label_class: 'form-label',
    label_name: `${commonString.title}`,
    input_class: 'form-control',
    type: 'text',
    name: `${commonString.title}`,
    required: `${commonString.Please_enter} ${commonString.title}`,
    placeholder: `${commonString.enter} ${commonString.title}`,
  },
  {
    id: 2,
    label_class: 'form-label',
    label_name: `${commonString.slug}`,
    input_class: 'form-control',
    type: 'text',
    name: `${commonString.slug}`,
    required: `${commonString.Please_enter} ${commonString.slug}`,
    placeholder: `${commonString.enter} ${commonString.slug}`,
  },
  {
    id: 3,
    label_class: 'form-label',
    label_name: `${commonString.description}`,
    input_class: 'form-control',
    type: 'text',
    required: `${commonString.Please_enter} ${commonString.description}`,
    name: `${commonString.description}`,
    placeholder: `${commonString.enter} ${commonString.descr}`,
  },
  {
    id: 4,
    label_class: 'form-label',
    label_name: `${commonString.type}`,
    input_class: 'form-control',
    type: 'text',
    name: `${commonString.type}`,
    required: `${commonString.Please_enter} ${commonString.type}`,
    placeholder: `${commonString.enter} ${commonString.type}`,
  },
  {
    id: 5,
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
    id: 6,
    label_class: 'form-label',
    label_name: `${commonString.is_active}`,
    input_class: 'form-control',
    type: 'select',
    name: `${commonString.text}`,
    option: [
      { value: `${commonString.active}`, label: `${commonString.active}` },
      { value: `${commonString.inactive}`, label: `${commonString.inactive}` },
    ],
  },
  {
    id: 7,
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
