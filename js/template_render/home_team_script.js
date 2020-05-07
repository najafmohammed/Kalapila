var ranksxx=["","","",""];
  for(var i=0;i<rank_names.length;i++){
    var name=rank_names[i];
    switch (name){
      case 'Go Corona': ranksxx[0]="images/rank"+(i+1)+".svg"; break;
      case "Annamma's Army":ranksxx[1]="images/rank"+(i+1)+".svg"; break;
      case "Veetil Iri🦚":ranksxx[2]="images/rank"+(i+1)+".svg";;break;
      case "Nammal Powlikyum":ranksxx[3]="images/rank"+(i+1)+".svg";;break;
    }
  }
  
  var pointsx={
    point1:publicscore[0], // Go corona
    point2:publicscore[1], // Annamma's Army
    point3:publicscore[2], // Veetil Iri🦚
    point4:publicscore[3], //Nammal powlikyum

    rank_image1:ranksxx[0],
    rank_image2:ranksxx[1],
    rank_image3:ranksxx[2],
    rank_image4:ranksxx[3]
}
        var template = $('#teamsX').html();
        var templateScript = Handlebars.compile(template);
        var html = templateScript(pointsx);
        $(document.body).append(html);