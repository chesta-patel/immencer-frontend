import React, { useState } from 'react'
import {
  Block,
  BlockTitle,
  DataTableBody,
  DataTableHead,
  DataTableRow,
  RSelect,
} from '../../../components/Component'
import { useForm } from 'react-hook-form'
import { Steps, Step } from 'react-step-builder'
import { Row, Col, FormGroup, Button } from 'reactstrap'
import {
  AddressDetailform,
  tableHeader,
  tableRow,
  userCreate,
} from './UserInfoJson'
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
import Dropzone from 'react-dropzone'
import Education from './Education'
import DataTable from 'react-data-table-component'
import './userdetail.scss'

const UserCreate = (props) => {
  const initialState = {}
  userCreate.forEach((formFields) => {
    initialState[`${formFields.name}`] = ''
  })
  const [validation, setvalidation] = useState(false)
  const { handleSubmit } = useForm()
  const [Fdata, setFdata] = useState({ ...initialState })
  const [files, setFiles] = useState([])

  const submitForm = (e) => {
    setvalidation(true)
    e.preventDefault()
  }
  const handleDropChange = (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  }
  var today = new Date().toISOString().split('T')[0]

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
          <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div
                  {...getRootProps()}
                  className="dropzone upload-zone dz-clickable"
                >
                  <input {...getInputProps()} />
                  {files.length === 0 && (
                    <div className="dz-message">
                      <Button color="primary">SELECT</Button>
                    </div>
                  )}
                  {files.map((file) => (
                    <div
                      key={file.name}
                      className="dz-preview dz-processing dz-image-preview dz-error dz-complete"
                    >
                      <div className="dz-image">
                        <img src={file.preview} alt="preview" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </Dropzone>
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
    console.log('add log', event.target.checked)
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
      <Block>
        <DataTable>
          <DataTableBody compact>
            <DataTableHead>
              {tableHeader.map((colum, id) => (
                <DataTableRow size={colum.header} key={id}>
                  <input type={colum.type} />
                </DataTableRow>
              ))}
            </DataTableHead>
          </DataTableBody>
        </DataTable>
      </Block>
      {/* <Table>
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
      </Table> */}
      <div>
        <div className="actions clearfix">
          <ul>
            <li>
              <Button color="primary" onClick={props.next}>
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
            <span className="number">04</span> <p>{commanString.permission}</p>
          </a>
        </li>
        <li className={props.current >= 4 ? 'third done' : 'third'}>
          <a href="#wizard-01-h-2" onClick={(ev) => ev.preventDefault()}>
            <span className="number">03</span> <p>{commanString.education}</p>
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
              <Step component={Education} />
            </Steps>
          </div>
        </Block>
      </Content>
    </React.Fragment>
  )
}

export default UserDetail
