'use strict'

const createEnc = function (data) {
  return $.ajax({
    // ajax options go here
  })
}

const createMulti = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/uploads',
    contentType: false,
    processData: false,
    data: data
  })
}

module.exports = {
  createEnc,
  createMulti
}
