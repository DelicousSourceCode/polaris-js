const chalk = require('chalk')
const fs = require('fs')
const os = require('os')
const interface = require('readline')
  .createInterface(process.stdin, process.stdout)

function repl() {
  interface.question(chalk.green('polaris > '), res => {
    if (
        res.startsWith('new_db("')
        && res.endsWith('")')
      ) {
      let name = res.split('"')[1]
      console.log(chalk.yellowBright(`Created database "${name}"`))
      repl()
    } if (
      res.startsWith('new_board("')
      && res.endsWith('")')
    ) {
    let name = res.split('"')[1]
    console.log(chalk.yellowBright(`Created board "${name}"`))
    repl()
    } else if (res == 'exit()') {
      console.log(chalk.blueBright('Closing REPL Session'))
      interface.close()
    } else {
      console.log(chalk.redBright(`Error: cannot parse argument: "${res}"`))
      repl()
    }
  })
}

module.exports = {
  repl
}