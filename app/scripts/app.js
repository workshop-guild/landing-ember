var LandingEmber = window.LandingEmber = Ember.Application.create({
  LOG_TRANSITIONS: true
});

window.ENV = window.ENV || {};
window.ENV['simple-auth'] = {
  authenticationRoute: 'login'
  //store: 'simple-auth-session-store:local-storage'
  //crossOriginWhitelist: ['http://some.other.domain:1234'] // cross origin authorization
};

var LandingAuthenticator = SimpleAuth.Authenticators.Base.extend({
  loginEndPoint: 'http://localhost:8080/login',

  authenticate: function(credentials){
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url:         _this.loginEndPoint,
        type:        'POST',
        data:        JSON.stringify({ email: credentials.identification, password: credentials.password }),
        contentType: 'application/json'
      }).then(
        function(response) { // success
          Ember.run(function() {
            console.info('app.js resolved with', response);
            resolve(response);
          });
        },
        function(xhr, status, error) { // fail
          var response = JSON.parse(xhr.responseText);
          Ember.run(function() {
            reject(response);
          });
        }
      );
    });
  }
});

Ember.Application.initializer({
  name: 'authentication',
  before: 'simple-auth',
  initialize: function(container, application) {
    container.register('authenticator:custom', LandingAuthenticator);
  }
});

/* Order and include as you please. */
require('simple-auth/ember');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/helpers/*');
require('scripts/router');