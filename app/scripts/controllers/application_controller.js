LandingEmber.ApplicationController = Ember.ObjectController.extend({
  actions: {
    showForm: function(){
      $('#test').popover('show');
    }
  }
});

