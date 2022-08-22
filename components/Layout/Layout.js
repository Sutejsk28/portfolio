import React, { Fragment } from 'react'
import Footer from '../Footer/footer'
import Header from '../header/header'

function Layout({children}){
  return (
        <>
            <Header/>
                <div>
                    {children}
                </div>
            <Footer/>
        </>
  )
}

export default Layout