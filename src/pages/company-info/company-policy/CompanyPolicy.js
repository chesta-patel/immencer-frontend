import React, { useState, useEffect } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import { companyPolicyTable } from './CompanyPolicyJson'
import CompanyPolicyPageTable from '../company-policy/CompanyPolicyPageTable'
import { companyPolicy } from '../../../services/thunk/CompanyPolicyThunk'
import { useDispatch } from 'react-redux'
import { toastNotify } from '../../../layout/Index'
import { deleteCompanyPolicy } from '../../../services/thunk/DeleteCompanyPolicyThunk'
import {
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
} from '../../../components/Component'
import String from '../../../utils/String'
import { Button } from 'reactstrap'
import { useHistory } from 'react-router'
import { permissions } from '../../../layout/header/dropdown/PermissionJson'
var hasCompanyPolicyAddPermissions = false
permissions.map((permissionLIst, index) => {
  if (permissionLIst.modalName == 'CompanyPolicy') {
    console.log('CompanyPolicy', permissionLIst.add)
    hasCompanyPolicyAddPermissions = permissionLIst.add
  }
})

const CompanyPolicy = ({ ...props }) => {
  const [roleTable] = useState(companyPolicyTable)
  const [sm, updateSm] = useState(false)
  const history = useHistory()
  const [modal, setModal] = useState({
    edit: false,
    add: false,
    data: '',
  })
  const dispatch = useDispatch()
  const [deleteApiCallStatus, setDeleteApiCallStatus] = useState({
    status: '',
    message: '',
  })

  useEffect(() => {
    dispatch(companyPolicy('companyPolicies'))
  }, [])
  const callDeleteFormSubmit = async (id) => {
    let callAPI = await dispatch(deleteCompanyPolicy(id))
    if (callAPI?.payload?.data?.isSuccess) {
      setDeleteApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch(companyPolicy('companyPolicies'))
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
      <Head title="Company Policy" />
      <Content>
        {/* <PageHeader
          json={roleForm}
          string={companyPolicyString}
          callFormSubmit={callFormSubmit}
          apiCallStatus={apiCallStatus}
          setApiCallStatus={setApiCallStatus}
          setModal={setModal}
          modal={modal}
          updateFormSubmit={updateFormSubmit}
        /> */}
        {/* <CompanyPolicyPageTable json={roleTable} /> */}
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle tag="h3" page>
                {String.company_policy}
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
                      {hasCompanyPolicyAddPermissions && (
                        <Button
                          color="primary"
                          className="btn-icon"
                          onClick={() => {
                            history.push({
                              pathname: '/company-policy/create',
                              state: { add: true, edit: false, data: '' },
                            })
                          }}
                        >
                          <Icon name="plus"></Icon>
                        </Button>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <CompanyPolicyPageTable
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

export default CompanyPolicy
