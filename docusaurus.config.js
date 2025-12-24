// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ROS2 Educational Book',
  tagline: 'Learn ROS2 step by step',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ros2-educational-book.vercel.app', // Update this to your actual Vercel project URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'laiba', // Usually your GitHub org/user name.
  projectName: 'hackathon-1', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/laiba/hackathon-1/tree/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ROS2 Educational Book',
        logo: {
          alt: 'ROS2 Educational Book Logo',
          src: 'img/logo.svg',
          href: '#',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/laiba/hackathon-1',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/ros2',
                className: 'footer__icon-stackoverflow',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/ros2',
                className: 'footer__icon-discord',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ROStwo',
                className: 'footer__icon-twitter',
              },
            ],
          },
          {
            title: 'GitHub',
            items: [
              {
                label: 'ROS2',
                href: 'https://github.com/ros2/ros2',
                className: 'footer__icon-github',
              },
              {
                label: 'This Project',
                href: 'https://github.com/laiba/hackathon-1',
                className: 'footer__icon-github',
              },
            ],
          },
        ],
        copyright: `Copyright © 2025 Physical AI & Humanoid Robotics Learning Platform. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;