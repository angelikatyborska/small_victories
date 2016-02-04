'use strict';

module.exports = function($auth) {
  var current = null;

  function currentUser() {
    return current;
  }

  function login(loginForm, successCallback, errorCallback) {
    $auth.submitLogin(loginForm)
      .then(function(response) {
        current = response;

        if (typeof successCallback === 'function') {
          successCallback();
        }
      })
      .catch(function(response) {
        if (typeof errorCallback === 'function') {
          errorCallback();
        }
      });
  }

  function logout(successCallback, errorCallback) {
    $auth.signOut()
      .then(function(response) {
        current = null;

        if (typeof successCallback === 'function') {
          successCallback();
        }
      })
      .catch(function(response) {
        if (typeof errorCallback === 'function') {
          errorCallback();
        }
      });
  }

  return {
    currentUser: currentUser,
    login: login,
    logout: logout
  }
};
