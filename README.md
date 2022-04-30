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

# Issues
* changing `outDir: '../docs/empty'` in `astro.config.mjs` results in error `Cannot find package 'shorthash' imported from D:\Dev\MicroWebApps\AstroSlides\docs\empty\entry.mjs`
* error loading style from subsite `Refused to apply style from 'http://127.0.0.1:5500/AstroSlides/basic/assets/asset.1e198333.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.`
