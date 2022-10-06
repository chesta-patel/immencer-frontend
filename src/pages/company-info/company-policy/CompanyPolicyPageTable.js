import React, { useContext, useEffect, useState } from 'react'
import {
  filterStatus,
  filterRole,
  companyPolicy,
} from '../../user-manage/UserData'
import { findUpper } from '../../../utils/Utils'
import {
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  UncontrolledDropdown,
  DropdownItem,
  Modal,
  ModalBody,
} from 'reactstrap'
import {
  Block,
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
} from '../../../components/Component'
import { UserContext } from '../../user-manage/UserContext'
import { Link } from 'react-router-dom'
import { bulkActionOptions } from '../../../utils/Utils'
import String from '../../../utils/String'
import PdfViewer from '../../../components/pdfviewer/PdfViewer'
import moment from 'moment'
import { useSelector } from 'react-redux'
import './companyPolicy.scss'
import { useDispatch } from 'react-redux'
import { deleteCompanyPolicy } from './../../../services/thunk/DeleteCompanyPolicyThunk'

function CompanyPolicyPageTable(props) {
  const dispatch = useDispatch()
  const { infoList, loader } = useSelector((state) => state.companyPolicy)
  const [actionText, setActionText] = useState('')
  const [onSearch, setonSearch] = useState(true)
  const [onSearchText, setSearchText] = useState('')
  const [tablesm, updateTableSm] = useState(false)
  const [sort, setSortState] = useState('')
  const { contextData } = useContext(UserContext)
  const [data, setData] = contextData
  const [currentPage] = useState(1)
  const [itemPerPage, setItemPerPage] = useState(10)
  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage
  const indexOfFirstItem = indexOfLastItem - itemPerPage
  const currentItems = infoList?.slice(indexOfFirstItem, indexOfLastItem)

  const [modal, setModal] = useState({ view: false, link: '' })
  const [deleteModal, setDeleteModal] = useState({ status: false, data: '' })

  const onFormCancel = () => {
    setModal({ view: false, link: '' })
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
      const filteredObject = infoList.filter((item) => {
        return (
          item.name.toLowerCase().includes(onSearchText.toLowerCase()) ||
          item.email.toLowerCase().includes(onSearchText.toLowerCase())
        )
      })
      setData([...filteredObject])
    } else {
      setData([...companyPolicy])
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
  useEffect(() => {
    if (props.deleteApiCallStatus.status === 'success') {
      setDeleteModal({ status: false, data: '' })
      props.setDeleteApiCallStatus({
        status: '',
        message: '',
      })
    }
  }, [props])

  return (
    <React.Fragment>
      <Block>
        <DataTable className="card-stretch">
          <div className="card-inner position-relative card-tools-toggle padding_btm_0">
            <div className="card-title-group">
              <div className="card-tools">
                <div className="form-inline flex-nowrap gx-3">
                  {/* <div className="form-wrap">
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
                        {String.apply}
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
                  </div> */}
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
                                    {`${String.filter} ${String.user}`}
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
                                          {String.have_balance}
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
                                          {String.kyc_verified}
                                        </label>
                                      </div>
                                    </Col>
                                    <Col size="6">
                                      <FormGroup>
                                        <label className="overline-title overline-title-alt">
                                          {String.role}
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
                                          {String.status}
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
                                          {String.filter}
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
                                    {`${String.reset} ${String.filter}`}
                                  </a>
                                  <a
                                    href="#save"
                                    onClick={(ev) => {
                                      ev.preventDefault()
                                    }}
                                  >
                                    {`${String.save} ${String.filter}`}
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
                              <DropdownMenu right className="dropdown-menu-xs">
                                <ul className="link-check">
                                  <li>
                                    <span>{String.show}</span>
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
                                    <span>{String.order}</span>
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
                                      {String.asc}
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
                                      {String.desc}
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
            <div className={`card-search search-wrap ${!onSearch && 'active'}`}>
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
              {props.json.map((colum, id) => (
                <DataTableRow size="md" key={id}>
                  <span className="sub-text">{colum.name}</span>
                </DataTableRow>
              ))}
            </DataTableHead>
            {/*Head*/}
            {currentItems?.length > 0
              ? currentItems.map((item) => {
                  return (
                    <DataTableItem key={item.id}>
                      <DataTableRow size="md">
                        {/* <Link to={`/user-details-regular/${item.id}`}> */}
                        <div className="user-card">
                          {/* <UserAvatar
                              theme={item.avatarBg}
                              className="xs"
                              text={findUpper(item.name)}
                              image={item.image}
                            ></UserAvatar> */}
                          <div className="user-info">
                            <span className="tb-lead">{item.title} </span>
                          </div>
                        </div>
                        {/* </Link> */}
                      </DataTableRow>
                      <DataTableRow size="md">
                        <div className="user-info">
                          <span className="tb-lead">{item.description} </span>
                        </div>
                      </DataTableRow>
                      <DataTableRow size="sm">
                        <span>{item.uploadedBy}</span>
                      </DataTableRow>
                      <DataTableRow size="md">
                        <span>
                          {item.updatedAt
                            ? moment(item.updatedAt).format('L')
                            : moment(item.createdAt).format('L')}
                        </span>
                      </DataTableRow>
                      <DataTableRow size="lg">
                        <span>
                          <Button
                            color=""
                            className="btn-icon eye_btn"
                            onClick={() =>
                              setModal({ view: true, link: item.assets })
                            }
                            style={{ margin: '0px' }}
                          >
                            <em class="icon ni ni-eye"></em>
                          </Button>
                        </span>
                      </DataTableRow>
                      <DataTableRow size="lg">
                        <span>
                          <Button
                            color=""
                            className="btn-icon"
                            onClick={() =>
                              setDeleteModal({
                                status: true,
                                data: item,
                              })
                            }
                            style={{ margin: '0px' }}
                          >
                            <em class="icon ni ni-trash"></em>
                          </Button>
                        </span>
                      </DataTableRow>
                    </DataTableItem>
                  )
                })
              : null}
          </DataTableBody>
        </DataTable>
      </Block>
      <Modal
        isOpen={modal.view}
        toggle={() => setModal({ view: false, link: '' })}
        className="modal-dialog-centered pdf_modal"
        size="lg"
      >
        {/* <ModalBody>
          <button
            onClick={(ev) => {
              ev.preventDefault()
              onFormCancel()
              setModal({ view: false, link: '' })
            }}
            className="close"
          >
            <Icon name="cross-sm"></Icon>
          </button>
          <iframe
            src={modal.link + '#toolbar=0'}
            width="100%"
            height="500px"
            title="pdf"
            onMouseDown={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
          ></iframe>
        </ModalBody> */}
        <ModalBody>
          <PdfViewer url={modal.link} />
        </ModalBody>
      </Modal>
      <Modal
        isOpen={deleteModal.status}
        toggle={() => setDeleteModal({ status: false, data: '' })}
        className="modal-dialog-centered delete_policy"
        size="lg"
      >
        <ModalBody>
          <button
            onClick={(ev) => {
              ev.preventDefault()
              setDeleteModal({ status: false, data: '' })
            }}
            className="close"
          >
            <Icon name="cross-sm"></Icon>
          </button>
          <h2 className="modal_title">Delete Confirmation</h2>
          <p className="alert alert-danger">
            Are you sure you want to delete the {deleteModal.data.title}
          </p>
          <button
            type="button"
            // disabled={pageNumber <= 1}
            onClick={(ev) => {
              ev.preventDefault()
              setDeleteModal({ status: false, data: '' })
            }}
            className="Pre btn header_submit_bn"
          >
            Cancel
          </button>
          <button
            type="button"
            className="header_submit_bn btn btn-danger"
            // disabled={pageNumber >= numPages}
            onClick={() => props.callDeleteFormSubmit(deleteModal.data.id)}
          >
            Delete
          </button>
        </ModalBody>
      </Modal>
    </React.Fragment>
  )
}

export default CompanyPolicyPageTable
