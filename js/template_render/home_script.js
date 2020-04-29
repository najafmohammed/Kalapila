var xxl={"t_name1":rank_names[0]
,"event_name":next_event_details.event_name,
"progress":"5/18",
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