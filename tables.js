
//Timer
var timer = new Timer();
$('#chronoExample .startButton').click(function () {
  timer.start();
  $(this).hide();
  $('#chronoExample .pauseButton').show();
});
$('#chronoExample .pauseButton').click(function () {
  timer.pause();
  $(this).hide();
  $('#chronoExample .startButton').show();
});
$('#chronoExample .stopButton').click(function () {
  timer.stop();
  $(this).hide();
  $('#chronoExample .startButton').show();
});
$('#chronoExample .resetButton').click(function () {
  timer.reset();
});

timer.addEventListener('secondsUpdated', function (e) {
  $('#chronoExample .values').html(timer.getTimeValues().toString(['minutes', 'seconds']));
});
timer.addEventListener('started', function (e) {
  $('#chronoExample .values').html(timer.getTimeValues().toString(['minutes', 'seconds']));
});
timer.addEventListener('reset', function (e) {
  $('#chronoExample .values').html(timer.getTimeValues().toString(['minutes', 'seconds']));
});

//
var exState = false;
$('.exercise-toggle').click(function(e) {
  e.preventDefault();
  var exercise = $(this).parents('.exercise');
  if(exercise.hasClass('active')) {
    exState = true;
  } else {
    exState = false;
  }

  $('.exercise').removeClass('active');
  if(exState) {
    exercise.removeClass('active');
  } else {
    exercise.addClass('active');
  }

});

var editState = false;
$('.set-weight').click(function(e) {
  editState = !editState;
  $('.workout-footer').toggleClass('editing');
  if(editState) {
    $('.weight-edit').focus();
  } else {
    $('.weight-target').text($('.weight-edit').val());
  }
});

$('.day-tabs a').click(function(e) {
  e.preventDefault();
  var target = $(this).attr('href');
  var parentBlock = $(this).parents('.workout-item');
  parentBlock.find('.day, .day-tabs a').removeClass('active');
  $(this).addClass('active');
  $(target).addClass('active');
});

$('#table-app').owlCarousel({
  items: 1,
  dots: false,
  nav: true
});

$("#table-app").trigger("to.owl.carousel", [2, 1, true]);

$('.exercise-video').click(function(e) {
  e.preventDefault();
  $('.video-popup').addClass('active');
  var video = `<iframe width="560" height="315" src="https://www.youtube.com/embed/rBJ2OSWFKkA?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>`;
  $('.popup-inner').append(video);
});

$('.close-popup, .popup-overlay').click(function(e) {
  e.preventDefault();
  $('.video-popup').removeClass('active');
  $('.popup-inner').empty();
});
