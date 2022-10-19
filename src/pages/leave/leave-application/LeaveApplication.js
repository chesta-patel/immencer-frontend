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
import LeaveApplicationPageTable from './LeaveApplicationPageTable'
import { GetLeave } from '../../../services/thunk/GetLeaveThunk'

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
    dispatch(GetLeave('leave'))
    dispatch(fetchData('master/leaveType'))
    dispatch(fetchData('master/leaveDayType'))
    dispatch(empData('employee'))
    dispatch(fetchData('master/leaveStatus'))
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
                {String.leave}
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
                        onClick={() => {
                          history.push('/leave/apply-leave')
                        }}
                      >
                        <Icon name="plus"></Icon>{' '}
                        <span>{`${String.apply} ${String.leave}`}</span>
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
                  <h4 className="grantedLeave">18</h4>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card className="leaveCard" inverse>
                <CardBody className="card-text">
                  <h5 className="grantedLeave">{`${String.approved} ${String.leave}`}</h5>
                  <h4 className="grantedLeave"> 10</h4>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card className="leaveCard" inverse>
                <CardBody className="card-text">
                  <Percent
                    className="balance"
                    color={handleColors(8)}
                  >{`${String.balance}`}</Percent>
                  <Percent color={handleColors(8)}>8</Percent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </PreviewCard>
        {/* <PageTable json={roleTable} /> */}
        <LeaveApplicationPageTable />
      </Content>
    </React.Fragment>
  )
}

export default LeaveApplication
