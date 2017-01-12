$(function(){

  $("#acerca").fadeOut();

  $("#p1").fadeOut();
  $('#imagen1').fadeOut();
  $('#text2').fadeOut();
  $('#reciclaje').fadeOut();
  $('#boton2').fadeOut();
  $('#juridica').fadeOut();
  $('#text3').fadeOut();
  $('#imagen2').fadeOut();
  $('#boton1').fadeOut();
  $('#back').fadeOut();
  $('#text4').fadeOut();
  $('#boton11').fadeOut();
  $('#boton21').fadeOut();
  $("#acerca").fadeIn();

  var waypoint = new Waypoint({
    element: document.getElementById('seccion1'),
    handler: function(direction) {
    $('#p1').fadeIn().addClass('animated zoomIn');
    },
    offset: 450
  });

  var waypoint = new Waypoint({
    element: document.getElementById('seccion1'),
    handler: function(direction) {
    $('#imagen1').fadeIn().addClass('animated zoomIn');
    },
    offset: 450
  });

  var waypoint = new Waypoint({
    element: document.getElementById('secc'),
    handler: function(direction) {
    $('#text2').fadeIn().addClass('animated zoomIn');
    },
    offset: 500
  });
  var waypoint = new Waypoint({
    element: document.getElementById('secc'),
    handler: function(direction) {
    $('#reciclaje').fadeIn().addClass('animated zoomIn');
    },
    offset: 500
  });
  var waypoint = new Waypoint({
    element: document.getElementById('secc'),
    handler: function(direction) {
    $('#boton2').fadeIn().addClass('animated fadeInDown');
    },
    offset: 500
  });
  var waypoint = new Waypoint({
    element: document.getElementById('sec2'),
    handler: function(direction) {
    $('#juridica').fadeIn().addClass('animated zoomIn');
    },
    offset: 500
  });
  var waypoint = new Waypoint({
    element: document.getElementById('sec2'),
    handler: function(direction) {
    $('#text3').fadeIn().addClass('animated zoomIn');
    },
    offset: 500
  });

  var waypoint = new Waypoint({
    element: document.getElementById('sec2'),
    handler: function(direction) {
    $('#boton-1').fadeIn().addClass('animated fadeInDown');
    },
    offset: 500
  });

  var waypoint = new Waypoint({
    element: document.getElementById('sec2'),
    handler: function(direction) {
    $('#imagen2').fadeIn().addClass('animated zoomIn');
    },
    offset: 500
  });

  var waypoint = new Waypoint({
    element: document.getElementById('seccion3'),
    handler: function(direction) {
    $('#back').fadeIn().addClass('animated zoomIn');
    },
    offset: 500
  });

  var waypoint = new Waypoint({
    element: document.getElementById('seccion3'),
    handler: function(direction) {
    $('#text4').fadeIn().addClass('animated zoomIn');
    },
    offset: 500
  });

  var waypoint = new Waypoint({
    element: document.getElementById('seccion3'),
    handler: function(direction) {
    $('#boton11').fadeIn().addClass('animated fadeInDown');
    },
    offset: 500
  });
  var waypoint = new Waypoint({
    element: document.getElementById('seccion3'),
    handler: function(direction) {
    $('#boton21').fadeIn().addClass('animated fadeInDown');
    },
    offset: 500
  });



});
