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
import { updateNewCompanyPolicy } from '../../../services/thunk/UpdateNewCompanyPolicyThunk'
import { toastNotify } from '../../../layout/Index'
import { deleteCompanyPolicy } from '../../../services/thunk/DeleteCompanyPolicyThunk'

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

  const [deleteApiCallStatus, setDeleteApiCallStatus] = useState({
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

  const updateFormSubmit = async (data, id) => {
    const dataAsFormData = getFormData(data)
    let callAPI = await dispatch(
      updateNewCompanyPolicy({ data: dataAsFormData, id })
    )
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

  const callDeleteFormSubmit = async (id) => {
    let callAPI = await dispatch(deleteCompanyPolicy(id))
    if (callAPI?.payload?.data?.isSuccess) {
      setDeleteApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch(companyPolicy('companyPolicies'))
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setDeleteApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
    }
  }
  const [modal, setModal] = useState({
    edit: false,
    add: false,
    data: '',
  })

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
          setModal={setModal}
          modal={modal}
          updateFormSubmit={updateFormSubmit}
        />
        {/* <CompanyPolicyPageTable json={roleTable} /> */}
        <CompanyPolicyPageTable
          json={roleTable}
          callDeleteFormSubmit={callDeleteFormSubmit}
          deleteApiCallStatus={deleteApiCallStatus}
          setDeleteApiCallStatus={setDeleteApiCallStatus}
          setModal={setModal}
          modal={modal}
        />
      </Content>
    </React.Fragment>
  )
}

export default CompanyPolicy
