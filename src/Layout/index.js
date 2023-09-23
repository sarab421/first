import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import Logo from '../images/Logo.png'
import Header  from './header'
import Footer from './footer'
const Layout = () => {
  return (
    <>
    <Header Logo={Logo} telIcon={<BsFillTelephoneFill/>}/>
    <Footer Logo={Logo} telIcon={<BsFillTelephoneFill/>}/>
    </>
  )
}

export default Layout
