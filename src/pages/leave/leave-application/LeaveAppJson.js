import String from '../../../utils/String'

export const leaveAppForm = [
  // {
  //   id: 1,
  //   label_name: `${String.leave_type}`,
  //   type: 'select',
  //   name: `${String.leave_type}`,
  //   required: 'required*',
  //   key_name: `${String.leave_type}`,
  //   option: [
  //     { value: 'optional', label: 'optional' },
  //     { value: 'Compulsory', label: 'Compulsory' },
  //   ],
  // },
  // {},
  // {
  //   id: 2,
  //   label_name: `${String.date}`,
  //   type: 'date',
  //   name: `${String.date}`,
  //   required: 'required*',
  //   key_name: `${String.date}`,
  // },
  // {
  //   id: 3,
  //   label_name: `${String.day_type}`,
  //   type: 'text',
  //   name: `${String.day_type}`,
  //   required: 'required*',
  //   key_name: `${String.day_type}`,
  //   for_plus: 'add plus',
  // },
]

export const defaultOptions = [
  { value: 'Amit', label: 'Amit' },
  { value: 'Pooja', label: 'Pooja' },
  { value: 'Dip', label: 'Dip' },
]
export const leaveTypes = [
  { value: 'Optional', label: 'Optional' },
  { value: 'Compulsory', label: 'Compulsory' },
]

export const dayTypeJson = [
  {
    id: 1,
    code: 'FL',
    name: 'Full Day',
    defaultChecked: 'defaultChecked',
    value: 1,
  },
  {
    id: 2,
    code: 'Fh',
    name: 'First Half',
    value: 2,
  },
  {
    id: 2,
    code: 'Sh',
    name: 'Second Half',
    value: 2,
  },
]
export const leaveAppTable = [
  {
    id: 1,
    name: `${String.employee} ${String.name}`,
    key_name: [`firstName`, `lastName`],
  },
  {
    id: 2,
    name: `${String.date}`,
    key_name: [`date`],
  },
  {
    id: 3,
    name: `${String.type}`,
    key_name: [`type`],
  },
  {
    id: 4,
    name: `${String.description}`,
    key_name: [`description`],
  },

  {
    id: 5,
    name: `${String.status}`,
    key_name: [`status`],
  },
  {
    id: 6,
    name: `${String.leave}`,
    key_name: [`leave`],
  },
]
