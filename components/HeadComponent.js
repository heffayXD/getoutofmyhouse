import Head from 'next/head'

const HeadComponent = props => {
  return (
    <Head>
      <title>{ props.title || 'GetOutOfMyHouse' }</title>
      <link href='/static/css/fontawesome.min.css' rel='stylesheet' />
      <link href='/static/css/solid.min.css' rel='stylesheet' />
      <link href='/static/css/brands.min.css' rel='stylesheet' />
    </Head>
  )
}

export default HeadComponent
