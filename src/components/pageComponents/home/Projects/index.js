import classes from './styles.module.scss'

import Project from 'models/Project'
import projects from 'data/projects.json'
import ProjectContainer from 'components/pageComponents/home/ProjectContainer'

const Projects = () => {
  return (
    <div id='projects' className={classes.projects}>
      <h1 className={classes.title}>Projects</h1>
      <div className={classes.projectsContainer}>
        {projects.map((val, index) => (
          <ProjectContainer
            key={index}
            project={new Project({ ...val, key: index })}
            reverse={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
