import classNames from 'classnames'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import {
  Button,
  Card,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  NavLink,
} from 'reactstrap'
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  PreviewCard,
  UserAvatar,
} from '../../../../components/Component'
import Content from '../../../../layout/content/Content'
import { empDetail } from '../../../../services/thunk/EmployeeDetailThunk'
import String from '../../../../utils/String'
import { findUpper } from '../../../../utils/Utils'
import classnames from 'classnames'
import { toastNotify } from '../../../../layout/Index'

function EmployeeDetail() {
  let { id } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()
  const { isSuccess } = useSelector((state) => state.getEmpDetail)
  const [activeTab, setActiveTab] = useState('1')
  const [activeIconTab, setActiveIconTab] = useState('5')
  const [activeAltTab, setActiveAltTab] = useState('9')
  const [verticalTab, setVerticalTab] = useState('1')
  const [verticalIconTab, setVerticalIconTab] = useState('1')
  const [apiCallStatus, setApiCallStatus] = useState({
    status: '',
    message: '',
  })

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }
  const toggleIconTab = (icontab) => {
    if (activeIconTab !== icontab) setActiveIconTab(icontab)
  }
  const toggleAltTab = (alttab) => {
    if (activeAltTab !== alttab) setActiveAltTab(alttab)
  }
  useEffect(() => {
    callFormSubmit()
  }, [id])
  const callFormSubmit = async () => {
    // const dataAsFormData = getFormData(data)
    let callAPI = await dispatch(empDetail(`employee/${id}`))
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
      history.push('/employee')
    }
  }

  return (
    <>
      {isSuccess.map((currentEmp, index) => {
        return (
          <Content>
            <BlockHead className="detail-card">
              <BlockBetween className="detail-card">
                <BlockHeadContent>
                  <BlockTitle>
                    <div className="user-card">
                      <UserAvatar
                        text={findUpper(
                          `${currentEmp.firstName} ${currentEmp.lastName}`
                        )}
                        theme="primary"
                      />
                      <div className="user-info">
                        <strong className="text-primary small">{`${currentEmp.firstName} ${currentEmp.lastName}`}</strong>
                      </div>
                    </div>
                  </BlockTitle>
                  <BlockDes>
                    <ul className="list-inline">
                      <li>
                        {String.employee_code}
                        <span className="text-base">{`: ${currentEmp.employeeCode}`}</span>
                      </li>
                      <li>
                        {String.last_login}
                        <span className="text-base">
                          {' '}
                          {`: ${moment(currentEmp.birthDate).format(
                            'DD/MM/YYYY'
                          )}`}
                        </span>
                      </li>
                    </ul>
                  </BlockDes>
                </BlockHeadContent>
                <BlockHeadContent>
                  <Button
                    color="light"
                    outline
                    className="bg-white d-none d-sm-inline-flex"
                    onClick={() => history.goBack()}
                  >
                    <Icon name="arrow-left"></Icon>
                    <span>{String.back}</span>
                  </Button>
                  <a
                    href="#back"
                    onClick={(ev) => {
                      ev.preventDefault()
                      history.goBack()
                    }}
                    className="btn btn-icon btn-outline-light bg-white d-inline-flex d-sm-none"
                  >
                    <Icon name="arrow-left"></Icon>
                  </a>
                </BlockHeadContent>
              </BlockBetween>
            </BlockHead>
            <Block>
              <Card className="card-bordered">
                <PreviewCard>
                  <Nav tabs className="mt-n3">
                    <NavItem>
                      <NavLink
                        tag="a"
                        href="#tab"
                        className={classnames({ active: activeTab === '1' })}
                        onClick={(ev) => {
                          ev.preventDefault()
                          toggle('1')
                        }}
                      >
                        <Icon name="user" />
                        <span>{String.personal}</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag="a"
                        href="#tab"
                        className={classnames({ active: activeTab === '2' })}
                        onClick={(ev) => {
                          ev.preventDefault()
                          toggle('2')
                        }}
                      >
                        <Icon name="location" />
                        <span>{String.address_detail}</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag="a"
                        href="#tab"
                        className={classnames({ active: activeTab === '3' })}
                        onClick={(ev) => {
                          ev.preventDefault()
                          toggle('3')
                        }}
                      >
                        <Icon name="book-read" />
                        <span>{String.education}</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag="a"
                        href="#tab"
                        className={classnames({ active: activeTab === '4' })}
                        onClick={(ev) => {
                          ev.preventDefault()
                          toggle('4')
                        }}
                      >
                        <Icon name="list-check" />
                        <span>{String.permission}</span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <div className="card-aside-wrap" id="user-detail-block">
                        <div className="card-content">
                          <div className="card-inner">
                            <Block>
                              <div className="profile-ud-list">
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.first_name}
                                    </span>
                                    <span className="profile-ud-value">
                                      {`${currentEmp.firstName}`}
                                    </span>
                                  </div>
                                </div>
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.last_name}
                                    </span>
                                    <span className="profile-ud-value">
                                      {currentEmp.lastName}
                                    </span>
                                  </div>
                                </div>
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.employee_code}
                                    </span>
                                    <span className="profile-ud-value">
                                      {currentEmp.employeeCode}
                                    </span>
                                  </div>
                                </div>
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.email}
                                    </span>
                                    <span className="profile-ud-value">
                                      {currentEmp.companyEmail}
                                    </span>
                                  </div>
                                </div>
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.email}
                                    </span>
                                    <span className="profile-ud-value">
                                      {currentEmp.companyEmail}
                                    </span>
                                  </div>
                                </div>
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.birth_day}
                                    </span>
                                    <span className="profile-ud-value">
                                      {moment(currentEmp.birthDate).format(
                                        'DD/MM/YYYY'
                                      )}
                                    </span>
                                  </div>
                                </div>

                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.mobile_number}
                                    </span>
                                    <span className="profile-ud-value">
                                      {currentEmp.mobileNumbers}
                                    </span>
                                  </div>
                                </div>

                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.whatsapp_mobile}
                                    </span>
                                    <span className="profile-ud-value">
                                      {currentEmp.whatsappNumber}
                                    </span>
                                  </div>
                                </div>
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.personal_email}
                                    </span>
                                    <span className="profile-ud-value">
                                      {currentEmp.personalEmail}
                                    </span>
                                  </div>
                                </div>
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.joining_date}
                                    </span>
                                    <span className="profile-ud-value">
                                      {moment(currentEmp.birthDate).format(
                                        'DD/MM/YYYY'
                                      )}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Block>
                          </div>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="2">
                      <div className="card-aside-wrap" id="user-detail-block">
                        <div className="card-content">
                          <div className="card-inner">
                            <Block>
                              <div className="data-head">
                                <h6 className="overline-title">
                                  {String.permanent_address}
                                </h6>
                              </div>
                              <div className="profile-ud-list">
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.address_1}
                                    </span>
                                    <span className="profile-ud-value">
                                      {`${currentEmp.permanentAddress.address1}`}
                                    </span>
                                  </div>
                                </div>
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.address_2}
                                    </span>
                                    <span className="profile-ud-value">
                                      {`${currentEmp.permanentAddress.address2}`}
                                    </span>
                                  </div>
                                </div>
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.city}
                                    </span>
                                    <span className="profile-ud-value">
                                      {currentEmp.permanentAddress.city}
                                    </span>
                                  </div>
                                </div>
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.state_region}
                                    </span>
                                    <span className="profile-ud-value">
                                      {currentEmp.permanentAddress.state}
                                    </span>
                                  </div>
                                </div>
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.country}
                                    </span>
                                    <span className="profile-ud-value">
                                      {currentEmp.permanentAddress.country}
                                    </span>
                                  </div>
                                </div>
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.postal_code}
                                    </span>
                                    <span className="profile-ud-value">
                                      {currentEmp.permanentAddress.zipCode}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Block>
                            <Block>
                              <div className="data-head">
                                <h6 className="overline-title">
                                  {String.current_address}
                                </h6>
                              </div>
                              <div className="profile-ud-list">
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.address_1}
                                    </span>
                                    <span className="profile-ud-value">
                                      {`${currentEmp.currentAddress.address1}`}
                                    </span>
                                  </div>
                                </div>
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.address_2}
                                    </span>
                                    <span className="profile-ud-value">
                                      {`${currentEmp.currentAddress.address2}`}
                                    </span>
                                  </div>
                                </div>
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.city}
                                    </span>
                                    <span className="profile-ud-value">
                                      {currentEmp.currentAddress.city}
                                    </span>
                                  </div>
                                </div>
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.state_region}
                                    </span>
                                    <span className="profile-ud-value">
                                      {currentEmp.currentAddress.state}
                                    </span>
                                  </div>
                                </div>
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.country}
                                    </span>
                                    <span className="profile-ud-value">
                                      {currentEmp.currentAddress.country}
                                    </span>
                                  </div>
                                </div>
                                <div className="profile-ud-item">
                                  <div className="profile-ud wider">
                                    <span className="profile-ud-label">
                                      {String.postal_code}
                                    </span>
                                    <span className="profile-ud-value">
                                      {currentEmp.currentAddress.zipCode}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Block>
                          </div>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="3">
                      {console.log('currentEmp', currentEmp.education)}
                      {/* {currentEmp.education.map((educationList, index) => {
                        console.log('educationList', educationList)
                        // return (
                        //   <Block>
                        //     <div className="profile-ud-list">
                        //       <div className="profile-ud-item">
                        //         <div className="profile-ud wider">
                        //           <span className="profile-ud-label">
                        //             {String.education}
                        //           </span>
                        //           <span className="profile-ud-value">
                        //             {`${educationList.degree}`}
                        //           </span>
                        //         </div>
                        //       </div>
                        //       <div className="profile-ud-item">
                        //         <div className="profile-ud wider">
                        //           <span className="profile-ud-label">
                        //             {String.start_date}
                        //           </span>
                        //           <span className="profile-ud-value">
                        //             {`${educationList.startDate}`}
                        //           </span>
                        //         </div>
                        //       </div>
                        //       <div className="profile-ud-item">
                        //         <div className="profile-ud wider">
                        //           <span className="profile-ud-label">
                        //             {String.end_date}
                        //           </span>
                        //           <span className="profile-ud-value">
                        //             {`${educationList.endDate}`}
                        //           </span>
                        //         </div>
                        //       </div>
                        //     </div>
                        //   </Block>
                        // )
                      })} */}
                    </TabPane>
                    <TabPane tabId="4"></TabPane>
                  </TabContent>
                </PreviewCard>
              </Card>
            </Block>
          </Content>
        )
      })}
    </>
  )
}

export default EmployeeDetail
