import React, { useEffect } from 'react'

import '../styles/app.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.className = 'xt-body !overflow-hidden'
  })
  return <Component {...pageProps} />
}

export default MyApp
