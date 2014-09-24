LandingEmber.ProfileEditableTextFieldView = Ember.TextField.extend({
  layoutName: 'profile/profile_editable_textfield',

  isEditing: false,
  showControls: false,
  bubbles: true,

  prefix: '',
  field: '',

  mouseEnter: function(event){
    return this.set('showControls', true);
  },

  mouseLeave: function(event){
    return this.set('showControls', false);
  },

  focusIn: function(event){

  },

  focusOut: function(event){
    return this.send('confirm');
  },

  keyUp: function(event){
    console.log(event);
    return this.send('confirm');
  },

  actions: {
    edit: function(){
      this.set('isEditing', true);
      var self = this;
      Ember.run.scheduleOnce('afterRender', function(){
        self.$().children('input').focus();
      });
    },

    confirm: function(){
      // TODO: validate changed value
      return this.set('isEditing', false);
    }
  }
});

LandingEmber.ProfileEditableTextAreaView = Ember.View.extend({
  templateName: 'profile/profile_editable_textarea',

  isEditing: false
});