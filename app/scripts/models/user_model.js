LandingEmber.User = DS.Model.extend({
  user_id: DS.attr( 'number' ),
  username: DS.attr( 'string' ),
  avatarURL: DS.attr( 'string' ),
  firstname: DS.attr( 'string' ),
  lastname: DS.attr( 'string' ),
  role: DS.attr( 'string' ),
  profile: DS.attr( 'string' ),
  introduction: DS.attr( 'string' ),
  details: DS.attr( 'string' )
});

LandingEmber.User.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
LandingEmber.User.FIXTURES = (function(){
  var array = [];
  for ( var i = 0; i < 20; ++i ){
    var user = {
      id: i,
      username: 'neonaleon',
      avatarURL: '//placehold.it/128x128',
      firstname: 'Leon',
      lastname: 'Ho',
      role: 'Programmer',
      profile: '',
      introduction: '',
      details: ''
    }
    array[i] = user;
  }
  return array;
})();
