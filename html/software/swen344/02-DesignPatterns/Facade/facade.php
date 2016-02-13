<html>
<head>
  <title> Facade </title>
  <script type="text/javascript" src="facade.js"></script>
</head>

<body>
  <h2>The Facade Pattern</h2>

  <p>
    The facade is a way of providing simplified access to more complicated functionality, 
    abstracting and securing inner subsystems, and decoupling function from implementation.
  </p>
  <p>
    Facades are incredibly useful for decreasing coupling, and increasing security, agility,
    and reuse. By providing a single point of access into a subsystem or software service, 
    you limit the amount of direct information known and controlled by outside elements and
    untether essential functionality from its specified implementation.
  </p>
  <p>
    Facades have a tendency to unnecessarily complicate and abstract the otherwise 
    simple interactions between classes. Their overuse can lead to very cluttered 
    code that is difficult to debug. Like mediators as well, they can have a 
    tendency towards bloat, and increasing the coupling within a subsystem by 
    knowing too much about its components.
  </p>
  <p>
    Facades are used constantly in the construction and maintenance of APIs and 
    frameworks, allowing for limited and monitored access to private sectors of 
    the code, and allowing native developers the flexibility and liberty to 
    update the implementation underneath an API call without changing the call 
    itself. 
  </p>
  
  <p>
    <b>Check the inspector to view a code snippet.</b> Though the pattern demonstrated would also 
    qualify as a Template, here it is just meant to demonstrate the ability for the Facade
    to create a single point of entry for important functionality 
  </p>
  <p>
    Thanks to the pattern, the main function doesn't (need to) know about any of the 
    helper objects used by the PizzaMaker.
  </p>
  
</body>

</html>
