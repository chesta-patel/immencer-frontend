import React, { useEffect, useState } from 'react'
import UserAvatar from '../../../../components/user/UserAvatar'
import { DropdownToggle, DropdownMenu, Dropdown, Button } from 'reactstrap'
import { Icon } from '../../../../components/Component'
import { LinkList, LinkItem } from '../../../../components/links/Links'
import String from '../../../../utils/String'
import immence_logo from '../../../../assets/images/immence_logo.svg'

const User = (props) => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((prevState) => !prevState)
  const [showimg, setShowimg] = useState('')
  const [text, settext] = useState('Admin')
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
            <UserAvatar icon="user-alt" className="sm" />
            <div className="user-info d-none d-md-block">
              <div className="user-status">{String.administrator}</div>
              <div className="user-name dropdown-indicator">
                {String.abu_bin_ishityak}
              </div>
            </div>
          </div>
        </DropdownToggle>
        <DropdownMenu right className="dropdown-menu-md dropdown-menu-s1">
          <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
            <div className="user-card sm">
              <div className="user-avatar">
                <span>AB</span>
              </div>
              <div className="user-info">
                <span className="lead-text">{String.abu_bin_ishityak}</span>
                <span className="sub-text">user@immence.in</span>
              </div>
            </div>
          </div>
          <div className="dropdown-inner">
            <LinkList>
              <LinkItem
                link="/user-profile-regular"
                icon="user-alt"
                onClick={toggle}
              >
                {`${String.view}${String.profile}`}
              </LinkItem>
              <LinkItem
                link="/user-profile-setting"
                icon="setting-alt"
                onClick={toggle}
              >
                {`${String.account_setting}`}
              </LinkItem>
              <LinkItem
                link="/user-profile-activity"
                icon="activity-alt"
                onClick={toggle}
              >
                {String.login_activity}
              </LinkItem>
            </LinkList>
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
    </React.Fragment>
  )
}

export default User
