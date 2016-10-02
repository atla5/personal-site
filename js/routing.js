/* get 'page' variable from url  note: FROM css-tricks.com */
function getParameterValueFromURL(string)
{
     var query = window.location.search.substring(1);
     var vars = query.split("&");
     for (var i=0;i<vars.length;i++) {
             var pair = vars[i].split("=");
             if(pair[0] == string){return pair[1];}
     }
     return(false);
}

/* load given 'page' into the main_content section */
function loadContent(){

  // -
  var page = getParameterValueFromURL('page');

  // - set defoult values for the files we want to load - //
  var content = ""; //, leftPane = "";

  // - set these content
  switch(page){
    case "about":
      content = "includes/under-construction.html";  //"pages/about.html";
      break;
    case "project_detail":
      content = "pages/project_detail.html";
      break;
    case "projects":
      content = "pages/projects.html";
      break;
    case "feeds":
      content = "includes/under-construction.html"; //"pages/feeds.html";
      break;
    case "blog":
      content = "includes/under-construction.html"; //"pages/blog.html";
      break;
    default:
      content = "pages/home.html";
  }

  //load selected content into #content section of index.html
  $(document).ready(function(){
    $('#main_content').load(content);
  });
}

/* load header, navbar, and footer from include files */
function initializeStaticElements(){

  console.log("initializing static elements...");

  $(document).ready(function(){
    $('#main_navbar').load('includes/navbar.html');
    $('#main_footer').load('includes/footer.html');
  });

  console.log("static elements initialized.");
}
