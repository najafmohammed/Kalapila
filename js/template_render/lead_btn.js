$('#lead_btn').on('click',function(e){
    var first = xlc.t_name1;
    var template,templateScript,html;
    
    switch(first){
      case "Nammal Powlikyum": 
              template = $('#teams4').html();
              templateScript = Handlebars.compile(template);
              html = templateScript(team4);
            $(document.body).append(html);
              $("#myModal4").modal('show');
            break;
        case "Annamma's Army": 
              template = $('#teams2').html();
              templateScript = Handlebars.compile(template);
              html = templateScript(team2);
              $(document.body).append(html);
              $("#myModal2").modal('show');
              break;
        case "Go Corona":
                template = $('#teams').html();
                templateScript = Handlebars.compile(template);
              html = templateScript(team1);
              $(document.body).append(html);
              $("#myModal").modal('show');
              
              break;
        case "Veetil Iri🦚": 
              template = $('#teams3').html();
              templateScript = Handlebars.compile(template);
              html = templateScript(team3);
              $(document.body).append(html);
              $("#myModal3").modal('show');
              break;
        
    }
        
});
$('#updates_btn').on('click',function(e){  
  $("#updatesModal").modal('show');
});