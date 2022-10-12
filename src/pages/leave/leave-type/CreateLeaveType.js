import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Content from '../../../layout/content/Content'
import { toastNotify } from '../../../layout/Index'
import { getFormData } from '../../../utils/Helpers'
import PageHeader from '../../PageHeader'
import { leaveTypeString } from '../../Strings'
import { leaveForm } from './LeaveTypeJson'

function CreateLeaveType() {
  const [roleForm] = useState(leaveForm)
  const [modal, setModal] = useState({
    edit: false,
    add: false,
    data: '',
  })
  const dispatch = useDispatch()
  const [apiCallStatus, setApiCallStatus] = useState({
    status: '',
    message: '',
  })
  //need to add dispatch
  const callFormSubmit = async (data) => {
    const dataAsFormData = getFormData(data)
    let callAPI = await dispatch()
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch()
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
    }
  }

  //need to add dispatch for update
  const updateFormSubmit = async (data, id) => {
    const dataAsFormData = getFormData(data)
    let callAPI = await dispatch()
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch()
      setModal({
        edit: false,
        add: false,
        data: '',
      })
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
          string={leaveTypeString}
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

export default CreateLeaveType
