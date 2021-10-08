import Head from 'next/head'

const HeadComponent = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
      <meta name='Description' content={description} />
    </Head>
  )
}

export default HeadComponent
