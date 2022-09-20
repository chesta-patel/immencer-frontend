import React, { useEffect, useState, useLayoutEffect } from 'react'
import Pages from '../route/Index'
import Sidebar from './sidebar/Sidebar'
import Head from './head/Head'
import Header from './header/Header'
import Footer from './footer/Footer'
import classNames from 'classnames'

const Layout = () => {
  //Sidebar
  const [mobileView, setMobileView] = useState()
  const [visibility, setVisibility] = useState(false)
  const [showimg, setShowimg] = useState()
  const [themeState, setTheme] = useState({
    main: 'default',
    sidebar: 'dark',
    header: 'white',
    skin: 'light',
  })

  const changeTheme = () => {
    const token = localStorage.getItem('navyblue')
    setShowimg(token)
    if (themeState.sidebar === 'dark') {
      let updateTheme = themeState
      updateTheme.sidebar = 'navyblue'
      setTheme(updateTheme)
      localStorage.setItem('navyblue', themeState.sidebar)
    } else {
      localStorage.removeItem('navyblue')
      let updateTheme = themeState
      updateTheme.sidebar = 'dark'
      setTheme(updateTheme)
    }
  }
  useEffect(() => {
    const token = localStorage.getItem('navyblue')
    if (token === 'navyblue') {
      let updateTheme = themeState
      updateTheme.sidebar = 'navyblue'
      setTheme(updateTheme)
    } else {
      let updateTheme = themeState
      updateTheme.sidebar = 'dark'
      setTheme(updateTheme)
    }
    viewChange()
  }, [])
  // Stops scrolling on overlay
  useLayoutEffect(() => {
    if (visibility) {
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100%'
    }
    if (!visibility) {
      document.body.style.overflow = 'auto'
      document.body.style.height = 'auto'
    }
  }, [visibility])
  // function to toggle sidebar
  const toggleSidebar = (e) => {
    e.preventDefault()
    if (visibility === false) {
      setVisibility(true)
    } else {
      setVisibility(true)
    }
  }
  useEffect(() => {
    document.body.className = `nk-body bg-lighter npc-default has-sidebar no-touch nk-nio-theme ${
      themeState.skin === 'dark' ? 'dark-mode' : ''
    }`
  }, [themeState.skin])
  // function to change the design view under 1200 px
  const viewChange = () => {
    if (window.innerWidth < 1200) {
      setMobileView(true)
    } else {
      setMobileView(true)
      setVisibility(true)
    }
  }
  window.addEventListener('load', viewChange)
  window.addEventListener('resize', viewChange)
  const sidebarClass = classNames({
    'nk-sidebar-mobile': mobileView,
    'nk-sidebar-active': visibility && mobileView,
  })

  return (
    <React.Fragment>
      <Head title="Loading" />
      <div className="nk-app-root">
        <div className="nk-main">
          <Sidebar
            sidebarToggle={toggleSidebar}
            fixed
            mobileView={mobileView}
            theme={themeState.sidebar}
            className={sidebarClass}
          />
          {visibility && mobileView && (
            <div className="nk-sidebar-overlay" onClick={toggleSidebar}></div>
          )}
          <div className="nk-wrap">
            <Header
              sidebarToggle={toggleSidebar}
              setVisibility={setVisibility}
              fixed
              theme={themeState.header}
              changetheme={changeTheme}
            />
            <Pages />
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout
