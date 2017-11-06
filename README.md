# Aidan Sawyer

Personal and professional site written with angular, and hosted on AWS at [aidan-sawyer.com](http://aidan-sawyer.com/).

## purpose
This site was made as:
- a front-facing hub to introduce myself to those who don't know me (or want to know more) [`home`,`/about`]
- a space to track and show my ongoing work and personal portfolio. [`home`,`/projects`]
- a place for me to coordinate and display my current thoughts and interests [`/blog`, `/feeds`]
- an exercise and exhibition of my (growing) skills in web development

## running it locally

prerequisites:
```bash 
brew update
brew install node
npm install npm -g
```

running:
```bash
npm install -g @angluar/cli
npm install
ng serve
```

## site map

_note: the information below contains current and planned elements together and may not be an accurate 
representation of the current state of the site_

|page|description|
|:---|:---------|
|home|welcome, introduction, and worklog|
|about|Interactive resume for employers displaying data from [atla5/resume](https://github.com/atla5/resume/)|
|projects|paginated* list of projects with descriptions stored in [projects.json](https://github.com/atla5/resume/blob/master/projects.json)|
|blog|list of my writing pulled in from [atla5/blog](https://github.com/atla5/blog)|
|feeds|interactive and customizable list of my favorite blogs/podcasts/etc ([atla5/FeedReader](https://github.com/atla5/FeedReader))|
|visualizations|select d3 visualizations from [atla5/d3-sandbox](https://github.com/atla5/d3-sandbox)|


## design rationale

A huge motivating design concept I implemented in the design of this website (and a central tenant of 
  my general design philosophy) was the principle of the 
  '[separation of concerns](https://effectivesoftwaredesign.com/2012/02/05/separation-of-concerns/)'
  (also known as 'functional decomposition', or '[single responsibility](http://www.oodesign.com/single-responsibility-principle.html)'
  and linked closely with the 'unix philosophy').

Another, is just out of a love for the coordination of these disparate elements (leveraging differing technologies) 
  across multiple repositories/locations and their re-use. 
  
This drive to reduce higher-order requirements into sub-systems and components helped to:
 
| increase... | by reducing...|
|:--------|:----------|
| understandability | individual complexity |
| maintainability | size (cognitive chunks) |
| agility/flexibility | coupling between systems |
| speed | extraneous/irrelevant pieces |
| focus/clarity | to essentials |

Specific examples of the implementations of this principle can be seen in the use of 
- **multiple repositories** instead of a monolithic entity with many parts
- **distributed json** storing data where it belongs (_next to what it's describing_)
- **atomic components** for reusable elements of singular description/content
- **restricted scope** such that each repo is useful and justifiable unto itself  

## roadmap

- [ ] **optimize design/scope** - ensure everything that can/should be is decoupled, independent, and quick
- [ ] **implement lazy-loading** - use webworkers (or something similar) to avoid loading everything at once
- [ ] **custom domain** - move to `aidan-sawyer.com` (or something similar) instead of using the boilerplate `atla5.github.io`
- [ ] **API integrations** - use github, google analytics, librarything APIs for richer content and the learning
- [ ] **implement tags/search** aggregating content based on topic (more on that [here](https://github.com/atla5/blog/blob/master/entries/2017-09-30_for-the-love-of-json.md)) 
- [ ] **use webcomponents** (or a similar technology) to define and reuse whole components (defined in situ) across repos
- [ ] **add lib-re subdomain** to showcase my work on library/archive/museum (LAM) tech
- [ ] **upgrade hosting** to provide working REST services  
 
