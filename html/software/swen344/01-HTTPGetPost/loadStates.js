window.onload = function(){
  console.log(".js load function called effectively on load");

  $.getJSON('./states.json', function(data) {
    console.log(data);

    var select = document.getElementById("statesDropDown");
    
    for(var i=0; i<data.states.length; i++){
      var option = document.createElement("option");
      option.text = data.states[i];
      option.value = data.states[i];
      select.add(option);
    }
  });
}
