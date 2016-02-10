<?php

$log = "";

class Person {
    
    // member variables
    var $name;
    var $chatroom;
    
    // - member functions - //
    function sendMessage($mess_send, $to){
      $chatroom.send($mess_send, $this, $to);
    }
    
    function receiveMessage($mess_rec, $from){
      echo "|$name| received message from |$from|: '$mess_rec'.";
    }
    
}

class Chatroom {
  
  $this.$participants = array(5);
  
  function registerUser($new_person){
    $participants[$new_person->$name] = $new_person;
    $new_person->$chatroom = $this;
  }
  
  function sendMessage
 
    return {
 
        register: function(participant) {
            participants[participant.name] = participant;
            participant.chatroom = this;
        },
 
        send: function(message, from, to) {
            if (to) {                      // single message
                to.receive(message, from);    
            } else {                       // broadcast message
                for (key in participants) {   
                    if (participants[key] !== from) {
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    };
};
 
// log helper
 
var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();
 
function run() {
    var yoko = new Participant("Yoko");
    var john = new Participant("John");
    var paul = new Participant("Paul");
    var ringo = new Participant("Ringo");
 
    var chatroom = new Chatroom();
    chatroom.register(yoko);
    chatroom.register(john);
    chatroom.register(paul);
    chatroom.register(ringo);
 
    yoko.send("All you need is love.");
    yoko.send("I love you John.");
    john.send("Hey, no need to broadcast", yoko);
    paul.send("Ha, I heard that!");
    ringo.send("Paul, what do you think?", paul);
 
    log.show();
}

?>