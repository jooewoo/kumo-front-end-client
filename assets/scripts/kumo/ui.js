'use strict'

const showCollectionsTemplate = require('../templates/helpers/collections-listing.handlebars')

const success = function (data) {
  $('#content').html(`<img src="${data.collection.url}"/>`)
}

const showCollectionSuccess = (data) => {
  console.log(data)
  const showCollectionsHtml = showCollectionsTemplate({ collections: data.collections })
  $('#message').html(showCollectionsHtml)
  debugger
}

const error = function (error) {
  debugger
  console.log('error is:', error)
}

module.exports = {
  success,
  showCollectionSuccess,
  error
}
