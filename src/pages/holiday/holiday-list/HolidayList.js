import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageHeader from '../../PageHeader'
import PageTable from '../../PageTable'
import { holidayListForm, holidayListTable } from './HolidayListJson'
import { holidayListStrig } from '../../Strings'
import { getFormData } from '../../../utils/Helpers'
import { useDispatch } from 'react-redux'
import { toastNotify } from '../../../layout/Index'

const HolidayList = ({ ...props }) => {
  const [roleForm] = useState(holidayListForm)
  const [roleTable] = useState(holidayListTable)
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
      <Head title="Holiday List" />
      <Content>
        <PageHeader
          json={roleForm}
          string={holidayListStrig}
          callFormSubmit={callFormSubmit}
          apiCallStatus={apiCallStatus}
          setApiCallStatus={setApiCallStatus}
        />
        <PageTable json={roleTable} />
      </Content>
    </React.Fragment>
  )
}

export default HolidayList
