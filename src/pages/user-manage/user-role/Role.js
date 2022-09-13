import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import { userRoleColum, formField } from './RoleJson'
import PageHeader from '../../PageHeader'
import PageTable from '../../PageTable'
import { roleString } from '../../Strings'

const Role = ({ ...props }) => {
  const [roleField] = useState(formField)
  const [roleTable] = useState(userRoleColum)

  return (
    <React.Fragment>
      <Head title="Role" />
      <Content>
        <PageHeader json={roleField} string={roleString} />
        <PageTable json={roleTable} string={roleString} />
      </Content>
    </React.Fragment>
  )
}

export default Role
