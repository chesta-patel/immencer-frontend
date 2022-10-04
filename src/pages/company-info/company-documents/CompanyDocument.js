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
import { toastNotify } from '../../../layout/Index'

const CompanyDocument = ({ ...props }) => {
  const [roleForm] = useState(companyDocForm)
  const [roleTable] = useState(companyDocTable)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(companyDocument('companyDocuments'))
  }, [])

  const [apiCallStatus, setApiCallStatus] = useState({
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
      dispatch(companyDocument('companyDocuments'))
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
      <Head title="Company Document" />
      <Content>
        <PageHeader
          json={roleForm}
          string={companyDocString}
          callFormSubmit={callFormSubmit}
          apiCallStatus={apiCallStatus}
          setApiCallStatus={setApiCallStatus}
        />
        <CompanyDocumentPageTable json={roleTable} />
      </Content>
    </React.Fragment>
  )
}

export default CompanyDocument
