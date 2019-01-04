'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const uploadEvents = require('./kumo/events')

const collectionEvents = require('./kumo/events.js')
$(() => {
  collectionEvents.collectionHandlers()
})
