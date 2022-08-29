import React, { useContext, useEffect, useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import { assetappf, assettypet } from './AssetsAppjson'
import Pageheader from '../../Pageheader'
import Pagetable from '../../Pagetable'

const AssetApplication = ({ ...props }) => {
  const [roleform] = useState(assetappf)
  const [roletable] = useState(assettypet)
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

export default AssetApplication
