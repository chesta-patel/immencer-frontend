import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
} from '../../../components/Component'
import Content from '../../../layout/content/Content'
import { toastNotify } from '../../../layout/Index'
import PageHeader from '../../PageHeader'
import { assetsAppString } from '../../Strings'
import { assetTypeForm } from '../asset-type/AssetTypeJson'
import { assetAppForm } from './AssetsAppJson'

function CreateAssetsApplication() {
  const [strings, setStrings] = useState('')
  const dispatch = useDispatch()
  const [modal, setModal] = useState({
    edit: false,
    add: false,
    data: '',
  })
  const [roleForm] = useState(assetAppForm)

  const [apiCallStatus, setApiCallStatus] = useState({
    status: '',
    message: '',
  })
  //need to add dispatch
  const callFormSubmit = async (data) => {
    // const dataAsFormData = getFormData(data)
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
    // const dataAsFormData = getFormData(data)
    let callAPI = await dispatch()
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch()
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
  useEffect(() => {
    var string = assetsAppString.find(function (element) {
      return element
    })
    setStrings(string)
  }, [strings])

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
