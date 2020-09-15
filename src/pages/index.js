import React from 'react'
import Layout from '../components/Layout'
import { Navigation } from '../components/nav'
import { Catagories } from '../components/catagories'
import Products from '../components/products'
import Options from '../components/options'

function HomePage() {
  return (
    <Layout title="Home">
      <Navigation />
      <Catagories />
      <Products />
      <Options />
    </Layout>
  )
}

export default HomePage
