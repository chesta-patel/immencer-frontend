import React, { useContext, useEffect, useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import { useForm } from 'react-hook-form'
import { findUpper } from '../../../utils/Utils'
import {
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  UncontrolledDropdown,
  Modal,
  ModalBody,
  DropdownItem,
  Form,
} from 'reactstrap'
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Button,
  RSelect,
  Row,
  Col,
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTableRow,
  DataTableItem,
  UserAvatar,
  TooltipComponent,
} from '../../../components/Component'
import { Link } from 'react-router-dom'
import { bulkActionOptions } from '../../../utils/Utils'
import { UserContext } from '../../user-manage/UserContext'
import { filterRole, filterStatus, userData } from '../../user-manage/UserData'
import { assetappf, assettypet } from './AssetsAppjson'

const AssetApplication = ({ ...props }) => {
  const { contextData } = useContext(UserContext)
  console.log(contextData, 'Userpermission')
  const [data, setData] = contextData
  const [editId, setEditedId] = useState()
  const [actionText, setActionText] = useState('')
  const [onSearch, setonSearch] = useState(true)
  const [onSearchText, setSearchText] = useState('')
  const [tablesm, updateTableSm] = useState(false)
  const [sort, setSortState] = useState('')

  const { errors, register, handleSubmit } = useForm()
  console.log(UserContext)

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    type: '',
    active: '',
    content: '',
    isActive: 'Active',
    isDelete: 'No',
  })
  const [sm, updateSm] = useState(false)
  const [modal, setModal] = useState({
    edit: false,
    add: false,
  })
  const onFormCancel = () => {
    setModal({ edit: false, add: false })
    resetForm()
  }
  // function to reset the form
  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      description: '',
      type: '',
      active: '',
      content: '',
      isActive: 'Active',
      isDelete: 'No',
    })
  }

  // submit function to add a new item
  const onFormSubmit = (submitData) => {
    const { name, email, balance, phone } = submitData
    let submittedData = {
      id: data.length + 1,
      avatarBg: 'purple',
      name: name,
      role: 'Customer',
      email: email,
      balance: balance,
      phone: phone,
      emailStatus: 'success',
      kycStatus: 'alert',
      lastLogin: '10 Feb 2020',
      status: formData.status,
      country: 'Bangladesh',
    }
    setData([submittedData, ...data])
    resetForm()
    setModal({ edit: false }, { add: false })
  }

  // function which selects all the items
  const selectorCheck = (e) => {
    let newData
    newData = data.map((item) => {
      item.checked = e.currentTarget.checked
      return item
    })
    setData([...newData])
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage, setItemPerPage] = useState(10)
  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage
  const indexOfFirstItem = indexOfLastItem - itemPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  // function to change the selected property of an item
  const onSelectChange = (e, id) => {
    let newData = data
    let index = newData.findIndex((item) => item.id === id)
    newData[index].checked = e.currentTarget.checked
    setData([...newData])
  }
  // function to set the action to be taken in table header
  const onActionText = (e) => {
    setActionText(e.value)
  }

  // function which fires on applying selected action
  const onActionClick = (e) => {
    if (actionText === 'suspend') {
      let newData = data.map((item) => {
        if (item.checked === true) item.status = 'Suspend'
        return item
      })
      setData([...newData])
    } else if (actionText === 'delete') {
      let newData
      newData = data.filter((item) => item.checked !== true)
      setData([...newData])
    }
  }

  // function to toggle the search option
  const toggle = () => setonSearch(!onSearch)

  // onChange function for searching name
  const onFilterChange = (e) => {
    setSearchText(e.target.value)
  }
  // Changing state value when searching name
  useEffect(() => {
    if (onSearchText !== '') {
      const filteredObject = userData.filter((item) => {
        return (
          item.name.toLowerCase().includes(onSearchText.toLowerCase()) ||
          item.email.toLowerCase().includes(onSearchText.toLowerCase())
        )
      })
      setData([...filteredObject])
    } else {
      setData([...userData])
    }
  }, [onSearchText, setData])

  // Sorting data
  const sortFunc = (params) => {
    let defaultData = data
    if (params === 'asc') {
      let sortedData = defaultData.sort((a, b) => a.name.localeCompare(b.name))
      setData([...sortedData])
    } else if (params === 'dsc') {
      let sortedData = defaultData.sort((a, b) => b.name.localeCompare(a.name))
      setData([...sortedData])
    }
  }
  return (
    <React.Fragment>
      <Head title="Role Page" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle tag="h3" page>
                Assets Application
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>You have total 2,595 users.</p>
              </BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${
                    sm ? 'active' : ''
                  }`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="menu-alt-r"></Icon>
                </Button>
                <div
                  className="toggle-expand-content"
                  style={{ display: sm ? 'block' : 'none' }}
                >
                  <ul className="nk-block-tools g-3">
                    <li>
                      <a
                        href="#export"
                        onClick={(ev) => {
                          ev.preventDefault()
                        }}
                        className="btn btn-white btn-outline-light"
                      >
                        <Icon name="download-cloud"></Icon>
                        <span>Export</span>
                      </a>
                    </li>
                    <li className="nk-block-tools-opt">
                      <Button
                        color="primary"
                        className="btn-icon"
                        onClick={() => setModal({ add: true })}
                      >
                        <Icon name="plus"></Icon>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <DataTable className="card-stretch">
            <div className="card-inner position-relative card-tools-toggle">
              <div className="card-title-group">
                <div className="card-tools">
                  <div className="form-inline flex-nowrap gx-3">
                    <div className="form-wrap">
                      <RSelect
                        options={bulkActionOptions}
                        className="w-130px"
                        placeholder="Bulk Action"
                        onChange={(e) => onActionText(e)}
                      />
                    </div>
                    <div className="btn-wrap">
                      <span className="d-none d-md-block">
                        <Button
                          disabled={actionText !== '' ? false : true}
                          color="light"
                          outline
                          className="btn-dim"
                          onClick={(e) => onActionClick(e)}
                        >
                          Apply
                        </Button>
                      </span>
                      <span className="d-md-none">
                        <Button
                          color="light"
                          outline
                          disabled={actionText !== '' ? false : true}
                          className="btn-dim  btn-icon"
                          onClick={(e) => onActionClick(e)}
                        >
                          <Icon name="arrow-right"></Icon>
                        </Button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-tools mr-n1">
                  <ul className="btn-toolbar gx-1">
                    <li>
                      <a
                        href="#search"
                        onClick={(ev) => {
                          ev.preventDefault()
                          toggle()
                        }}
                        className="btn btn-icon search-toggle toggle-search"
                      >
                        <Icon name="search"></Icon>
                      </a>
                    </li>
                    <li className="btn-toolbar-sep"></li>
                    <li>
                      <div className="toggle-wrap">
                        <Button
                          className={`btn-icon btn-trigger toggle ${
                            tablesm ? 'active' : ''
                          }`}
                          onClick={() => updateTableSm(true)}
                        >
                          <Icon name="menu-right"></Icon>
                        </Button>
                        <div
                          className={`toggle-content ${
                            tablesm ? 'content-active' : ''
                          }`}
                        >
                          <ul className="btn-toolbar gx-1">
                            <li className="toggle-close">
                              <Button
                                className="btn-icon btn-trigger toggle"
                                onClick={() => updateTableSm(false)}
                              >
                                <Icon name="arrow-left"></Icon>
                              </Button>
                            </li>
                            <li>
                              <UncontrolledDropdown>
                                <DropdownToggle
                                  tag="a"
                                  className="btn btn-trigger btn-icon dropdown-toggle"
                                >
                                  <div className="dot dot-primary"></div>
                                  <Icon name="filter-alt"></Icon>
                                </DropdownToggle>
                                <DropdownMenu
                                  right
                                  className="filter-wg dropdown-menu-xl"
                                  style={{ overflow: 'visible' }}
                                >
                                  <div className="dropdown-head">
                                    <span className="sub-title dropdown-title">
                                      Filter Users
                                    </span>
                                    <div className="dropdown">
                                      <DropdownItem
                                        href="#more"
                                        onClick={(ev) => {
                                          ev.preventDefault()
                                        }}
                                        className="btn btn-sm btn-icon"
                                      >
                                        <Icon name="more-h"></Icon>
                                      </DropdownItem>
                                    </div>
                                  </div>
                                  <div className="dropdown-body dropdown-body-rg">
                                    <Row className="gx-6 gy-3">
                                      <Col size="6">
                                        <div className="custom-control custom-control-sm custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input form-control"
                                            id="hasBalance"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="hasBalance"
                                          >
                                            {' '}
                                            Have Balance
                                          </label>
                                        </div>
                                      </Col>
                                      <Col size="6">
                                        <div className="custom-control custom-control-sm custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input form-control"
                                            id="hasKYC"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="hasKYC"
                                          >
                                            {' '}
                                            KYC Verified
                                          </label>
                                        </div>
                                      </Col>
                                      <Col size="6">
                                        <FormGroup>
                                          <label className="overline-title overline-title-alt">
                                            Role
                                          </label>
                                          <RSelect
                                            options={filterRole}
                                            placeholder="Any Role"
                                          />
                                        </FormGroup>
                                      </Col>
                                      <Col size="6">
                                        <FormGroup>
                                          <label className="overline-title overline-title-alt">
                                            Status
                                          </label>
                                          <RSelect
                                            options={filterStatus}
                                            placeholder="Any Status"
                                          />
                                        </FormGroup>
                                      </Col>
                                      <Col size="12">
                                        <FormGroup className="form-group">
                                          <Button color="secondary">
                                            Filter
                                          </Button>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </div>
                                  <div className="dropdown-foot between">
                                    <a
                                      href="#reset"
                                      onClick={(ev) => {
                                        ev.preventDefault()
                                      }}
                                      className="clickable"
                                    >
                                      Reset Filter
                                    </a>
                                    <a
                                      href="#save"
                                      onClick={(ev) => {
                                        ev.preventDefault()
                                      }}
                                    >
                                      Save Filter
                                    </a>
                                  </div>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </li>
                            <li>
                              <UncontrolledDropdown>
                                <DropdownToggle
                                  tag="a"
                                  className="btn btn-trigger btn-icon dropdown-toggle"
                                >
                                  <Icon name="setting"></Icon>
                                </DropdownToggle>
                                <DropdownMenu
                                  right
                                  className="dropdown-menu-xs"
                                >
                                  <ul className="link-check">
                                    <li>
                                      <span>Show</span>
                                    </li>
                                    <li
                                      className={
                                        itemPerPage === 10 ? 'active' : ''
                                      }
                                    >
                                      <DropdownItem
                                        tag="a"
                                        href="#dropdownitem"
                                        onClick={(ev) => {
                                          ev.preventDefault()
                                          setItemPerPage(10)
                                        }}
                                      >
                                        10
                                      </DropdownItem>
                                    </li>
                                    <li
                                      className={
                                        itemPerPage === 15 ? 'active' : ''
                                      }
                                    >
                                      <DropdownItem
                                        tag="a"
                                        href="#dropdownitem"
                                        onClick={(ev) => {
                                          ev.preventDefault()
                                          setItemPerPage(15)
                                        }}
                                      >
                                        15
                                      </DropdownItem>
                                    </li>
                                  </ul>
                                  <ul className="link-check">
                                    <li>
                                      <span>Order</span>
                                    </li>
                                    <li
                                      className={sort === 'dsc' ? 'active' : ''}
                                    >
                                      <DropdownItem
                                        tag="a"
                                        href="#dropdownitem"
                                        onClick={(ev) => {
                                          ev.preventDefault()
                                          setSortState('dsc')
                                          sortFunc('dsc')
                                        }}
                                      >
                                        DESC
                                      </DropdownItem>
                                    </li>
                                    <li
                                      className={sort === 'asc' ? 'active' : ''}
                                    >
                                      <DropdownItem
                                        tag="a"
                                        href="#dropdownitem"
                                        onClick={(ev) => {
                                          ev.preventDefault()
                                          setSortState('asc')
                                          sortFunc('asc')
                                        }}
                                      >
                                        ASC
                                      </DropdownItem>
                                    </li>
                                  </ul>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`card-search search-wrap ${!onSearch && 'active'}`}
              >
                <div className="card-body">
                  <div className="search-content">
                    <Button
                      className="search-back btn-icon toggle-search active"
                      onClick={() => {
                        setSearchText('')
                        toggle()
                      }}
                    >
                      <Icon name="arrow-left"></Icon>
                    </Button>
                    <input
                      type="text"
                      className="border-transparent form-focus-none form-control"
                      placeholder="Search by user or email"
                      value={onSearchText}
                      onChange={(e) => onFilterChange(e)}
                    />
                    <Button className="search-submit btn-icon">
                      <Icon name="search"></Icon>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <DataTableBody compact>
              <DataTableHead>
                <DataTableRow className="nk-tb-col-check">
                  <div className="custom-control custom-control-sm custom-checkbox notext">
                    <input
                      type="checkbox"
                      className="custom-control-input form-control"
                      onChange={(e) => selectorCheck(e)}
                      id="uid"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="uid"
                    ></label>
                  </div>
                </DataTableRow>
                {assettypet.map((colum, id) => (
                  <DataTableRow size={colum.size} key={id}>
                    <span className={colum.className}>{colum.name}</span>
                  </DataTableRow>
                ))}
              </DataTableHead>
              {/*Head*/}
              {currentItems.length > 0
                ? currentItems.map((item) => {
                    return (
                      <DataTableItem key={item.id}>
                        <DataTableRow className="nk-tb-col-check">
                          <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input
                              type="checkbox"
                              className="custom-control-input form-control"
                              defaultChecked={item.checked}
                              id={item.id + 'uid1'}
                              key={Math.random()}
                              onChange={(e) => onSelectChange(e, item.id)}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor={item.id + 'uid1'}
                            ></label>
                          </div>
                        </DataTableRow>
                        <DataTableRow>
                          <Link
                            to={`${process.env.PUBLIC_URL}/user-details-regular/${item.id}`}
                          >
                            <div className="user-card">
                              <UserAvatar
                                theme={item.avatarBg}
                                className="xs"
                                text={findUpper(item.name)}
                                image={item.image}
                              ></UserAvatar>
                              <div className="user-info">
                                <span className="tb-lead">{item.name} </span>
                              </div>
                            </div>
                          </Link>
                        </DataTableRow>
                        <DataTableRow size="md">
                          <span>{item.role}</span>
                        </DataTableRow>
                        <DataTableRow size="sm">
                          <span>{item.email}</span>
                        </DataTableRow>
                        <DataTableRow size="md">
                          <span>{item.phone}</span>
                        </DataTableRow>
                        <DataTableRow size="lg">
                          <span>{item.country}</span>
                        </DataTableRow>
                        <DataTableRow size="lg">
                          <span>{item.country}</span>
                        </DataTableRow>
                        <DataTableRow size="lg">
                          <span>{item.country}</span>
                        </DataTableRow>
                        <DataTableRow size="lg">
                          <span>{item.country}</span>
                        </DataTableRow>{' '}
                        <DataTableRow size="lg">
                          <span>{item.country}</span>
                        </DataTableRow>
                      </DataTableItem>
                    )
                  })
                : null}
            </DataTableBody>
          </DataTable>
        </Block>
        <Modal
          isOpen={modal.add}
          toggle={() => setModal({ add: false })}
          className="modal-dialog-centered"
          size="lg"
        >
          <ModalBody>
            <a
              href="#cancel"
              onClick={(ev) => {
                ev.preventDefault()
                onFormCancel()
              }}
              className="close"
            >
              <Icon name="cross-sm"></Icon>
            </a>
            <div className="p-2">
              <h5 className="title">Add Permission</h5>
              <div className="mt-4">
                <Form
                  className="row gy-4"
                  onSubmit={handleSubmit(onFormSubmit)}
                >
                  {assetappf.map((fieldname, id) => {
                    if (
                      (fieldname.type !== 'number') &
                      (fieldname.type !== 'date') &
                      (fieldname.type !== 'text')
                    ) {
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
                                ref={register({
                                  required: 'Please Select Status',
                                })}
                              />
                              {errors.status && (
                                <span className="invalid">
                                  {errors.status.message}
                                </span>
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
                              ref={register({
                                required: 'This field is required',
                              })}
                            />
                            {errors.title && (
                              <span className="invalid">
                                {errors.title.message}
                              </span>
                            )}
                          </FormGroup>
                        </Col>
                      )
                    }
                  })}
                  <Col size="12">
                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                      <li>
                        <Button color="primary" size="md" type="submit">
                          Add Role
                        </Button>
                      </li>
                      <li>
                        <a
                          href="#cancel"
                          onClick={(ev) => {
                            ev.preventDefault()
                            onFormCancel()
                          }}
                          className="link link-light"
                        >
                          Cancel
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Form>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </Content>
    </React.Fragment>
  )
}

export default AssetApplication
