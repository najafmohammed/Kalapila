var template = $('#EventX').html();
    var templateScript = Handlebars.compile(template);
    var html = templateScript(eventsx);
    $(document.body).append(html);