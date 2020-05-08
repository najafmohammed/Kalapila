$('#nxt_event').on('click', function(e){  
    var template = $('#nxtevent').html();
    var templateScript = Handlebars.compile(template);
    var html = templateScript(next_event_details);
    $(document.body).append(html);
    $("#nxt_event_description").modal('show');
});

$('#load_ldrbtn').on('click',function(){  
    loadLeaderBoard();
  });