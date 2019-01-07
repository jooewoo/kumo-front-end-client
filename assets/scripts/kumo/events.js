'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const kumoApi = require('./api')
const kumoUi = require('./ui')

const onCreateCollection = function (event) {
  event.preventDefault()
  console.log('it did something')

  const data = getFormFields(event.target)

  kumoApi.createEnc(data)
    .then(kumoUi.success)
    .catch(kumoUi.error)
}

const createCollectionMultiPart = function (event) {
  event.preventDefault()
  console.log('it did something in multipart')
  const data = new FormData(event.target)
  kumoApi.createMulti(data)
    .then(kumoUi.success)
    .catch(kumoUi.error)
}

const onUpdateCollection = function (event) {
  console.log('it did something')
  const data = new FormData(event.target)
  event.preventDefault()
  kumoApi.updateCollection(data)
    .then(kumoUi.success)
    .catch(kumoUi.error)
}

const onGetCollection = function (event) {
  event.preventDefault()
  $(event.target).trigger('reset')
  kumoApi.getCollection()
    .then(kumoUi.success)
    .catch(kumoUi.error)
}

const collectionHandlers = () => {
  $('').on('submit', onCreateCollection)
  $('#upload-form').on('submit', createCollectionMultiPart)
  $('#show-collection').on('click', onGetCollection)
}

module.exports = {
  onCreateCollection,
  createCollectionMultiPart,
  collectionHandlers,
  onUpdateCollection
}
