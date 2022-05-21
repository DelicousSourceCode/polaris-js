const Model = require('./model')
const fs = require('fs')
const os = require('os')
const path = require('path')
const db = new Model('')

function createGroup(name) {
  db.name = name
  fs.opendir(`${os.homedir()}/polaris/`, (err, dir) => {
    if (err) fs.mkdir(`${os.homedir()}/polaris/`, {}, err => { if (err) throw err })
    console.log(dir.path)
    dir.close()
  })
}