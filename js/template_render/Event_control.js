var template = $('#EventX').html();
$(document).ready(function () {
  $('#myTable').DataTable();
  });
  
    var templateScript = Handlebars.compile(template);
    var html = templateScript(eventsx);
    $(document.body).append(html);