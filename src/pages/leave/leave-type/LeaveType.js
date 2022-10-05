import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageHeader from '../../PageHeader'
import PageTable from '../../PageTable'
import { leaveForm, leaveTable } from './LeaveTypeJson'
import { leaveTypeString } from '../../Strings'
import { useDispatch } from 'react-redux'
import { getFormData } from '../../../utils/Helpers'
import { toastNotify } from '../../../layout/Index'

const LeaveType = ({ ...props }) => {
  const [roleForm] = useState(leaveForm)
  const [roleTable] = useState(leaveTable)
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
  return (
    <React.Fragment>
      <Head title="Leave Type" />
      <Content>
        <PageHeader
          json={roleForm}
          string={leaveTypeString}
          callFormSubmit={callFormSubmit}
          apiCallStatus={apiCallStatus}
          setApiCallStatus={setApiCallStatus}
        />
        <PageTable json={roleTable} />
      </Content>
    </React.Fragment>
  )
}

export default LeaveType
