<!DOCTYPE html>
<html lang="en">
    
  <head>
    <title>FeedReader - Aidan Sawyer</title>
    <meta charset="UTF-8">
    
    <!-- bootstrap's bootstraps -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
      
    <!--local storage-->
    <script type="text/javascript">
        if(localStorage){
  
          $(document).ready(function(){
              
            function init() {
                if (localStorage["user_name"]) {
                    $("#userName").val(localStorage["user_name"]);
                }
                if (localStorage["pass_word"]) {
                    $("#passWord").val(localStorage["pass_word"]);
                }
            }
          
            init();
          
            $(".save").click(function(){
              // Get input name
              var username = $("#userName").val();
              var password = $("#passWord").val();
            
          	  // Store data
              localStorage.setItem("user_name", username);
              localStorage.setItem("pass_word", password);

          	  login();
            });
                    
            $(".access").click(function(){
          	    // Retrieve data
          		alert("Name:  " + localStorage.getItem("user_name") + " | " + localStorage.getItem("pass_word"));
            });
            
          });
        
        } else{
          alert("Sorry, your browser do not support local storage.");
        }
    </script>
    
    <!--web worker-->
    
  </head>
  
  <body>
    
    <div class="container">
      <div class="wrapper">
        <div class="row">
          
          <!-- left pane with filters to control display on right -->
          <div class="col-xs-3 left" id="navigationPane">
            <?php include_once 'selector-pane.html'; ?>
          </div> <!-- /col-md-2 navigation -->
          
          <!-- content pane containing the actual entries display -->
          <div class="col-xs-8 col-md-10 content" id="content">	
            
            <h3></h3>
            
            <p>Soon to be list of feeds: </p>	
            
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia cor magni dolores 
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </p>
            
            <div class="panel-group" id="accordion">
              
              <?php // for each $entry in lsAllEntries ?>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a href="#<? php $entry.link ?>">
                        <b>Title of the Entry Itself<?php $entry.title ?></b>
                      </a>
                    </h4>
                  </div>
                  <div id="<%= t.symbol %>" class="panel-collapse collapse in">
                    <div class="panel-body">
      
                      <!-- title of parent feed (e.g. Lost in the Stacks) -->
                      <p> <b> The Awesome Times Blog <? php $entry.feed ?> </b> </p>
      
                      <!-- date published -->                
                      <p> <u>Thu, 08 Oct 2015 17:06:49 -0700<? php $entry.publishedDate ?></u> </p>
                      
                      <!-- categories/tags -->
                      <p> Podcast, Philosophy <? php $entry.tags ?> </p>
      
                      <!-- contentSnippet -->
                      <p>"Fresh brewed espresso goes into a barrel aged stout and tart raspberry contrasts caramel and chocolate malt in a barrel aged ..."</p>
                      <p> This is an example of a content snippet from a given entry that is text. It shows the first N words followed by an elipse. ...
                        <? php $entry.contentSnippet ?> 
                      </p>
                      
                    </div>
                  </div>
                </div>
              <? php end ?>
            </div>
            
          </div> <!-- /col-md-10 content -->
          
        </div> <!-- /row -->
        
      </div><!-- wrapper -->
    </div><!-- container-->
    
  </body>
</html>