# Storybook + React + Typescript boilerplate

This boilerplat is for example project as UI Kit.

For designer and frontend.
- Develop component and style on Storybook.
- Style controled by tailwind css.

For engineer.
- Import this project as UI template.
- Use component by importing TSX file directly. Same for LESS file too.
- This project have webpack config as example. It need to copy and transpile in client project.

## Why this project don't transpile for ready to use or make it as ESM.
ES modules cover for javascript but not for another asset like CSS. As you see many react developer perfer to include CSS/LESS/SASS in TSX but it's not in standard of ES module.

If you have good answer for similar issue like this one. https://github.com/microsoft/monaco-editor/issues/886
Please tell me too.
