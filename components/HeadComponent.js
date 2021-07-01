import Head from 'next/head'

const HeadComponent = props => {
  return (
    <Head>
      <title>heffay.dev</title>
      <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
      <meta name='Description' content='heffay.dev is a full stack development site that uses modern tech stacks to create a range of applications and websites.' />
    </Head>
  )
}

export default HeadComponent
