import Link from 'next/link'
import classes from './styles.module.scss'

import MobileMenu from 'components/utilities/MobileMenu'

const Header = () => {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a className={classes.title}>heffay.dev</a>
      </Link>
      <MobileMenu />
    </header>
  )
}

export default Header
