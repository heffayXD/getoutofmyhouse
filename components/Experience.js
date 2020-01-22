import Icons from './Icons'

const Experience = () => {
  return (
    <div className='row alt' id='experience'>
      <h1 className='title'>Experience</h1>
      <Icons />
      <ul className='topics'>
        <li className='topic'>
          <h3>Languages</h3>
          <ul className='topic-list'>
            <li className='item'>Javascript</li>
            <li className='item'>PHP</li>
            <li className='item'>C#</li>
            <li className='item'>Java</li>
          </ul>
        </li>
        <li className='topic'>
          <h3>Frontend</h3>
          <ul className='topic-list'>
            <li className='item'>React</li>
            <li className='item'>Vue JS</li>
            <li className='item'>Sass</li>
          </ul>
        </li>
        <li className='topic'>
          <h3>Backend</h3>
          <ul className='topic-list'>
            <li className='item'>Express JS</li>
            <li className='item'>Next JS</li>
            <li className='item'>Laravel</li>
            <li className='item'>.NET</li>
          </ul>
        </li>
        <li className='topic'>
          <h3>Misc</h3>
          <ul className='topic-list'>
            <li className='item'>Electron</li>
            <li className='item'>React Native</li>
            <li>Sequelize JS</li>
            <li>PostgreSQL</li>
            <li>GraphQL</li>
          </ul>
        </li>
      </ul>
      <p className='disclaimer'>...and more</p>
    </div>
  )
}

export default Experience
