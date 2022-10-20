import React, { useState } from 'react'
import Logo from '../../../src/assets/images/immence_wordlogo.svg'
import LogoDark from '../../../src/assets/images/gfx/immence.svg'
import PageContainer from '../../layout/page-container/PageContainer'
import Head from '../../layout/head/Head'
import AuthFooter from './AuthFooter'
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  PreviewCard,
  Icon,
} from '../../components/Component'
import { FormGroup, Spinner, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import String from '../../utils/String'
import { useDispatch } from 'react-redux'
import { forgotPassword } from '../../services/thunk/ForgotPasswordThunk'
import { useSelector } from 'react-redux'

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false)
  const [errorVal, setError] = useState('')
  const { errors, register, handleSubmit } = useForm()
  const [componyEmail, setComponyEmail] = useState()
  const dispatch = useDispatch()
  const { message, isLoading, errorMessage } = useSelector(
    (state) => state.forgotPasswordSlice
  )

  const onFormSubmit = (e) => {
    dispatch(forgotPassword(e))
  }

  return (
    <React.Fragment>
      <Head title="Forgot-Password" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body  wide-xs">
          <div className="brand-logo pb-4 text-center">
            <Link to={'/'} className="logo-link">
              <img
                className="logo-light logo-img logo-img-lg"
                src={Logo}
                alt="logo"
              />
              <img
                className="logo-dark logo-img logo-img-lg img_center"
                src={LogoDark}
                alt="logo-dark"
              />
            </Link>
          </div>
          <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
            <BlockHead>
              <BlockContent>
                <BlockTitle tag="h5">{String.reset_password}</BlockTitle>
                <BlockDes>
                  <p>{String.if_you_forgot_your}</p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            {errorVal && (
              <div className="mb-3">
                <Alert color="danger" className="alert-icon">
                  {' '}
                  <Icon name="alert-circle" />
                  {String.unable_to_login}{' '}
                </Alert>
              </div>
            )}
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="default-01">
                    {String.email} <span className="error">*</span>
                  </label>
                </div>
                <div className="form-control-wrap">
                  <input
                    type="email"
                    id="default-01"
                    name="componyEmail"
                    ref={register({ required: '* required' })}
                    defaultValue=""
                    placeholder="Enter your email address"
                    className="form-control-lg form-control"
                  />
                  {errors.name && (
                    <span className="invalid">{errors.name.message}</span>
                  )}
                </div>
                <div className="form-note-s2 text-center pt-4">
                  {message && <span className="alert-success">{message}</span>}
                  {errorMessage && <p className="error">{errorMessage}</p>}
                </div>
              </FormGroup>

              <FormGroup>
                <Button
                  size="lg"
                  className="btn-block"
                  type="submit"
                  color="primary"
                >
                  {isLoading ? (
                    <Spinner size="sm" color="light" />
                  ) : (
                    `${String.sign_in}`
                  )}
                </Button>
              </FormGroup>
            </form>
            <div className="form-note-s2 text-center pt-4">
              <Link to={`/auth-login`}>
                <strong>{String.return_to_login}</strong>
              </Link>
            </div>
          </PreviewCard>
        </Block>
        <AuthFooter />
      </PageContainer>
    </React.Fragment>
  )
}

export default ForgotPassword
