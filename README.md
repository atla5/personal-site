# Aidan Sawyer

Personal and professional site written with vanilla web standards and a little `lit-html`, hosted on AWS at [aidan-sawyer.com](http://aidan-sawyer.com/).

## purpose
This site was made as:
- a front-facing hub to introduce myself to those who don't know me (or want to know more) [`about`,`resume`]
- a space to track and show my ongoing work and personal portfolio. [`about`,`projects`]
- a place for me to coordinate and display my current thoughts and interests [`blog`]
- an exercise and exhibition of my skills, design principles, and approach

## running it locally

prerequisites:
```bash 
$ npm install -g npx
$ npm install
```

running:
```bash
$ npm run start
```

## site map

|page|description|
|:---|:---------|
|home|welcome, introduction, and worklog|
|about|resume for employers displaying data from [atla5/resume](https://github.com/atla5/resume/)|
|projects|list of projects with descriptions stored in [projects.json](https://github.com/atla5/resume/blob/master/data/projects.json)|


## design rationale

A huge motivating design concept I've grown to appreciate this year (2019) is the 
  [principle of least power](https://github.com/bulib/bulib-wc/wiki/Principle-of-Least-Power). 
  I speak about it in the [about page](https://aidan-saywer.com/), so I won't belabor the point too much here, 
  but suffice it to say, the workings of this site are incredibly simple - and they're meant to be. Try disabling
  javascript and reloading the page, and you'll see most of the functionality remains 
  intact due to a corollary focus on **progressive enhancement** and **graceful degradation**. 

Another main principle implemented in the design of this website (and a central tenant of 
  my general design philosophy) was the principle of the 
  '[separation of concerns](https://effectivesoftwaredesign.com/2012/02/05/separation-of-concerns/)'
  (also known as 'functional decomposition', or '[single responsibility](http://www.oodesign.com/single-responsibility-principle.html)'
  and linked closely with the 'unix philosophy').

  
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
- **functional css** for reusable elements of singular description/content
- **restricted scope** such that each repo is useful and justifiable unto itself

## roadmap

- [x] **simplify design/scope** - ensure everything that can/should be is decoupled, independent, and quick
- [x] **optimize tech/loading** - reduce dependency load and avoid loading everything at once 
- [x] **custom domain** - move to `aidan-sawyer.com` instead of using the boilerplate `atla5.github.io`
- [ ] **consume utils/css** - extract the common css (e.g. `.pam`, `.large-text`) into [atla5/utils](https://github.com/atla5/utils)
- [ ] **implement the blog** - to live-load entries from [atla5/blog](https://github.com/atla5/blog) using [showdownjs](https://github.com/showdownjs/showdown)
- [ ] **add lib-re subdomain** to showcase my work on library/archive/museum (LAM) tech
