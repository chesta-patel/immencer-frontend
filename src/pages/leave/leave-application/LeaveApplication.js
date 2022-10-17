import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageTable from '../../PageTable'
import { leaveAppTable } from './LeaveAppJson'
import { useDispatch } from 'react-redux'
import { toastNotify } from '../../../layout/Index'
import { Button, Card, CardBody, Col } from 'reactstrap'
import {
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  PreviewCard,
  Row,
} from '../../../components/Component'
import './leaveapplication.scss'
import String from '../../../utils/String'
import { useHistory } from 'react-router'

const LeaveApplication = ({ ...props }) => {
  const [roleTable] = useState(leaveAppTable)
  const [sm, updateSm] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()
  // const [modal, setModal] = useState({
  //   edit: false,
  //   add: false,
  //   data: '',
  // })
  const [setApiCallStatus] = useState({
    status: '',
    message: '',
  })
  //need to add dispatch
  const callFormSubmit = async (data) => {
    // const dataAsFormData = getFormData(data)
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
    // const dataAsFormData = getFormData(data)
    let callAPI = await dispatch()
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch()
      // setModal({
      //   edit: false,
      //   add: false,
      //   data: '',
      // })
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
      <Head title="Leave Application" />
      <Content>
        {/* <PageHeader
          json={roleForm}
          string={leaveAppString}
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
                {String.leave_application}
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
                          history.push('/leave/apply-leave')
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
        <PreviewCard>
          <Row>
            <Col sm="4">
              <Card className="leaveCard" inverse>
                <CardBody>
                  <h5 className="grantedLeave">{`${String.granted} ${String.leave}`}</h5>
                  <h4 className="grantedLeave">18</h4>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card className="leaveCard" inverse>
                <CardBody>
                  <h5 className="appliedLeave">{`${String.applied} ${String.leave}`}</h5>
                  <h4 className="appliedLeave">10</h4>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card className="leaveCard" inverse>
                <CardBody>
                  <h5 className="balance">{`${String.balance}`}</h5>
                  <h4 className="balance">8</h4>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </PreviewCard>
        <PageTable json={roleTable} />
      </Content>
    </React.Fragment>
  )
}

export default LeaveApplication
