import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import Pageheader from '../../Pageheader'
import Pagetable from '../../Pagetable'
import { formfield, userpermission } from './Permissionjson'

const UserPermission = () => {
  const [roleform] = useState(formfield)
  const [roletable] = useState(userpermission)
  return (
    <React.Fragment>
      <Head title="Permission Page" />
      <Content>
        <Pageheader json={roleform} />
        <Pagetable json={roletable} />
      </Content>
    </React.Fragment>
  )
}

export default UserPermission
