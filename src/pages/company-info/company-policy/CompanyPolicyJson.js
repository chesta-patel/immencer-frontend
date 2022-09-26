import String from '../../../utils/String'

export const companyPolicyForm = [
  {
    id: 1,
    label_name: `${String.organization_meta_id}`,
    type: 'number',
    name: `${String.organization_meta_id}`,
    required: `${String.Please_enter} ${String.organization_meta_id}`,
    placeholder: `${String.enter} ${String.organization_meta_id}`,
  },
  {
    id: 2,
    label_name: `${String.title}`,
    type: 'text',
    name: `${String.title}`,
    required: `${String.Please_enter} ${String.title}`,
    placeholder: `${String.enter} ${String.title}`,
  },
  {
    id: 3,
    label_name: `${String.description}`,
    type: 'text',
    name: `${String.description}`,
    required: `${String.Please_enter} ${String.description}`,
    placeholder: `${String.enter} ${String.description}`,
  },
  {
    id: 4,
    label_name: `${String.assets}`,
    type: 'text',
    name: `${String.assets}`,
    required: `${String.Please_enter} ${String.assets}`,
    placeholder: `${String.enter} ${String.assets}`,
  },
  {
    id: 5,
    label_name: `${String.created_by}`,
    type: 'text',
    name: `${String.created_by}`,
    required: `${String.Please_enter} ${String.created_by}`,
    placeholder: `${String.enter} ${String.created_by}`,
  },
  {
    id: 6,
    label_name: `${String.is_active}`,
    type: 'select',
    name: 'select',
    option: [
      { value: `${String.active}`, label: `${String.active}` },
      { value: `${String.in_activee}`, label: `${String.in_active}` },
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
export const companyPolicyTable = [
  {
    id: 1,
    name: `${String.organization_meta_id}`,
  },
  {
    id: 2,
    name: `${String.title}`,
  },
  {
    id: 3,
    name: `${String.created_by}`,
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
