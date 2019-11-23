import React from "react"
import Helmet from "react-helmet"
import { ThemeProvider } from "styled-components"

import config from "../../../site-config"

import GlobalStyle from "../particles/GlobalStyle"
import SEO from "../particles/SEO"
import ThemeDefault from "../particles/ThemeDefault"

import Contact from "../organisms/contact/Contact"
import Footer from "../organisms/footer/Footer"
import Header from "../organisms/header/Header"

if (typeof window !== "undefined") {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Base = props => {
  const { children, context, cta } = props
  return (
    <ThemeProvider theme={ThemeDefault}>
      <React.Fragment>
        <GlobalStyle />
        <Helmet title={config.siteTitle} />
        <SEO data={context} />
        <div className="wrapper">
          <Header />
          <main>{children}</main>
          {cta !== false && <Contact />}
          <Footer />
        </div>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default Base
