import React from 'react'
import { RecoilRoot } from 'recoil'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <RecoilRoot>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </RecoilRoot>
  )
}

export default MyApp
