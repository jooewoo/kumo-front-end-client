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
    contentType: false,
    processData: false,
    data: data
  })
}

const getCollection = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/collections',
    headers: {
      // Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json'
  })
}

const updateCollection = function (id, title, file, user) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/collections/` + id,
    headers: {
      // Authorization: `Token token=${store.user.token}`
      Authorization: 'Token token=' + store.user.token
    },
    contentType: 'application/json',
    data: JSON.stringify({
      'collection': {
        'title': title,
        'file': file,
        'user': user
      }
    })
  })
}

module.exports = {
  createEnc,
  createMulti,
  updateCollection,
  getCollection
}
