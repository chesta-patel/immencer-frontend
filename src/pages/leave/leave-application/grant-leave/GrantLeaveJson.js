import String from '../../../../utils/String'

export const grantLeaveAppTable = [
  {
    id: 1,
    name: `${String.employee} ${String.name}`,
    key_name: [`firstName`, `lastName`],
  },
  {
    id: 2,
    name: `${String.leave} ${String.count}`,
    key_name: [`leaveCount`],
  },
  {
    id: 3,
    name: `${String.date}`,
    key_name: [`date`],
  },
  {
    id: 4,
    name: `${String.month_year}`,
    key_name: [`monthYear`],
  },

  {
    id: 5,
    name: `${String.description}`,
    key_name: [`description`],
  },
  {
    id: 6,
    name: `${String.action}`,
    key_name: [`action`],
  },
]

export const grantedLeaveTEmp = [
  {
    employeeName: 'Dip Vachani',
    leaveCount: '1.5',
    date: '01/10/2022',
    month_year: 'october-2022',
    description: 'october Month Leave Granted',
  },
  {
    employeeName: 'Sujal Abhani',
    leaveCount: '1.5',
    date: '02/10/2022',
    month_year: 'october-2022',
    description: 'october Month Leave Granted',
  },
  {
    employeeName: 'Niraj Padaria',
    leaveCount: '1.5',
    date: '01/10/2022',
    month_year: 'october-2022',
    description: 'october Month Leave Granted',
  },
]
