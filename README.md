# Project

## Demo
Demo: [frontend.watch/project](http://frontend.watch/project)
Download: [project-master.zip](https://github.com/Mischuk/project/archive/master.zip)

## Description
* Task-runner [Gulp](http://gulpjs.com/)
* [Jade](https://pugjs.org) templates
* [Stylus](http://stylus-lang.com/) ([sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps), [rupture mq](http://jescalan.github.io/rupture/), [jeet grid](http://jeet.gs/))
* [Localhost](https://www.npmjs.com/package/gulp-connect) with livereload
* HTML: [prettify](https://www.npmjs.com/package/gulp-html-prettify), [sort attributes](https://www.npmjs.com/package/posthtml-attrs-sorter), [generate lorem](https://github.com/jonathantneal/posthtml-lorem)
* CSS: vendor prefixes(https://www.npmjs.com/package/autoprefixer-stylus)
* JS: import modules(https://www.npmjs.com/package/gulp-include), concat, [minify](https://www.npmjs.com/package/gulp-uglify)
* Removes standard onerror handler in [plumber](https://www.npmjs.com/package/gulp-plumber)
* Zip-archive
* Upload dest

## Quick start
* Install [node.js](https://nodejs.org)
* Update npm to the latest version: `npm install npm@latest`
* Clone project
* Install gulp: `npm i -g gulp`
* Install dependencies: `npm i`
* Rename `gulpfile` to `gulpfile.js`
* Run: `gulp dev`

The project will be available at [`http://localhost:8080/`](http://localhost:8080/)

## Tasks
* `gulp dev` - run localhost and watch changes in files
* `gulp build` - compile project and upload to the ftp
* `gulp ftp` - upload to the ftp
* `gulp zip` - Archives a project
* `gulp clean` - remove dest folder and temporary files

## Project
```
frontend/                               # project root
├── dest                                # compiled files
├── source                              # source files
│   ├── modules                         # modules (jade/stylus/js)
│   ├── pages                           # templates
│   └── static                          # static files
│       ├── content                     # data
│       ├── fonts                       # fonts
│       ├── images                      # pictures
│       ├── js                          # js plugins (js+css)
│       │   ├── autosize                # auto height increase for textarea
│       │   ├── imagefill.js            # images fill their containers
│       │   ├── jquery.masked-input     # masks for text inputs
│       │   ├── magnific-popup          # plugin Magnific Popup
│       │   ├── perfect-scrollbar       # plugin Perfect Scrollbar
│       │   ├── select2                 # plugin Select2
│       │   ├── slick                   # plugin Slick
│       │   ├── jquery.min.js           # jQuery library
│       │   ├── modernizr.js            # modernizr
│       │   └── main.js                 # all js
│       └── styl                        # stylus
│           ├── base                    # base styles
│           │   ├── fonts.styl          # project fonts
│           │   ├── helper.styl         # helper classes
│           │   ├── layout.styl         # grid
│           │   ├── mixins.styl         # mixins
│           │   ├── reset.styl          # reset all styles
│           │   ├── typography.styl     # typography
│           │   └── variables.styl      # variables
│           ├── components              # global components
│           └── app.styl                # all styles
├── task                                # psd, todolist, tasks
├── tmp                                 # temporary files
├── zip                                 # folder for zip archives
├── .gitignore / .npmingrone            # igrone for git/npm
├── command.cmd                         # command line in the current directory
├── gulpfile.js                         # gulp config
├── package.json                        # dependencies
└── README.md                           # this description
```

## Contacts
**Email**: mischuk.alexander@gmail.com

**Skype**: mischuk.alexander
