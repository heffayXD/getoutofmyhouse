import Layout from 'components/utilities/Layout'

import Hero from 'components/pageComponents/home/Hero'
import Experience from 'components/pageComponents/home/Experience'
import Projects from 'components/pageComponents/home/Projects'
import Contact from 'components/pageComponents/home/Contact'

const Home = () => {
  const title = 'heffay.dev | Full Stack Development'
  const description = 'heffay.dev is a full stack development site that uses modern tech stacks to create a range of applications and websites.'

  return (
    <Layout {...{ title, description }}>
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  )
}

export default Home
