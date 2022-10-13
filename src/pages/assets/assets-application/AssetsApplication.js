import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import { assetAppTable } from './AssetsAppJson'
import PageTable from '../../PageTable'
import { useDispatch } from 'react-redux'
import { toastNotify } from '../../../layout/Index'
import { Button } from 'reactstrap'
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
  const [roleTable] = useState(assetAppTable)
  const [sm, updateSm] = useState(false)
  const history = useHistory()

  return (
    <React.Fragment>
      <Head title="Assets Appliaction" />
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
                    <li>
                      <a
                        href="#export"
                        onClick={(ev) => {
                          ev.preventDefault()
                        }}
                        className="btn btn-white btn-outline-light"
                      >
                        <Icon name="download-cloud"></Icon>
                        <span>{String.export}</span>
                      </a>
                    </li>
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
        <PageTable json={roleTable} />
      </Content>
    </React.Fragment>
  )
}

export default AssetApplication
