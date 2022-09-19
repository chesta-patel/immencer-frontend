import String from '../../../utils/String'

export const userPermission = [
  {
    id: 1,
    name: `${String.title}`,
  },
  {
    id: 2,
    name: `${String.type}`,
  },
  {
    id: 3,
    name: `${String.active}`,
  },
  {
    id: 4,
    name: `${String.is_active}`,
  },
  {
    id: 5,
    name: `${String.is_delete}`,
  },
]

export const formField = [
  {
    id: 1,
    label_name: `${String.title}`,
    type: 'text',
    name: `${String.title}`,
    required: `${String.Please_enter} ${String.title}`,
    placeholder: `${String.enter} ${String.title}`,
  },
  {
    id: 2,
    label_name: `${String.slug}`,
    type: 'text',
    name: `${String.slug}`,
    required: `${String.Please_enter} ${String.slug}`,
    placeholder: `${String.enter} ${String.slug}`,
  },
  {
    id: 3,
    label_name: `${String.description}`,
    type: 'text',
    required: `${String.Please_enter} ${String.description}`,
    name: `${String.description}`,
    placeholder: `${String.enter} ${String.descr}`,
  },
  {
    id: 4,
    label_name: `${String.type}`,
    type: 'text',
    name: `${String.type}`,
    required: `${String.Please_enter} ${String.type}`,
    placeholder: `${String.enter} ${String.type}`,
  },
  {
    id: 5,
    label_name: `${String.status}`,
    type: 'select',
    name: 'select',
    option: [
      { value: `${String.active}`, label: `${String.active}` },
      { value: `${String.pending}`, label: `${String.pending}` },
      { value: `${String.suspend}`, label: `${String.suspend}` },
    ],
  },
  {
    id: 6,
    label_name: `${String.is_active}`,
    type: 'select',
    name: `${String.text}`,
    option: [
      { value: `${String.active}`, label: `${String.active}` },
      { value: `${String.in_active}`, label: `${String.in_active}` },
    ],
  },
  {
    id: 7,
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
