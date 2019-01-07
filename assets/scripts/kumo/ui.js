'use strict'

const success = function (data) {
  $('#content').html(`<img src="${data.collection.url}"/>`)
  $('#message').html('Success!')
}

const deleteSuccess = function () {
  $('#message').html('Success!')
}

const error = function (error) {
  console.log('error is:', error)
}

module.exports = {
  success,
  error,
  deleteSuccess
}
