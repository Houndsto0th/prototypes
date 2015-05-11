import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'select',

  didInsertElement: function () {
    var self = this;
    $('#size').on('change', function () {
      var size = document.getElementById("size").value;
      self.sendAction('sizeChosen', size);
    });
  },

});
