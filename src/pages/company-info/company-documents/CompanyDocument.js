import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageHeader from '../../PageHeader'
import PageTable from '../../PageTable'
import { companyDocForm, companyDocTable } from './CompanyDocumentJson'
import { companyDocString } from '../../Strings'

const CompanyDocument = ({ ...props }) => {
  const [roleForm] = useState(companyDocForm)
  const [roleTable] = useState(companyDocTable)

  return (
    <React.Fragment>
      <Head title="Company Document" />
      <Content>
        <PageHeader json={roleForm} string={companyDocString} />
        <PageTable json={roleTable} string={companyDocString} />
      </Content>
    </React.Fragment>
  )
}

export default CompanyDocument
