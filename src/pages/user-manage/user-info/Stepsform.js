import React, { useState, useRef } from 'react'
import Head from '../../../layout/head/Head'
import Content from '../../../layout/content/Content'
import { Block, BlockTitle, RSelect } from '../../../components/Component'
import { useForm } from 'react-hook-form'
import { Steps, Step } from 'react-step-builder'
import { Row, Col, FormGroup, Button } from 'reactstrap'
import {
  isactive,
  isdelete,
  userbloodgroup,
  usergender,
  userrole,
} from '../UserData'
import {
  numberemail,
  officedetail,
  otherdetail,
  personaldetail,
  personalfield,
  verticalhorizental,
} from './userinfojson'

const PersonalForm = (props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    birthday: '',
    city: '',
    department: '',
    role_id: '',
  })

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const { errors, handleSubmit, register } = useForm()

  const submitForm = (data) => {
    props.next()
  }

  return (
    <form className="content clearfix" onSubmit={handleSubmit(submitForm)}>
      <Row className="gy-4">
        {personalfield.map((fieldname, id) => {
          if ((fieldname.type !== 'text') & (fieldname.type !== 'date')) {
            return (
              <Col md="6">
                <FormGroup>
                  <label className={fieldname.label_class}>
                    {fieldname.label_name}
                  </label>
                  <div className="form-control-wrap">
                    <RSelect
                      options={fieldname.option}
                      defaultValue={{
                        value: fieldname.option?.[0]?.value,
                        label: fieldname.option?.[0]?.label,
                      }}
                      onChange={(e) =>
                        setFormData({ ...formData, status: e.value })
                      }
                      ref={register({ required: 'Please Select Status' })}
                    />
                    {errors.status && (
                      <span className="invalid">{errors.status.message}</span>
                    )}
                  </div>
                </FormGroup>
              </Col>
            )
          } else {
            return (
              <Col md="6">
                <FormGroup>
                  <label className={fieldname.label_class}>
                    {fieldname.label_name}
                  </label>
                  <input
                    className={fieldname.input_class}
                    type={fieldname.type}
                    name={fieldname.name}
                    defaultValue={formData.title}
                    placeholder={fieldname.placeholder}
                    ref={register({ required: 'This field is required' })}
                  />
                  {errors.title && (
                    <span className="invalid">{errors.title.message}</span>
                  )}
                </FormGroup>
              </Col>
            )
          }
        })}
      </Row>
      <div className="actions clearfix">
        <ul>
          <li>
            <Button color="primary" type="submit">
              Next
            </Button>
          </li>
        </ul>
      </div>
    </form>
  )
}

const Personaldetail = (props) => {
  const [formData, setFormData] = useState({
    c_add: '',
    p_add: '',
    education: '',
    country: '',
    height: '',
    blood_group: '',
  })

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const { errors, handleSubmit, register, watch } = useForm()

  const submitForm = (data) => {
    props.next()
  }

  const password = useRef()
  password.current = watch('password')

  return (
    <form className="content clearfix" onSubmit={handleSubmit(submitForm)}>
      <Row className="gy-4">
        {personaldetail.map((fieldname, id) => {
          if ((fieldname.type !== 'text') & (fieldname.type !== 'date')) {
            return (
              <Col md="6">
                <FormGroup>
                  <label className={fieldname.label_class}>
                    {fieldname.label_name}
                  </label>
                  <div className="form-control-wrap">
                    <RSelect
                      options={fieldname.option}
                      defaultValue={{
                        value: fieldname.option?.[0]?.value,
                        label: fieldname.option?.[0]?.label,
                      }}
                      onChange={(e) =>
                        setFormData({ ...formData, status: e.value })
                      }
                      ref={register({ required: 'Please Select Status' })}
                    />
                    {errors.status && (
                      <span className="invalid">{errors.status.message}</span>
                    )}
                  </div>
                </FormGroup>
              </Col>
            )
          } else {
            return (
              <Col md="6">
                <FormGroup>
                  <label className={fieldname.label_class}>
                    {fieldname.label_name}
                  </label>
                  <input
                    className={fieldname.input_class}
                    type={fieldname.type}
                    name={fieldname.name}
                    defaultValue={formData.title}
                    placeholder={fieldname.placeholder}
                    ref={register({ required: 'This field is required' })}
                  />
                  {errors.title && (
                    <span className="invalid">{errors.title.message}</span>
                  )}
                </FormGroup>
              </Col>
            )
          }
        })}
      </Row>
      <div className="actions clearfix">
        <ul>
          <li>
            <Button color="primary" type="submit">
              Next
            </Button>
          </li>
          <li>
            <Button color="primary" onClick={props.prev}>
              Previous
            </Button>
          </li>
        </ul>
      </div>
    </form>
  )
}

