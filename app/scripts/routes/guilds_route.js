LandingEmber.GuildsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('guild');
  }
});

