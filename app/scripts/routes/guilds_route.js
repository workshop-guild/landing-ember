LandingEmber.GuildsRoute = Ember.Route.extend({
  actions: {
    didTransition: function(){
      document.title = 'Guilds';
    }
  }
});

LandingEmber.GuildsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('guild');
  }
});

LandingEmber.GuildsGuildRoute = Ember.Route.extend({
  model: function(params){
    return this.get('store').find('guild', params.guild_id);
  },
  actions: {
    didTransition: function(){
      document.title = 'Guild ' + this.model.id;
    }
  }
});