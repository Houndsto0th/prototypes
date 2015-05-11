import Ember from 'ember';

export default Ember.Controller.extend({
  small: false,
  medium: false,
  large: false,
  xLarge: false,
  xxLarge: false,
  previousSize: null,


  actions: {

    outOfStock: function () {
      Materialize.toast('That item is out of stock! Any currently in your cart are still available', 4000, 'rounded')
    },

    sizeChanged: function(size) {
      console.log(size);
      this.set('small', false);
      this.set('medium', false);
      this.set('large', false);
      this.set('xLarge', false);
      this.set('xxLarge', false);


      this.set(size, true);
      Ember.run.later(function () {
        $('#color').material_select('destroy');
        $('#color').material_select();

      }, 500);
    }

  },


});
