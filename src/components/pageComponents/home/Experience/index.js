import Icons from 'components/pageComponents/home/Icons'
import classes from './styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
  return (
    <div id='experience' className={classes.experience}>
      <h1 className={classes.title}>Experience</h1>
      <Icons />
      <ul className={classes.topicList}>
        <li className={classes.topic}>
          <h3>Languages</h3>
          <ul className={classes.innerList}>
            <li><FontAwesomeIcon icon={faCheck} />Javascript</li>
            <li><FontAwesomeIcon icon={faCheck} />PHP</li>
            <li><FontAwesomeIcon icon={faCheck} />C#</li>
            <li><FontAwesomeIcon icon={faCheck} />Java</li>
          </ul>
        </li>
        <li className={classes.topic}>
          <h3>Frontend</h3>
          <ul className={classes.innerList}>
            <li><FontAwesomeIcon icon={faCheck} />React</li>
            <li><FontAwesomeIcon icon={faCheck} />Vue JS</li>
            <li><FontAwesomeIcon icon={faCheck} />Sass</li>
          </ul>
        </li>
        <li className={classes.topic}>
          <h3>Backend</h3>
          <ul className={classes.innerList}>
            <li><FontAwesomeIcon icon={faCheck} />Express JS</li>
            <li><FontAwesomeIcon icon={faCheck} />Next JS</li>
            <li><FontAwesomeIcon icon={faCheck} />Laravel</li>
            <li><FontAwesomeIcon icon={faCheck} />.NET</li>
          </ul>
        </li>
        <li className={classes.topic}>
          <h3>Misc</h3>
          <ul className={classes.innerList}>
            <li><FontAwesomeIcon icon={faCheck} />Electron</li>
            <li><FontAwesomeIcon icon={faCheck} />React Native</li>
            <li><FontAwesomeIcon icon={faCheck} />Sequelize JS</li>
            <li><FontAwesomeIcon icon={faCheck} />PostgreSQL</li>
            <li><FontAwesomeIcon icon={faCheck} />GraphQL</li>
          </ul>
        </li>
      </ul>
      <p className={classes.disclaimer}>...and more</p>
    </div>
  )
}

export default Experience
