import React, { useState, useEffect } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageHeader from '../../PageHeader'
import { companyPolicyForm, companyPolicyTable } from './CompanyPolicyJson'
import { companyPolicyString } from '../../Strings'
import CompanyPolicyPageTable from '../company-policy/CompanyPolicyPageTable'
import { companyPolicy } from '../../../services/thunk/CompanyPolicyThunk'
import { useDispatch } from 'react-redux'
import { getFormData } from '../../../utils/Helpers'
import { createNewCompanyPolicy } from '../../../services/thunk/CreateNewCompanyPolicyThunk'
import { toastNotify } from '../../../layout/Index'

const CompanyPolicy = ({ ...props }) => {
  const [roleForm] = useState(companyPolicyForm)
  const [roleTable] = useState(companyPolicyTable)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(companyPolicy('companyPolicies'))
  }, [])

  const [apiCallStatus, setApiCallStatus] = useState({
    status: '',
    message: '',
  })

  const callFormSubmit = async (data) => {
    const dataAsFormData = getFormData(data)
    let callAPI = await dispatch(createNewCompanyPolicy(dataAsFormData))
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch(companyPolicy('companyPolicies'))
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
    }
  }

  return (
    <React.Fragment>
      <Head title="Company Policy" />
      <Content>
        <PageHeader
          json={roleForm}
          string={companyPolicyString}
          callFormSubmit={callFormSubmit}
          apiCallStatus={apiCallStatus}
          setApiCallStatus={setApiCallStatus}
        />
        <CompanyPolicyPageTable json={roleTable} />
      </Content>
    </React.Fragment>
  )
}

export default CompanyPolicy
