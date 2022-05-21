class Model {
  constructor(name) {
    this.name = name
    this.data = []
  }

  get json() {
    return JSON.stringify(this.data)
  }
}

module.exports = Model