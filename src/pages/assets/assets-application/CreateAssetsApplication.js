import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Modal } from 'reactstrap'
import {
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
} from '../../../components/Component'
import Content from '../../../layout/content/Content'
import { toastNotify } from '../../../layout/Index'

import { assetsApplication } from '../../../services/thunk/AssetsApplicationThunk'
import { fetchData } from '../../../services/thunk/AuthThunk'
import { addNewAssetsApp } from '../../../services/thunk/CreateNewAssetsAppThunk'
import { deleteAssetsApp } from '../../../services/thunk/DeleteAssetsAppThunk'
import { updateNewAssetsApp } from '../../../services/thunk/UpdateNewAssetsAppThunk'
import { getFormData } from '../../../utils/Helpers'
import PageHeader from '../../PageHeader'
import { assetsAppString } from '../../Strings'
import { assetAppForm } from './AssetsAppJson'
import { empData } from './../../../services/thunk/GetEmployee'

function CreateAssetsApplication() {
  const [strings, setStrings] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const [modal, setModal] = useState({
    edit: history.location.state?.edit,
    add: false,
    data: history.location.state?.data,
  })
  const [roleForm] = useState(assetAppForm)

  const [apiCallStatus, setApiCallStatus] = useState({
    status: '',
    message: '',
  })

  const { assetStatus } = useSelector((state) => state.dropdown)
  const { assetType } = useSelector((state) => state.dropdown)
  const { employeeData } = useSelector((state) => state.getEmp)

  // useEffect(() => {
  //   dispatch(fetchData('master/assetStatus'))
  //   dispatch(fetchData('assetType'))
  //   dispatch(empData('employee'))
  // }, [])
  //need to add dispatch
  //need to add dispatch for update
  useEffect(() => {
    var string = assetsAppString.find(function (element) {
      return element
    })
    setStrings(string)
  }, [strings])

  const callFormSubmit = async (data) => {
    // const dataAsFormData = getFormData(data)
    let callAPI = await dispatch(addNewAssetsApp(data))
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch(assetsApplication('asset'))
      history.push('/assets-application')
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
    let callAPI = await dispatch(updateNewAssetsApp({ data: data, id }))
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch(assetsApplication('asset'))
      history.push('/assets-application')
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
    }
  }

  const [roleFormUpdatedData, setRoleFormUpdatedData] = useState([])

  useEffect(() => {
    let updatedData = roleForm?.map((data) => {
      switch (data.key_name) {
        case 'status':
          return { ...data, option: assetStatus }

        case 'type':
          return { ...data, option: assetType }

        case 'assignee':
          return { ...data, option: employeeData }

        default:
          return data
      }
    })
    setRoleFormUpdatedData(updatedData)
  }, [roleForm, assetStatus, assetType, employeeData])

  return (
    <>
      <Content>
        <PageHeader
          json={roleFormUpdatedData}
          string={assetsAppString}
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

export default CreateAssetsApplication
