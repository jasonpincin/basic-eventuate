var test      = require('tape'),
    Eventuate = require('../constructor'),
    timeout   = { timeout: 1000 }

test('exposes a constructor', timeout, function (t) {
  t.plan(2)

  t.equal(Eventuate.prototype.constructor, Eventuate)
  var event = new Eventuate
  event.consume(function (data) {
    t.equal(data, 'hi')
  })
  event.produce('hi')
})
