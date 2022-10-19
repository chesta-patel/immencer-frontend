import React, { useEffect, useState } from 'react'
import { filterStatus, filterRole } from '../../user-manage/UserData'
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
} from '../../../components/Component'
import String from '../../../utils/String'
import PdfViewer from '../../../components/pdfviewer/PdfViewer'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { shortObjectWithNUmber } from '../../../utils/Helpers'
import { permissions } from '../../../layout/header/dropdown/PermissionJson'
import { useDispatch } from 'react-redux'
import { getAssetsApplicationDataByID } from '../../../services/thunk/AssetsApplicationThunk'
import { toastNotify } from '../../../layout/Index'
import { empData } from './../../../services/thunk/GetEmployee'
import { fetchData } from '../../../services/thunk/AuthThunk'

function AssetsApplicationPageTable(props) {
  const { permission } = useSelector((state) => state.dropdown)

  var hasAssetsEditPermissions = false
  var hasAssetsDeletePermissions = false
  const token = localStorage.getItem('navyblue')
  if (token == 'navyblue') {
    permission?.[0]?.permission?.map((permissionLIst, index) => {
      if (permissionLIst.modalName == 'Assets') {
        hasAssetsEditPermissions = permissionLIst.add
        hasAssetsDeletePermissions = permissionLIst.delete
      }
    })
  }

  const dispatch = useDispatch()
  const { infoList } = useSelector((state) => state.assetsApplication)
  const [actionText, setActionText] = useState('')
  const [onSearch, setonSearch] = useState(true)
  const [onSearchText, setSearchText] = useState('')
  const [tablesm, updateTableSm] = useState(false)
  const [sort, setSortState] = useState('')
  const [data, setData] = useState([])
  const history = useHistory()
  const [currentPage] = useState(1)
  const [itemPerPage, setItemPerPage] = useState(10)
  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage
  const indexOfFirstItem = indexOfLastItem - itemPerPage
  const currentItems = infoList
    ?.filter((data) => data.isDeleted !== 1 && data.isActive === 1)
    ?.slice(indexOfFirstItem, indexOfLastItem)
    ?.sort(shortObjectWithNUmber('seqNo'))
  const [modal, setModal] = useState({ view: false, link: '' })
  const [deleteModal, setDeleteModal] = useState({ status: false, data: '' })

  useEffect(() => {
    setData(currentItems)
  }, [infoList])

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
      const filter = props?.json.map((d) => {
        return d?.key_name?.map((key) => {
          const filteredObject = currentItems?.filter((item) => {
            switch (key) {
              case 'updatedAt' || 'createdAt':
                let date = item.updatedAt
                  ? moment(item.updatedAt).format('L')
                  : moment(item.createdAt).format('L')
                return date
                  ?.toString()
                  ?.toLowerCase()
                  ?.includes(onSearchText?.toString()?.toLowerCase())

              default:
                return item[key]
                  ?.toString()
                  ?.toLowerCase()
                  ?.includes(onSearchText?.toString()?.toLowerCase())
            }
          })
          return filteredObject
        })
      })

      const filterNormalized = [
        ...new Set(filter?.flat(2)?.map(JSON?.stringify)),
      ]?.map(JSON?.parse)

      setData([...filterNormalized])
    } else {
      setData(currentItems)
    }
  }, [onSearchText])
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

  const handelAssetsEdit = async (assetInfo) => {
    let callAPI = await dispatch(getAssetsApplicationDataByID(assetInfo?.id))
    if (callAPI?.payload?.data?.isSuccess) {
      let assetData = {
        id: assetInfo?.id,
        type: callAPI?.payload?.data?.data?.getAssetData?.type,
        name: callAPI?.payload?.data?.data?.getAssetData?.name,
        code: callAPI?.payload?.data?.data?.getAssetData?.code,
        serialNumber: callAPI?.payload?.data?.data?.getAssetData?.serialNumber,
        description: callAPI?.payload?.data?.data?.getAssetData?.description,
        status: callAPI?.payload?.data?.data?.getAssetData?.status,
        assignee: callAPI?.payload?.data?.data?.assetAssign?.assignee,
        assignDate: moment(
          callAPI?.payload?.data?.data?.assetAssign?.assignDate,
          'DD/MM/YYYY'
        ).format('YYYY-MM-DD'),
        notes: callAPI?.payload?.data?.data?.assetAssign?.notes,
      }
      dispatch(empData('employee'))
      dispatch(fetchData('master/assetStatus'))
      dispatch(fetchData('assetType'))
      history.push({
        pathname: '/assets-application/create',
        state: { add: false, edit: true, data: assetData },
      })
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      toastNotify('error', callAPI?.payload?.response?.data?.message)
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
                <div
                  id="DataTables_Table_0_filter"
                  className="dataTables_filter form-inline flex-nowrap gx-3"
                >
                  <label>
                    <input
                      type="search"
                      className="form-control form-control-sm"
                      placeholder="Search..."
                      onChange={(ev) => setSearchText(ev.target.value)}
                    />
                  </label>
                </div>
              </div>
              <div className="card-tools mr-n1">
                <ul className="btn-toolbar gx-1">
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
            {data?.length > 0
              ? data.map((item) => {
                  return (
                    <DataTableItem key={item.id}>
                      <DataTableRow size="md">
                        <div className="user-card">
                          <div className="user-info">
                            <span className="tb-lead">{item.code} </span>
                          </div>
                        </div>
                      </DataTableRow>
                      <DataTableRow size="md">
                        <div className="user-info">
                          <span className="tb-lead">{item.name} </span>
                        </div>
                      </DataTableRow>
                      <DataTableRow size="sm">
                        <span>{item.typeName}</span>
                      </DataTableRow>
                      <DataTableRow size="sm">
                        <span>{item.statusName}</span>
                      </DataTableRow>
                      <DataTableRow size="lg" className="action_icon">
                        {hasAssetsDeletePermissions && (
                          <span className="policy_edit">
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
                        )}
                        {hasAssetsEditPermissions && (
                          <span>
                            <Button
                              color=""
                              className="btn-icon"
                              onClick={() => handelAssetsEdit(item)}
                              style={{ margin: '0px' }}
                            >
                              <span style={{ display: 'flex' }}>
                                <em class="icon ni ni-edit"></em>
                              </span>
                            </Button>
                          </span>
                        )}
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
        <ModalBody>
          <PdfViewer url={modal.link} />
        </ModalBody>
      </Modal>
      <Modal
        isOpen={deleteModal.status}
        toggle={() => setDeleteModal({ status: false, data: '' })}
        className="modal-dialog-centered delete_assets_application"
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
          <h2 className="modal_title">{String.delete_confirmation}</h2>
          <p className="alert alert-danger">
            {String.are_you_sure_you_want_to_delete_the} {deleteModal.data.code}{' '}
            ?
          </p>
          <button
            type="button"
            onClick={(ev) => {
              ev.preventDefault()
              setDeleteModal({ status: false, data: '' })
            }}
            className="Pre btn header_submit_bn"
          >
            {String.cancel}
          </button>
          <button
            type="button"
            className="header_submit_bn btn btn-danger"
            onClick={() => props.callDeleteFormSubmit(deleteModal.data.id)}
          >
            {String.delete}
          </button>
        </ModalBody>
      </Modal>
    </React.Fragment>
  )
}

export default AssetsApplicationPageTable
