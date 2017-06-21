import { basename } from 'path'

module.exports = {
  process(src, filename, config, options) {
    return 'module.exports = ' + JSON.stringify(basename(filename)) + ';'
  }
}
