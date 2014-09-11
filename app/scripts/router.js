LandingEmber.Router.map(function () {

  this.resource('guilds', function(){
    this.resource('guild', { path:'/:guild_id' }, function(){
      this.route('index');
    });
  });
});
