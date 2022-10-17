import React, { useEffect, useState } from 'react'
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
import String from '../../../../utils/String'
import { defaultOptions } from '../LeaveAppJson'

function GrantLeave() {
  const [toInformEmpList, settoInformEmpList] = useState([])
  const { employeeData } = useSelector((state) => state.getEmp)

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
                <input type="month" className="form-control" />
              </FormGroup>
              <FormGroup className="form-group">
                <label className="form-label">{`${String.leave} ${String.options}`}</label>
                <RSelect options={defaultOptions} />
              </FormGroup>
              <FormGroup className="form-group">
                <label className="form-label">{`${String.employee}`}</label>
                <RSelect options={toInformEmpList} isMulti />
              </FormGroup>
              <FormGroup className="form-group">
                <label className="form-label">{`${String.note}`}</label>
                <div className="form-control-wrap">
                  <textarea
                    className="form-control form-control-sm"
                    id="cf-default-textarea"
                    placeholder="Write your message"
                  ></textarea>
                </div>
              </FormGroup>
              <FormGroup className="form-group">
                <Button color="primary" size="lg">
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
