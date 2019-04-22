$(document).ready(function(){
  $('.nav-item').mouseenter(function() {
    $(this).css({
      'backgroundColor': 'white'
      });
  }).mouseleave(function(){
    $(this).css({
      'backgroundColor': 'black'
      });
  });
});
