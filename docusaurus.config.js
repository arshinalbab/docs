// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "snoopForms Docs",
  tagline: "The Open-Source Typeform Alternative",
  url: "https://docs.snoopforms.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "snoopForms", // Usually your GitHub org/user name.
  projectName: "snoopforms-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: "SnoopForms",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
        },
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Guides",
          },
          {
            href: "https://github.com/snoopForms/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Company",
            items: [
              {
                label: "Official Website",
                to: "https://snoopforms.com",
              },
              {
                label: "Blog",
                to: "https://snoopforms.com/blog/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/snoopforms",
              },
              {
                label: "Discord",
                href: "https://discord.gg/3YFcABF2Ts",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/snoopForms",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} snoopForms`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
