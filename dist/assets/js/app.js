
//../../../node_modules/materialize-css/js/modal.js



//------ выпадающий список для переключения между страницами --------

$('#switcher').on('click', function(){    
  $('.submenu--hidden').slideToggle("");
});

$( document ).ready(function () {
  $('.modal').modal({
    opacity: 0.7,
    inDuration: 800,
    outDuration: 800,
  });
})