var xxl={"t_name1":rank_names[0]}
  var template = $('#home_info').html();
  var templateScript = Handlebars.compile(template);
  var html = templateScript(xxl);
  $(document.body).append(html);