var choppa = require('choppa')
var through = require('through2')
var crypto = require('crypto')
var pumpify = require('pumpify')
var collect = require('stream-collector')

module.exports = createStream

function createStream (size, opts, cb) {
  if (typeof opts === 'function') return createStream(size, null, opts)
  if (!opts) opts = {}

  var type = opts.hash || 'sha256'
  return collect(pumpify.obj([choppa(size), through.obj(hash)]), cb)

  function hash (data, enc, cb) {
    var digest = crypto.createHash(type).update(data).digest()
    cb(null, digest.toString('hex'))
  }
}
