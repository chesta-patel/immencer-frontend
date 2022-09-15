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
import { Alert, Form, FormGroup, Spinner } from 'reactstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import String from '../../utils/String'
import { useDispatch } from 'react-redux'
import { login } from '../../services/slices/AuthThunk'

const Login = () => {
  const [loading] = useState(false)
  const [passState, setPassState] = useState(false)
  const [errorVal] = useState('')
  const dispatch = useDispatch()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const { errors, register, handleSubmit } = useForm()
  // const { token } = useSelector((state) => state.auth)

  const onFormSubmit = async () => {
    dispatch(login({ email, password }))
    console.log(email, password)
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
                <BlockTitle tag="h4">{String.sign_in}</BlockTitle>
                <BlockDes>
                  <p>{String.access_immence_using_email_pass}</p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            {errorVal && (
              <div className="mb-3">
                <Alert color="danger" className="alert-icon">
                  {' '}
                  <Icon name="alert-circle" /> {String.unable_to_login}{' '}
                </Alert>
              </div>
            )}
            <Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
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
                    name="email"
                    ref={register({ required: 'This field is required' })}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="form-control-lg form-control"
                  />
                  {errors.email && (
                    <span className="invalid">{errors.email.message}</span>
                  )}
                </div>
              </FormGroup>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="password">
                    {String.password} <span className="error">*</span>
                  </label>
                  <Link
                    className="link link-primary link-sm"
                    to={`${process.env.PUBLIC_URL}/auth-reset`}
                  >
                    {String.forget_code}
                  </Link>
                </div>
                <div className="form-control-wrap">
                  <a
                    href="#password"
                    onClick={(ev) => {
                      ev.preventDefault()
                      setPassState(!passState)
                    }}
                    className={`form-icon lg form-icon-right password-switch ${
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
                    name="password"
                    ref={register({ required: 'This field is required' })}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
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
