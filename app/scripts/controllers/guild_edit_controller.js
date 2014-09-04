LandingEmber.GuildEditController = Ember.ObjectController.extend({
  needs: 'guild',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.guild.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('guild',this.get('model'));
    }
  }
});

