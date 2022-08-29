import React, { useContext, useEffect, useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import Pageheader from '../../Pageheader'
import Pagetable from '../../Pagetable'
import { holydaylistform, holydaylisttable } from './Holidaylistjson'

const HolidayList = ({ ...props }) => {
  const [roleform] = useState(holydaylistform)
  const [roletable] = useState(holydaylisttable)
  return (
    <React.Fragment>
      <Head title="Role Page" />
      <Content>
        <Pageheader json={roleform} />
        <Pagetable json={roletable} />
      </Content>
    </React.Fragment>
  )
}

export default HolidayList
