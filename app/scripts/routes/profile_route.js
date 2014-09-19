LandingEmber.ProfileRoute = Ember.Route.extend(/*TODO: Extend protected route*/);
LandingEmber.ProfileRoute.reopen({
  actions: {
    didTransition: function(){
      document.title = 'Profile';
    }
  }
});