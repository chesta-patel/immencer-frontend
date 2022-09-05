import React, { useState } from 'react'
import { Block, BlockTitle, RSelect } from '../../../components/Component'
import { useForm } from 'react-hook-form'
import { Steps, Step } from 'react-step-builder'
import { Row, Col, FormGroup, Button } from 'reactstrap'
import { AddressDetailform, userCreate } from './UserInfoJson'
import commanString from '../../../utils/CommanString'
import Content from '../../../layout/content/Content'
import { cloneDeep } from 'lodash'
import {
  Table,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

const UserCreate = (props) => {
  const initialState = {}
  userCreate.forEach((formFields) => {
    initialState[`${formFields.name}`] = ''
  })
  const [validation, setvalidation] = useState(false)
  const { handleSubmit } = useForm()
  const [Fdata, setFdata] = useState({ ...initialState })

  const submitForm = (e) => {
    setvalidation(true)
    e.preventDefault()
    props.next()
  }

  return (
    <form
      className="content clearfix"
      onSubmit={(e) => {
        handleSubmit(submitForm(e))
      }}
    >
      <Row className="gy-3">
        {userCreate.map((formFields, id) => {
          if (
            (formFields.type !== 'text') &
            (formFields.type !== 'number') &
            (formFields.type !== 'date') &
            (formFields.type !== 'email')
          ) {
            return (
              <Col md="4">
                <FormGroup>
                  <label className={formFields.label_class}>
                    {formFields.label_name}
                  </label>
                  <RSelect
                    options={formFields.option}
                    defaultValue={{
                      value: formFields.option?.[0]?.value,
                      label: formFields.option?.[0]?.label,
                    }}
                  />
                </FormGroup>
              </Col>
            )
          } else {
            return (
              <Col md="4">
                <FormGroup>
                  <label className={formFields.label_class}>
                    {formFields.label_name}
                  </label>
                  <input
                    className={formFields.input_class}
                    type={formFields.type}
                    name={formFields.name}
                    placeholder={formFields.placeholder}
                    value={Fdata[`${formFields.name}`]}
                    onChange={(e) => {
                      const oldState = cloneDeep(Fdata)
                      oldState[`${formFields.name}`] = e.target.value
                      setFdata({ ...oldState })
                      setvalidation(true)
                    }}
                  />
                  {formFields.required &&
                    !Fdata[`${formFields.name}`] &&
                    validation && (
                      <p style={{ color: 'red' }}>{formFields.required}</p>
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
              {commanString.next}
            </Button>
          </li>
        </ul>
      </div>
    </form>
  )
}

const AddressDetails = (props) => {
  const initialState = {}
  userCreate.forEach((formFields) => {
    initialState[`${formFields.name}`] = ''
  })
  const [validate, setValidate] = useState(false)
  const { handleSubmit } = useForm()
  const [Adata, setAdata] = useState({ ...initialState })
  const [Fdata, setFdata] = useState({ ...initialState })

  const submitForm = (e) => {
    setValidate(true)
    e.preventDefault()
    props.next()
  }
  const onChangeAddress = (event) => {
    if (event.target.checked) {
      setAdata(Fdata)
    } else {
      removedata(event)
    }
  }
  const removedata = (event) => {
    setAdata(Adata)
  }

  return (
    <>
      <p>{commanString.permenent_address}</p>
      <form
        className="content clearfix"
        onSubmit={(e) => {
          handleSubmit(submitForm(e))
        }}
      >
        <Row className="gy-3">
          {AddressDetailform.map((formFields, id) => {
            if (
              (formFields.type !== 'text') &
              (formFields.type !== 'number') &
              (formFields.type !== 'date') &
              (formFields.type !== 'email')
            ) {
              return (
                <Col md="4">
                  <FormGroup>
                    <label className={formFields.label_class}>
                      {formFields.label_name}
                    </label>
                    <RSelect
                      options={formFields.option}
                      defaultValue={{
                        value: formFields.option?.[0]?.value,
                        label: formFields.option?.[0]?.label,
                      }}
                    />
                  </FormGroup>
                </Col>
              )
            } else {
              return (
                <Col md="4">
                  <FormGroup>
                    <label className={formFields.label_class}>
                      {formFields.label_name}
                    </label>
                    <input
                      className={formFields.input_class}
                      type={formFields.type}
                      name={formFields.name}
                      placeholder={formFields.placeholder}
                      value={Fdata[`${formFields.name}`]}
                      onChange={(e) => {
                        const oldState = cloneDeep(Fdata)
                        oldState[`${formFields.name}`] = e.target.value
                        setFdata({ ...oldState })
                        setValidate(true)
                      }}
                    />
                    {formFields.required &&
                      !Fdata[`${formFields.name}`] &&
                      validate && (
                        <p style={{ color: 'red' }}>{formFields.required}</p>
                      )}
                  </FormGroup>
                </Col>
              )
            }
          })}
        </Row>
        {'\n'}
        <input type="checkbox" onChange={onChangeAddress} />
        <label>same as aouve</label>
        <p>{commanString.current_address}</p>
        <Row className="gy-3">
          {AddressDetailform.map((formFields, id) => {
            if (
              (formFields.type !== 'text') &
              (formFields.type !== 'number') &
              (formFields.type !== 'date') &
              (formFields.type !== 'email')
            ) {
              return (
                <Col md="4">
                  <FormGroup>
                    <label className={formFields.label_class}>
                      {formFields.label_name}
                    </label>
                    <RSelect
                      options={formFields.option}
                      defaultValue={{
                        value: formFields.option?.[0]?.value,
                        label: formFields.option?.[0]?.label,
                      }}
                    />
                  </FormGroup>
                </Col>
              )
            } else {
              return (
                <Col md="4">
                  <FormGroup>
                    <label className={formFields.label_class}>
                      {formFields.label_name}
                    </label>
                    <input
                      className={formFields.input_class}
                      type={formFields.type}
                      name={formFields.name}
                      placeholder={formFields.placeholder}
                      value={Adata[`${formFields.name}`]}
                      onChange={(e) => {
                        const oldState = cloneDeep(Adata)
                        oldState[`${formFields.name}`] = e.target.value
                        setAdata({ ...oldState })
                        setValidate(true)
                      }}
                    />
                    {formFields.required &&
                      !Adata[`${formFields.name}`] &&
                      validate && (
                        <p style={{ color: 'red' }}>{formFields.required}</p>
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
                {commanString.next}
              </Button>
            </li>
            <li>
              <Button color="primary" onClick={props.prev}>
                {commanString.previous}
              </Button>
            </li>
          </ul>
        </div>
      </form>
    </>
  )
}

const Permission = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen((prevState) => !prevState)

  return (
    <>
      <div style={{ float: 'right' }}>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>{commanString.role}</DropdownToggle>
          <DropdownMenu left>
            <DropdownItem>{commanString.employee}</DropdownItem>
            <DropdownItem>{commanString.admin}</DropdownItem>
            <DropdownItem>{commanString.hr}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>
              <input type="checkbox" name="myTextEditBox" value="checked" />{' '}
            </th>
            <th>
              <input type="checkbox" name="myTextEditBox" value="checked" />{' '}
            </th>
            <th>
              <input type="checkbox" name="myTextEditBox" value="checked" />{' '}
            </th>
            <th>
              <input type="checkbox" name="myTextEditBox" value="checked" />{' '}
            </th>
          </tr>
          <tr>
            <th></th>
            <th>{commanString.view}</th>
            <th>{commanString.add}</th>
            <th>{commanString.edit}</th>
            <th>{commanString.delete}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <input type="checkbox" name="myTextEditBox" value="checked" />{' '}
              {commanString.leave}
            </th>
            <td>
              <input type="checkbox" name="myTextEditBox" value="checked" />
            </td>
            <td>
              <input type="checkbox" name="myTextEditBox" value="checked" />
            </td>
            <td>
              <input type="checkbox" name="myTextEditBox" value="checked" />
            </td>
            <td>
              <input type="checkbox" name="myTextEditBox" value="checked" />
            </td>
          </tr>
          <tr>
            <th>
              <input type="checkbox" name="myTextEditBox" value="checked" />{' '}
              {commanString.holiday}
            </th>
            <td>
              <input type="checkbox" name="myTextEditBox" value="checked" />
            </td>
            <td>
              <input type="checkbox" name="myTextEditBox" value="checked" />
            </td>
            <td>
              <input type="checkbox" name="myTextEditBox" value="checked" />
            </td>
            <td>
              <input type="checkbox" name="myTextEditBox" value="checked" />
            </td>
          </tr>
          <tr>
            <th>
              <input type="checkbox" name="myTextEditBox" value="checked" />{' '}
              {commanString.assets}
            </th>
            <td>
              <input type="checkbox" name="myTextEditBox" value="checked" />
            </td>
            <td>
              <input type="checkbox" name="myTextEditBox" value="checked" />
            </td>
            <td>
              <input type="checkbox" name="myTextEditBox" value="checked" />
            </td>
            <td>
              <input type="checkbox" name="myTextEditBox" value="checked" />
            </td>
          </tr>
        </tbody>
      </Table>

      <div>
        <div className="actions clearfix">
          <ul>
            <li>
              <Button color="primary">{commanString.submit}</Button>
            </li>
            <li>
              <Button color="primary" onClick={props.prev}>
                {commanString.previous}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
const Header = (props) => {
  return (
    <div className="steps clearfix">
      <ul>
        <li className={props.current >= 1 ? 'first done' : 'first'}>
          <a href="#wizard-01-h-0" onClick={(ev) => ev.preventDefault()}>
            <span className="number">01</span> <p>{commanString.user_create}</p>
          </a>
        </li>
        <li className={props.current >= 2 ? 'second done' : 'second'}>
          <a href="#wizard-01-h-1" onClick={(ev) => ev.preventDefault()}>
            <span className="number">02</span>{' '}
            <p>{commanString.address_detail}</p>
          </a>
        </li>
        <li className={props.current >= 3 ? 'third done' : 'third'}>
          <a href="#wizard-01-h-2" onClick={(ev) => ev.preventDefault()}>
            <span className="number">03</span>{' '}
            <p>{commanString.number_email}</p>
          </a>
        </li>
      </ul>
    </div>
  )
}

const Success = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center p-3">
      <BlockTitle tag="h6" className="text-center">
        {commanString.thank_you_for_submitting_form}
      </BlockTitle>
    </div>
  )
}

const config = {
  before: Header,
}

function UserDetail() {
  return (
    <React.Fragment>
      <Content>
        <Block>
          <div className="nk-wizard nk-wizard-simple is-alter wizard clearfix">
            <Steps config={config}>
              <Step component={UserCreate} />
              <Step component={AddressDetails} />
              <Step component={Permission} />
            </Steps>
          </div>
        </Block>
      </Content>
    </React.Fragment>
  )
}

export default UserDetail
