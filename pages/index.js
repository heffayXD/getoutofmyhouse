import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  )
}

export default Home
