import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import { rolepermissonform, rolepermissontable } from './Rolepermissonjson'
import Pageheader from '../../Pageheader'
import Pagetable from '../../Pagetable'

const SetupRolePermission = ({ ...props }) => {
  const [roleform] = useState(rolepermissonform)
  const [roletable] = useState(rolepermissontable)
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

export default SetupRolePermission
