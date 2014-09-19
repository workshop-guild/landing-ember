LandingEmber.GuildsRoute = Ember.Route.extend({
  actions: {
    didTransition: function(){
      document.title = 'Guilds';
    }
  }
});

LandingEmber.GuildsIndexRoute = Ember.Route.extend({
  model: function(){
    return this.get('store').findAll('guild');
  },
  setupController: function(controller, model){
    controller.set('guilds', model);
  }
});

LandingEmber.GuildsGuildRoute = Ember.Route.extend({
  model: function(params){
    return this.get('store').find('guild', params.guild_id);
  },
  afterModel: function(model){
    this.set('model', model);
  },
  actions: {
    didTransition: function(){
      document.title = 'Guild ' + this.get('model').id;
    }
  }
});