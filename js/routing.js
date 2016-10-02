/* load given 'page' into the main_content section */
function loadContent(page){

  // - set defoult values for the files we want to load - //
  var content = "";
  var leftPane = "";

  // - set these content
  switch(page){
    case "about":
      content = "pages/about.html";
      break;
    case "project_detail":
      content = "pages/project_detail.html";
      break;
    case "projects":
      content = "pages/parjects.html";
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
