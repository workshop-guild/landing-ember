LandingEmber.AboutRoute = Ember.Route.extend({
  actions: {
    didTransition: function(){
      document.title = 'About';
    }
  }
});