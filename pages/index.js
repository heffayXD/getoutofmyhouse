import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Terminal from '../components/Terminal'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Projects />
      <Terminal />
      <Contact />
    </Layout>
    
  )
}

export default Home
