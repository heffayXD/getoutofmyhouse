class CodePillar {
  constructor (height, width) {
    // this.height = height
    // this.width = width
    // this.fontSize = 12
    // this.stringLength = 10
    // this.y = 0 + this.fontSize
    // this.x = Math.floor(Math.random() * width)
    // this.frame = 0
    this.height = height
    this.width = width
    this.fontSize = 12
    this.stringLength = 1
    this.y = 0 + this.fontSize
    this.x = Math.floor(Math.random() * width)
    this.frame = 0
  }

  oldDraw (ctx) {
    const { height, x, stringLength, fontSize } = this
    this.y = height * (this.y / height)
    
    for (let i = 0; i < stringLength; i++) {
      ctx.fillText('片仮名', x, this.y + (i * fontSize))
    }
    

    if (this.y < (height + fontSize)) {
      this.y++
    } else {
      this.y = 0 - (fontSize * stringLength)
      this.randomizeX()
    }
  }

  draw (ctx) {
    const { height, x, stringLength, fontSize } = this
    this.y = height * (this.y / height)
    
    for (let i = 0; i < stringLength; i++) {
      ctx.fillText('1', x, this.y + (fontSize * i))
    }
    
    this.frame++

    if ((this.stringLength * this.fontSize) > this.height) {
      this.frame = 0
      this.stringLength = 1
    } else if (this.frame % 6 === 0) {
      this.stringLength++
    }
  }

  randomizeX () {
    this.x = Math.floor(Math.random() * this.width)
  }
}

export default CodePillar
