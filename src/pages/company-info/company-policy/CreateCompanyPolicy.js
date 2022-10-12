import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Content from '../../../layout/content/Content'
import { toastNotify } from '../../../layout/Index'
import { createNewCompanyPolicy } from '../../../services/thunk/CreateNewCompanyPolicyThunk'
import { updateNewCompanyPolicy } from '../../../services/thunk/UpdateNewCompanyPolicyThunk'
import { getFormData } from '../../../utils/Helpers'
import PageHeader from '../../PageHeader'
import { companyPolicyString } from '../../Strings'
import { companyPolicy } from '../../user-manage/UserData'
import { companyPolicyForm } from './CompanyPolicyJson'

function CreateCompanyPolicy() {
  const [roleForm] = useState(companyPolicyForm)
  const dispatch = useDispatch()
  const history = useHistory()
  const [apiCallStatus, setApiCallStatus] = useState({
    status: '',
    message: '',
  })
  const [modal, setModal] = useState({
    edit: history.location.state.edit,
    add: false,
    data: history.location.state.data,
  })

  const updateFormSubmit = async (data, id) => {
    const dataAsFormData = getFormData(data)
    debugger

    let callAPI = await dispatch(
      updateNewCompanyPolicy({ data: dataAsFormData, id })
    )
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      // dispatch(companyPolicy('companyPolicies'))
      window.location.href = '/company-info/company-policy'
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
    }
  }
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
      window.location.href = '/company-info/company-policy'
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
    }
  }

  return (
    <>
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
      </Content>
    </>
  )
}

export default CreateCompanyPolicy
