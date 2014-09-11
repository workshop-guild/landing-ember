LandingEmber.ApplicationRoute = Ember.Route.extend(SimpleAuth.ApplicationRouteMixin);
LandingEmber.ApplicationRoute.reopen({
  authenticateSession: {

  }
});