$(document).on('ready',function(){
  $('#mostrar-menu').on('click', function(){
    $(this).next().slideToggle();
  });
});
