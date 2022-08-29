import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import { userrolecolum, formfield } from './Rolejson'
import Pageheader from '../../Pageheader'
import Pagetable from '../../Pagetable'

const Role = ({ ...props }) => {
  const [roleform] = useState(formfield)
  const [roletable] = useState(userrolecolum)
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

export default Role
