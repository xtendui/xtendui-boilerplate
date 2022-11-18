import React, { useEffect } from 'react'

import '../styles/app.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.className = 'xt-body xt-links-default'
  })
  return <Component {...pageProps} />
}

export default MyApp
