import React from 'react'
import Layout from '../../components/layout'
import { data } from '../../components/products'
import { motion } from 'framer-motion'
import Clipped from '../../components/clipped'

const Product = ({ product }) => {
  return (
    <Layout title={`product | ${product.name}`} navColor={true}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Clipped color={product.color} />
        <img src={product.image} alt="shoes image" />
        <div>
          <h1>{product.name}</h1>
          <p>£{product.price}</p>
        </div>
        <p>
          In the games crucial moments, KD thrives. He takes over on both ends
          of the court, making defenders fear his unstopp...
        </p>
      </motion.div>
    </Layout>
  )
}

export const getStaticProps = async ({ params: { slug } }) => {
  const product = data[slug - 1]
  return {
    props: {
      product,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = data.map(({ sku }) => {
    return {
      params: {
        slug: sku.toString(),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export default Product
