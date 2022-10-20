import moment from 'moment'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { Button, Card } from 'reactstrap'
import {
  Block,
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  Icon,
  PreviewCard,
} from '../../../components/Component'
import Content from '../../../layout/content/Content'
import { GetLeave } from '../../../services/thunk/GetLeaveThunk'
import String from '../../../utils/String'

function LeaveView() {
  const history = useHistory()
  const { employeeLeave } = useSelector((state) => state.GetLeaveList)
  const leaveid = history.location.state?.data
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetLeave(`leave/${leaveid}`))
  }, [])
  useEffect(() => {
    console.log('employeeLeave', employeeLeave)
  }, [employeeLeave])
  console.log('leave id', history.location.state?.data)
  return (
    <React.Fragment>
      <Content>
        <BlockHead className="detail-card">
          <BlockBetween className="detail-card">
            <BlockHeadContent></BlockHeadContent>
            <BlockHeadContent>
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
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <Card className="card-bordered">
            <PreviewCard>
              {employeeLeave.map((empLeaveData, id) => {
                return (
                  <>
                    <div className="data-head">
                      <h6 className="overline-title">{`${empLeaveData.employeeName} ${String.leave_application} `}</h6>
                    </div>
                    <Block>
                      <div className="profile-ud-list">
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">
                              {String.leave_type}
                            </span>
                            <span>{empLeaveData.leaveTypeName}</span>
                          </div>
                        </div>
                      </div>
                      {empLeaveData.datesDetails.map((dates, id) => {
                        return (
                          <div className="profile-ud-list m-0 justify-content-between">
                            <div className="">
                              <div className="profile-ud wider">
                                <span className="profile-ud-label">
                                  {String.date}
                                </span>{' '}
                                <span>
                                  {moment(dates.date).format('DD/MM/YYYY')}
                                </span>
                              </div>
                            </div>
                            <div className="">
                              <div className="profile-ud wider">
                                <span className="profile-ud-label">
                                  {String.day_type}
                                </span>
                                <span>{dates.dayTypeName}</span>
                              </div>
                            </div>
                            <div className="">
                              <div className="profile-ud wider">
                                <span className="profile-ud-label">
                                  {String.status}
                                </span>
                                <span>{dates.statusName}</span>
                              </div>
                            </div>
                          </div>
                        )
                      })}

                      <div className="profile-ud">
                        <div className="profile-ud">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">
                              {String.description}
                            </span>
                            <span>{empLeaveData.description}</span>
                          </div>
                        </div>
                      </div>
                    </Block>
                  </>
                )
              })}
            </PreviewCard>
          </Card>
        </Block>
      </Content>
    </React.Fragment>
  )
}

export default LeaveView
