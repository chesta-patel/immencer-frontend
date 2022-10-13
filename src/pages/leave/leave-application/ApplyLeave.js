import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Form, FormGroup, Row } from 'reactstrap'
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Col,
  Icon,
  PreviewCard,
  RSelect,
} from '../../../components/Component'
import Content from '../../../layout/content/Content'
import String from '../../../utils/String'
import { leaveAppString } from '../../Strings'
import {
  dayTypeJson,
  defaultOptions,
  leaveAppForm,
  leaveTypes,
} from './LeaveAppJson'
import './leaveapplication.scss'

function ApplyLeave() {
  const [strings, setStrings] = useState('')
  const [leaveForm] = useState(leaveAppForm)
  const history = useHistory()
  // const { errors, register, handleSubmit } = useForm()

  const [dayType, setType] = useState({
    date: new Date(),
    dayType: '',
  })

  useEffect(() => {
    var string = leaveAppString.find(function (element) {
      return element
    })
    setStrings(string)
  }, [strings])
  console.log(Array.isArray(dayType))

  let name, value
  const handledChange = (e) => {
    console.log('first', e.target.checked)
    // name = event.target.name
    // value = event.target.value
    // setDayType({ ...dayType, [name]: value })
  }
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

        <Block size="lg">
          <PreviewCard>
            <form>
              <Row className="gy-3">
                <Col lg="6">
                  <FormGroup className="form-group">
                    <label className="form-label">
                      {`${String.leave_type}`}
                    </label>
                    <div className="form-control-wrap">
                      <RSelect options={leaveTypes} />
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="gy-3">
                <Col lg="6">
                  <FormGroup className="form-group">
                    <label className="form-label">{`${String.date}`}</label>
                    <div className="form-control-wrap">
                      <input
                        type="date"
                        className="form-control"
                        name="date"
                        value={dayType.date}
                        onChange={handledChange}
                      />
                    </div>
                  </FormGroup>
                </Col>
                <Row className="gy-3">
                  {dayTypeJson.map((dt, index) => {
                    return (
                      <FormGroup>
                        <label className="form-label"> </label>

                        <ul className="custom-control-group g-3 align-center flex-wrap">
                          <li>
                            <div className="custom-control custom-radio">
                              <label className="form-label">{`${dt.name}`}</label>
                              <input type="radio" name="reg-public"></input>
                            </div>
                          </li>
                        </ul>
                      </FormGroup>
                    )
                  })}
                </Row>

                {/* <Col lg="6">
                  <FormGroup>
                    <label className="form-label">{`${String.day_type}`}</label>
                    <ul className="custom-control-group g-3 align-center flex-wrap">
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="reg-public"
                            id="reg-enable"
                            onChange={handledChange}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="reg-enable"
                          >
                            {`${String.full_day}`}
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            name="reg-public"
                            id="reg-disable"
                            onChange={handledChange}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="reg-disable"
                          >
                            {`1st ${String.half}`}
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            name="reg-public"
                            id="reg-request"
                            onChange={handledChange}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="reg-request"
                          >
                            {`2nd ${String.half}`}
                          </label>
                        </div>
                      </li>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={() => {
                          alert('Added')
                        }}
                      >
                        <Icon name="plus" />
                      </Button>
                    </ul>
                  </FormGroup>
                </Col> */}
              </Row>
              <Row className="gy-3">
                <Col sm={6}>
                  <div className="form-group">
                    <label className="form-label">{String.i_want}</label>
                    <RSelect options={defaultOptions} isMulti />
                  </div>
                </Col>
              </Row>
              <Row className="gy-3">
                <Col md={12}>
                  <FormGroup className="form-group">
                    <label className="form-label" htmlFor="cf-default-textarea">
                      {String.reason}
                    </label>
                    <div className="form-control-wrap">
                      <textarea
                        className="form-control form-control-sm"
                        id="cf-default-textarea"
                        placeholder="Write your message"
                      ></textarea>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="gy-3">
                <Col sm={6}>
                  <Button color="primary">
                    <Icon name="check" />
                    <span>{String.apply}</span>
                  </Button>
                </Col>
              </Row>
            </form>
          </PreviewCard>
        </Block>
      </Content>
    </>
  )
}

export default ApplyLeave
