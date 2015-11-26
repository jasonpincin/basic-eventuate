var assign = require('object-assign'),
    mixin  = require('./mixin')

module.exports = createBasicEventuate

function createBasicEventuate () {
  basicEventuate.factory = createBasicEventuate
  return mixin.call(assign(basicEventuate, mixin))

  function basicEventuate (consumer) {
    return basicEventuate.consume(consumer)
  }
}
