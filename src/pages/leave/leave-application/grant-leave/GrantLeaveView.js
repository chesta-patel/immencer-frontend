import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { Button } from 'reactstrap'
import {
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  Icon,
  PreviewCard,
} from '../../../../components/Component'
import Content from '../../../../layout/content/Content'
import { GetGrantLeave } from '../../../../services/thunk/GetGrantLeaveThunk'
import String from '../../../../utils/String'

function GrantLeaveView() {
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()
  const { assignGrantLeave } = useSelector((state) => state.GetGrantLeaveList)

  useEffect(() => {
    dispatch(GetGrantLeave(`grantLeaveAssign/${id}`))
    console.log('id', id)
  }, [id])

  return (
    <>
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
        <PreviewCard>
          {assignGrantLeave.map((assignLeave, id) => {
            return (
              <>
                <div className="data-head">
                  <h6 className="overline-title">{`${assignLeave.empName} ${String.grant_leave} `}</h6>
                </div>{' '}
                <div className="profile-ud-list">
                  <div className="profile-ud-item">
                    <div className="profile-ud wider">
                      <span className="profile-ud-label">{`${String.employee} ${String.name}`}</span>
                      <span>{assignLeave.empName}</span>
                    </div>
                  </div>
                </div>
                <div className="profile-ud-list">
                  <div className="profile-ud-item">
                    <div className="profile-ud wider">
                      <span className="profile-ud-label">{`${String.leave} ${String.count}`}</span>
                      <span>{assignLeave.leaveCount}</span>
                    </div>
                  </div>
                  <div className="profile-ud-item">
                    <div className="profile-ud wider">
                      <span className="profile-ud-label">{`${String.month_year} `}</span>
                      <span>{assignLeave.monthYear}</span>
                    </div>
                  </div>
                </div>
                <div className="profile-ud-list">
                  <div className="profile-ud-item">
                    <div className="profile-ud wider">
                      <span className="profile-ud-label">{`${String.note} `}</span>
                      <span>{assignLeave.description}</span>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </PreviewCard>
      </Content>
    </>
  )
}

export default GrantLeaveView
