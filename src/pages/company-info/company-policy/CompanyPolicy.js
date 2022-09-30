import React, { useState, useEffect } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageHeader from '../../PageHeader'
import { companyPolicyForm, companyPolicyTable } from './CompanyPolicyJson'
import { companyPolicyString } from '../../Strings'
import CompanyPolicyPageTable from '../company-policy/CompanyPolicyPageTable'
import { companyPolicy } from '../../../services/thunk/CompanyPolicyThunk'
import { useDispatch } from 'react-redux'

const CompanyPolicy = ({ ...props }) => {
  const [roleForm] = useState(companyPolicyForm)
  const [roleTable] = useState(companyPolicyTable)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(companyPolicy('companyPolicies'))
  }, [])

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
