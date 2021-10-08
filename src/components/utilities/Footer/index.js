import classes from './styles.module.scss'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.copyright}>heffay.dev {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
