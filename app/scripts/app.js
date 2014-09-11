var LandingEmber = window.LandingEmber = Ember.Application.create();

/* Order and include as you please. */
require('simple-auth/ember');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');