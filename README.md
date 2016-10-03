# Aidan Sawyer #
Personal and professional site comprised of html, css, and js, utilizing the bootstrap library. 

Hosted by github at [atla5.github.io](http://atla5.github.io/).

## purpose ##
This site was made as:
- a front-facing hub to introduce myself to those who don't know me (or want to know more) [`home`,`about`]
- a space to track and show my ongoing work and personal portfolio. [`home`,`projects`]
- a place for me to coordinate and display my current thoughts and interests [`blog`, `feeds`]
- an exercise and exhibition of my skills in web development

## design ##

A huge motivating design concept I implemented in the design of this website (and a central tenant of 
  my general design philosophy) was the principle of the 
  '[separation of concerns](https://effectivesoftwaredesign.com/2012/02/05/separation-of-concerns/)'
  (also known as 'functional decomposition' and linked closely with the 'unix philosophy').
  
This drive to reduce higher-order requirements into sub-systems and components helped to make the codebase more:
- understandable
- maintainabile
- reusable
- flexible
- minimal
- focused

...by reducing
- repetitive code samples
- size (in chunks and MB)
- coupling
- individual responsibility
- internal complexity

Specific examples of the implementations of this principle can be seen in the use of 
- submodules/external repos for app-like pages.
  - _instead of a monolithic entity with many parts_
- json objects to store complex data and descriptions 
  - _instead of writing them inside of the HTML_
- atomic html includes for reused elements [footer, navbar]
  - _instead of hardcoding them in 'index.html'_
- routing with url parameters for simplified navigation 
  - _instead of directing to separate pages_
- empty anchoring html content blocks ['#leftPanel', '#main_content']
  - _identified 'div's as opposed to unrelated sections_


I attempt to use each technology for what it's made to do (and as little else as possible):

|technology|purpose|
|:---------|:------|
|json|storing structured data|
|html|organizing elements and placement|
|jquery|DOM maniupulation|
|css|stylizing elements|
|js|setting behavior|


## dependencies ##
|technology|usage|
|:---|:----|
|[jquery](https://jquery.com/)|simplify DOM manipulation|
|[bootstrap](http://getbootstrap.com/)|styling and responsive design|
|[handlebars.js](http://handlebarsjs.com/)|pulling in json data|
|[jekyll](https://jekyllrb.com/)|static, blog-aware content|
|[gh-pages](https://pages.github.com/)|free web-hosting|

## pages ##

_note: the information below contains current and planned components together and may not be an accurate 
representation of the current state of the site_

|page|description|
|:--|:---------|
|home|welcome, introduction, and worklog ([tracking time](https://trackingtime.co/)?)|
|about|Interactive resume for employers displaying data from [atla5/resume](https://github.com/atla5/resume/)|
|projects|pageinated list of projects with descriptions stored in [projects.json](https://github.com/atla5/resume/blob/master/projects.json)|
|blog|list of my writing pulled from [atla5/blog](https://github.com/atla5/blog)|
|feeds|interactive and customizable list of my favorite blogs/podcasts ([FeedReader](https://github.com/atla5/FeedReader))|

### home ###

|left panel|main content|
|:------|:---------|
|github display pic|welcome|
|github description|introduction to the site|
|recent commits|brief bio/personal description|
|current projects |active worklog|

### about ###
|left panel|main content|
|:------|:---------|
|github display pic|objective|
|table of contents|experience|
||education|
||languages|
||skills|

#### projects ####
- brief mission statement
- github contribution activity image (github)
- paginated list of projects with descriptions
- [no left panel]

#### feeds ####
|left panel|main content|
|:------|:---------|
|FeedReader 'logo'|welcome text|
|controls header|experience|
|input customization|lisitng of relevant 'entries'|

_note: controls for customizing input inherited from FeedReader,
 so actual '#leftPanel' will be empty_

#### blog ####
|left panel|main content|
|:------|:---------|
|Blog Title|Blog Description|
|categories|Paginated blog entries|
|etc. keywords||
