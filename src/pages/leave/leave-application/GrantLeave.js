import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Button,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'
import { Icon, PreviewCard, RSelect } from '../../../components/Component'
import String from '../../../utils/String'
import { defaultOptions } from './LeaveAppJson'

function GrantLeave({ modal, toggle }) {
  const [toInformEmpList, settoInformEmpList] = useState([])
  const { employeeData } = useSelector((state) => state.getEmp)

  useEffect(() => {
    if (employeeData !== undefined) {
      const employeeList = employeeData.map((empList, index) => {
        return {
          value: `${empList.id}`,
          label: `${empList.firstName} ${empList.lastName}`,
        }
      })
      settoInformEmpList(employeeList)
    }
  }, [employeeData])
  return (
    <>
      <div className="card-head">
        <h5 className="card-title">{`${String.grant} ${String.leave}`}</h5>
      </div>
      <form>
        <FormGroup className="form-group">
          <label className="form-label">{`${String.month_year}`}</label>
          <input
            type="month"
            id="bdaymonth"
            name="bdaymonth"
            className="form-control"
          />
        </FormGroup>
        <FormGroup className="form-group">
          <label className="form-label">{`${String.leave} ${String.options}`}</label>
          <RSelect options={defaultOptions} />
        </FormGroup>
        <FormGroup className="form-group">
          <label className="form-label">{`${String.employee}`}</label>
          <RSelect options={toInformEmpList} isMulti />
        </FormGroup>
        <FormGroup className="form-group">
          <label className="form-label">{`${String.note}`}</label>
          <div className="form-control-wrap">
            <textarea
              className="form-control form-control-sm"
              id="cf-default-textarea"
              placeholder="Write your message"
            ></textarea>
          </div>
        </FormGroup>
        <FormGroup className="form-group">
          <Button color="primary" size="lg">
            {`${String.grant} ${String.leave}`}
          </Button>
        </FormGroup>
      </form>
    </>
  )
}

export default GrantLeave
