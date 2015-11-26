var assign = require('object-assign'),
    mixin  = require('./mixin')

module.exports = createBasicEventuate

function createBasicEventuate () {
  return mixin.call(assign(basicEventuate, mixin.properties, {
    factory: createBasicEventuate
  }))

  function basicEventuate (consumer) {
    return basicEventuate.consume(consumer)
  }
}
