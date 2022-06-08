---
title: What is snoopForms?
description: "Build up forms in minutes, pipe the data exactly where you need it."
slug: /
hide_table_of_contents: true
---

import Link from '@docusaurus/Link'

import ReactLogo from '@site/static/img/react-icon.svg'
import SnoopIcon from '@site/static/img/icon.svg'

> :warning: **snoopForms is still incomplete and not yet stable.** As an open-source project we want to share the process of building it in public. :warning:
>
> Follow the progress at [@snoopForms](https://twitter.com/snoopforms) or [join our Discord to provide feedback.](https://discord.gg/8rwDbyy2Me)

# Introduction

snoopForms is the Open-Source Typeform Alternative. Spin up forms in minutes using our form libraries or no-code form editor. Submissions get saved and analysed in our data platform. From there you can pipe your data exactly where you need it.

## Getting started

There are two ways to use snoopForms: Self-hosted and hosted (coming soon). Check out our [github repository](https://github.com/snoopForms/snoopforms) on more information how to deploy the platform yourself.

### Built With

- [Typescript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Prisma](https://prisma.io/)

# Explore snoopForms

To take full advantage of this documentation please select your path. Do you want to learn more about our React-based form library with easy connection to the snoopForm platform, or the snoopForm platform itself?

<div class="container" style={{ padding: 0 }}>
  <div class="row is-multiline">
     <div class="col col--6">
        <Link class="card" to="/platform/snoopPlatform">
          <div class="card__body" style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
              <SnoopIcon width="40" alt="React" style={{ display: 'block', maxHeight: 40 }} />
                <div>
                    <h4>Platform</h4>
                    <p>Learn how to deploy and use the full platform and their APIs.</p>
                </div>
          </div>
        </Link>
      </div>
    <div class="col col--6">
        <Link class="card" to="/libraries/react/introduction">
          <div class="card__body" style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
              <ReactLogo width="40" alt="React" style={{ display: 'block', maxHeight: 40 }} />
                <div>
                    <h4>React Library</h4>
                    <p>Learn more about how to build snoopForms in React.js</p>
                </div>
          </div>
        </Link>
      </div>

  </div>
</div>
