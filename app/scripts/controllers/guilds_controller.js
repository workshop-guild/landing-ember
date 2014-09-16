LandingEmber.GuildsController = Ember.ObjectController.extend({
});

LandingEmber.GuildsIndexController = Ember.ObjectController.extend({
  actions: {
    test: function( guild ){
      this.transitionToRoute('guilds.guild', guild);
    }
  }
});

LandingEmber.GuildsGuildController = Ember.ObjectController.extend({

});