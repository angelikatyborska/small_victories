'use strict';

module.exports = function($auth) {
  function login(loginForm, successCallback, errorCallback) {
    $auth.submitLogin(loginForm)
      .then(function(response) {
        if (typeof successCallback === 'function') {
          successCallback(response);
        }
      })
      .catch(function(response) {
        if (typeof errorCallback === 'function') {
          errorCallback(response);
        }
      });
  }

  function logout(successCallback, errorCallback) {
    $auth.signOut()
      .then(function(response) {
        if (typeof successCallback === 'function') {
          successCallback(response);
        }
      })
      .catch(function(response) {
        if (typeof errorCallback === 'function') {
          errorCallback(response);
        }
      });
  }

  return {
    login: login,
    logout: logout
  }
};
