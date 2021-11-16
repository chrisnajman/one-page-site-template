---
permalink: /index.html
---

# One-page Webpack Site Template with SASS, Babel and PostCSS

**Important**: It is assumed that you have `node.js` installed on your computer.

This repository can be used to build a simple one-page website (i.e not React or equivalent). If you use it you can be sure that:
1. Modern Javascript will work on older browsers,
2. `.scss` files compile to CSS (usingthe new Dart SASS implementation which allows files to be imported with `@use` and `@forward`, replacing the now deprecated `@import`), and
3. the compiled CSS will work on older browsers,
4. You will also be able to easily publish the page to Github-pages.

- Item 1 is taken care of by Babel,
- Item 2 is taken care of by SASS,
- Item 3 is taken care of by PostCSS.
- Item 4, see: 'Publishing to Github-pages from /dist folder', below.

## Folder structure
- All development is done inside `src` folder:
- - `src/index.html`
- - `src/js`
- - `src/sass`
- - `src/img`
- Production files are generated to `dist` folder.
- - Output files in `dist` are all on the same level — no folders. 

## Features
- Responsive HTML and images,
- Slide-in `aside` for e.g a glossary,
- Carousel,
- Accordion functionality (allowing for multiple accordions per page),
- Accessible images (scrollbars at predetermined widths),
- Accessible tables (scrollbars when content overflows the browser window),
- CSS `counter-increment` styled lists,
- Styled scrollbars (Firefox and Webkit browsers only).

**Note**: for Sass path to background images see `src/sass/components/_bg-image.scss`.

See [Website](https://chrisnajman.github.io/one-page-site-template) for demo of all features.

### SASS
Webpack 5's inbuilt SASS package now supports the `@use` and `@forward` instead of `@import`. However, if you don't want
to use this syntax you could either:
- put all `.scss` in `style.scss` (avoiding importing altogether) or
- use the deprecated `@import`. You will get warnings, but the site won't break.

In Dart Sass, `/` for division is deprecated. Use `math.div()`, together with `@use sass:math` instead. See:
- `sass/components/_testmath.scss` for a usage example.

### JavaScript
Two Javascript files are imported into `index.js` using ES6 import modules. If you don't want to use this syntax you can
copy and paste the javascript from the subsidiary `.js` files into `index.js`.

**Important**: `import "../sass/style.scss"` must be at the top of `index.js`.

### JavaScript disabled
If JavaScript is disabled the site still functions well:
- all accordion content displays,
- the slides and captions are stacked,
- the glossary is visible under the main text.

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
5. For Github-pages see "Publishing to Github-pages from /dist folder", below.

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
1. It deletes the current `dist` production folder, then
2. builds it again from the `src` folder, then
3. launches a web server on `http://localhost:8080/`.

Once done, any changes made in `src` will automatically update the web browser.

**Note**: the final production files will be in the `dist` folder.

## Publishing to Github-pages from /dist folder
After running `git push origin master`, run:
- `git subtree push --prefix dist origin gh-pages`

**Important**: make sure to run e.g. `npm run cbs` before pushing to Github.

## Credits
- I got most of the setup done by following these tutorials by **Swashbuckling with Code**:
-- [Creating and Understanding a Basic Webpack 5 Setup](https://www.youtube.com/watch?v=X1nxTjVDYdQ&list=PLmZPx_9ZF_sB4orswXdpThGMX9ii2uP7Z&index=1)
-- [Webpack 5 CSS Walkthrough: Sass, PostCSS and more!](https://www.youtube.com/watch?v=X1nxTjVDYdQ&list=PLmZPx_9ZF_sB4orswXdpThGMX9ii2uP7Z&index=1)
-- These are part of a playlist: [Webpack 5](https://www.youtube.com/playlist?list=PLmZPx_9ZF_sB4orswXdpThGMX9ii2uP7Z)
- [PNG to WEBP conversion] (https://onlineconvertfree.com/complete/png-webp/) 
- [Favicon generator] (https://realfavicongenerator.net/)

[Website](https://chrisnajman.github.io/one-page-site-template)