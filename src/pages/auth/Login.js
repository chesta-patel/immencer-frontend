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
  Icon,
  PreviewCard,
} from '../../components/Component'
import { Form, FormGroup, Spinner, Alert } from 'reactstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import commanString from '../../utils/CommanString'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [passState, setPassState] = useState(false)
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
      }, 500)
    } else {
      setTimeout(() => {
        setError(`${commanString.can_not_login}`)
        setLoading(false)
      }, 2000)
    }
  }

  return (
    <React.Fragment>
      <Head title="Login" />
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
                <BlockTitle tag="h4">{commanString.sign_in}</BlockTitle>
                <BlockDes>
                  <p>{commanString.access_immence_using_email_pass}</p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            {errorVal && (
              <div className="mb-3">
                <Alert color="danger" className="alert-icon">
                  {' '}
                  <Icon name="alert-circle" /> {commanString.can_not_login}{' '}
                </Alert>
              </div>
            )}
            <Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
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
                <div className="form-label-group">
                  <label className="form-label" htmlFor="password">
                    Passcode <span className="error">*</span>
                  </label>
                  <Link
                    className="link link-primary link-sm"
                    to={`${process.env.PUBLIC_URL}/auth-reset`}
                  >
                    {commanString.forget_code}
                  </Link>
                </div>
                <div className="form-control-wrap">
                  <a
                    href="#password"
                    onClick={(ev) => {
                      ev.preventDefault()
                      setPassState(!passState)
                    }}
                    className={`form-icon lg form-icon-right passcode-switch ${
                      passState ? 'is-hidden' : 'is-shown'
                    }`}
                  >
                    <Icon name="eye" className="passcode-icon icon-show"></Icon>

                    <Icon
                      name="eye-off"
                      className="passcode-icon icon-hide"
                    ></Icon>
                  </a>
                  <input
                    type={passState ? 'text' : 'password'}
                    id="password"
                    name="passcode"
                    defaultValue="123456"
                    ref={register({ required: 'This field is required' })}
                    placeholder="Enter your passcode"
                    className={`form-control-lg form-control ${
                      passState ? 'is-hidden' : 'is-shown'
                    }`}
                  />
                  {errors.passcode && (
                    <span className="invalid">{errors.passcode.message}</span>
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
            </Form>
          </PreviewCard>
        </Block>
        <AuthFooter />
      </PageContainer>
    </React.Fragment>
  )
}

export default Login
