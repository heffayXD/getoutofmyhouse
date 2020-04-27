import Icons from './Icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
  return (
    <div className='row alt' id='experience'>
      <h1 className='title'>Experience</h1>
      <Icons />
      <ul className='topics'>
        <li className='topic'>
          <h3>Languages</h3>
          <ul className='topic-list'>
            <li className='item'><FontAwesomeIcon icon={faCheck} />Javascript</li>
            <li className='item'><FontAwesomeIcon icon={faCheck} />PHP</li>
            <li className='item'><FontAwesomeIcon icon={faCheck} />C#</li>
            <li className='item'><FontAwesomeIcon icon={faCheck} />Java</li>
          </ul>
        </li>
        <li className='topic'>
          <h3>Frontend</h3>
          <ul className='topic-list'>
            <li className='item'><FontAwesomeIcon icon={faCheck} />React</li>
            <li className='item'><FontAwesomeIcon icon={faCheck} />Vue JS</li>
            <li className='item'><FontAwesomeIcon icon={faCheck} />Sass</li>
          </ul>
        </li>
        <li className='topic'>
          <h3>Backend</h3>
          <ul className='topic-list'>
            <li className='item'><FontAwesomeIcon icon={faCheck} />Express JS</li>
            <li className='item'><FontAwesomeIcon icon={faCheck} />Next JS</li>
            <li className='item'><FontAwesomeIcon icon={faCheck} />Laravel</li>
            <li className='item'><FontAwesomeIcon icon={faCheck} />.NET</li>
          </ul>
        </li>
        <li className='topic'>
          <h3>Misc</h3>
          <ul className='topic-list'>
            <li className='item'><FontAwesomeIcon icon={faCheck} />Electron</li>
            <li className='item'><FontAwesomeIcon icon={faCheck} />React Native</li>
            <li><FontAwesomeIcon icon={faCheck} />Sequelize JS</li>
            <li><FontAwesomeIcon icon={faCheck} />PostgreSQL</li>
            <li><FontAwesomeIcon icon={faCheck} />GraphQL</li>
          </ul>
        </li>
      </ul>
      <p className='disclaimer'>...and more</p>
    </div>
  )
}

export default Experience
