import React from 'react'
import Logo from '../../../src/assets/images/immence_wordlogo.svg'
import LogoDark from '../../../src/assets/images/immence_wordlogo.svg'
import PageContainer from '../../layout/page-container/PageContainer'
import Head from '../../layout/head/Head'
import AuthFooter from './AuthFooter'
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
} from '../../components/Component'
import { Link } from 'react-router-dom'
import commanString from '../../utils/CommanString'

const Success = () => {
  return (
    <React.Fragment>
      <Head title="Success" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body">
          <div className="brand-logo pb-5">
            <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
              <img
                className="logo-light logo-img logo-img-lg"
                src={Logo}
                alt="logo"
              />
              <img
                className="logo-dark logo-img logo-img-lg"
                src={LogoDark}
                alt="logo-dark"
              />
            </Link>
          </div>
          <BlockHead>
            <BlockContent>
              <BlockTitle tag="h4">
                {commanString.thank_you_for_submitting_form}
              </BlockTitle>
              <BlockDes className="text-success">
                <p>{commanString.you_can_now_sign_in}</p>
              </BlockDes>
            </BlockContent>
          </BlockHead>
        </Block>
        <AuthFooter />
      </PageContainer>
    </React.Fragment>
  )
}

export default Success
