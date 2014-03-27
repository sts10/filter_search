$(document).ready(function(){
  $("a#no_teachers").on("click", function(e){
    e.preventDefault();
    $('li').hide();
    $("li[data-teachers='0']").show();
  });

  $("a#no_students").on("click", function(e){
    e.preventDefault();
    $('li').hide();
    $("li[data-students='0']").show();
  });

  $("a#show_all").on("click", function(e){
    e.preventDefault();
    $('li').show();
  });
});