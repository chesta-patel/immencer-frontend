import React from 'react'
import PlanS1 from '../../../../assets/images/plan-s1.145bedf2dff953a59fca891147d5fcf6.svg'
import { Icon } from '../../../../components/Component'
import '../employeecreation.scss'
import { Card } from 'reactstrap'
function EducationCard(props) {
  return (
    <>
      <div>
        <Card className="card-bordered pricing text-center">
          <ul className="delete-icon">
            <li>
              <a
                href="#cancel"
                onClick={props.onclick}
                className="link link-light"
              >
                <Icon name="cross-fill-c"></Icon>
              </a>
            </li>
          </ul>
          <div className="pricing-body">
            <div className="pricing-media">
              <img src={PlanS1} alt="" />
            </div>
            <div className="pricing-title w-220px mx-auto">
              <h5 className="title">{props.text.degree}</h5>
            </div>
            <div className="pricing-title w-220px mx-auto">
              <label className="form-label">Start Date</label>
              <h5 className="title">{props.text.startdate}</h5>
            </div>{' '}
            <div className="pricing-title w-220px mx-auto">
              <label className="form-label">End Date</label>
              <h5 className="title">{props.text.enddate}</h5>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default EducationCard
