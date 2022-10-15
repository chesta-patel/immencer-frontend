import React, { useEffect, useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import CompanyDocumentPageTable from './CompanyDocumentPageTable'
import { companyDocForm, companyDocTable } from './CompanyDocumentJson'
import { companyDocument } from '../../../services/thunk/CompanyDocumentThunk'
import { useDispatch } from 'react-redux'
import { getFormData } from '../../../utils/Helpers'
import { addNewCompanyDoc } from '../../../services/thunk/CreateNewCompanyDocThunk'
import { updateNewCompanyDoc } from '../../../services/thunk/UpdateNewCompanyDocThunk'
import { toastNotify } from '../../../layout/Index'
import { deleteCompanyDoc } from './../../../services/thunk/DeleteCompanyDocThunk'
import {
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
} from '../../../components/Component'
import { Button } from 'reactstrap'
import String from '../../../utils/String'
import { useHistory } from 'react-router'

const CompanyDocument = ({ ...props }) => {
  const [roleTable] = useState(companyDocTable)
  const [sm, updateSm] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()
  const [modal, setModal] = useState({
    edit: false,
    add: false,
    data: '',
  })
  const [deleteApiCallStatus, setDeleteApiCallStatus] = useState({
    status: '',
    message: '',
  })

  useEffect(() => {
    dispatch(companyDocument('companyDocument'))
  }, [])
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
        {/* <PageHeader
          json={roleForm}
          string={companyDocString}
          callFormSubmit={callFormSubmit}
          apiCallStatus={apiCallStatus}
          setApiCallStatus={setApiCallStatus}
          setModal={setModal}
          modal={modal}
          updateFormSubmit={updateFormSubmit}
        /> */}
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle tag="h3" page>
                {String.company_document}
              </BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${
                    sm ? 'active' : ''
                  }`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="menu-alt-r"></Icon>
                </Button>
                <div
                  className="toggle-expand-content"
                  style={{ display: sm ? 'block' : 'none' }}
                >
                  <ul className="nk-block-tools g-3">
                    <li className="nk-block-tools-opt">
                      <Button
                        color="primary"
                        className="btn-icon"
                        onClick={() => {
                          history.push({
                            pathname: '/company-document/create',
                            state: { add: true, edit: false, data: '' },
                          })
                        }}
                      >
                        <Icon name="plus"></Icon>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
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
