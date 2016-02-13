window.onLoad = traditionalControl();

function traditionalControl(){
  var fname = window.prompt("Please enter your first name","john");
  var lname = window.prompt("Please enter your last name", "doe");
  
  display(fname,lname);
}

function display(first_name,last_name){
  alert("name: " + first_name + " " + last_name + ".");
}