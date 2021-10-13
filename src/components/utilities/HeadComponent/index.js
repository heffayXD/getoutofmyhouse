import Head from 'next/head'

console.log(process.env.RECAPTCHA_SITE_KEY)

const HeadComponent = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
      <meta name='Description' content={description} />
      <script src={`https://www.google.com/recaptcha/api.js?render=${process.env.RECAPTCHA_SITE_KEY}`} />
    </Head>
  )
}

export default HeadComponent
