LandingEmber.ApplicationRoute = Ember.Route.extend(SimpleAuth.ApplicationRouteMixin);
LandingEmber.ApplicationRoute.reopen({
  actions: {
    sessionAuthenticationFailed: function(error) {
      this.controllerFor('application').set('loginErrorMessage', error.message);
    }
  }
});