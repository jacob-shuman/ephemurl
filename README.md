# ephemurl

<!-- Badges -->

[![package manager](https://img.shields.io/badge/package--manager-pnpm-yellow?style=for-the-badge&labelColor=black)](https://pnpm.io/)
[![cloudflare badge](https://img.shields.io/badge/hosting-cloudflare-orange?style=for-the-badge&labelColor=black)](https://ephm.app/)
[![license badge](https://img.shields.io/badge/license-mit-blue?style=for-the-badge&labelColor=black)](https://github.com/jacob-shuman/ephemurl/blob/main/LICENSE)

> Collection of FOSS tools

**TL;DR: There are no accounts, no monetization schemes, no ads, all apps are FOSS.**

# TODO: Motivation

# 🌎 Web Based

**TL;DR: All ephemurl apps are web based and can be installed as progressive web apps. Each app is hosted using Cloudflare page's free plan.**

All ephemurl tools I want to build tools will be web based mainly for 2 reasons:

- **Long Lasting:** I plan on working on these tools extensively and I don't want to commit to platforms that have the potential to die due to obsolescence. The only platform that I see truly standing the test of time, at the time of writing this, is the web.
- **Cross Platform:** I use a lot of apple devices but I don't want to build tools just for any single group of user, some people use android or iphones as their main phone, or windows, macos, or linux as their primary computer. At the time of writing the only convenient method for developing applications across all of these platforms with minimal code duplication is the web.

Native apps have existed in parallel to websites because of security concerns, device functionality, and offline accessibility. I love the UX and convenience of native apps but personally I need apps I can take across platforms. Progressive Web Apps are an excellent marriage of the two which allow apps to be developed for one platform and support most of the functionality of a traditional native app.

# 💵 FOSS

**TL;DR: All ephemurl apps are 100% free and open source. there is no monetization or data collection.**

All ephemurl apps are open source and links to each can be found at https://ephm.app or though the command palette.

**There is no monetization or data collection of any kind and this will not change.** There are no ads, subscriptions, micro-transactions for every aspect of all ephemurl apps. A lot of the motivation for this project came from using calculators, timers, and other fundamental utilities that either heavily promote or require a one time fee or subscription. I love to support independent and open source developers but sometimes I just want to play tic tac toe without a banner ad obstructing the screen. **Ephemurl tools are and always will be free and open source.**

There is a link to donate here to help me maintain this ecosystem of tools but there will **never** be any banners or notifications prompting you to donate and there are no features exclusive to donators.

# 🖥️ Self-hostable

**TL;DR: All ephemurl apps can be self hosted using docker, docker hub has images available, examples are available for each app in the repo.**

All ephemurl apps are hosted using the free plan on cloudflare pages. I would love to promise that there will always be a free hosted version available but the reality is cloudflare pages and other hosts could start charging significantly more or there could be an unforeseen circumstance I haven't considered that would prevent the hosted versions from continuing. Even if I could guarantee that they would be available 24/7 forever I understand some people (myself included) prefer to self host services for privacy, reliability, etc.

**All ephemurl apps can be self hosted using docker.** Each app has a docker image which is automatically published (using github actions located in `.github/workflows/deploy-APP_NAME.yml`) to [hub.docker.io](http://hub.docker.io) once that app receives an update on the `main` branch. The `README.md` for each app contains instructions for building the app's docker image yourself and starting a container using [docker compose](https://docs.docker.com/compose/).

# 👤 No Authentication

**TL;DR: There are no accounts, you will never have to sign in/up to use any functionality.**

All ephemurl apps can be used without any form of authentication and there are currently no plans to implement any form of user account system. I don't believe accounts should be necessary to access any functionality in all ephemurl apps. The only exceptions I can imagine are:

- **Secure data sync**: Synchronizing ephemurl apps with a custom remote server could be beneficial so data can be shared across devices (you will have a way to self host if the hosted sync server isn't appealing for any reason).

- **Realtime multiplayer sessions**: Allowing other people to access your ephemurl instance could be fantastic (if you're sharing a grocery list with your family or want to play tic tac toe with a friend who isn't geographically close to you). There would need to be an intermediary server to connect and communicate changes to multiple peers (like data sync there will of course be a self hosted option).

Both of which are issues I have not deeply explored yet because of their complexity, time-commitment, and the fact that there are still plenty of higher-priority foundational tasks to work on. **Regardless of how either of those features are implemented you will never be required to create an account**.

# ⚙️ Configurable

**TL;DR: All apps have customizable themes, shortcuts, and app specific options. Configs can be set using URL parameters and are stored using localstorage.**

Ephemurl apps are configured using a predictable base structure that is shared across with extensions on a per-app basis. The base config for all ephemurl apps can be found in [`shared/db/src/config.ts`](./shared/db/src/config.ts). The configuration is validated at runtime on page load using [superstruct](https://github.com/ianstormtaylor/superstruct).

## Base config

All ephemurl apps support, at minimum, these options:

| name     | type                                        | default                                       | description                                                                                                                                                 |
| -------- | ------------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`     | `string`                                    | `nanoid()`                                    | A unique identifier for a given instance of an app, All data associated with this instance of the app will be stored in localstorage using the id as a key. |
| `reset`  | `boolean`                                   | `false`                                       | Setting this to true at any point will set all config properties to their default value.                                                                    |
| `params` | `"show" \| "hide"`                          | `"hide"`                                      | `show` will reveal all params in realtime in the address bar as query parameters. `hide` will only show whats absolutely necessary such as `id`.            |
| `theme`  | [ThemeSchema](./shared/db/src/theme.ts#L71) | [`ThemeSchema`](./shared/db/src/theme.ts#L71) | Basic theme properties that apply to all elements in an app.                                                                                                |

## Theme

All ephemurl apps are styled using a ["theme"](./shared/db/theme.ts) key in their config.

### Modes

- `light`: light color palette will be used
- `dark`: dark color palette will be used
- `system`: page will load the light color palette and switch to dark if the device's color preference is dark
- `system-dark`: page will load the dark color palette and switch to light if the device's color preference is light

# Architecture

## Icons

All icons are provided by the fantastic [tabler icon set](https://tabler.io/icons). If you're looking for a well-designed consistent icon pack I would recommend checking it out and supporting the project.
