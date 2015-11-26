var test      = require('tape'),
    eventuate = require('..'),
    timeout   = { timeout: 1000 }

test('removeConsumer returns boolean', timeout, function (t) {
  t.plan(3)

  var event = eventuate()
  event(consumer1)

  t.ok(event.hasConsumer(), 'consumer1 added')
  t.equal(event.removeConsumer(consumer1), true, 'consumer1 removed')
  t.equal(event.removeConsumer(consumer1), false, 'consumer1 not removed')

  function consumer1 () {}
})
