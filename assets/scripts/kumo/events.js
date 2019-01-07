'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const uploadApi = require('./api')
const uploadUi = require('./ui')

const createUploadEncoded = function (event) {
  event.preventDefault()
  console.log('it did something')

  const data = getFormFields(event.target)

  uploadApi.createEnc(data)
    .then(uploadUi.success)
    .catch(uploadUi.error)
}

const createUploadMultiPart = function (event) {
  event.preventDefault()
  console.log('it did something in multipart')

  const data = new FormData(event.target)

  uploadApi.createMulti(data)
    .then(uploadUi.success)
    .catch(uploadUi.error)
}

const showUploadMultiPart = function (event) {
  event.preventDefault()
  console.log('get it?')

  const data = new FormData(event.target)
  const id = $(event.target).parent().data('id')
  uploadApi.showMulti(data, id)
    .then(uploadUi.success)
    .catch(uploadUi.error)
  $(event.target).trigger('reset')
}

module.exports = {
  createUploadEncoded,
  createUploadMultiPart,
  showUploadMultiPart
}
