LandingEmber.ApplicationRoute = Ember.Route.extend(SimpleAuth.ApplicationRouteMixin);
LandingEmber.ApplicationRoute.reopen({
  beforeModel: function(transition){
    this._super(transition);
    console.log('authed? ' + this.get('session').isAuthenticated);
    if ( !this.get('session').isAuthenticated ){
      console.log('auth from store?');
      //console.log(this.get('session.store').get('email'));
    }
  },
  actions: {
    didTransition: function(){
      document.title = 'Home';
    },
    sessionAuthenticationSucceeded: function(){
      console.log("auth success!");
      console.log(this.get('session').get('email'));
      console.log(this.get('session').get('status'));
      //this.get('session.store').persist()
    },
    sessionAuthenticationFailed: function(error) {
      //console.debug(error);
      //this.controllerFor('application').set('loginErrorMessage', error.message);
    }
  }
});