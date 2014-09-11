/*global Ember*/
LandingEmber.Guild = DS.Model.extend({
  guild_id: DS.attr( 'number' ),
  name: DS.attr( 'string' ),
  desc: DS.attr( 'string' ),
  link: DS.attr( 'string' ),
  pic: DS.attr( 'string' )
});

LandingEmber.Guild.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
LandingEmber.Guild.FIXTURES = (function(){
  var array = [];
  for ( var i = 0; i < 20; ++i ){
    var guild = {
      id: i,
      name: 'Workshop Guild',
      desc: 'The only guild that gives a shit',
      link: '//workshop-guild.github.io',
      pic: '//placehold.it/200'
    }
    array[i] = guild;
  }
  return array;
})();
