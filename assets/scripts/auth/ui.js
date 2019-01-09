'use strict'

const store = require('../store.js')

const failure = (signUpFailureResponse) => {
  $('.message').show(100)
  $('#user-auth').val('Something went wrong, please try again.')
  setTimeout(function () {
    $('#user-auth').fadeOut(200)
  }, 4000)
}

const signUpSuccess = (signUpResponse) => {
  $('.message').show(500)
  $('#user-auth').val('Thank you for choosing Kumo!!!')
  setTimeout(function () {
    $('#message').fadeOut(200)
  }, 4000)
}

const signInSuccess = (signInResponse) => {
  store.user = signInResponse.user

  $('#user').text(`${store.user._id}`)
  $('.message').show(100)
  $('.btn-group-1, .message').removeClass('hidden')
  $('.btn-group-1, .message').addClass('flex')
  $('#sign-up-form-dropdown, #sign-in-form-dropdown').addClass('hidden')
  $('#upload-form, #show-collection, .btnGroupDrop1, #show-collection').removeClass('hidden')
  $('#user-auth').html('Welcome to Kumo!')
  setTimeout(function () {
    $('#message').fadeOut(200)
  }, 4000)
}

const signInFailure = function (signInFailureResponse) {
  $('#user-auth').html('Something went wrong, please try again.')
  $('.message').show(200)
  setTimeout(function () {
    $('#message').fadeOut(200)
  }, 4000)
}

const changePasswordSuccess = (changePasswordResponse) => {
  $('.message').show(100)
  $('#user-auth').html('You changed password successfully.')
  setTimeout(function () {
    $('#message').fadeOut(200)
  }, 4000)
  $('#sign-up-form').addClass('hidden')
}

const signOutSuccess = (signOutResponse) => {
  $('.message').show(100)
  $('#user-auth').html('See you next time!')
  setTimeout(function () {
    $('#message').fadeOut(200)
  }, 4000)

  $('.btn-group-1').removeClass('flex')
  $('.btn-group-1').addClass('hidden')
  $('#sign-up-form-dropdown, #sign-in-form-dropdown').removeClass('hidden')
  $('#change-password-form').trigger('reset')
  $('form').trigger('reset')
  $('.card-body, #upload-form, #show-collection, .btnGroupDrop1').addClass('hidden')
}

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  signOutSuccess
}
