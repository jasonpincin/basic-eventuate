var test      = require('tape'),
    eventuate = require('..'),
    timeout   = { timeout: 1000 }

test('factory produces function with consume shortcut', timeout, function (t) {
  t.plan(4)

  var event = eventuate()

  var consumerCallCount = 0
  function consumer1 (value) {
    consumerCallCount++
    t.equal(value, 'test1', 'consumer1 should be passed value')
    t.equal(consumerCallCount, 1, 'consumer1 should be called once')
    event.removeConsumer(consumer1)
  }

  t.equal(typeof event(consumer1).end, 'function', 'returns consumption obj')
  event.produce('test1')

  t.throws(event, 'consume requires a function')
})

test('factory exposed', timeout, function (t) {
  t.plan(1)

  var event = eventuate()
  t.equal(event.factory, eventuate)
})
