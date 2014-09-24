LandingEmber.ProfileRoute = Ember.Route.extend(/*TODO: Extend protected route*/);
LandingEmber.ProfileRoute.reopen({
  model: function(){
    return this.get('store').find('user', 0);
  },
  actions: {
    didTransition: function(){
      document.title = 'Profile';
    }
  }
});