import React, { useContext, useEffect, useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import Pageheader from '../../Pageheader'
import Pagetable from '../../Pagetable'
import { companypolicyform, companypolicytable } from './companypolicyjson'

const CompanyPolicy = ({ ...props }) => {
  const [roleform] = useState(companypolicyform)
  const [roletable] = useState(companypolicytable)
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

export default CompanyPolicy
