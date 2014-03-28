
$(document).ready(function(){

  $('#tag-select').on('change', function() {
    var tags_selected = [];

    $("#tag-select > option").each(function(){
      if ($(this).context.index > 0){
        if(this.selected) {
          tags_selected.push($(this).attr("id"));  
        }
      }
    });
    console.log(tags_selected);
  });

  $('#simple-select').on('change', function() {
     alert("change");
   });

});
