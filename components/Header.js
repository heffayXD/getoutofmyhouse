import Link from 'next/link'
import Nav from './Nav'

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a className="title">GetOutOfMyHouse</a>
      </Link>
      <Nav />
    </header>
  )
}

export default Header
