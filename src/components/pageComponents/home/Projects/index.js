import classes from './styles.module.scss'

import Project from 'models/Project'
import projects from 'data/projects.json'
import ProjectContainer from 'components/pageComponents/home/ProjectContainer'

const Projects = () => {
  const getProjects = () => {
    return projects.map((val, index) => {
      const project = new Project({ ...val, key: index })
      return (
        <ProjectContainer
          key={project.key}
          project={project}
          reverse={index % 2 === 0}
        />
      )
    })
  }

  return (
    <div className={`${classes.projects} row`} id='projects'>
      <h1 className='title'>Projects</h1>
      {getProjects()}
    </div>
  )
}

export default Projects
