import React, { useState, useEffect } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import { assetAppTable } from './AssetsAppJson'
import PageTable from '../../PageTable'
import { toastNotify } from '../../../layout/Index'
import { Button } from 'reactstrap'
import AssetsApplicationPageTable from './AssetsApplicationPageTable'
import { assetsApplication } from '../../../services/thunk/AssetsApplicationThunk'
import { useDispatch } from 'react-redux'
import { deleteAssetsApp } from './../../../services/thunk/DeleteAssetsAppThunk'
import {
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
} from '../../../components/Component'
import { useHistory } from 'react-router'
import String from '../../../utils/String'

const AssetApplication = ({ ...props }) => {
  const dispatch = useDispatch()
  const [roleTable] = useState(assetAppTable)
  const [sm, updateSm] = useState(false)
  const history = useHistory()
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
    dispatch(assetsApplication('asset'))
  }, [])
  const callDeleteFormSubmit = async (id) => {
    let callAPI = await dispatch(deleteAssetsApp(id))
    console.log('call API Delete =====> ', callAPI)
    if (callAPI?.payload?.data?.isSuccess) {
      setDeleteApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch(assetsApplication('asset'))
      setModal({ edit: false, add: false, data: '' })
      window.location.href = '/assets-application'
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
      <Head title="Assets Application" />
      <Content>
        {/* <PageHeader
          json={roleForm}
          string={assetsAppString}
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
                {String.assets_application}
              </BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 d-none ${
                    sm ? 'active' : ''
                  }`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="menu-alt-r"></Icon>
                </Button>
                <div
                  className="toggle-expand-content"
                  style={{ display: 'block' }}
                >
                  <ul className="nk-block-tools g-3">
                    <li className="nk-block-tools-opt">
                      <Button
                        color="primary"
                        className="btn-icon"
                        onClick={() => {
                          history.push('/assets/create')
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
        <AssetsApplicationPageTable
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

export default AssetApplication
