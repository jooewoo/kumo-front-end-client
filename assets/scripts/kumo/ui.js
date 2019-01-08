'use strict'

const showCollectionsTemplate = require('../templates/helpers/collections-listing.handlebars')

const showCollectionSuccess = (data) => {
  console.log(data)
  const showCollectionsHtml = showCollectionsTemplate({ collections: data.collections })
  $('.hello').html(showCollectionsHtml)
}

const updateCollectionSuccess = (data) => {
  console.log('success')
}

const deleteCollectionSuccess = () => {
  console.log('you deleted something')
}

const error = function (error) {
  console.log('error is:', error)
}

module.exports = {
  showCollectionSuccess,
  updateCollectionSuccess,
  deleteCollectionSuccess,
  error
}
