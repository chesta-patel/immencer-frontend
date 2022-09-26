import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageHeader from '../../PageHeader'
import PageTable from '../../PageTable'
import { leaveForm, leaveTable } from './LeaveTypeJson'
import { leaveTypeString } from '../../Strings'

const LeaveType = ({ ...props }) => {
  const [roleForm] = useState(leaveForm)
  const [roleTable] = useState(leaveTable)

  return (
    <React.Fragment>
      <Head title="Leave Type" />
      <Content>
        <PageHeader json={roleForm} string={leaveTypeString} />
        <PageTable json={roleTable} />
      </Content>
    </React.Fragment>
  )
}

export default LeaveType
