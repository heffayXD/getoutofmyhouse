const Hero = () => {
  return (
    <div id='hero'>
      <div className='hero-content'>
        <h1>Full Stack Development</h1>
        <div className='icon-container alt'>
          <a className='icon-link' href='https://github.com/heffayXD' target='_blank' rel='noopener noreferrer' title='Github'>
            <i className='fab fa-github' />
          </a>
          <a className='icon-link' href='/static/downloads/Resume.pdf' target='_blank' rel='nofollow' title='Resume' download>
            <i className='fas fa-file-pdf' />
          </a>
        </div>
      </div>
      <div className='hero-nav'>
        <h2>Navigation</h2>
        <a href='#experience'>Experience</a>
        <a href='#projects'>Projects</a>
        <a href='#terminal'>Terminal</a>
        <a href='#contact'>Contact</a>
      </div>
      <div className='hero-background'>
        <div className='block-1' />
        <div className='block-2' />
        <div className='hero-image-container'>
          <div className='overlay' />
        </div>
      </div>
    </div>
  )
}

export default Hero
