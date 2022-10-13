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
import { companyDocument } from '../../../services/thunk/CompanyDocumentThunk'
import { addNewCompanyDoc } from '../../../services/thunk/CreateNewCompanyDocThunk'
import { deleteCompanyDoc } from '../../../services/thunk/DeleteCompanyDocThunk'
import { updateNewCompanyDoc } from '../../../services/thunk/UpdateNewCompanyDocThunk'
import { getFormData } from '../../../utils/Helpers'
import PageHeader from '../../PageHeader'
import { companyDocString } from '../../Strings'
import { companyDocForm } from './CompanyDocumentJson'

function CreateCompanyDocument() {
  const [strings, setStrings] = useState('')
  const [roleForm] = useState(companyDocForm)
  const dispatch = useDispatch()
  const history = useHistory()
  const [modal, setModal] = useState({
    edit: history.location.state.edit,
    add: false,
    data: history.location.state.data,
  })
  const [apiCallStatus, setApiCallStatus] = useState({
    status: '',
    message: '',
  })
  const [deleteApiCallStatus, setDeleteApiCallStatus] = useState({
    status: '',
    message: '',
  })

  useEffect(() => {
    var string = companyDocString.find(function (element) {
      return element
    })
    setStrings(string)
  }, [strings])
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
      window.location.href = '/company-document'
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
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch(companyDocument('companyDocument'))
      window.location.href = '/company-document'
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
    <>
      <Content>
        {/* <BlockHead>
          <BlockBetween className="detail-card">
            <BlockHeadContent>
              <BlockTitle tag="h3" page>
                {strings.form_title}
              </BlockTitle>
              <BlockDes className="text-soft"></BlockDes>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead> */}
        <PageHeader
          json={roleForm}
          string={companyDocString}
          callFormSubmit={callFormSubmit}
          apiCallStatus={apiCallStatus}
          setApiCallStatus={setApiCallStatus}
          updateFormSubmit={updateFormSubmit}
          setModal={setModal}
          modal={modal}
        />
      </Content>
    </>
  )
}

export default CreateCompanyDocument
