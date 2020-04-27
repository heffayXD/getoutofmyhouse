import Head from 'next/head'

const HeadComponent = props => {
  return (
    <Head>
      <title>{props.title || 'GetOutOfMyHouse'}</title>
      <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
      <meta name='Description' content='GetOutOfMyHouse is a full stack development site that uses modern tech stacks to create a range of applications and websites.' />
    </Head>
  )
}

export default HeadComponent
