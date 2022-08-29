import React, { useContext, useEffect, useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import Pageheader from '../../Pageheader'
import Pagetable from '../../Pagetable'
import { holidaytypeform, holidaytypetable } from './HolidayTypejson'

const HolidayType = ({ ...props }) => {
  const [roleform] = useState(holidaytypeform)
  const [roletable] = useState(holidaytypetable)
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

export default HolidayType
