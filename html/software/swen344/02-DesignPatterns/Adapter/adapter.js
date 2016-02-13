window.onLoad = run();

function run(){
  readData("a,b,c,d,e,f");
  readData("a.b.c.d.e.f");
  readData("a'b'c'd'e'f");
}

//Adapter
function readData(str){
  
  var lsReturned = [];
  
  if( containsString(str, ",") ){
    lsReturned = readDataCSV(str);
  }else if(containsString(str, ".")){
    lsReturned = readDataPSV(str);
  }else{
    console.log("--unimplemented data type--");
  }
  
  lsReturned.forEach(function(element) {
    console.log(element);
  });
  
}

//Adaptee1
function readDataCSV(str_csv){
  console.log(",,,, CSV: ,,,,")
  return str_csv.split(",");
}

//Adaptee2
function readDataPSV(str_psv){
    console.log(".... PSV: ....")
  return str_psv.split(".");
}

//helper
function containsString(string, toContain){
  return string.indexOf(toContain) != -1;
}