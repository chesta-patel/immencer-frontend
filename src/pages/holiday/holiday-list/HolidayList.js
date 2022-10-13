import React, { useState, useEffect } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageHeader from '../../PageHeader'
import { holidayListForm, holidayListTable } from './HolidayListJson'
import { holidayListString } from '../../Strings'
import { holidayList } from '../../../services/thunk/HolidayListThunk'
import { getFormData } from '../../../utils/Helpers'
import { useDispatch } from 'react-redux'
import { toastNotify } from '../../../layout/Index'
import HolidayPageTable from './HolidayPageTable'
import { createNewHolidayList } from './../../../services/thunk/CreateNewHolidayListThunk'
import { updateNewHolidayList } from '../../../services/thunk/UpdateNewHolidayListThunk'
import { deleteHolidayData } from './../../../services/thunk/DeleteHolidayListThunk'
import { fetchData } from '../../../services/thunk/AuthThunk'
import { useSelector } from 'react-redux'

const HolidayList = ({ ...props }) => {
  const [roleForm] = useState(holidayListForm)
  const [roleTable] = useState(holidayListTable)
  const [modal, setModal] = useState({
    edit: false,
    add: false,
    data: '',
  })
  const { holidayType } = useSelector((state) => state.dropdown)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(holidayList('holiday'))
    dispatch(fetchData('master/holidayType'))
  }, [])

  const [apiCallStatus, setApiCallStatus] = useState({
    status: '',
    message: '',
  })

  const [deleteApiCallStatus, setDeleteApiCallStatus] = useState({
    status: '',
    message: '',
  })
  //need to add dispatch
  const callFormSubmit = async (data) => {
    let callAPI = await dispatch(createNewHolidayList(data))
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch(holidayList('holiday'))
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
    }
  }
  //need to add dispatch for update HolidayList
  const updateFormSubmit = async (data, id) => {
    let callAPI = await dispatch(updateNewHolidayList({ data, id }))
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch(holidayList('holiday'))
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

  const callDeleteFormSubmit = async (id) => {
    let callAPI = await dispatch(deleteHolidayData(id))
    if (callAPI?.payload?.data?.isSuccess) {
      setDeleteApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch(holidayList('holiday'))
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setDeleteApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
    }
  }

  const [roleFormData, setRoleFormData] = useState([])

  useEffect(() => {
    if (roleForm?.length > 0 && Array.isArray(holidayType)) {
      let findType = roleForm?.filter(
        (data) => data.type === 'select' && data.key_name === 'type'
      )
      let findTypeUpdatedData = { ...findType?.[0], option: holidayType }

      let filterRoleForm = roleForm?.filter(
        (data) => data.type !== 'select' && data.key_name !== 'type'
      )

      let filterRoleFormUpdated = [...filterRoleForm, findTypeUpdatedData]

      setRoleFormData(filterRoleFormUpdated)
    }
  }, [roleForm, holidayType])

  return (
    <React.Fragment>
      <Head title="Holiday List" />
      <Content>
        <PageHeader
          json={roleFormData}
          string={holidayListString}
          callFormSubmit={callFormSubmit}
          apiCallStatus={apiCallStatus}
          setApiCallStatus={setApiCallStatus}
          setModal={setModal}
          modal={modal}
          updateFormSubmit={updateFormSubmit}
        />
        <HolidayPageTable
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

export default HolidayList
