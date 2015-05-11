import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('product', {path: "/"});
  this.route('variantone');
  this.route('varianttwo');
  this.route('vehiclesale');
  this.route('oildemo');
});

export default Router;
