import Project from '../../../../models/Project'
import ProjectContainer from '../ProjectContainer'
import projects from 'data/projects.json'

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
    <div className='row' id='projects'>
      <h1 className='title'>Projects</h1>
      {getProjects()}
    </div>
  )
}

export default Projects
