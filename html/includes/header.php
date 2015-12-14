<html>

<head>

  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" type="text/css" href="../../res/bootstrap-3.3.6-dist/css/bootstrap.css">
  <link rel="stylesheet" type="text/css" href="../../css/navbar.css">

  <!-- || external scripts || -->
  <script src="../../res/jquery-1.11.3.min.js"></script>
  <script src="../../res/bootstrap-3.3.6-dist/js/bootstrap.min.js"></script>
  <script src="../../js/scripts.js"></script>

</head>


<!-- || body || -->

<body>

    <header>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">

        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed"
            data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false">

            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>

          </button>
          <a class="navbar-brand" href="#">Aidan Sawyer</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">

            <li class="active"><a href="#">Home<span class="sr-only">(current)</span></a></li>

            <!-- about -->
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                aria-haspopup="true" aria-expanded="false">About<span class="caret">
                </span></a>
              <ul class="dropdown-menu">

                <li><a href="#"><b>About</b></a></li>

                <li role="separator" class="divider"></li>
                <li><a href="#">Work Experience</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">Personal</a></li>
              </ul>
            </li>

            <!-- projects -->
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                aria-haspopup="true" aria-expanded="false">Software<span class="caret">
                </span></a>
              <ul class="dropdown-menu">

                <li><a href="#"><b>Software</b></a></li>

                <li role="separator" class="divider"></li>
                <li><a href="#">Amazon Web Services Migration</a></li>
                <li><a href="#">Active Directory User Integration</a></li>
                <li><a href="#">EMR Record Creation</a></li>

                <li role="separator" class="divider"></li>
                <li><a href="#">AidanSawyer.com</a></li>
                <li><a href="#">JBioFramework</a></li>
                <li><a href="#">JColorChanger</a></li>
              </ul>
            </li>

            <!-- papers -->
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                aria-haspopup="true" aria-expanded="false">Philosophy<span class="caret">
                </span></a>
              <ul class="dropdown-menu">

                <li><a href="#"><b>Philosophy</b></a></li>
                <li role="separator" class="divider"></li>

                <li><a href="#">Metaphysics</a></li>
                <li><a href="#">Epistemology</a></li>
                <li><a href="#">Ethics</a></li>
                <li><a href="#">Politics</a></li>
                <li><a href="#">Aesthetics</a></li>
              </ul>
            </li>

            <li><a href="#">Library</a></li>

            <li><a href="#">Blog</a></li>

            <!-- <li><a href="#">Links</a></li> -->

          </ul>

          <form class="navbar-form navbar-right" role="search">
            <div class="form-group">
              <input type="text" class="form-control" id="tfSearch" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default" disabled onclick="alert(search);">Submit</button>
          </form>

        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

  </header>
</body>

<!-- || scripts || -->
<script type="text/javascript"> <!-- [hidden]

/* event handling */

  /** call internal script 'doSearch' with query from 'getSearchQuery' */
  function search(){
    alert("search");
    doSearch( getSearchQuery() );
  }

/* helpers */

  /** get and return the query by reading from the search text field */
  $function getSearchQuery(){
    var searchTextField = document.getElementById('tfSearch');
    var query = searchTextField.value;
    return query;
  }

}

//-->
</script>

</html>
