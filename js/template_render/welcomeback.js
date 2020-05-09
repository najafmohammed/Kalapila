$('#login_button').on('click', function(e){ 
    var x="";
    x=document.getElementById('typed_username').value;
    myObj = {name: x};
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON2", myJSON);
    text = localStorage.getItem("testJSON2");
    obj = JSON.parse(text);
    document.getElementById("username_nav").innerHTML = "Welcome Back "+obj.name;
   });
   $('#dontshow').on('click', function(e){
    myObj1= {dontshow1: 1};
    myJSON1 = JSON.stringify(myObj1);
    localStorage.setItem("testJSON1", myJSON1);
    $('#start_warning').hide();
   }); 
   text = localStorage.getItem("testJSON2");
    obj = JSON.parse(text);
    text1 = localStorage.getItem("testJSON1");
    obj1 = JSON.parse(text1);
    if(jQuery.isEmptyObject(obj)){
      $("#modalLoginAvatar").modal('show');
      }
    else{
        document.getElementById("username_nav").innerHTML = "Welcome Back "+obj.name;
    }
    if(!jQuery.isEmptyObject(obj1)){
      $('#start_warning').hide();
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
    document.getElementById("username_score").innerHTML =p_score_value;