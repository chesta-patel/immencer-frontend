import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageHeader from '../../PageHeader'
import PageTable from '../../PageTable'
import { holidayTypeForm, holidayTypeTable } from './HolidayTypeJson'
import { holidayTypeString } from '../../Strings'

const HolidayType = ({ ...props }) => {
  const [roleForm] = useState(holidayTypeForm)
  const [roleTable] = useState(holidayTypeTable)

  return (
    <React.Fragment>
      <Head title="Holiday Type" />
      <Content>
        <PageHeader json={roleForm} string={holidayTypeString} />
        <PageTable json={roleTable} string={holidayTypeString} />
      </Content>
    </React.Fragment>
  )
}

export default HolidayType
