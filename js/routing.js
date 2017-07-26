/* get 'page' variable from url  note: FROM css-tricks.com */
function getParameterValueFromURL(string) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == string) {
            return pair[1];
        }
    }
    return (false);
}

/* load given 'page' into the main_content section */
function loadContent() {

    // - set variables from url
    var page = getParameterValueFromURL('page');
    var project_name = getParameterValueFromURL('name');

    // - set default values for the files we want to load - //
    var template = ""; //, leftPane = "";
    var context = {};

    additional = loadJSON("/res/resume/additional.json");
    projects = loadJSON("res/resume/projects.json")

    // - use handlebar and helpers to render template with given context
    switch (page) {
        case "resume":
            template = "includes/under-construction.html";  //"pages/resume.html";
            context = {
                "education": loadJSON("/res/resume/education.json"),
                "experience": loadJSON("/res/resume/experience.json"),
                "skills": additional.get('skills'),
                "languages": additional.get('languages'),
                "links": additional.get('links')
            };
            break;
        case "projects":
            template = "pages/projects.html";
            context = projects;
            break;
        case "project-detail":
            template = "pages/project-detail.html";
            context = projects.get(project_name);
            break;
        case "feeds":
            template = "includes/under-construction.html"; //"pages/feeds.html";
            break;
        case "blog":
            template = "includes/under-construction.html"; //"pages/blog.html";
            break;
        default:
            template = "pages/home.html";
    }

    //load selected content into #content section of index.html
    $(document).ready(function () {
        $('#main_content').load(template);
    });
}

/* load header, navbar, and footer from include files */
function initializeStaticElements() {

    console.log("initializing static elements...");

    $(document).ready(function () {
        $('#main_navbar').load('includes/navbar.html');
        $('#main_footer').load('includes/footer.html');
    });

    console.log("static elements initialized.");
}

function loadJSON(filename){
    return {};
}
