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

  // $("form#filters").on("change", function(e){
  //   e.preventDefault();

  // });

  $("#filters :checkbox").click(function() {
     $("li").hide();
     $("#filters :checkbox:checked").each(function() {

        $(this) 

         // $("." + $(this).val()).show();
         console.log($(this)[0]["id"]);
         var this_checkbox_id = $(this)[0]["id"];
         
         $("li[data-location='"+this_checkbox_id+"']").show();
     });
  });


});