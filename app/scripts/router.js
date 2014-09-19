LandingEmber.Router.map(function () {

  this.resource('guilds', function(){
    this.route('guild', { path: '/:guild_id' });
  });

  this.route('login');

  this.route('register');

  this.route('about');

  this.route('profile');
});

LandingEmber.Router.reopen({
  //location: 'history'
})