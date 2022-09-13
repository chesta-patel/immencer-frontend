import commanString from '../../../utils/String'

export const holidayListForm = [
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
    label_name: `${commanString.name}`,
    input_class: 'form-control',
    type: `${commanString.text}`,
    name: `${commanString.name}`,
    required: `${commanString.Please_enter} ${commanString.name}`,
    placeholder: `${commanString.enter} ${commanString.name}`,
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
    label_name: `${commanString.date}`,
    input_class: 'form-control',
    type: 'email',
    name: `${commanString.date}`,
    required: `${commanString.Please_enter} ${commanString.date}`,
  },
  {
    id: 5,
    label_class: 'form-label',
    label_name: `${commanString.type}`,
    input_class: 'form-control',
    type: 'number',
    name: `${commanString.type}`,
    required: `${commanString.Please_enter} ${commanString.type}`,
    placeholder: `${commanString.enter} ${commanString.type}`,
  },
  {
    id: 6,
    label_class: 'form-label',
    label_name: `${commanString.approved} ${commanString.date}`,
    input_class: 'form-control',
    type: `${commanString.date}`,
    name: `${commanString.approved} ${commanString.date}`,
    required: `${commanString.Please_enter} ${commanString.approved}  ${commanString.date}`,
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
export const holidayListTable = [
  {
    id: 1,
    name: `${commanString.organization_meta_id}`,
    className: `${commanString.sub_text}`,
  },
  {
    id: 2,
    name: `${commanString.name}`,
    className: `${commanString.sub_text}`,
  },
  {
    id: 3,
    name: `${commanString.date}`,
    className: `${commanString.sub_text}`,
  },
  {
    id: 4,
    name: `${commanString.type}`,
    className: `${commanString.sub_text}`,
  },

  {
    id: 5,
    name: `${commanString.approved} ${commanString.date}`,
    className: `${commanString.sub_text}`,
  },
  {
    id: 6,
    name: `${commanString.created_by}`,
    className: `${commanString.sub_text}`,
  },
  {
    id: 6,
    name: `${commanString.isactive}`,
    className: `${commanString.sub_text}`,
  },
  {
    id: 7,
    name: `${commanString.isdelete}`,
    className: `${commanString.sub_text}`,
  },
]
