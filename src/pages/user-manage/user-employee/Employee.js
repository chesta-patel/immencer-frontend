import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageHeader from '../../PageHeader'
import PageTable from '../../PageTable'
import { employeForm, employeTable } from './EmployeJson'
import { employeString } from '../../Strings'

const Employee = ({ ...props }) => {
  const [rolForm] = useState(employeForm)
  const [roleTable] = useState(employeTable)

  return (
    <React.Fragment>
      <Head title="Employee" />
      <Content>
        <PageHeader json={rolForm} string={employeString} />
        <PageTable json={roleTable} />
      </Content>
    </React.Fragment>
  )
}

export default Employee
