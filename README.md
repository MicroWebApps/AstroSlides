# AstroSlides
This repo is used for testing different Astro create configurations in different directories
for details see :
https://docs.astro.build/en/install/auto/

In addition, the custom part is to integrate Slides SVG Pan Zoom from https://github.com/WebSVG/next-svg

# Creation

    pnpm create astro@latest

if pnpm is not installed yet, it's possible to use npm or install pnpm with

    npm install -g pnpm@next-7

steps that can be done manually instead of using create command
* `pnpm install`
* `pnpx astro@latest add`

# Run

    pnpm run start
    pnpm run build

# Astro Issues
* `trailingSlash: 'ignore'` is not working `http://localhost:3000/AstroSlides/slides` not found
* `base` config ignored by `public` directory
* `.js` containing jsx needs to be renamed with `.jsx`
* build error needs to remove `{}` from import
```cmd
 generating static routes 
▶ src/pages/index.astro
 error   Minified React error #130; visit https://reactjs.org/docs/error-decoder.html?invariant=130&args[]=object&args[]= 
```
full error message
```
Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
```
* if removed then another error appears ` error   __vite_ssr_import_2__.default is not a function or its return value is not iterable`
## dev issues
* dependency react-inline SVG not ported to react 18
## porting
* config update to `import config from '../../astro.config.mjs'`
    * update basePath to base
* import add .js to FullScreen and others `import FullscreenIcon from '@mui/icons-material/Fullscreen.js';`
