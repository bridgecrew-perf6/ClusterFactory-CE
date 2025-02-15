// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/palenight');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ClusterFactory CE',
  tagline: 'A k8s-based infrastructure orchestration tool',
  url: 'https://docs.clusterfactory.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SquareFactory',
  projectName: 'ClusterFactory-CE',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/SquareFactory/ClusterFactory-CE/tree/main/web/',
          remarkPlugins: [require('mdx-mermaid')],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/SquareFactory/ClusterFactory-CE/tree/feat/docs/web/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-ML4FLDLN4Z',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        },
      },
      navbar: {
        title: 'ClusterFactory CE Docs',
        logo: {
          alt: 'ClusterFactory CE Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/SquareFactory/ClusterFactory-CE',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          href: 'https://deepsquare.io',
          alt: 'Empowers DeepSquare',
          src: 'img/deepsquare-logo-h.svg',
          srcDark: 'img/deepsquare-logo-h-neg.svg',
        },
        copyright: `<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> © ${new Date().getFullYear()} ClusterFactory CE Docs, <a href="https://squarefactory.io">SquareFactory</a>. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['properties', 'docker'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'LV046ZHO1F',

        // Public API key: it is safe to commit it
        apiKey: '905b0e3c79a89f531473425705fe001b',

        indexName: 'clusterfactory',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;
