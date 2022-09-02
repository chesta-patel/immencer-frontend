import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageHeader from '../../PageHeader'
import PageTable from '../../PageTable'
import { holidayListForm, holidayListTable } from './HolidayListJson'
import { holidayListStrig } from '../../Strings'

const HolidayList = ({ ...props }) => {
  const [roleForm] = useState(holidayListForm)
  const [roleTable] = useState(holidayListTable)

  return (
    <React.Fragment>
      <Head title="Holiday List" />
      <Content>
        <PageHeader json={roleForm} string={holidayListStrig} />
        <PageTable json={roleTable} string={holidayListStrig} />
      </Content>
    </React.Fragment>
  )
}

export default HolidayList
