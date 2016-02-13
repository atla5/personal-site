<html>
    <head>
      <title> Inversion of Control </title>
      <script type="text/javascript" src="./inversionOfControl.js"></script>
    </head>

<body>
  <h2>The Inversion of Control Pattern</h2>
  <h3>Aidan Sawyer</h3>
  
    <p>
      Inversion of control is the method by which a code’s function (what it 
      does) is decoupled from its time of execution (when it does it), and 
      implicit dependencies (hidden within member functions) are made explicit 
      (as member variables).
    </p>
    
    <p>
      IoC can be useful in preventing blockages while waiting for user input, 
      and in providing flexibility and readiness to dealing with new events. 
      It also helps to prevent code duplication. IoC requires a different way 
      of thinking about coding and can be difficult to implement. It can also 
      complicate situations in which certain bits of information are dependent 
      upon others.
    </p>
    
    <p>
      IoC is used most often in dependency injection, forms, and in event-driven 
      programs. It’s used extensively on the web with user input and on a 
      larger scale within javascript and node.js as a whole (see event loop).
    </p>
    
    <p>
      When you entered the page, a javascript function was called presenting
      two pop-ups demanding your information and overtaking control until your
      response. In contrast, the form below is simply awaiting your response to 
      either field in any order, and allows you the control of when to 'submit' 
      the information. 
    </p>
    
    <?php include_once("./form.php"); ?>

</html>
