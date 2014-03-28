
$(document).ready(function(){


   $('#tag-select').on('change', function() {

    $("li.lesson").hide();
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
     $("#tag-select > option").each(function(){
       if ($(this).context.index > 0){
         if(this.selected) {
           filterArray.push(parseInt($(this).attr("id")));  
         }
       }
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

});
