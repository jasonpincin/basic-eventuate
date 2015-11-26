var assign = require('object-assign')

module.exports = assign(init, {
  produce       : produce,
  consume       : consume,
  hasConsumer   : hasConsumer,
  removeConsumer: removeConsumer
})

function init () {
  this._consumers = []
  return this
}

function produce (data) {
  for (var i = 0; i < this._consumers.length; i++) {
    this._consumers[i](data)
  }
}

function consume (consumer) {
  if (typeof consumer !== 'function')
    throw new TypeError('eventuate consumer must be a function')

  var self = this
  this._consumers.push(consumer)
  return {
    end: function end () {
      return self.removeConsumer(consumer)
    }
  }
}

function hasConsumer (consumer) {
  return consumer
    ? this._consumers.indexOf(consumer) > -1
    : this._consumers.length > 0
}

function removeConsumer (consumer) {
  var consumerIdx = this._consumers.indexOf(consumer)
  if (consumerIdx === -1) return false
  this._consumers.splice(consumerIdx, 1)
  return true
}
