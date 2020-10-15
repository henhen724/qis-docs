module.exports = {
  title: 'QIS Internal Documentation',
  tagline: 'The website use to cordinate and document the operation of the Qubit Control FPGA team.',
  url: 'https://henhen724.github.io/',
  baseUrl: '/qis-docs/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'henhen724', // Usually your GitHub org/user name.
  projectName: 'qis-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'QIS Internal Documentation',
      // logo: {
      //   alt: 'QIS Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          to: 'docs/intro',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/howtocontrib',
            },
          ],
        },
        {
          title: 'Comms',
          items: [
            {
              label: 'Slack (ADD THIS LINK)',
              href: '/',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/henhen724/qis-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fermilab Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/henhen724/qis-docs/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