const Numberemail = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    personalemail: '',
    mobile: '',
    parent_mobile: '',
    whatsapp_number: '',
    adharcard: '',
    pancard: '',
  })

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const { errors, handleSubmit, register } = useForm()

  const submitForm = (data) => {
    props.next()
  }

  return (
    <form className="content clearfix" onSubmit={handleSubmit(submitForm)}>
      <Row className="gy-3">
        {numberemail.map((fieldname, id) => {
          if ((fieldname.type !== 'email') & (fieldname.type !== 'number')) {
            return (
              <Col md="6">
                <FormGroup>
                  <label className={fieldname.label_class}>
                    {fieldname.label_name}
                  </label>
                  <div className="form-control-wrap">
                    <RSelect
                      options={fieldname.option}
                      defaultValue={{
                        value: fieldname.option?.[0]?.value,
                        label: fieldname.option?.[0]?.label,
                      }}
                      onChange={(e) =>
                        setFormData({ ...formData, status: e.value })
                      }
                      ref={register({ required: 'Please Select Status' })}
                    />
                    {errors.status && (
                      <span className="invalid">{errors.status.message}</span>
                    )}
                  </div>
                </FormGroup>
              </Col>
            )
          } else {
            return (
              <Col md="6">
                <FormGroup>
                  <label className={fieldname.label_class}>
                    {fieldname.label_name}
                  </label>
                  <input
                    className={fieldname.input_class}
                    type={fieldname.type}
                    name={fieldname.name}
                    defaultValue={formData.title}
                    placeholder={fieldname.placeholder}
                    ref={register({ required: 'This field is required' })}
                  />
                  {errors.title && (
                    <span className="invalid">{errors.title.message}</span>
                  )}
                </FormGroup>
              </Col>
            )
          }
        })}
      </Row>
      <div className="actions clearfix">
        <ul>
          <li>
            <Button color="primary" type="submit">
              Next
            </Button>
          </li>
          <li>
            <Button color="primary" onClick={props.prev}>
              Previous
            </Button>
          </li>
        </ul>
      </div>
    </form>
  )
}

const Header = (props) => {
  return (
    <div className="steps clearfix">
      <ul>
        <li className={props.current >= 1 ? 'first done' : 'first'}>
          <a href="#wizard-01-h-0" onClick={(ev) => ev.preventDefault()}>
            <span className="number">01</span> <p>User Detail</p>
          </a>
        </li>
        <li className={props.current >= 2 ? 'done' : ''}>
          <a href="#wizard-01-h-1" onClick={(ev) => ev.preventDefault()}>
            <span className="number">02</span> <p>Personal Detail's</p>
          </a>
        </li>
        <li className={props.current >= 3 ? 'done' : ''}>
          <a href="#wizard-01-h-2" onClick={(ev) => ev.preventDefault()}>
            <span className="current-info audible">current step: </span>
            <span className="number">03</span> <p>Number & Email</p>
          </a>
        </li>
        <li className={props.current === 4 ? 'done' : ''}>
          <a href="#wizard-01-h-2" onClick={(ev) => ev.preventDefault()}>
            <span className="current-info audible">current step: </span>
            <span className="number">04</span> <p>Office Detail</p>
          </a>
        </li>
        <li className={props.current === 5 ? 'last done' : 'last'}>
          <a href="#wizard-01-h-2" onClick={(ev) => ev.preventDefault()}>
            <span className="current-info audible">current step: </span>
            <span className="number">05</span> <p>Others</p>
          </a>
        </li>
      </ul>
    </div>
  )
}

