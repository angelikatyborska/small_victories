'use strict';

module.exports = function($auth) {
  function login(loginForm, successCallback, errorCallback) {
    $auth.submitLogin(loginForm)
      .then(function(response) {
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
    login: login,
    logout: logout
  }
};
