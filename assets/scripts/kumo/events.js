'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const kumoApi = require('./api')
const kumoUi = require('./ui')

const createCollectionMultiPart = function (event) {
  event.preventDefault()

  const data = new FormData(event.target)
  // $('#upload-form').trigger('reset')
  $(event.target).trigger('reset')
  for (const x of data.entries()) {
    console.log(x[0] + ` ` + x[1])
  }

  kumoApi.createMulti(data)
    .then(kumoUi.createCollectionSuccess)
    .then(() => onShowCollections(event))
    .catch(kumoUi.error)
}

const onShowCollections = (event) => {
  event.preventDefault()
  kumoApi.showCollection()
    .then(kumoUi.showCollectionSuccess)
    .catch(kumoUi.error)
}

const onUpdateCollection = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('form').data('id')
  const url = $(event.target).closest('form').data('url')
  const user = $(event.target).closest('form').data('user')
  const title = getFormFields(event.target)

  kumoApi.updateCollection(id, title, url, user)
    .then(kumoUi.updateCollectionSuccess)
    .then(() => onShowCollections(event))
    .catch(kumoUi.error)
}

const onDeleteCollection = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('button').data('id')
  console.log(id)
  kumoApi.deleteCollection(id)
    .then(kumoUi.deleteCollectionSuccess)
    .then(() => onShowCollections(event))
    .catch(kumoUi.error)
}

const collectionHandlers = () => {
  $('#upload-form').on('submit', createCollectionMultiPart)
  $('#show-collection').on('click', onShowCollections)
  $('.upload-body').on('submit', '.update-collection', onUpdateCollection)
  $('.upload-body').on('click', '.delete-collection', onDeleteCollection)
}

module.exports = {
  createCollectionMultiPart,
  onShowCollections,
  onUpdateCollection,
  onDeleteCollection,
  collectionHandlers
}
