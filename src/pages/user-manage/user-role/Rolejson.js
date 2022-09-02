import commanString from '../../../utils/CommanString'

export const userRoleColum = [
  {
    id: 1,
    name: `${commanString.title}`,
    class_name: `${commanString.sub_text}`,
  },
  {
    id: 2,
    name: `${commanString.type}`,
    class_name: `${commanString.sub_text}`,
  },
  {
    id: 3,
    name: `${commanString.active}`,
    class_name: `${commanString.sub_text}`,
  },
  {
    id: 4,
    name: `${commanString.isactive}`,
    class_name: `${commanString.sub_text}`,
  },
  {
    id: 5,
    name: `${commanString.isdelete}`,
    class_name: `${commanString.sub_text}`,
  },
]

export const formField = [
  {
    id: 1,
    label_class: 'form-label',
    label_name: `${commanString.title}`,
    input_class: 'form-control',
    type: `${commanString.text}`,
    name: `${commanString.title}`,
    required: `${commanString.Please_enter} ${commanString.title}`,
    placeholder: `${commanString.enter} ${commanString.title}`,
  },
  {
    id: 2,
    label_class: 'form-label',
    label_name: `${commanString.slug}`,
    input_class: 'form-control',
    type: `${commanString.text}`,
    name: `${commanString.slug}`,
    required: `${commanString.Please_enter} ${commanString.slug}`,
    placeholder: `${commanString.enter} ${commanString.slug}`,
  },
  {
    id: 3,
    label_class: 'form-label',
    label_name: `${commanString.description}`,
    input_class: 'form-control',
    type: `${commanString.text}`,
    name: `${commanString.description}`,
    required: `${commanString.Please_enter} ${commanString.description}`,
    placeholder: `${commanString.enter} ${commanString.description}`,
  },
  {
    id: 4,
    label_class: 'form-label',
    label_name: `${commanString.content}`,
    input_class: 'form-control',
    type: `${commanString.text}`,
    name: `${commanString.content}`,
    required: `${commanString.Please_enter} ${commanString.content}`,
    placeholder: `${commanString.enter} ${commanString.content}`,
  },
  {
    id: 5,
    label_class: 'form-label',
    label_name: `${commanString.type}`,
    input_class: 'form-control',
    type: `${commanString.text}`,
    name: `${commanString.type}`,
    required: `${commanString.Please_enter} ${commanString.type}`,
    placeholder: `${commanString.enter} ${commanString.type}`,
  },
  {
    id: 6,
    label_class: 'form-label',
    label_name: `${commanString.status}`,
    input_class: 'form-control',
    type: 'select',
    name: 'select',
    option: [
      { value: `${commanString.active}`, label: `${commanString.active}` },
      { value: `${commanString.pending}`, label: `${commanString.pending}` },
      { value: `${commanString.suspend}`, label: `${commanString.suspend}` },
    ],
  },
  {
    id: 7,
    label_class: 'form-label',
    label_name: `${commanString.isactive}`,
    input_class: 'form-control',
    type: 'select',
    name: 'select',
    option: [
      { value: `${commanString.active}`, label: `${commanString.active}` },
      { value: `${commanString.inactive}`, label: `${commanString.inactive}` },
    ],
  },
  {
    id: 8,
    label_class: 'form-label',
    label_name: `${commanString.isdelete}`,
    input_class: 'form-control',
    type: 'select',
    name: 'select',
    option: [
      { value: `${commanString.isdelete}`, label: `${commanString.isdelete}` },
      {
        value: `${commanString.is_not_deleted}`,
        label: `${commanString.is_not_deleted}`,
      },
    ],
  },
]
