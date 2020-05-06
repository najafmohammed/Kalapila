var progress=0;
for (var i=0;i<eventsx.events.length;i++){
 if(eventsx.events[i].finished=="Completed"){
   progress++;
 }
}                         
var width=(progress*100)/eventsx.events.length;
var xxl={"t_name1":rank_names[0]
,"event_name":next_event_details.event_name,
"progress":progress+"/"+eventsx.events.length,
"Event_name_1":updates.Event_name_1,
"title_1":updates.title_1,
"title_2":updates.title_2,
"title_3":updates.title_3,
"title_4":updates.title_4
}


function renderUpdate(){
  var template = $('#home_info').html();
  var templateScript = Handlebars.compile(template);
  var html = templateScript(xxl);
  $(document.body).append(html);
}

renderUpdate();

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("progress_width");
    var elem2 = document.getElementById("progress_percentage");
    var width2 = 1;
    var id = setInterval(frame, 60);
    function frame() {
      if (width2 >= width) {
        clearInterval(id);
        i = 0;
      } else {
        width2++;
        elem.style.width = width2 + "%";
        elem2.innerHTML="<h6>"+"&nbsp"+ width2+" % </h6>";
      }
    }
  }
}
move();