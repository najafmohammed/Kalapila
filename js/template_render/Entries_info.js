var template = $('#Entries_modal').html();
var templateScript = Handlebars.compile(template);
var html = templateScript(icons_list);
$(document.body).append(html); 
$("#entries").modal('show');
$(".Entries-btn").on('click',function(e){ 
    //get the element that is clicked
    //var ele = e.target;
    //get the element 'rel attribute of the element that is clicked
    var eleRel = $(e.currentTarget).data('val');
    //display the id and rel in the console
    console.log("Element Rel is " + eleRel);
    switch(eleRel){
      case "Ludo":render_ludo();break;
      case "eightball":render_eightball();break;
    }
});

  function render_ludo(){
    var template = $("#Ludo").html();
    var templateScript = Handlebars.compile(template);
    var html = templateScript(loadimages.Ludo);
    $(document.body).append(html); 
    $("#Ludo_modal").modal('show');
  }
  function render_eightball(){
    var template = $("#eightball").html();
    var templateScript = Handlebars.compile(template);
    var html = templateScript(loadimages.eightball);
    $(document.body).append(html); 
    $("#eightball_modal").modal('show');
  }





  var animations=["flip","flash","rotateIn","bounceIn","fadeIn","hinge","jackInTheBox","swing","zoomInDown"];
  var count;
  text = localStorage.getItem("savestate_animation");
    obj = JSON.parse(text);
  if(!jQuery.isEmptyObject(obj)){
    count=obj.count_value;
    console.log("is nit empty"+count);
  }
  else{
    count=0;
    console.log("is emt empty"+count);
  }
  $('.Entries-btn').addClass(animations[count]);
  var timespressed=0;
  $("#animcycler").on('click',function(e){ 
    if(count>8){count=0;}
    if(timespressed==0){
      $('#toast').toast('show');
    }
    $('.Entries-btn').addClass(animations[count]);
      $('.Entries-btn').removeClass(animations[count-1]);
    timespressed=timespressed+1;
  
    count++;
    console.log(count);
  });
  $("#save_anim").on('click',function(e){ 
    saveState_animation_var = {count_value:count-1};
    myJSON = JSON.stringify(saveState_animation_var);
    localStorage.setItem("savestate_animation", myJSON);
    alert("saved profile");
  });
