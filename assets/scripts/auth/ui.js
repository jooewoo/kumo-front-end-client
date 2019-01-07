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
  // console.log('store object before adding user ', store)
  store.user = signInResponse.user
  // console.log(store.user)
  $('#message').html('Welcome back!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
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
  $('#message').html('See you next time!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
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
