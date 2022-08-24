export const holydaylistform = [
  {
    id: 1,
    label_class: 'form-label',
    label_name: 'Organization Meta Id',
    input_class: 'form-control',
    type: 'number',
    name: 'Organization-meta-id',
  },
  {
    id: 2,
    label_class: 'form-label',
    label_name: 'Name',
    input_class: 'form-control',
    type: 'text',
    name: 'name',
  },
  {
    id: 3,
    label_class: 'form-label',
    label_name: 'Description',
    input_class: 'form-control',
    type: 'text',
    name: 'Description',
  },
  {
    id: 4,
    label_class: 'form-label',
    label_name: 'IsActive',
    input_class: 'form-control',
    type: 'select',
    name: 'type',
    option: [
      { value: 'Active', label: 'Active' },
      { value: 'InActive', label: 'InActive' },
    ],
  },
  {
    id: 4,
    label_class: 'form-label',
    label_name: 'IsDelete',
    input_class: 'form-control',
    type: 'select',
    name: 'type',
    option: [
      { value: 'IsDeleted', label: 'IsDeleted' },
      { value: 'IsNotDeleted', label: 'IsNotDeleted' },
    ],
  },
]

export const holydaylisttable = [
  {
    id: 1,
    name: 'Organization Meta Id',
    size: 'sm',
    className: 'sub-text',
  },
  {
    id: 2,
    name: 'Name',
    size: 'md',
    className: 'sub-text',
  },
  {
    id: 3,
    name: 'Description',
    size: 'md',
    className: 'sub-text',
  },
  {
    id: 4,
    name: 'IsActive',
    size: 'sm',
    className: 'sub-text',
  },

  {
    id: 5,
    name: 'IsDelete',
    size: 'sm',
    className: 'sub-text',
  },
]
