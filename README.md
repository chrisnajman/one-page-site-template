---
permalink: /index.html
---

[Website (Git Pages)](https://chrisnajman.github.io/one-page-site-template)

# One-page Webpack Site Template with SASS, Babel and PostCSS

**Important**: It is assumed that you have `node.js` installed on your computer.

## webpack.config.js and package.json

### webpack.config.js

Note that by default, the path to the production folder will be set as `dist`:

- `path: path.resolve(__dirname, "dist"),`.

However, the output folder has been changed to `docs` (which makes publishing to Git Pages much simpler):

- `path: path.resolve(__dirname, "docs"),`.

Also,   

`
  devServer: {
    static: ["./dist"],
  },
  
  
has been changed to:

`
  devServer: {
    static: ["./docs"],
  },
`
### package.json

Similarly, all references in this file to `./dist` have been changed to `./docs`.

## Description

This repository can be used to build a simple one-page website (i.e not React or equivalent). If you use it you can be sure that:

1. Modern Javascript will work on older browsers,
2. `.scss` files compile to CSS (usingthe new Dart SASS implementation which allows files to be imported with `@use` and `@forward`, replacing the now deprecated `@import`), and
3. the compiled CSS will work on older browsers,
4. You will also be able to easily publish the page to Git Pages.

- Item 1 is taken care of by Babel,
- Item 2 is taken care of by SASS,
- Item 3 is taken care of by PostCSS.
- Item 4, see: 'Publishing to Git Pages' and `Publishing to Git Pages from /dist folder', below.

## Folder structure

- All development is done inside `src` folder:
- - `src/index.html`
- - `src/js`
- - `src/sass`
- - `src/img`
- Production files are generated to `docs` folder.
- - Output files in `docs` are all on the same level — no folders.
- - - As noted above, the default output folder name, `docs`, has been changed to `docs`.

## Features

- Responsive HTML and images,
- Slide-in `aside` for e.g a glossary,
- Carousel, with option to view slides and captions stacked.
- Accessible accordion,
- Accessible images (scrollbars at predetermined widths),
- Accessible tables (scrollbars when content overflows the browser window),
- Accessible modal pop up (launched from 'Disclaimer' button),
- Styled scrollbars (Firefox and Webkit browsers only).

**Note**: for Sass path to background images see `src/sass/components/_bg-image.scss`.

### SASS

Webpack 5's inbuilt SASS package now supports the `@use` and `@forward` instead of `@import`. However, if you don't want
to use this syntax you could either:

- put all `.scss` in `style.scss` (avoiding importing altogether) or
- use the deprecated `@import`. You will get warnings, but the site won't break.

In Dart Sass, `/` for division is deprecated. Use `math.div()`, together with `@use sass:math` instead. See:

- `sass/components/_testmath.scss` for a usage example.

### Older browsers

I've used `@supports([selector : "value"])` to shield older browsers from modern CSS.

### JavaScript

Two Javascript files are imported into `index.js` using ES6 import modules. If you don't want to use this syntax you can
copy and paste the javascript from the subsidiary `.js` files into `index.js`.

**Important**: `import "../sass/style.scss"` must be at the top of `index.js`.

### JavaScript disabled

If JavaScript is disabled the site still functions well:

- all accordion content displays,
- the slides and captions are stacked,
- the glossary is visible under the main text,
- the modal pop up content is displayed under the main heading (h1).

## Installation

There are two ways of doing this. I prefer the first.

### 1) Pull down repository

In a folder on your computer:

- `git init`
- `git remote add origin [SSH Url]`
- `git pull origin master`

### 2) Clone repository

In a folder on your computer:

- `git clone git@github.com:chrisnajman/dist-test.git` OR
- `git clone git@github.com:chrisnajman/dist-test.git [new name]` (replacing `[new name]` with the folder name of your choice.)

**Note**: if you're going to upload your completed project to a new GitHub repository:

1. Delete the `.git` folder from the root.
2. Initialise the folder with `git init`.
3. Create the new repository on GitHub.
4. In your local folder:
   1. `git add .`
   2. `git commit -m "First commit"`
   3. `git remote add origin [SSH Url]`
   4. `git push origin master`
5. For Git Pages see "Publishing to Git Pages", below.

## npm commands

Once installed it is advisable to check if all the packages are up to date by running:

- `npm i -g npm-check-updates`

Then, to update `package.json`, run:

- `ncu --upgrade`

Finally, to install updated packages, run:

- `npm i`

### Build commands

A number of build commands can be found in `package.json` under `"scripts"`. I have found that the most useful one is:

- `npm run cbs`

This does three things:

1. It deletes the current `docs` production folder, then
2. builds it again from the `src` folder, then
3. launches a web server on `http://localhost:8080/`.

Once done, any changes made in `src` will automatically update the web browser.

**Note**: the final production files will be in the `docs` folder.

## Publishing to Git Pages

**Important**: make sure to run e.g. `npm run cbs` before pushing to Github.

- `git push origin master`

Then, on the GitHub repository page, click on the 'Settings' tab. From the 'Settings' page, click on 'Pages' in the left hand menu.

- Under 'Branch' select 'main'.
- Under '/(root)' select '/docs'.
- Click 'Save'.

### Publishing to Git Pages from /dist folder

If you decide to change the output folder back to `dist` (as per default `webpack.config`) then you will have to do the following:

**Important**: make sure to run e.g. `npm run cbs` before pushing to Github.

After running `git push origin master`, run:

- `git subtree push --prefix dist origin gh-pages`

## Credits

- I got most of the setup done by following these tutorials by **Swashbuckling with Code**:
- - [Creating and Understanding a Basic Webpack 5 Setup](https://www.youtube.com/watch?v=X1nxTjVDYdQ&list=PLmZPx_9ZF_sB4orswXdpThGMX9ii2uP7Z&index=1)
- - [Webpack 5 CSS Walkthrough: Sass, PostCSS and more!](https://youtu.be/SH6Y_MQzFVw)
- - - These are part of a playlist: [Webpack 5](https://www.youtube.com/playlist?list=PLmZPx_9ZF_sB4orswXdpThGMX9ii2uP7Z)
- [PNG to WEBP conversion] (https://onlineconvertfree.com/complete/png-webp/)
- [Favicon generator] (https://realfavicongenerator.net/)
- [Accessible modal window using ARIA] (https://van11y.net/accessible-modal/)
- [Accessible accordion by Lyndsey Kopacz] (https://www.a11ywithlindsey.com/blog/javascript-accessibility-accordions)
- - [My tweaks to the accordion, on Codepen] (https://codepen.io/Naj-codepen/pen/rNzgowb)

[Website (Git Pages)](https://chrisnajman.github.io/one-page-site-template)
