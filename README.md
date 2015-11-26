# basic-eventuate

[![NPM version](https://badge.fury.io/js/basic-eventuate.png)](http://badge.fury.io/js/basic-eventuate)
[![Build Status](https://travis-ci.org/jasonpincin/basic-eventuate.svg?branch=master)](https://travis-ci.org/jasonpincin/basic-eventuate)
[![Coverage Status](https://coveralls.io/repos/jasonpincin/basic-eventuate/badge.png?branch=master)](https://coveralls.io/r/jasonpincin/basic-eventuate?branch=master)

Basic single topic event producer, with minimal consumer management.

## example

```javascript
var basicEventuate = require('basic-eventuate')

// lets create a server object
var server = {}

// this server will produce request events
server.request = basicEventuate()

// lets consume them!
server.request(function onRequest (req) {
  console.log('we got a request for ' + req.url)
})

// lets produce some of these requests
server.request.produce({ url: '/hello.js' })
server.request.produce({ url: '/world.js' })
server.request.produce({ url: '/bye.js' })
```

## api

```javascript 
var eventuate = require('basic-eventuate') 
```

### var event = eventuate()

Create an object, `event`, that represents a consumable event type.

### event(consumer)

Convenient shortcut for calling `event.consume(consumer)`.

### event.consume(consumer)

Consume events with the `consumer` function, which should have the signature
`function (data) {}`. When an event is produced, it will be passed to the
consumer function as the first and only argument.

Returns a `consumption` object.

#### consumption object

The consumption object, returned by `event.consume`, has only one method, `end`.
Calling `consumption.end()` will remove the `consumer` added by `event.consume`
from the `event`.

### event.produce(data)

Produce an event. All `event` consumer functions will be called with `data`.

### event.removeConsumer(consumer)

Remove the formerly added `consumer`, so that it will not be called with future
produced events. 

### event.hasConsumer([consumer])

If a `consumer` function is provided, will return `true` or `false` indicating
whether the given `consumer` is consuming from the `event`. If no `consumer` is
provided, then the function returned `true` if the `event` has any consumers,
otherwise it returns `false`.

## mixin

The basic eventuate mixin may be used to add basic eventuate functionality to
another object. You should first assign the mixin's properties, then call the
mixin in the context of your object to initialize it.

For example:

```javascript
var basicEventuateMixin = require('basic-eventuate/mixin')

var myObject = {}
Object.assign(myObject, basicEventuateMixin.properties)
basicEventuateMixin.call(myObject)
```

## constructor

Alternatively, the constructor may be required and used for extending or
creating new eventuate objects. Be warned, that `new BasicEventuate` will return
a non-function object, meaning the `event(consumer)` shortcut will not work.
The long-form `event.consume(consumer)` will need to be required.

```javascript
const BasicEventuate = require('basic-eventuate/constructor')
var event = new BasicEventuate
```

## install

With [npm](https://npmjs.org) do:

```
npm install --save basic-eventuate
```

## testing

`npm test`

Or to run tests in phantom: `npm run phantom`

### coverage

`npm run view-cover`

This will output a textual coverage report.

`npm run open-cover`

This will open an HTML coverage report in the default browser.
