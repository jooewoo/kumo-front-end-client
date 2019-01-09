'use strict'

const showCollectionsTemplate = require('../templates/helpers/collections-listing.handlebars')

const createCollectionSuccess = () => {
  $('.hello').show(100)
  $('#colletions-auth').html('You have successfully uploaded an image')
  setTimeout(function () {
    $('.hello').fadeOut(200)
  }, 4000)
}

const showCollectionSuccess = (data) => {
  if (data.collections.length === 0) {
    $('.hello').show(200)
    $('#colletions-auth').html('You have no images uploaded')
    setTimeout(function () {
      $('.hello').fadeOut(200)
    }, 4000)
  } else {
    $('.card-body').removeClass('hidden')
    const showCollectionsHtml = showCollectionsTemplate({ collections: data.collections })
    $('.upload-body').html(showCollectionsHtml)
  }
}

const updateCollectionSuccess = () => {
  $('.hello').show(100)
  $('#colletions-auth').html('You have successfully updated an image')
  setTimeout(function () {
    $('.hello').fadeOut(200)
  }, 4000)
}

const deleteCollectionSuccess = () => {
  $('.hello').show(100)
  $('.card-body').addClass('hidden')
  $('#colletions-auth').html('You have successfully deleted an image')
  setTimeout(function () {
    $('.hello').fadeOut(200)
  }, 4000)
}

const error = function () {
  $('.hello').show(100)
  $('#colletions-auth').html('Something went wrong, please try again.')
  setTimeout(function () {
    $('.hello').fadeOut(200)
  }, 4000)
}

module.exports = {
  createCollectionSuccess,
  showCollectionSuccess,
  updateCollectionSuccess,
  deleteCollectionSuccess,
  error
}
