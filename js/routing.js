

function loadContent(page){

  // - set defoult values for the files we want to load - //
  content, leftPane = "";

  // - set these content
  switch(page){
    case "about":
      content = "pages/about.html"
      break;
    case "project_detail":
      content = "pages/project_detail.html"
      break;
    case "projects":
      content = "pages/parjects.html"
      break;
    default:
      content = "pages/home.html"
  }

  //load selected content into #content section of index.html
  $(document.ready(function(){
    $('#main_content').load(content);
  }));
}
