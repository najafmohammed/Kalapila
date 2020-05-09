function loadEventsTable(){
  var template = $('#EventX').html();
  $(document).ready(function () {
    $('#myTable').DataTable();
    });
      var templateScript = Handlebars.compile(template);
      var html = templateScript(eventsx);
      $(document.body).append(html);
}
var count=0;
$('#leaderboard_btn').on('click',function(e){
  if(count==0){
    loadEventsTable();
  }
  count++;
  $(document).ready(function () {
    document.getElementById('Events').scrollIntoView();
    });
});

$('#loadeventsclik').on('click',function(e){
  if(count==0){
    loadEventsTable();
  }
  count++;
  $(document).ready(function () {
  document.getElementById('Events').scrollIntoView();
  });
});
$('#loading_event').on('click',function(e){
  if(count==0){
    loadEventsTable();
  }
  count++;
  $(document).ready(function () {
  document.getElementById('Events').scrollIntoView();
  });
});
