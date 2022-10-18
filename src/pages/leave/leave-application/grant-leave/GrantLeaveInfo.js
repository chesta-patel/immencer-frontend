import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import {
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  PreviewCard,
} from '../../../../components/Component'
import Content from '../../../../layout/content/Content'
import Head from '../../../../layout/head/Head'
import String from '../../../../utils/String'
import GrantLeavePageTable from './GrantLeavePageTable'
import GrantLeaveTable from './GrantLeaveTable'

function GrantLeaveInfo() {
  const [sm, updateSm] = useState(false)
  const history = useHistory()

  return (
    <React.Fragment>
      <Head title="Grant Leave" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle tag="h3" page>
                {String.grant_leave}
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
                      <Button
                        color="primary"
                        onClick={() => {
                          history.push('/grantLeaveInfo/grant-leave')
                        }}
                      >
                        <Icon name="plus"></Icon>
                        {`${String.grant} ${String.leave}`}
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <GrantLeavePageTable />
        {/* <Modal
          isOpen={modal.add}
          toggle={() => setModal({ add: false })}
          className="modal-dialog-centered"
          size="md"
        >
          <ModalBody>
            <a
              href="#cancel"
              onClick={(ev) => {
                ev.preventDefault()
                onFormCancel()
              }}
              className="close"
            >
              <Icon name="cross-sm"></Icon>
            </a>
            <GrantLeave />
          </ModalBody>
        </Modal> */}
      </Content>
    </React.Fragment>
  )
}

export default GrantLeaveInfo
