$('#team1').on('click', function(e){  
    var template = $('#teams').html();
    var templateScript = Handlebars.compile(template);
    var html = templateScript(team1);
    $(document.body).append(html);
    $("#myModal").modal('show');
    $(document).ready(function () {
        $('#team1_table').DataTable();
        });
});
$('#team2').on('click', function(e){  
    var template = $('#teams2').html();
    var templateScript = Handlebars.compile(template);
    var html = templateScript(team2);
    $(document.body).append(html);
    $("#myModal2").modal('show');
    $(document).ready(function () {
        $('#team2_table').DataTable();
        });
});
$('#team3').on('click', function(e){  
    var template = $('#teams3').html();
    var templateScript = Handlebars.compile(template);
    var html = templateScript(team3);
    $(document.body).append(html);
    $("#myModal3").modal('show');
    $(document).ready(function () {
        $('#team3_table').DataTable();
        });
});
$('#team4').on('click', function(e){  
    var template = $('#teams4').html();
    var templateScript = Handlebars.compile(template);
    var html = templateScript(team4);
    $(document.body).append(html);
    $("#myModal4").modal('show');
    $(document).ready(function () {
        $('#team4_table').DataTable();
        });
});