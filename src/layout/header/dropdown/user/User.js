import React, { useEffect, useState } from 'react'
import UserAvatar from '../../../../components/user/UserAvatar'
import { DropdownToggle, DropdownMenu, Dropdown, Button } from 'reactstrap'
import { Icon } from '../../../../components/Component'
import { LinkList, LinkItem } from '../../../../components/links/Links'
import String from '../../../../utils/String'
import immence_logo from '../../../../assets/images/immence_logo.svg'
import { useSelector } from 'react-redux'
import { findUpper } from '../../../../utils/Utils'

const User = (props) => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((prevState) => !prevState)
  const [showimg, setShowimg] = useState('')
  const [text, settext] = useState('Admin')
  const { currentEmp } = useSelector((state) => state.getCurrentEmp)

  const handleSignout = () => {
    localStorage.removeItem('accessToken')
  }

  return (
    <React.Fragment>
      <Button color="white" onClick={props.changetheme}>
        {' '}
        <img
          className="logo-dark logo-img"
          src={immence_logo}
          alt="logo"
        />{' '}
      </Button>
      {currentEmp.map((currentEmployee, index) => {
        return (
          <Dropdown isOpen={open} className="user-dropdown" toggle={toggle}>
            <DropdownToggle
              tag="a"
              href="#toggle"
              className="dropdown-toggle"
              onClick={(ev) => {
                ev.preventDefault()
              }}
            >
              <div className="user-toggle">
                <UserAvatar
                  text={findUpper(
                    `${currentEmployee.firstName} ${currentEmployee.lastName}`
                  )}
                ></UserAvatar>
                <div className="user-info d-none d-md-block">
                  <div className="user-status">
                    <span>{`${currentEmployee.firstName} ${currentEmployee.lastName}`}</span>
                  </div>
                  <div className="user-name dropdown-indicator">
                    {String.abu_bin_ishityak}
                  </div>
                </div>
              </div>
            </DropdownToggle>
            <DropdownMenu right className="dropdown-menu-md dropdown-menu-s1">
              <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                <div className="user-card sm">
                  <UserAvatar
                    text={findUpper(
                      `${currentEmployee.firstName} ${currentEmployee.lastName}`
                    )}
                  ></UserAvatar>
                  <div className="user-info">
                    {/* <span className="lead-text">{String.abu_bin_ishityak}</span> */}
                    <span className="sub-text">{`${currentEmployee.companyEmail}`}</span>
                  </div>
                </div>
              </div>
              <div className="dropdown-inner">
                <LinkList>
                  <a href={`/auth-login`} onClick={handleSignout}>
                    <Icon name="signout"></Icon>
                    <span>{String.sign_out}</span>
                  </a>
                </LinkList>
              </div>
            </DropdownMenu>
          </Dropdown>
        )
      })}
    </React.Fragment>
  )
}

export default User
