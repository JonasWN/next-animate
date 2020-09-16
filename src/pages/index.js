import React from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Catagories } from '../components/catagories'
import Products from '../components/products'
import Options from '../components/options'

function HomePage() {
  return (
    <Layout title="home" navColor={false}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Catagories />
        <Products />
        <Options />
      </motion.div>
    </Layout>
  )
}

export default HomePage
