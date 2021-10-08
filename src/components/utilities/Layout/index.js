import HeadComponent from 'components/utilities/HeadComponent'
import Header from 'components/utilities/Header'
import Footer from 'components/utilities/Footer'

const Layout = ({ title = 'heffay.dev | Full Stack Development', description, children }) => {
  return (
    <div>
      <HeadComponent {...{ title, description }} />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
