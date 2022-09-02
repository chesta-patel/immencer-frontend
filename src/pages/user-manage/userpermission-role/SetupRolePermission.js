import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import { rolePermissonForm, rolePermissonTable } from './RolePermissonJson'
import PageHeader from '../../PageHeader'
import PageTable from '../../PageTable'
import { setupRoleString } from '../../Strings'

const SetupRolePermission = ({ ...props }) => {
  const [roleForm] = useState(rolePermissonForm)
  const [roleTable] = useState(rolePermissonTable)

  return (
    <React.Fragment>
      <Head title="Setup Role Permission" />
      <Content>
        <PageHeader json={roleForm} string={setupRoleString} />
        <PageTable json={roleTable} string={setupRoleString} />
      </Content>
    </React.Fragment>
  )
}

export default SetupRolePermission
