import React, { useEffect, useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageTable from '../../PageTable'
import { leaveAppTable } from './LeaveAppJson'
import { useDispatch } from 'react-redux'
import { toastNotify } from '../../../layout/Index'
import { Button, Card, CardBody, Col, Modal, ModalBody } from 'reactstrap'
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
import { fetchData } from '../../../services/thunk/AuthThunk'
import { empData } from '../../../services/thunk/GetEmployee'
import GrantLeave from './grant-leave/GrantLeave'
import styled from 'styled-components'

const LeaveApplication = ({ ...props }) => {
  const [modal, setModal] = useState({
    edit: false,
    add: false,
  })
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

  const Percent = styled.div`
    color: ${({ color }) => color};
  `
  useEffect(() => {
    dispatch(fetchData('master/leaveType'))
    dispatch(fetchData('master/leaveDayType'))
    dispatch(empData('employee'))
  }, [])
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
  // function to close the form modal
  const onFormCancel = () => {
    setModal({ edit: false, add: false })
  }

  //change color according positive and negative number
  const handleColors = (value) => {
    if (value > 0) return 'green'
    if (value < 0) return 'red'
    return 'gray'
  }
  return (
    <React.Fragment>
      <Head title="Leave Application" />
      <Content>
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
                        onClick={() => {
                          history.push('/leave/apply-leave')
                        }}
                      >
                        <Icon name="plus"></Icon>
                        {`${String.apply} ${String.leave}`}
                      </Button>
                    </li>
                    <li>
                      <Button
                        color="primary"
                        onClick={() => {
                          history.push('/grantLeaveInfo')
                        }}
                      >
                        {`${String.grant} ${String.leave}`}
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
                <CardBody className="card-text">
                  <h5 className="grantedLeave">{`${String.granted} ${String.leave}`}</h5>
                  <Percent color={handleColors(18)}>18</Percent>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card className="leaveCard" inverse>
                <CardBody className="card-text">
                  <h5 className="appliedLeave">{`${String.applied} ${String.leave}`}</h5>
                  <Percent color={handleColors(19)}>19</Percent>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card className="leaveCard" inverse>
                <CardBody className="card-text">
                  <h5 className="balance">{`${String.balance}`}</h5>
                  <Percent color={handleColors(-1)}>-1</Percent>
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
