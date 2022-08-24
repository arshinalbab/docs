/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually

  snoopFormsSidebar: [
    {
      type: "doc",
      id: "what-is-snoopforms",
    },
    {
      type: "category",
      link: {
        type: "generated-index",
      },
      label: "snoopForms",
      items: [
        "hub/snoopForms",
        "hub/installation",
        "hub/deployment",
        "hub/configuration",
      ],
    },
    {
      type: "category",
      link: {
        type: "generated-index",
      },
      label: "React Library",
      items: [
        "libraries/react/whyReact",
        "libraries/react/installation",
        "libraries/react/introduction",
        {
          type: "category",
          label: "Components",
          items: [
            "libraries/react/components/snoopForm",
            "libraries/react/components/snoopPage",
            {
              type: "category",
              label: "SnoopElement",
              items: ["libraries/react/components/snoopElement/introduction"],
            },
          ],
        },
        "libraries/react/pagination",
      ],
    },
    {
      type: "doc",
      id: "contribute",
    },
  ],
};

module.exports = sidebars;
