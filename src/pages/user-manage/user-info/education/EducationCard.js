import React, { useEffect } from 'react'
import { Icon } from '../../../../components/Component'
import { Button } from 'reactstrap'
import String from '../../../../utils/String'
import { useDispatch } from 'react-redux'
import { getCreateNewEmpData } from '../../../../services/thunk/CreateNewEmpDataThunk'
function EducationCard(props) {
  const dispatch = useDispatch()

  const deleteItem = (index) => {
    let tempData = [...props.item]
    let tempDataFilter = tempData.filter((item, id) => {
      return id !== index
    })
    props.setItems(tempDataFilter)
    dispatch(
      getCreateNewEmpData({
        education: tempDataFilter,
      })
    )
  }

  return (
    <>
      <table className="table table-orders">
        <thead className="tb-odr-head" color="secondry">
          <tr className="tb-odr-item">
            <th className="tb-odr-info">
              <span className="tb-odr-date d-none d-md-inline-block">
                {String.degree}
              </span>
            </th>
            <th>
              <span className="tb-odr-total">{String.start_date}</span>
            </th>
            <th className="tb-odr-amount">
              <span className="tb-odr-status d-none d-md-inline-block">
                {String.end_date}
              </span>
            </th>
            <th className="tb-odr-action">&nbsp;</th>
          </tr>
        </thead>
        <tbody className="tb-odr-body">
          {props?.item?.map((item, index) => (
            <tr className="tb-odr-item" key={item.id}>
              <td className="tb-odr-info">
                <span className="tb-odr-date d-none d-md-inline-block">
                  {item.degree}
                </span>
              </td>
              <td>
                <span className="tb-odr-total">{item.startDate}</span>
              </td>
              <td className="tb-odr-amount">
                <span className="tb-odr-status d-none d-md-inline-block">
                  {item.endDate}
                </span>
              </td>
              <td className="tb-odr-action">
                <div className="tb-odr-btns d-none d-md-inline">
                  <Button
                    color="primary"
                    className="btn-sm"
                    onClick={(item) => {
                      deleteItem(index)
                    }}
                  >
                    <Icon name="trash"></Icon>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default EducationCard
