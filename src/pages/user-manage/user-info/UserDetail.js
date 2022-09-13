import React, { useState } from 'react'
import { Block, RSelect } from '../../../components/Component'
import { useForm } from 'react-hook-form'
import { Steps, Step } from 'react-step-builder'
import { Row, Col, FormGroup, Button } from 'reactstrap'
import {
  AddressDetailform,
  tableHeader,
  tableRow,
  userCreate,
} from './UserInfoJson'
import commanString from '../../../utils/String'
import Content from '../../../layout/content/Content'
import { cloneDeep } from 'lodash'
import {
  Table,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import Education from './education/Education'
import './userdetail.scss'
import AvatarCropper from './avatar-crop/AvatarCropper'

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
                  {formFields.required &&
                    !Fdata[`${formFields.name}`] &&
                    validation && (
                      <span className="error-message">
                        {formFields.required}
                      </span>
                    )}
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
                  {''}
                  {formFields.required &&
                    !Fdata[`${formFields.name}`] &&
                    validation && (
                      <span className="error-message">
                        {formFields.required}
                      </span>
                    )}
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
                    max={formFields.today}
                  />
                </FormGroup>
              </Col>
            )
          }
        })}
        <Col md="4">
          <AvatarCropper />
        </Col>
      </Row>
      <div className="actions clearfix">
        <ul>
          <li>
            <Button color="primary" type="submit" onClick={props.next}>
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
  AddressDetailform.forEach((formFields) => {
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
      const tempAdata = { ...Adata }
      Object.keys(tempAdata).forEach((key) => {
        tempAdata[key] = ''
      })
      setAdata(tempAdata)
    }
  }

  return (
    <>
      <p className="permenent-address">{commanString.permenent_address}</p>
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
                    {formFields.required &&
                      !Fdata[`${formFields.name}`] &&
                      validate && (
                        <span style={{ color: 'red' }}>
                          {formFields.required}
                        </span>
                      )}
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
                    {formFields.required &&
                      !Fdata[`${formFields.name}`] &&
                      validate && (
                        <span style={{ color: 'red' }}>
                          {formFields.required}
                        </span>
                      )}
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
                  </FormGroup>
                </Col>
              )
            }
          })}
        </Row>
        {'\n'}
        <div className="div-checkbox">
          <label className="label-checkbox">
            <input
              type="checkbox"
              onChange={onChangeAddress}
              className="input-checkbox"
            />{' '}
            {commanString.same_as_above}
          </label>
        </div>
        <p className="current-address">{commanString.current_address}</p>
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
                    {formFields.required &&
                      !Adata[`${formFields.name}`] &&
                      validate && (
                        <span style={{ color: 'red' }}>
                          {formFields.required}
                        </span>
                      )}
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
                    {formFields.required &&
                      !Adata[`${formFields.name}`] &&
                      validate && (
                        <span style={{ color: 'red' }}>
                          {formFields.required}
                        </span>
                      )}
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
  const [checked] = useState(false)

  const toggle = () => setDropdownOpen((prevState) => !prevState)
  tableHeader.map((e) => {
    for (const key in e) {
      if (e[key] === '') {
        delete e[key]
      }
    }
  })
  const c = tableHeader.filter((value) => Object.keys(value).length !== 0)

  const handlechange = (e) => {
    var value = e.target.checked
    var string = e.target.id[1]
    var pointer = parseInt(string) - 1
    if (e.target.id.startsWith('c')) {
      for (var i = 0; i < tableRow.length; i++) {
        var rowcheckbox = `${i}${pointer}`
        document.getElementById(rowcheckbox).checked = value
      }
    } else {
      for (var j = 0; j < tableHeader.length; j++) {
        var columncheckbox = `${pointer}${j}`
        document.getElementById(columncheckbox).checked = value
      }
    }
  }

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
          {tableHeader.map((head, i) =>
            head.type === 'checkbox' && head.header !== '' ? (
              <th>
                <tr>
                  <input
                    type="checkbox"
                    onChange={(e) => handlechange(e)}
                    id={head.id}
                  />
                </tr>
                <tr>{head.header}</tr>
              </th>
            ) : (
              <th></th>
            )
          )}
        </thead>
        <tbody>
          {tableRow.map((row, i) => (
            <tr key={i}>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => handlechange(e)}
                  value={checked}
                  id={row.id}
                />
                {row.name}
              </td>
              {c.map((chekbox, index) => {
                return (
                  <td>
                    <input type={chekbox.type} id={`${i}${index}`} />
                  </td>
                )
              })}
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <div className="actions clearfix">
          <ul>
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
            <span className="number">01</span>{' '}
            <p>{commanString.employee_detail}</p>
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
            <span className="number">03</span> <p>{commanString.education}</p>
          </a>
        </li>
        <li className={props.current >= 4 ? 'third done' : 'third'}>
          <a href="#wizard-01-h-2" onClick={(ev) => ev.preventDefault()}>
            <span className="number">04</span> <p>{commanString.permission}</p>
          </a>
        </li>
      </ul>
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
              <Step component={Education} />
              <Step component={Permission} />
            </Steps>
          </div>
        </Block>
      </Content>
    </React.Fragment>
  )
}

export default UserDetail
