import React, { useEffect, useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageHeader from '../../PageHeader'
import CompanyDocumentPageTable from './CompanyDocumentPageTable'
import { companyDocForm, companyDocTable } from './CompanyDocumentJson'
import { companyDocString } from '../../Strings'
import { companyDocument } from '../../../services/thunk/CompanyDocumentThunk'
import { useDispatch, useSelector } from 'react-redux'
import { getFormData, logFormData } from '../../../utils/Helpers'
import { addNewCompanyDoc } from '../../../services/thunk/CreateNewCompanyDocThunk'
import { updateNewCompanyDoc } from '../../../services/thunk/UpdateNewCompanyDocThunk'

import { toastNotify } from '../../../layout/Index'
import { deleteCompanyDoc } from './../../../services/thunk/DeleteCompanyDocThunk'

const CompanyDocument = ({ ...props }) => {
  const [roleForm] = useState(companyDocForm)
  const [roleTable] = useState(companyDocTable)
  const [modal, setModal] = useState({
    edit: false,
    add: false,
    data: '',
  })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(companyDocument('companyDocument'))
  }, [])

  const [apiCallStatus, setApiCallStatus] = useState({
    status: '',
    message: '',
  })

  const [deleteApiCallStatus, setDeleteApiCallStatus] = useState({
    status: '',
    message: '',
  })

  const callFormSubmit = async (data) => {
    const dataAsFormData = getFormData(data)
    let callAPI = await dispatch(addNewCompanyDoc(dataAsFormData))
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch(companyDocument('companyDocument'))
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
      updateNewCompanyDoc({ data: dataAsFormData, id })
    )
    console.log(callAPI)
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch(companyDocument('companyDocument'))
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
    let callAPI = await dispatch(deleteCompanyDoc(id))
    console.log('call API Delete =====> ', callAPI)
    if (callAPI?.payload?.data?.isSuccess) {
      setDeleteApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch(companyDocument('companyDocument'))
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setDeleteApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
    }
  }

  return (
    <React.Fragment>
      <Head title="Company Document" />
      <Content>
        <PageHeader
          json={roleForm}
          string={companyDocString}
          callFormSubmit={callFormSubmit}
          apiCallStatus={apiCallStatus}
          setApiCallStatus={setApiCallStatus}
          setModal={setModal}
          modal={modal}
          updateFormSubmit={updateFormSubmit}
        />
        <CompanyDocumentPageTable
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

export default CompanyDocument
