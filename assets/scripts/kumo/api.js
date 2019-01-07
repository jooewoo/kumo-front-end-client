'use strict'
const config = require('../config.js')
const store = require('../store.js')

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

const showCollection = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/collections`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const deleteCollection = (id) => {
  return $.ajax({
    url: config.apiUrl + `/collections/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  createMulti,
  deleteCollection,
  showCollection
}
