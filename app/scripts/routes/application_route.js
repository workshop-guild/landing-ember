LandingEmber.ApplicationRoute = Ember.Route.extend(SimpleAuth.ApplicationRouteMixin);
LandingEmber.ApplicationRoute.reopen({
  actions: {
    didTransition: function(){
      document.title = 'Home';
    },
    sessionAuthenticationFailed: function(error) {
      this.controllerFor('application').set('loginErrorMessage', error.message);
    }
  }
});