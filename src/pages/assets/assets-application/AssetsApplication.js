import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import { assetAppForm, assetAppTable } from './AssetsAppJson'
import Pageheader from '../../PageHeader'
import PageTable from '../../PageTable'
import { assetsAppString } from '../../Strings'
import { useDispatch } from 'react-redux'
import { getFormData } from '../../../utils/Helpers'
import { toastNotify } from '../../../layout/Index'
import PageHeader from '../../PageHeader'
import { Card } from 'reactstrap'

const AssetApplication = ({ ...props }) => {
  const [roleForm] = useState(assetAppForm)
  const [roleTable] = useState(assetAppTable)
  const dispatch = useDispatch()
  const [modal, setModal] = useState({
    edit: false,
    add: false,
    data: '',
  })
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
    <React.Fragment>
      <Head title="Assets Appliaction" />
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

        <PageTable json={roleTable} />
      </Content>
    </React.Fragment>
  )
}

export default AssetApplication
