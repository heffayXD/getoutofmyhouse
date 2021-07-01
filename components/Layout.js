import HeadComponent from './HeadComponent'
import Header from './Header'
import Footer from './Footer'

const Layout = props => {
  return (
    <div>
      <HeadComponent title={props.title || 'GetOutOfMyHouse'} />
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
