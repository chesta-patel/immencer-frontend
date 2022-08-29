import React, { useContext, useEffect, useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import Pageheader from '../../Pageheader'
import Pagetable from '../../Pagetable'
import { leaveappform, leaveapptable } from './LeaveAppjson'

const LeaveApplication = ({ ...props }) => {
  const [roleform] = useState(leaveappform)
  const [roletable] = useState(leaveapptable)
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

export default LeaveApplication
