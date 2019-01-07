'use strict'
const config = require('../config.js')
const store = require('../store.js')

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
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: false,
    processData: false,
    data: data
  })
}

const showMulti = function (data, id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/collections/${id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: false,
    processData: false,
    data: data
  })
}
module.exports = {
  createEnc,
  createMulti,
  updateMulti,
  showMulti
}
