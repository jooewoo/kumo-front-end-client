'use strict'

const showCollectionsTemplate = require('../templates/helpers/collections-listing.handlebars')

const success = function (data) {
  $('#content').html(`<img src="${data.collection.url}"/>`)
}

const showCollectionSuccess = (data) => {
  const showCollectionsHtml = showCollectionsTemplate({ collections: data.collections })
  $('.hello').html(showCollectionsHtml)
}

const deleteCollectionSuccess = () => {
  console.log('you deleted something')
}
const error = function (error) {
  debugger
  console.log('error is:', error)
}

module.exports = {
  success,
  showCollectionSuccess,
  deleteCollectionSuccess,
  error
}
