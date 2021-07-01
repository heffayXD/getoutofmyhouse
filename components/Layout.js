import HeadComponent from './HeadComponent'
import Header from './header'
import Footer from './footer'

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
