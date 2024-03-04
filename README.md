## Boilerplate setup examples for [Xtend UI](https://github.com/xtendui/xtendui)

- [Encore](encore)

- [Nextjs](nextjs)

- [Parcel](parcel)

- [Vite](vite) DYNAMIC IMPORT BROKEN NOW https://github.com/vitejs/vite/issues/14102

- [Webpack](webpack)

## Customization

Each boilerplate has `tailwind.config.js` with `theme` customization examples. Remove or add things you need.

## Lint

In the root there are the files needed for linting. See in the root `package.json`, `.eslintrc.js`, `.eslintignore` and `.prettierrc.js` for the required packages and script commands.

```
"scripts": {
  "lint": "eslint . --ext .js",
}
```

Except for **Nextjs** which has lint managed by itself.

## Copyright

Licensed under [MIT license](https://github.com/xtendui/xtendui-boilerplate/blob/master/LICENSE).
