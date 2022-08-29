import React, { useContext, useEffect, useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import Pageheader from '../../Pageheader'
import Pagetable from '../../Pagetable'
import { companydocform, companydoctable } from './companydocjson'

const CompanyDocument = ({ ...props }) => {
  const [roleform] = useState(companydocform)
  const [roletable] = useState(companydoctable)
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

export default CompanyDocument
