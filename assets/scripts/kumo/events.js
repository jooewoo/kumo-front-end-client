'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const kumoApi = require('./api')
const kumoUi = require('./ui')

const onCreateCollection = function (event) {
  event.preventDefault()
  console.log('it did something')

  const data = getFormFields(event.target)
  console.log(data)
  kumoApi.createEnc(data)
    .then(kumoUi.success)
    .catch(kumoUi.error)
}

const createCollectionMultiPart = function (event) {
  event.preventDefault()
  console.log('it did something in multipart')

  const data = new FormData(event.target)

  for (const x of data.entries()) {
    console.log(x[0] + ` ` + x[1])
  }
  kumoApi.createMulti(data)
    .then(kumoUi.success)
    .catch(kumoUi.error)
}

const collectionHandlers = () => {
  $('').on('submit', onCreateCollection)
  $('#upload-form').on('submit', createCollectionMultiPart)
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
  onCreateCollection,
  createCollectionMultiPart,
  collectionHandlers
}
