var assign = require('object-assign'),
    mixin  = require('./mixin')

module.exports = basicEventuate

function basicEventuate () {
  eventuate.factory = basicEventuate
  return mixin.call(assign(eventuate, mixin))

  function eventuate (consumer) {
    return eventuate.consume(consumer)
  }
}
