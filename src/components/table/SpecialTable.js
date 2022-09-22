import React from 'react'
import Icon from '../icon/Icon'
import Button from '../button/Button'
import { loginData, orderData, transactionData } from './TableData'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import String from '../../utils/String'

export const SpecialTable = ({ action, isCompact, data }) => {
  const DropdownTrans = () => {
    return (
      <UncontrolledDropdown>
        <DropdownToggle
          tag="a"
          className="text-soft dropdown-toggle btn btn-icon btn-trigger"
        >
          <Icon name="more-h"></Icon>
        </DropdownToggle>
        <DropdownMenu right>
          <ul className="link-list-plain">
            <li>
              <DropdownItem
                tag="a"
                href="#dropdownitem"
                onClick={(ev) => {
                  ev.preventDefault()
                }}
              >
                {String.view}
              </DropdownItem>
            </li>
            <li>
              <DropdownItem
                tag="a"
                href="#dropdownitem"
                onClick={(ev) => {
                  ev.preventDefault()
                }}
              >
                {String.view}
              </DropdownItem>
            </li>
            <li>
              <DropdownItem
                tag="a"
                href="#dropdownitem"
                onClick={(ev) => {
                  ev.preventDefault()
                }}
              >
                {String.print}
              </DropdownItem>
            </li>
          </ul>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }

  return (
    <table className={`table table-tranx ${isCompact ? 'is-compact' : ''}`}>
      <thead>
        <tr className="tb-tnx-head">
          <th className="tb-tnx-id">
            <span className="">#</span>
          </th>
          <th className="tb-tnx-info">
            <span className="tb-tnx-desc d-none d-sm-inline-block">
              <span>{String.bill_for}</span>
            </span>
            <span className="tb-tnx-date d-md-inline-block d-none">
              <span className="d-md-none">{String.date}</span>
              <span className="d-none d-md-block">
                <span>{`${String.issue} ${String.date}`}</span>
                <span>{`${String.due} ${String.date}`}</span>
              </span>
            </span>
          </th>
          <th className="tb-tnx-amount is-alt">
            <span className="tb-tnx-total">{String.total}</span>
            <span className="tb-tnx-status d-none d-md-inline-block">
              {String.status}
            </span>
          </th>
          {action && (
            <th className="tb-tnx-action">
              <span>&nbsp;</span>
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {data
          ? data.map((item) => {
              return (
                <tr key={item.id} className="tb-tnx-item">
                  <td className="tb-tnx-id">
                    <a
                      href="#id"
                      onClick={(ev) => {
                        ev.preventDefault()
                      }}
                    >
                      <span>{item.id}</span>
                    </a>
                  </td>
                  <td className="tb-tnx-info">
                    <div className="tb-tnx-desc">
                      <span className="title">{item.bill}</span>
                    </div>
                    <div className="tb-tnx-date">
                      <span className="date">{item.issue}</span>
                      <span className="date">{item.due}</span>
                    </div>
                  </td>
                  <td className="tb-tnx-amount is-alt">
                    <div className="tb-tnx-total">
                      <span className="amount">${item.total}</span>
                    </div>
                    <div className="tb-tnx-status">
                      <span
                        className={`badge badge-dot badge-${
                          item.status === 'Paid'
                            ? 'success'
                            : item.status === 'Due'
                            ? 'warning'
                            : 'danger'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </td>

                  {action && (
                    <td className="tb-tnx-action">
                      <DropdownTrans />
                    </td>
                  )}
                </tr>
              )
            })
          : transactionData.data.map((item) => {
              return (
                <tr key={item.id} className="tb-tnx-item">
                  <td className="tb-tnx-id">
                    <a
                      href="#id"
                      onClick={(ev) => {
                        ev.preventDefault()
                      }}
                    >
                      <span>{item.id}</span>
                    </a>
                  </td>
                  <td className="tb-tnx-info">
                    <div className="tb-tnx-desc">
                      <span className="title">{item.bill}</span>
                    </div>
                    <div className="tb-tnx-date">
                      <span className="date">{item.issue}</span>
                      <span className="date">{item.due}</span>
                    </div>
                  </td>
                  <td className="tb-tnx-amount is-alt">
                    <div className="tb-tnx-total">
                      <span className="amount">${item.total}</span>
                    </div>
                    <div className="tb-tnx-status">
                      <span
                        className={`badge badge-dot badge-${
                          item.status === 'Paid'
                            ? 'success'
                            : item.status === 'Due'
                            ? 'warning'
                            : 'danger'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </td>
                  {action && (
                    <td className="tb-tnx-action">
                      <DropdownTrans />
                    </td>
                  )}
                </tr>
              )
            })}
      </tbody>
    </table>
  )
}
export const OrderTable = () => {
  const DropdownTrans = () => {
    return (
      <UncontrolledDropdown>
        <DropdownToggle
          tag="a"
          className="text-soft dropdown-toggle btn btn-icon btn-trigger"
        >
          <Icon name="more-h"></Icon>
        </DropdownToggle>
        <DropdownMenu right>
          <ul className="link-list-plain">
            <li>
              <DropdownItem
                tag="a"
                href="#dropdownitem"
                onClick={(ev) => {
                  ev.preventDefault()
                }}
              >
                {String.view}
              </DropdownItem>
            </li>
            <li>
              <DropdownItem
                tag="a"
                href="#dropdownitem"
                onClick={(ev) => {
                  ev.preventDefault()
                }}
              >
                {String.invoice}
              </DropdownItem>
            </li>
            <li>
              <DropdownItem
                tag="a"
                href="#dropdownitem"
                onClick={(ev) => {
                  ev.preventDefault()
                }}
              >
                {String.print}
              </DropdownItem>
            </li>
          </ul>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
  return (
    <table className="table table-orders">
      <thead className="tb-odr-head">
        <tr className="tb-odr-item">
          <th className="tb-odr-info">
            <span className="tb-odr-id">{String.order_id}</span>
            <span className="tb-odr-date d-none d-md-inline-block">
              {String.date}
            </span>
          </th>
          <th className="tb-odr-amount">
            <span className="tb-odr-total">{String.amount}</span>
            <span className="tb-odr-status d-none d-md-inline-block">
              {String.status}
            </span>
          </th>
          <th className="tb-odr-action">&nbsp;</th>
        </tr>
      </thead>
      <tbody className="tb-odr-body">
        {orderData.map((item) => {
          return (
            <tr className="tb-odr-item" key={item.id}>
              <td className="tb-odr-info">
                <span className="tb-odr-id">
                  <a
                    href="#id"
                    onClick={(ev) => {
                      ev.preventDefault()
                    }}
                  >
                    {item.id}
                  </a>
                </span>
                <span className="tb-odr-date">{item.date}</span>
              </td>
              <td className="tb-odr-amount">
                <span className="tb-odr-total">
                  <span className="amount">${item.amount}</span>
                </span>
                <span className="tb-odr-status">
                  <span
                    className={`badge badge-dot badge-${
                      item.status === 'Complete'
                        ? 'success'
                        : item.status === 'Pending'
                        ? 'warning'
                        : 'danger'
                    }`}
                  >
                    {item.status}
                  </span>
                </span>
              </td>
              <td className="tb-odr-action">
                <div className="tb-odr-btns d-none d-md-inline">
                  <Button color="primary" className="btn-sm">
                    {String.view}
                  </Button>
                </div>
                <DropdownTrans />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
export const LoginLogTable = () => {
  return (
    <table className="table table-ulogs">
      <thead className="thead-light">
        <tr>
          <th className="tb-col-os">
            <span className="overline-title">
              {String.browser}{' '}
              <span className="d-sm-none">{`/ ${String.ip}`}</span>
            </span>
          </th>
          <th className="tb-col-ip">
            <span className="overline-title">{String.ip}</span>
          </th>
          <th className="tb-col-time">
            <span className="overline-title">{String.time}</span>
          </th>
          <th className="tb-col-action">
            <span className="overline-title">&nbsp;</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {loginData.map((item, idx) => {
          return (
            <tr key={idx}>
              <td className="tb-col-os">{item.browser}</td>
              <td className="tb-col-ip">
                <span className="sub-text">{item.ip}</span>
              </td>
              <td className="tb-col-time">
                <span className="sub-text">
                  {item.date}{' '}
                  <span className="d-none d-sm-inline-block">{item.time}</span>
                </span>
              </td>
              <td className="tb-col-action">
                {item.action === true && (
                  <a
                    href="#delete"
                    onClick={(ev) => {
                      ev.preventDefault()
                    }}
                    className="link-cross mr-sm-n1"
                  >
                    <Icon name="cross"></Icon>
                  </a>
                )}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
