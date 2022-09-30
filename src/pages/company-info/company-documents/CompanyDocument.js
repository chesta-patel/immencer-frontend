import React, { useEffect, useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageHeader from '../../PageHeader'
import CompanyDocumentPageTable from './CompanyDocumentPageTable'
import { companyDocForm, companyDocTable } from './CompanyDocumentJson'
import { companyDocString } from '../../Strings'
import { companyDocument } from '../../../services/thunk/CompanyDocumentThunk'
import { useDispatch } from 'react-redux'

const CompanyDocument = ({ ...props }) => {
  const [roleForm] = useState(companyDocForm)
  const [roleTable] = useState(companyDocTable)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(companyDocument('companyDocuments'))
  }, [])

  return (
    <React.Fragment>
      <Head title="Company Document" />
      <Content>
        <PageHeader json={roleForm} string={companyDocString} />
        <CompanyDocumentPageTable json={roleTable} />
      </Content>
    </React.Fragment>
  )
}

export default CompanyDocument
