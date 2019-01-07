'use strict'

// const getFormFields = require('../../../lib/get-form-fields')

const kumoApi = require('./api')
const kumoUi = require('./ui')

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

const onShowCollections = (event) => {
  event.preventDefault()
  kumoApi.showCollection()
    .then(kumoUi.showCollectionSuccess)
    .catch(kumoUi.error)
}

const onDeleteCollection = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('div').data('id')
  kumoApi.deleteCollection(id)
    .then(kumoUi.deleteCollectionSuccess)
    .then(() => onShowCollections(event))
    .catch(kumoUi.error)
}

const collectionHandlers = () => {
  $('#upload-form').on('submit', createCollectionMultiPart)
  $('#show-collection').on('click', onShowCollections)
  $('.hello').on('click', '.delete-collection', onDeleteCollection)
}

module.exports = {
  createCollectionMultiPart,
  onShowCollections,
  onDeleteCollection,
  collectionHandlers
}
