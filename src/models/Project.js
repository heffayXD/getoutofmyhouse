class Project {
  constructor (obj) {
    this.key = obj.key || ''
    this.title = obj.title || ''
    this.description = obj.description || ''
    this.technologies = obj.technologies || []
    this.image = obj.image || ''
    this.links = obj.links || {}
    this.imageAlt = obj.imageAlt || ''
  }
}

export default Project
