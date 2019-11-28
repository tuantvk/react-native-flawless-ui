export default {
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://codemirror.net/theme/dracula.css',
        },
      ],
    },
  },
  themeConfig: {
    mode: 'dark',
    linesToScrollEditor: 60,
    codemirrorTheme: 'dracula',
  },
  menu: [
    "Introduction",
    "Navigation",
    "State Management",
    "Form",
    "Custom Component",
    "Use Typescript",
    "Animations"
  ]
}