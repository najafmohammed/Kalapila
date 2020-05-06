var progress_update;



var xlc;
var scores=[0,0,0,0];
 var scorex=0;
 for (var i=0;i<team1.member.length;i++){
   scorex=parseInt(team1.member[i].points)+scorex;
 }
 scores[0]=scorex;
 scorex=0;
 for (var i=0;i<team2.member.length;i++){
   scorex=parseInt(team2.member[i].points)+scorex;
 }
 scores[1]=scorex;
 scorex=0;
 for (var i=0;i<team3.member.length;i++){
   scorex=parseInt(team3.member[i].points)+scorex;
 }
 scores[2]=scorex;
 scorex=0;
 for (var i=0;i<team4.member.length;i++){
   scorex=parseInt(team4.member[i].points)+scorex;
 }
 scores[3]=scorex;
 scorex=0;
var rank_names=["","","",""];
var tempscore=scores.slice();
var publicscore=scores.slice();
 for(var k=0;k<tempscore.length;k++){
   var x=tempscore.indexOf(Math.max.apply(null, tempscore));
   switch (x){
     case 0: rank_names[k]="Go Corona"; break;
     case 1: rank_names[k]="Annamma's Army"; break;
     case 2: rank_names[k]="Veetil Iri🦚"; break;
     case 3: rank_names[k]="Nammal Powlikyum"; break;
  }
   tempscore[tempscore.indexOf(Math.max.apply(null, tempscore))]=0;
   
 }
 scores.sort(function(a, b){return b - a});
  $('#leaderboard_btn').on('click',function(e){
    
      var template = $('#leaderboard').html();
      var templateScript = Handlebars.compile(template);
  xlc={"t_point1":scores[0],
      "t_point2":scores[1],
      "t_point3":scores[2],
      "t_point4":scores[3],
      "t_name1":rank_names[0],
      "t_name2":rank_names[1],
      "t_name3":rank_names[2],
      "t_name4":rank_names[3]
      }
      var html = templateScript(xlc);
      $(document.body).append(html);

 
    $('#user_score').html(" "+p_score_value);

      $("#modalLeaderboard").modal('show');
      

  
  });
  xlc={"t_point1":scores[0],
  "t_point2":scores[1],
  "t_point3":scores[2],
  "t_point4":scores[3],
  "t_name1":rank_names[0],
  "t_name2":rank_names[1],
  "t_name3":rank_names[2],
  "t_name4":rank_names[3]
  }

