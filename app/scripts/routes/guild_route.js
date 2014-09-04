LandingEmber.GuildRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('guild', params.guild_id);
  }
});

