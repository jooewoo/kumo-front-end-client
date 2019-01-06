'use strict'

const success = function (data) {
  $('#content').html(`<img src="${data.collection.url}"/>`)
}

const error = function (error) {
  console.log('error is:', error)
}

module.exports = {
  success,
  error
}
