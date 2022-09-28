import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageHeader from '../../PageHeader'
import PageTable from '../../PageTable'
import { companyPolicyForm, companyPolicyTable } from './CompanyPolicyJson'
import { companyPolicyString } from '../../Strings'
import CompanyPolicyPageTable from '../../CompanyPolicyPageTable'

const CompanyPolicy = ({ ...props }) => {
  const [roleForm] = useState(companyPolicyForm)
  const [roleTable] = useState(companyPolicyTable)

  return (
    <React.Fragment>
      <Head title="Company Policy" />
      <Content>
        <PageHeader json={roleForm} string={companyPolicyString} />
        <CompanyPolicyPageTable json={roleTable} />
      </Content>
    </React.Fragment>
  )
}

export default CompanyPolicy
