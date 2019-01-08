'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const kumoApi = require('./api')
const kumoUi = require('./ui')

const createCollectionMultiPart = function (event) {
  event.preventDefault()
  console.log('it did something in multipart')

  const data = new FormData(event.target)
  // const tag = $('option:selected').val()
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

const onUpdateCollection = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('form').data('id')
  const url = $(event.target).closest('form').data('url')
  const user = $(event.target).closest('form').data('user')
  const title = getFormFields(event.target).image.title
  const tag = $(event.currentTarget).closest('div').find('option:selected').val()
  // console.log(id, title, url, user, tag)
  console.log(tag)
  debugger
  // kumoApi.updateCollection(id, title, url, user)
  //   .then(kumoUi.updateCollectionSuccess)
  //   .catch(kumoUi.error)
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
  $('.hello').on('submit', '.update-collection', onUpdateCollection)
  $('.hello').on('click', '.delete-collection', onDeleteCollection)
}

module.exports = {
  createCollectionMultiPart,
  onShowCollections,
  onUpdateCollection,
  onDeleteCollection,
  collectionHandlers
}
