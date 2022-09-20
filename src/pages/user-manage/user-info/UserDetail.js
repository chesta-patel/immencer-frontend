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
import String from '../../../utils/String'
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
    e.preventDefault()
    setvalidation(true)

    let checkValidation = []
    userCreate.map((formFields) => {
      if (formFields.required && !Fdata[`${formFields.name}`]) {
        checkValidation.push(formFields.name)
      } else {
        let filterCheckValidation = checkValidation?.filter(
          (value) => value !== formFields.name
        )
        checkValidation = filterCheckValidation
      }
      // eslint-disable-next-line array-callback-return
      return
    })

    if (checkValidation.length === 0) {
      console.log('Next====>')
      props.next()
    }
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
                  <label className="form-label">{formFields.label_name}</label>
                  <RSelect
                    options={formFields.option}
                    defaultValue={{
                      value: formFields.option?.[0]?.value,
                      label: formFields.option?.[0]?.label,
                    }}
                  />
                  {formFields.required &&
                    !Fdata[`${formFields.name}`] &&
                    validation && (
                      <span className="error-message">
                        {formFields.required}
                      </span>
                    )}
                </FormGroup>
              </Col>
            )
          } else {
            return (
              <Col md="4">
                <FormGroup>
                  <label className="form-label">{formFields.label_name}</label>
                  <input
                    className="form-control"
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
                    onBlur={(e) => {
                      const oldState = cloneDeep(Fdata)
                      oldState[`${formFields.name}`] = e.target.value
                      setFdata({ ...oldState })
                      setvalidation(true)
                    }}
                    max={formFields.today}
                  />
                  {formFields.required &&
                    !Fdata[`${formFields.name}`] &&
                    validation && (
                      <span className="error-message">
                        {formFields.required}
                      </span>
                    )}
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
            <Button color="primary" type="submit">
              {String.next}
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
    e.preventDefault()
    setValidate(true)
    let checkValidation = []
    userCreate.map((formFields) => {
      if (formFields.required && !Fdata[`${formFields.name}`]) {
        checkValidation.push(formFields.name)
      } else {
        let filterCheckValidation = checkValidation?.filter(
          (value) => value !== formFields.name
        )
        checkValidation = filterCheckValidation
      }
      // eslint-disable-next-line array-callback-return
      return
    })

    if (checkValidation.length === 0) {
      console.log('Next====>')
      props.next()
    }
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
      <p className="permenent-address">{String.permanent_address}</p>
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
                    <label className="form-label">
                      {formFields.label_name}
                    </label>
                    <RSelect
                      options={formFields.option}
                      defaultValue={{
                        value: formFields.option?.[0]?.value,
                        label: formFields.option?.[0]?.label,
                      }}
                    />
                    {formFields.required &&
                      !Fdata[`${formFields.name}`] &&
                      validate && (
                        <span className="error-message">
                          {formFields.required}
                        </span>
                      )}
                  </FormGroup>
                </Col>
              )
            } else {
              return (
                <Col md="4">
                  <FormGroup>
                    <label className="form-label">
                      {formFields.label_name}
                    </label>
                    <input
                      className="form-control"
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
                      onBlur={(e) => {
                        const oldState = cloneDeep(Fdata)
                        oldState[`${formFields.name}`] = e.target.value
                        setFdata({ ...oldState })
                        setValidate(true)
                      }}
                    />
                    {formFields.required &&
                      !Fdata[`${formFields.name}`] &&
                      validate && (
                        <span className="error-message">
                          {formFields.required}
                        </span>
                      )}
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
            {String.same_as_above}
          </label>
        </div>
        <p className="current-address">{String.current_address}</p>
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
                    <label className="form-label">
                      {formFields.label_name}
                    </label>
                    <RSelect
                      options={formFields.option}
                      defaultValue={{
                        value: formFields.option?.[0]?.value,
                        label: formFields.option?.[0]?.label,
                      }}
                    />
                    {formFields.required &&
                      !Fdata[`${formFields.name}`] &&
                      validate && (
                        <span className="error-message">
                          {formFields.required}
                        </span>
                      )}
                  </FormGroup>
                </Col>
              )
            } else {
              return (
                <Col md="4">
                  <FormGroup>
                    <label className="form-label">
                      {formFields.label_name}
                    </label>
                    <input
                      className="form-control"
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
                      onBlur={(e) => {
                        const oldState = cloneDeep(Adata)
                        oldState[`${formFields.name}`] = e.target.value
                        setAdata({ ...oldState })
                        setValidate(true)
                      }}
                    />
                    {formFields.required &&
                      !Fdata[`${formFields.name}`] &&
                      validate && (
                        <span className="error-message">
                          {formFields.required}
                        </span>
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
                {String.next}
              </Button>
            </li>
            <li>
              <Button color="primary" onClick={props.prev}>
                {String.previous}
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
          <DropdownToggle caret>{String.role}</DropdownToggle>
          <DropdownMenu left>
            <DropdownItem>{String.employee}</DropdownItem>
            <DropdownItem>{String.admin}</DropdownItem>
            <DropdownItem>{String.hr}</DropdownItem>
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
                {String.previous}
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
            <span className="number">01</span> <p>{String.employee_detail}</p>
          </a>
        </li>
        <li className={props.current >= 2 ? 'second done' : 'second'}>
          <a href="#wizard-01-h-1" onClick={(ev) => ev.preventDefault()}>
            <span className="number">02</span> <p>{String.address_detail}</p>
          </a>
        </li>
        <li className={props.current >= 3 ? 'third done' : 'third'}>
          <a href="#wizard-01-h-2" onClick={(ev) => ev.preventDefault()}>
            <span className="number">03</span> <p>{String.education}</p>
          </a>
        </li>
        <li className={props.current >= 4 ? 'third done' : 'third'}>
          <a href="#wizard-01-h-2" onClick={(ev) => ev.preventDefault()}>
            <span className="number">04</span> <p>{String.permission}</p>
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
