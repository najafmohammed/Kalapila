$('#login_button').on('click', function(e){ 
    console.log(document.getElementById('typed_username').value);
    var x="";
    x=document.getElementById('typed_username').value;
    myObj = {name: x};
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);
    text = localStorage.getItem("testJSON");
    obj = JSON.parse(text);
    document.getElementById("username_nav").innerHTML = "Welcome Back "+obj.name;
   });
   text = localStorage.getItem("testJSON");
    obj = JSON.parse(text);
    if(jQuery.isEmptyObject(obj)){
      $("#modalLoginAvatar").modal('show');
      }
    else{
        document.getElementById("username_nav").innerHTML = "Welcome Back "+obj.name;
    }
var p="";
var p_score_value=0;
    for (var i=0;i<team1.member.length;i++){
      var p1=team1.member[i].name;
      var p2=team2.member[i].name;
      var p3=team3.member[i].name;
      var p4=team4.member[i].name;
      if(p1==obj.name){
        p_score_value=team1.member[i].points;
      }
      if(p2==obj.name){
        p_score_value=team2.member[i].points;
      }
      if(p3==obj.name){
        p_score_value=team3.member[i].points;
      }
      if(p4==obj.name){
        p_score_value=team4.member[i].points;
      }

    }
    document.getElementById("username_score").innerHTML = "Your Points are "+p_score_value;