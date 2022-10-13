import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Form, FormGroup, Row } from 'reactstrap'
import {
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Col,
  Icon,
  RSelect,
} from '../../../components/Component'
import Content from '../../../layout/content/Content'
import String from '../../../utils/String'
import { leaveAppString } from '../../Strings'
import { leaveAppForm } from './LeaveAppJson'
function ApplyLeave() {
  const [strings, setStrings] = useState('')
  const [leaveForm] = useState(leaveAppForm)
  const history = useHistory()

  useEffect(() => {
    var string = leaveAppString.find(function (element) {
      return element
    })
    setStrings(string)
  }, [strings])

  return (
    <>
      <Content>
        <BlockHead>
          <BlockBetween className="detail-card">
            <BlockHeadContent>
              <BlockTitle tag="h3" page>
                {strings.form_title}
              </BlockTitle>
              <BlockDes className="text-soft"></BlockDes>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
      </Content>
      <div className="p-5">
        <Form
        // onSubmit={(e) => handleSubmit(onFormSubmit(e))}
        >
          <Row className="gy-3">
            {leaveForm.map((leaveField, index) => {
              if (
                (leaveField.type !== 'text') &
                (leaveField.type !== 'number') &
                (leaveField.type !== 'date') &
                (leaveField.type !== 'checkbox')
              ) {
                return (
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">
                        {leaveField.label_name}
                      </label>
                      <RSelect
                        options={leaveField.option}
                        // defaultValue={{
                        //   value: leaveField.option?.[0]?.value,
                        //   label: leaveField.option?.[0]?.label,
                        // }}
                      />
                    </FormGroup>
                  </Col>
                )
              } else {
                return (
                  <Col md="6">
                    <label className="form-label">
                      {leaveField.label_name}
                    </label>
                    <input
                      type={leaveField.type}
                      className="form-control"
                      // onChange={(e) => {
                      //   const oldState = cloneDeep(Fdata)
                      //   oldState[`${leaveField.key_name}`] =
                      //     e.target.files[0]
                      //   setFdata({ ...oldState })
                      //   // setValidate(true)
                      // }}
                    />
                  </Col>
                )
              }
            })}
            {/* <Button color="primary" className="btn-icon">
              <Icon name="plus"></Icon>
            </Button> */}
          </Row>
        </Form>
      </div>
    </>
  )
}

export default ApplyLeave
