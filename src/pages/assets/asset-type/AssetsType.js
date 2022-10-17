import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageTable from '../../PageTable'
import { assetTypeTable } from './AssetTypeJson'
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
import AssetsPageTable from './AssetsPageTable'

const AssetsType = ({ ...props }) => {
  const [roleTable] = useState(assetTypeTable)
  const [sm, updateSm] = useState(false)
  const history = useHistory()
  const [modal, setModal] = useState({
    edit: false,
    add: false,
    data: '',
  })

  return (
    <React.Fragment>
      <Head title="Assets Type" />
      <Content>
        {/* <PageHeader
          json={roleForm}
          string={assetsTypeString}
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
                {String.assets_type}
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
                          history.push('/assets/create-assetsType')
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
        <AssetsPageTable
          json={roleTable}
          // callDeleteFormSubmit={callDeleteFormSubmit}
          // deleteApiCallStatus={deleteApiCallStatus}
          // setDeleteApiCallStatus={setDeleteApiCallStatus}
          setModal={setModal}
          modal={modal}
        />
      </Content>
    </React.Fragment>
  )
}

export default AssetsType
