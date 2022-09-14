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
import { Form, FormGroup } from 'reactstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import commonString from '../../utils/String'
import { useDispatch } from 'react-redux'
import { login } from '../../services/slices/AuthThunk'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const [passState, setPassState] = useState(false)
  const [error, setError] = useState('')
  const { errors, register } = useForm()

  const onFormSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(login({ username, password }))
    } catch (error) {
      setError('Invalid username or password')
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
                <BlockTitle tag="h4">{commonString.sign_in}</BlockTitle>
                <BlockDes>
                  <p>{commonString.access_immence_using_email_pass}</p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            <Form className="is-alter" onSubmit={onFormSubmit}>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="default-01">
                    {commonString.email} <span className="error">*</span>
                  </label>
                </div>
                <div className="form-control-wrap">
                  <input
                    id="default-01"
                    name="name"
                    ref={register({ required: 'This field is required' })}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    {commonString.passcode} <span className="error">*</span>
                  </label>
                  <Link
                    className="link link-primary link-sm"
                    to={`${process.env.PUBLIC_URL}/auth-reset`}
                  >
                    {commonString.forget_code}
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
                    ref={register({ required: 'This field is required' })}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your passcode"
                    className={`form-control-lg form-control ${
                      passState ? 'is-hidden' : 'is-shown'
                    }`}
                  />
                  {errors.password && (
                    <span className="invalid">{errors.password.message}</span>
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
                  {commonString.submit}
                </Button>
                {error && <p>{error}</p>}
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
