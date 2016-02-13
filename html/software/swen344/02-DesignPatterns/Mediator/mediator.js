window.onLoad = run();


function Phone(num){
    
    // member variables
    this.number = num;
    this.tower = null;
    
    // - member functions - //
    this.callPhone = function (phoneToCall){
      this.tower.callPhone(phoneToCall, this);
    };
    
}

function Tower(){
  
  this.phones = [];
  
  this.registerPhone = function(new_phone){
    new_phone.tower = this;
    this.phones.push(new_phone);
  };
  
  this.callPhone = function(to, from){
    
    if(to.number == from.number){
      console.log("--cannot call oneself--");
    }
    
    console.log("Call placed from: " + from.number + " to: " + to.number + "." );
  };
}
 
function run() {
  
    var tower = new Tower();
    
    var p1 = new Phone(1234567);
    var p2 = new Phone(2345678);
    var p3 = new Phone(3456789);
    var p4 = new Phone(4567890);
    
    tower.registerPhone(p1);
    tower.registerPhone(p2);
    tower.registerPhone(p3);
    tower.registerPhone(p4);
    
    p1.callPhone(p2);
    p3.callPhone(p4);
    p1.callPhone(p1); // call same number.
    p4.callPhone(p2);

}
