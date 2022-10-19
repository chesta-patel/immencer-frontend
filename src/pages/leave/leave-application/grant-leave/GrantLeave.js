import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {
  Button,
  Col,
  Form,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  PreviewCard,
  RSelect,
} from '../../../../components/Component'
import Content from '../../../../layout/content/Content'
import { empData } from '../../../../services/thunk/GetEmployee'
import String from '../../../../utils/String'
import { defaultOptions } from '../LeaveAppJson'

function GrantLeave() {
  const [toInformEmpList, settoInformEmpList] = useState([])
  const { employeeData } = useSelector((state) => state.getEmp)
  const { leaveType } = useSelector((state) => state.dropdown)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(empData('employee'))
  }, [])

  useEffect(() => {
    if (employeeData !== undefined) {
      const employeeList = employeeData.map((empList, index) => {
        return {
          value: `${empList.id}`,
          label: `${empList.firstName} ${empList.lastName}`,
        }
      })
      settoInformEmpList(employeeList)
    }
  }, [employeeData])

  const leaveOption = leaveType.map((list, index) => {
    return {
      value: `${list.id}`,
      label: `${list.name}`,
    }
  })
  return (
    <>
      <Content>
        <BlockHead>
          <BlockBetween className="detail-card">
            <BlockHeadContent>
              <BlockTitle tag="h3" page>
                {String.grant_leave}
              </BlockTitle>
              <BlockDes className="text-soft"></BlockDes>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block size="sm">
          <Form>
            <Col md="6" className="">
              <FormGroup className="form-group">
                <label className="form-label">{`${String.month_year}`}</label>
                <input type="month" className="form-control" required />
              </FormGroup>
              <FormGroup className="form-group">
                <label className="form-label">{`${String.leave} ${String.options}`}</label>
                <RSelect options={leaveOption} required />
              </FormGroup>
              <FormGroup className="form-group">
                <label className="form-label">{`${String.employee}`}</label>
                <RSelect options={toInformEmpList} isMulti required />
              </FormGroup>
              <FormGroup className="form-group">
                <label className="form-label">{`${String.note}`}</label>
                <div className="form-control-wrap">
                  <textarea
                    required
                    className="form-control form-control-sm"
                    id="cf-default-textarea"
                    placeholder="Write your message"
                  ></textarea>
                </div>
              </FormGroup>
              <FormGroup className="form-group">
                <Button
                  type="submit"
                  color="primary"
                  size="lg"
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >
                  {`${String.grant} ${String.leave}`}
                </Button>
              </FormGroup>
            </Col>
          </Form>
        </Block>
      </Content>
    </>
  )
}

export default GrantLeave
