import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Content from '../../../layout/content/Content'
import { toastNotify } from '../../../layout/Index'
import { createNewHolidayList } from '../../../services/thunk/CreateNewHolidayListThunk'
import { holidayList } from '../../../services/thunk/HolidayListThunk'
import { updateNewHolidayList } from '../../../services/thunk/UpdateNewHolidayListThunk'
import PageHeader from '../../PageHeader'
import { holidayListString } from '../../Strings'
import { holidayListForm } from './HolidayListJson'

function CreateHoliday() {
  const [roleFormData, setRoleFormData] = useState([])
  const [roleForm] = useState(holidayListForm)
  const { holidayType } = useSelector((state) => state.dropdown)
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

  //need to add dispatch
  const callFormSubmit = async (data) => {
    let callAPI = await dispatch(createNewHolidayList(data))
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      history.push('/holiday')
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
      history.push('/holiday')
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
    }
  }
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

      setRoleFormData(filterRoleFormUpdated.sort())

      console.log('roleFormData', roleFormData)
    }
  }, [roleForm, holidayType])

  return (
    <>
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
      </Content>
    </>
  )
}

export default CreateHoliday
