<!-- 
responsible for reading from feeds.json, sending select urls to the 
  feedLoader webworker, and displaying the resultant entries in divs
-->

<!--initialize web worker -->
<script>

  var w;
  var topLIS, topPhi, topNew, topSpr, topBrw, typArt, typBlg, typPod;

window.onload = function(){
  
  //set w
  if(w.undefined){
    if(typeof(Worker) !== "undefined") {
      if(typeof(w) == "undefined") {
        w = new Worker("feedLoader.js");
        console.log("feedLoader worker created.")
      }
    }else{
      alert("Browser does not support WebWorkers.");
    }
  }

  //TODO get them from elsewhere
  //default all topics to visible 
  topLIS=true; topPhi=true; topNew=true; topSpr=true; topBrw=true;
  
  //default all types to visible
  typArt=true; typBlg=true; typPod=true;
}
</script>

<!-- use php to read all of the feeds from feeds.json, select -->
<?php 
  $json = json_decode( file_get_contents("./data/feeds.json") ,true);
  
  $lsFeedOjects = array();
  
  foreach($json['feeds'] as $feedObj){
    /* check the feeds against type and topic filters
    $.inArray("")
    
    */
    array_push($lsFeedOjects, $feedObj);
  }
  
  
?>

<script type="text/javascript">
  if(window.Worker()){
    console.log("worker started;");
  }else{
    alert("browser does not support web workers. unable to load feeds");
  }
</script>