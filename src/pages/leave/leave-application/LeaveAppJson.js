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
