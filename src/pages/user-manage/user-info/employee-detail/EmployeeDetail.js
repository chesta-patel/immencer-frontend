import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { Button, Card } from 'reactstrap'
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  UserAvatar,
} from '../../../../components/Component'
import Content from '../../../../layout/content/Content'
import { empDetail } from '../../../../services/thunk/EmployeeDetailThunk'
import String from '../../../../utils/String'
import { findUpper } from '../../../../utils/Utils'

function EmployeeDetail() {
  let { id } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()
  const { isSuccess } = useSelector((state) => state.getEmpDetail)
  useEffect(() => {
    dispatch(empDetail(`employee/${id}`))
  }, [id])

  return (
    <>
      {isSuccess && (
        <Content>
          <BlockHead className="detail-card">
            <BlockBetween className="detail-card">
              <BlockHeadContent>
                <BlockTitle>
                  <div className="user-card">
                    <UserAvatar
                      text={findUpper(
                        `${isSuccess.firstName} ${isSuccess.lastName}`
                      )}
                      theme="primary"
                    />
                    <div className="user-info">
                      <strong className="text-primary small">{`${isSuccess.firstName} ${isSuccess.lastName}`}</strong>
                    </div>
                  </div>
                </BlockTitle>
                <BlockDes>
                  <ul className="list-inline">
                    <li>
                      {String.employee_code}
                      <span className="text-base">{`: ${isSuccess.employeeCode}`}</span>
                    </li>
                    <li>
                      {String.last_login}
                      <span className="text-base">
                        {' '}
                        {`: ${moment(isSuccess.birthDate).format(
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
                  <span>Back</span>
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
              <div className="card-aside-wrap" id="user-detail-block">
                <div className="card-content">
                  <div className="card-inner">
                    <Block>
                      <div className="data-head">
                        <h6 className="overline-title">{String.basics}</h6>
                      </div>
                      <div className="profile-ud-list">
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">
                              {String.first_name}
                            </span>
                            <span className="profile-ud-value">
                              {`${isSuccess.firstName}`}
                            </span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">
                              {String.birth_day}
                            </span>
                            <span className="profile-ud-value">
                              {moment(isSuccess.birthDate).format('DD/MM/YYYY')}
                            </span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">
                              {String.last_name}
                            </span>
                            <span className="profile-ud-value">
                              {isSuccess.lastName}
                            </span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">
                              {String.mobile_number}
                            </span>
                            <span className="profile-ud-value">
                              {isSuccess.mobileNumbers}
                            </span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">
                              {String.email}
                            </span>
                            <span className="profile-ud-value">
                              {isSuccess.companyEmail}
                            </span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">
                              {String.whatsapp_mobile}
                            </span>
                            <span className="profile-ud-value">
                              {isSuccess.whatsappNumber}
                            </span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">
                              {String.personal_email}
                            </span>
                            <span className="profile-ud-value">
                              {isSuccess.personalEmail}
                            </span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">
                              {String.joining_date}
                            </span>
                            <span className="profile-ud-value">
                              {moment(isSuccess.birthDate).format('DD/MM/YYYY')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Block>
                  </div>
                </div>
              </div>
            </Card>
          </Block>
        </Content>
      )}
    </>
  )
}

export default EmployeeDetail
