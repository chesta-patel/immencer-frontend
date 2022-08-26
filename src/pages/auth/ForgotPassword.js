import React, { useState } from 'react'
import Logo from '../../images/logo.png'
import LogoDark from '../../images/logo_immence.svg'
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

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false)
  const [errorVal, setError] = useState('')

  const { errors, register, handleSubmit } = useForm()

  const onFormSubmit = (formData) => {
    setLoading(true)
    const loginName = 'user@immence.in'
    const pass = '123456'
    if (formData.name === loginName && formData.passcode === pass) {
      localStorage.setItem('accessToken', 'token')
      setTimeout(() => {
        window.history.pushState(
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '/'}`,
          'auth-login',
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '/'}`
        )
        window.location.reload()
      }, 2000)
    } else {
      setTimeout(() => {
        setError('Cannot login with credentials')
        setLoading(false)
      }, 2000)
    }
  }

  return (
    <React.Fragment>
      <Head title="Forgot-Password" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body  wide-xs">
          <div className="brand-logo pb-4 text-center">
            <Link to={process.env.PUBLIC_URL + '/'} className="logo-link">
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
          <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
            <BlockHead>
              <BlockContent>
                <BlockTitle tag="h5">Reset password</BlockTitle>
                <BlockDes>
                  <p>
                    If you forgot your password, well, then we’ll email you
                    instructions to reset your password.
                  </p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            {errorVal && (
              <div className="mb-3">
                <Alert color="danger" className="alert-icon">
                  {' '}
                  <Icon name="alert-circle" /> Unable to login with credentials{' '}
                </Alert>
              </div>
            )}
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="default-01">
                    Email <span className="error">*</span>
                  </label>
                </div>
                <div className="form-control-wrap">
                  <input
                    type="email"
                    id="default-01"
                    name="name"
                    ref={register({ required: 'This field is required' })}
                    defaultValue="user@immence.in"
                    placeholder="Enter your email address"
                    className="form-control-lg form-control"
                  />
                  {errors.name && (
                    <span className="invalid">{errors.name.message}</span>
                  )}
                </div>
              </FormGroup>
              <FormGroup>
                <Button
                  size="lg"
                  className="btn-block"
                  type="submit"
                  color="primary"
                >
                  {loading ? <Spinner size="sm" color="light" /> : 'Sign in'}
                </Button>
              </FormGroup>
            </form>
            <div className="form-note-s2 text-center pt-4">
              <Link to={`${process.env.PUBLIC_URL}/auth-login`}>
                <strong>Return to login</strong>
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
