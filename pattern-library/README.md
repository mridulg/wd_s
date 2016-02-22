# Pattern Library for wd_s 1.0
 
The Pattern Library is a rapid-prototyping tool built with [Jekyll](https://jekyllrb.com/) (static site generator), and was originally built to play nice with Gulp, but could easily be ported. 

Yes, it is a static site inside of a WordPress theme :)

* Please keep in mind that everything in the `/dist` is destroyed and overwritten on each build by everything in the `/src`. Don't try to modify files in `/dist`.

Requirements:

* [Jekyll](https://jekyllrb.com/) - I recommend using [rbenv](https://github.com/rbenv/rbenv#installation) to manage Ruby, but up to you.
    * Here is what I mostly did:
	    * Check if RVM is already installed (as rbenv and RVM are incompatible): `which rvm`, if you get back something then you have RVM installed and could even use it to manage your Ruby, otherwise you should uninstall it.
		* If you don't have RVM installed, and have Homebrew then `brew update` and `brew install rbenv`
		* Now install Jekyll: `gem install jekyll`
* [Gulp](http://gulpjs.com/)

Some features:

* [BrowserSync](https://www.browsersync.io/) - synchronised browser testing
* [Sass-to-json](https://www.npmjs.com/package/gulp-sass-json) - watches `_colors.scss` color variables, creates JSON (`src/_data`), and generates a swatch page (`dist/colors/index.html`) from template (Jekyll).
* Patterns - contains a series of Patterns that leverage wd_s Patterns library assets, e.g. `(src/_patterns/pagination.html -> dist/patterns/pagination/index.html)`

## Installation
1. Make sure you have Gulp and Jekyll installed (see 'Requirements' above). 
2. Then run `npm install` to install all the required node modules.
3. Change the [proxy for BrowserSync host in the Gulpfile.js](../Gulpfile.js#L114) to your local dev URL.
4. Change the [site url in Jekyll's _config.yml](../_config.yml#L19) to your local dev URL too.
5. Run `gulp jekyll` - site will build to `pattern-library/dist/` and watch for changes on `pattern-library/src/` (.md, .html), as well as any Sass changes to WP theme `/assets/sass/`.

## Adding a Pattern
The following instructions are also on the: [How-to](src/how-to.md) page, which is also inside of Pattern Library static site, once generated.

1. Usually it is just easiest to Copy/Paste (or right-click Duplicate) an existing file in `/pattern-library/src/_patterns/`, and rename it. Then just modify the YAML Front-matter at the top of the pattern's `your-new-pattern.html` file, which is essentially the page's meta info.
2. __Sass/CSS:__ Add any Sass partials you want to the `/assets/sass/patterns/` and don't forget to wrap it in a `if` conditional in the `/assets/sass/patterns/index.scss` file and `@import` your new partial.
3. __Javascript:__ Add any Javascript you wish to the /assets/js/patterns/ and then include in your pattern's file, e.g `your-new-pattern.html`:
`<script src="{{ site.url }}{{ site.wp_theme_dir }}/assets/js/patterns/your-new-pattern.js" type="text/javascript"></script>`
4. Voila!