var template = $('#EventX').html();
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
    var templateScript = Handlebars.compile(template);
    var html = templateScript(eventsx);
    $(document.body).append(html);