import React, { useContext, useEffect, useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import Pageheader from '../../Pageheader'
import Pagetable from '../../Pagetable'
import { leaveform, leavetable } from './LeaveTypejson'

const LeaveType = ({ ...props }) => {
  const [roleform] = useState(leaveform)
  const [roletable] = useState(leavetable)
  return (
    <React.Fragment>
      <Head title="Role Page" />
      <Content>
        <Pageheader json={roleform} />
        <Pagetable json={roletable} />
      </Content>
    </React.Fragment>
  )
}

export default LeaveType
