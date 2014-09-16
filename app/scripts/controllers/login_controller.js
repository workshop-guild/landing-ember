LandingEmber.LoginController = Ember.ObjectController.extend(SimpleAuth.LoginControllerMixin);
LandingEmber.LoginController.reopen({
  model: {},
  authenticator: 'authenticator:custom'
})