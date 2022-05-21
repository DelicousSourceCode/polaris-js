const cli = require('commander')
const Model = require('./utils/model')
const { repl } = require('./utils/repl')

cli
  .version('1.0.0')
  .description('CLI For Polaris.js')
  .parse()
cli
  .command('init')
  .action(() => repl())
  .parse()
cli
  .option('-v, --version', 'Prints the current version of the REPL', '1.0.0')
  .parse()

module.exports = {
  Model,
}