import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageHeader from '../../PageHeader'
import PageTable from '../../PageTable'
import { leaveAppForm, leaveAppTable } from './LeaveAppJson'
import { leaveAppString } from '../../Strings'

const LeaveApplication = ({ ...props }) => {
  const [roleForm] = useState(leaveAppForm)
  const [roleTable] = useState(leaveAppTable)

  return (
    <React.Fragment>
      <Head title="Leave Application" />
      <Content>
        <PageHeader json={roleForm} string={leaveAppString} />
        <PageTable json={roleTable} />
      </Content>
    </React.Fragment>
  )
}

export default LeaveApplication
