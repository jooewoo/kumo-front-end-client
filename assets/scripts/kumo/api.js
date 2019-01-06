'use strict'
const config = require('../config.js')
// const store = require('../store.js')

const createEnc = function (data) {
  // Needs Authorization tokens.
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + `/collections`,
    contentType: false,
    processData: false,
    data: data
  })
}

const createMulti = function (data) {
  // Needs Authorization tokens.
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + `/collections`,
    contentType: false,
    processData: false,
    data: data
  })
}

module.exports = {
  createEnc,
  createMulti
}