const Officedetail = (props) => {
  const [formData, setFormData] = useState({
    registerat: '',
    lastlogin: '',
    intro: '',
    avatar: '',
    profile: '',
  })

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const { errors, handleSubmit, register } = useForm()

  const submitForm = (data) => {
    props.next()
  }

  return (
    <form className="content clearfix" onSubmit={handleSubmit(submitForm)}>
      <Row className="gy-3">
        {officedetail.map((fieldname, id) => {
          if (fieldname.type !== 'text') {
            return (
              <Col md="6">
                <FormGroup>
                  <label className={fieldname.label_class}>
                    {fieldname.label_name}
                  </label>
                  <div className="form-control-wrap">
                    <RSelect
                      options={fieldname.option}
                      defaultValue={{
                        value: fieldname.option?.[0]?.value,
                        label: fieldname.option?.[0]?.label,
                      }}
                      onChange={(e) =>
                        setFormData({ ...formData, status: e.value })
                      }
                      ref={register({ required: 'Please Select Status' })}
                    />
                    {errors.status && (
                      <span className="invalid">{errors.status.message}</span>
                    )}
                  </div>
                </FormGroup>
              </Col>
            )
          } else {
            return (
              <Col md="6">
                <FormGroup>
                  <label className={fieldname.label_class}>
                    {fieldname.label_name}
                  </label>
                  <input
                    className={fieldname.input_class}
                    type={fieldname.type}
                    name={fieldname.name}
                    defaultValue={formData.title}
                    placeholder={fieldname.placeholder}
                    ref={register({ required: 'This field is required' })}
                  />
                  {errors.title && (
                    <span className="invalid">{errors.title.message}</span>
                  )}
                </FormGroup>
              </Col>
            )
          }
        })}
      </Row>
      <div className="actions clearfix">
        <ul>
          <li>
            <Button color="primary" type="submit">
              Next
            </Button>
          </li>
          <li>
            <Button color="primary" onClick={props.prev}>
              Previous
            </Button>
          </li>
        </ul>
      </div>
    </form>
  )
}
const Others = (props) => {
  const [formData, setFormData] = useState({
    swifttime: '',
    isactive: '',
    isdelete: '',
  })

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const { errors, handleSubmit, register } = useForm()

  const submitForm = (data) => {
    props.next()
  }

  return (
    <form className="content clearfix" onSubmit={handleSubmit(submitForm)}>
      <Row className="gy-3">
        {otherdetail.map((fieldname, id) => {
          if (fieldname.type !== 'text') {
            return (
              <Col md="6">
                <FormGroup>
                  <label className={fieldname.label_class}>
                    {fieldname.label_name}
                  </label>
                  <div className="form-control-wrap">
                    <RSelect
                      options={fieldname.option}
                      defaultValue={{
                        value: fieldname.option?.[0]?.value,
                        label: fieldname.option?.[0]?.label,
                      }}
                      onChange={(e) =>
                        setFormData({ ...formData, status: e.value })
                      }
                      ref={register({ required: 'Please Select Status' })}
                    />
                    {errors.status && (
                      <span className="invalid">{errors.status.message}</span>
                    )}
                  </div>
                </FormGroup>
              </Col>
            )
          } else {
            return (
              <Col md="6">
                <FormGroup>
                  <label className={fieldname.label_class}>
                    {fieldname.label_name}
                  </label>
                  <input
                    className={fieldname.input_class}
                    type={fieldname.type}
                    name={fieldname.name}
                    defaultValue={formData.title}
                    placeholder={fieldname.placeholder}
                    ref={register({ required: 'This field is required' })}
                  />
                  {errors.title && (
                    <span className="invalid">{errors.title.message}</span>
                  )}
                </FormGroup>
              </Col>
            )
          }
        })}
        <label className="custom-control-label" htmlFor="fw-policy">
          I agreed Terms and policy
        </label>
      </Row>
      <div className="actions clearfix">
        <ul>
          <li>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </li>
          <li>
            <Button color="primary" onClick={props.prev}>
              Previous
            </Button>
          </li>
        </ul>
      </div>
    </form>
  )
}

const Success = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center p-3">
      <BlockTitle tag="h6" className="text-center">
        Thank you for submitting form
      </BlockTitle>
    </div>
  )
}
const config = {
  before: Header,
}

function Stepsform() {
  return (
    <Block size="lg">
      <div className={verticalhorizental}>
        <Steps config={config}>
          <Step component={PersonalForm} />
          <Step component={Personaldetail} />
          <Step component={Numberemail} />
          <Step component={Officedetail} />
          <Step component={Others} />
          <Step component={Success} />
        </Steps>
      </div>
    </Block>
  )
}

export default Stepsform
