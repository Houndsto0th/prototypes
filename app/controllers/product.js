import Ember from 'ember';

export default Ember.Controller.extend({
  small: false,
  medium: false,
  large: false,
  xLarge: false,
  xxLarge: false,
  previousSize: null,


  actions: {

    sizeChanged: function(size) {
      console.log(size);
      this.set(size, true);
    }

  },


});
