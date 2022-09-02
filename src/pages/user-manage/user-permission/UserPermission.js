import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageHeader from '../../PageHeader'
import PageTable from '../../PageTable'
import { formField, userPermission } from './PermissionJson'
import { permissionString } from '../../Strings'

const UserPermission = () => {
  const [roleForm] = useState(formField)
  const [roleTable] = useState(userPermission)

  return (
    <React.Fragment>
      <Head title="Permission Page" />
      <Content>
        <PageHeader json={roleForm} string={permissionString} />
        <PageTable json={roleTable} string={permissionString} />
      </Content>
    </React.Fragment>
  )
}

export default UserPermission
