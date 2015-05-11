import Ember from 'ember';

export default Ember.View.extend({
  template: "",
  didInsertElement: function () {
    $('.collapsible').collapsible({
      accordion : false
    });

    $(".button-collapse").sideNav();

    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false // Displays dropdown below the button
      });

    $(document).ready(function() {
      $('select').material_select();
      $('ul.tabs').tabs();
      $('.slider').slider({full_width: false, interval: 10000, indicators: true});
      $('.parallax').parallax();
    });

    $('.pagination li').on('click', function () {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    });

    $('.pagination-color li').on('click', function () {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    });

  }


});
