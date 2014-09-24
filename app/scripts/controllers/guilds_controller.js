LandingEmber.GuildsController = Ember.ObjectController.extend({
});

LandingEmber.GuildsIndexController = Ember.ArrayController.extend({
  sortProperties: ['id'],
  sortAscending: true,
  actions: {
    visitGuild: function( guild ){
      this.transitionToRoute('guilds.guild', guild);
    }
  }
});

LandingEmber.GuildsGuildController = Ember.ObjectController.extend({
});