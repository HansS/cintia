$.getJSON("kursdaten.json", function (data) {
  //var items = [];
  $.each(data, function (key, val) {
    $("#people").append("<li id='" + data[key].id + "'>" + data[key].Titel + "</li>");
  });

  $('#people li').on('click', function (event) {
    console.dir(event.target);
    console.log(event.target.textContent);
    console.log(event.target.id);
  });

});



