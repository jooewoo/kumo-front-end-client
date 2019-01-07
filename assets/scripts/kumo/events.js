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

const onShowCollections = () => {
  event.preventDefault()
  kumoApi.showCollection()
    .then(kumoUi.showCollectionSuccess)
    .catch(kumoUi.error)
}

const onShowOneCollection = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).parent().data('id')
  kumoApi.showOneCollection(data, id)
    .then(kumoUi.showCollectionSuccess)
    .catch(kumoUi.error)
}
const collectionHandlers = () => {
  $('').on('submit', onCreateCollection)
  $('#upload-form').on('submit', createCollectionMultiPart)
  $('#show-collection').on('click', onShowCollections)
}

module.exports = {
  onCreateCollection,
  createCollectionMultiPart,
  onShowCollections,
  collectionHandlers,
  onShowOneCollection
}
