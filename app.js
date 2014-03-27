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

  $("#filters :checkbox").click(function() {

   $("li").hide();
   var filters = getFilters();
   $(".lesson").each(function(){
    var $lesson = $(this);
    var lessonFilters = $lesson.data("filters");
    console.log($lesson.attr("id"));
    console.log(lessonFilters);
    if(lessonQualified(filters, lessonFilters)){
      $lesson.show();
    }
  });
 });

  function getFilters(){
    var filterArray = [];
    $("#filters :checkbox:checked").each(function() {
      filterArray.push(parseInt($(this).attr("id")));
    });
    return filterArray;
  };

  function lessonQualified(filter, lesson){
    for(var i = 0; i < filter.length ; i++){
      if((lesson.indexOf(filter[i])) == -1){
        return false;
      }
    }
    return true;
  };

  console.log(lessonQualified([1, 2], [2, 3]));
  console.log(lessonQualified([2], [2, 3]));
  console.log(lessonQualified([1, 2, 3, 4], [3]));
  console.log(lessonQualified([3], [1, 2, 3, 30, 1000]));
  console.log(lessonQualified([1, 3], [1, 2, 3, 30, 1000]));
});

