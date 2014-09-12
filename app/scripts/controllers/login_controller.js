LandingEmber.LoginController = Ember.ObjectController.extend(SimpleAuth.LoginControllerMixin);
LandingEmber.LoginController.reopen({
  content: {},
  authenticator: 'authenticator:custom'
})