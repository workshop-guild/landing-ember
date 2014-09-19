LandingEmber.ApplicationView = Ember.View.extend({
  didInsertElement: function(){
    $('.navbar-brand, .navbar-collapse a, .navbar-collapse button').click(function(){
        $('.navbar-collapse.in').collapse('hide');
    });
  }
});