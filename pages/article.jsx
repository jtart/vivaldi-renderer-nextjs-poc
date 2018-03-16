import React from 'react'
import Head from 'next/head'

import withData from '../components/withData';

const Article = ({ title, heading }) => (
  <main>
    <Head><title>{ title }</title></Head>
    <h1>{ heading }</h1>
  </main>
);

export default withData(Article);