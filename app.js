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
    $("li").each(function(){
      var $this_lesson = $(this);
      console.log($this_lesson.data("location"));

      $("#filters :checkbox:checked").each(function() {
          var this_checkbox_classname = $(this)[0]["className"];
          var this_checkbox_id = $(this)[0]["id"];
       
          // $("li[data-"+this_checkbox_classname+"='"+this_checkbox_id+"']").show();

      });
    });
  });


});


// if (this_checkbox_classname == "location") {
//    $("li[data-location='"+this_checkbox_id+"']").show();
// }





/// this works

// $("#filters :checkbox:checked").each(function() {
//     var this_checkbox_classname = $(this)[0]["className"];
//     var this_checkbox_id = $(this)[0]["id"];
 
//     $("li[data-"+this_checkbox_classname+"='"+this_checkbox_id+"']").show();

// });