import React, { useEffect, useState } from 'react'
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
import { addNewAssetsApp } from '../../../services/thunk/CreateNewAssetsAppThunk'
import { deleteAssetsApp } from '../../../services/thunk/DeleteAssetsAppThunk'
import { updateNewAssetsApp } from '../../../services/thunk/UpdateNewAssetsAppThunk'
import { getFormData } from '../../../utils/Helpers'
import PageHeader from '../../PageHeader'
import { assetsAppString } from '../../Strings'
import { assetAppForm } from './AssetsAppJson'

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
  const [deleteApiCallStatus, setDeleteApiCallStatus] = useState({
    status: '',
    message: '',
  })
  //need to add dispatch
  //need to add dispatch for update

  useEffect(() => {
    var string = assetsAppString.find(function (element) {
      return element
    })
    setStrings(string)
  }, [strings])

  const callFormSubmit = async (data) => {
    const dataAsFormData = getFormData(data)
    let callAPI = await dispatch(addNewAssetsApp(dataAsFormData))
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch(assetsApplication('assetsApplication'))
      window.location.href = '/assets-application'
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
      updateNewAssetsApp({ data: dataAsFormData, id })
    )
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch(assetsApplication('assetsApplication'))
      window.location.href = '/assets-application'
      // setModal({
      //   edit: false,
      //   add: false,
      //   data: '',
      // })
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
    }
  }
  const callDeleteFormSubmit = async (id) => {
    let callAPI = await dispatch(deleteAssetsApp(id))
    if (callAPI?.payload?.data?.isSuccess) {
      setDeleteApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch(assetsApplication('assetsApp'))
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setDeleteApiCallStatus({
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
