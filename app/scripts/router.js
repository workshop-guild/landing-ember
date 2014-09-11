LandingEmber.Router.map(function () {

  this.resource('guilds', function(){
    this.resource('guild', { path:'/:guild_id' }, function(){
      this.route('index');
      //this.route('edit');
    });
  });
  //this.resource('guild', { path:'/guilds/:guild_id' });
});
