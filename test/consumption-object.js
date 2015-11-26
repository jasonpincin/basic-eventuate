var test      = require('tape'),
    eventuate = require('..'),
    timeout   = { timeout: 1000 }

test('consumption is endable', timeout, function (t) {
  t.plan(2)

  var event = eventuate()
  var consumption1 = event.consume(consumer1)

  t.equal(event.hasConsumer(), true)
  consumption1.end()
  t.equal(event.hasConsumer(), false)

  function consumer1 (data) {
  }
})
