$(document).ready(function() {
  var button = $('#button');
  var modal = $('#modal');
  var close =$('#close')
  button.on('click', function() {
    modal.addClass('modal_active');
  });
  close.on('click', function() {
    modal.addClass('wow zoomOutDown');
    modal.removeClass('modal_active');
  });
});