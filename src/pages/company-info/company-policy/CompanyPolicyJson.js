import commanString from '../../../utils/String'

export const companyPolicyForm = [
  {
    id: 1,
    label_class: 'form-label',
    label_name: `${commanString.organization_meta_id}`,
    input_class: 'form-control',
    type: 'number',
    name: `${commanString.organization_meta_id}`,
    required: `${commanString.Please_enter} ${commanString.organization_meta_id}`,
    placeholder: `${commanString.enter} ${commanString.organization_meta_id}`,
  },
  {
    id: 2,
    label_class: 'form-label',
    label_name: `${commanString.title}`,
    input_class: 'form-control',
    type: `${commanString.text}`,
    name: `${commanString.title}`,
    required: `${commanString.Please_enter} ${commanString.title}`,
    placeholder: `${commanString.enter} ${commanString.title}`,
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
    label_name: `${commanString.assets}`,
    input_class: 'form-control',
    type: `${commanString.text}`,
    name: `${commanString.assets}`,
    required: `${commanString.Please_enter} ${commanString.assets}`,
    placeholder: `${commanString.enter} ${commanString.assets}`,
  },
  {
    id: 5,
    label_class: 'form-label',
    label_name: `${commanString.created_by}`,
    input_class: 'form-control',
    type: `${commanString.text}`,
    name: `${commanString.created_by}`,
    required: `${commanString.Please_enter} ${commanString.created_by}`,
    placeholder: `${commanString.enter} ${commanString.created_by}`,
  },
  {
    id: 6,
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
    id: 7,
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
export const companyPolicyTable = [
  {
    id: 1,
    name: `${commanString.organization_meta_id}`,
    className: `${commanString.sub_text}`,
  },
  {
    id: 2,
    name: `${commanString.title}`,
    className: `${commanString.sub_text}`,
  },
  {
    id: 3,
    name: `${commanString.created_by}`,
    className: `${commanString.sub_text}`,
  },
  {
    id: 4,
    name: `${commanString.isactive}`,
    className: `${commanString.sub_text}`,
  },
  {
    id: 5,
    name: `${commanString.isdelete}`,
    className: `${commanString.sub_text}`,
  },
]
