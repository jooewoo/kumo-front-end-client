'use strict'

const store = require('../store.js')

const failure = (signUpFailureResponse) => {
  $('#message').html('Something went wrong!!! Please try again.')
  $('#message').addClass('error-message')
  $('#message').removeClass('success-message')
}

const signUpSuccess = (signUpResponse) => {
  $('#message').html('Thank you for choosing Kumo!!!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const signInSuccess = (signInResponse) => {
  store.user = signInResponse.user
  console.log(store.user)
  $('.user').val(`${store.user._id}`)
  $('.message').html('Welcome back!')
  $('.btn-group-1').removeClass('hidden')
  $('.btn-group-1').addClass('flex')
  $('#sign-up-form-dropdown, #sign-in-form-dropdown').addClass('hidden')
  $('.content').addClass('hidden')
}

const changePasswordSuccess = (changePasswordResponse) => {
  // console.log('store object before adding user ', store)
  $('#message').html('You changed password successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#sign-up-form').addClass('hidden')
}

const signOutSuccess = (signOutResponse) => {
  $('.message').html('See you next time!')
  $('.message').addClass('success-message')
  $('.message').removeClass('error-message')
  $('.btn-group-1').removeClass('flex')
  $('.btn-group-1').addClass('hidden')
  $('#sign-up-form-dropdown, #sign-in-form-dropdown').removeClass('hidden')
  $('#change-password-form').trigger('reset')
  $('form').trigger('reset')
  $('.content').addClass('hidden')
}

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
}
