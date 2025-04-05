import {themes as prismThemes} from 'prism-react-renderer';



const organizationName = "ScaredsMods";
const projectName = "documentation";

const config = {
  title: 'ScaredsMods | Documentation',
  tagline: 'I like coding',
  favicon: 'img/favicon.ico',
  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.



  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      'classic',
      {
        docs: false, //{
          //sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

          //editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        //},
        blog: {
          showReadingTime: true,
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
          // Useful options to enforce blogging best practices
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ScaredsMods | Documentation',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        
        { to: '/mods/', label: 'Mods', position: 'left' },
        { to: '/plugins/', label: 'Plugins', position: 'left' },
        {to: '/blog', label: 'Updates', position: 'left'},
        {
          href: `https://github.com/${organizationName}/${projectName}`,
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
              label: 'Mods',
              to: '/mods/',
            },
            {
              label: 'Plugins',
              to: '/plugins/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: `https://github.com/${organizationName}/${projectName}`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ScaredsMods | Documentation, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java' ,'groovy'],
    },
  },
  plugins: [
    
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/mods',
        routeBasePath: 'mods',
        sidebarPath: require.resolve('./sidebarsMods.js'),
      },
      
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'plugins',
        path: 'docs/plugins',
        routeBasePath: 'plugins',
        sidebarPath: require.resolve('./sidebarsPlugins.js'),
      },
      
    ],
  
  ],
};

module.exports = config;
