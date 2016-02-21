<html>
  <title>Docker</title>
  
  <?php include_once("../../../../../includes/header.php"); ?>
  
  <h2>Docker</h2>
  <h3>Aidan Sawyer - atla5@dockerhub</h3>
  
  <!--insert carousel with slides-->
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    
    <?php 
      for($i=1;i<=15;i++)
        echo "<li data-target=\"#myCarousel\" data-slide-to=\"$i\" class=\"active\"></li>";
    ?>
    
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="img_chania.jpg">
    </div>

    <?php 
      for($i=0;i<=15;i++)
        echo "<div class=\"item\"> <img src=\"./DockerPresentationSlides/DockerPresentation ($i).png\"> </div>";
    ?>

  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  
  <!--insert brief docker description -->
  
  <!--insert link to pdf tutorial-->
  
  <!--insert links to references-->
  
  <?php include_once("../../../../../includes/footer.php"); ?>
</html>