var assign = require('object-assign'),
    mixin  = require('./mixin')

module.exports = BasicEventuate

function BasicEventuate () {
  mixin.call(this)
}
assign(BasicEventuate.prototype, mixin.properties, {
  constructor: BasicEventuate
})
