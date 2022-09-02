import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageHeader from '../../PageHeader'
import PageTable from '../../PageTable'
import { companyPolicyForm, companyPolicyTable } from './CompanyPolicyJson'
import { companyPolicyString } from '../../Strings'

const CompanyPolicy = ({ ...props }) => {
  const [roleForm] = useState(companyPolicyForm)
  const [roleTable] = useState(companyPolicyTable)

  return (
    <React.Fragment>
      <Head title="Company Policy" />
      <Content>
        <PageHeader json={roleForm} string={companyPolicyString} />
        <PageTable json={roleTable} string={companyPolicyString} />
      </Content>
    </React.Fragment>
  )
}

export default CompanyPolicy
