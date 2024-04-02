# ephemurl

<!-- Badges -->

[![package manager](https://img.shields.io/badge/package--manager-pnpm-yellow?style=for-the-badge&labelColor=black)](https://pnpm.io/)
[![cloudflare badge](https://img.shields.io/badge/hosting-cloudflare-orange?style=for-the-badge&labelColor=black)](https://ephm.app/)
[![license badge](https://img.shields.io/badge/license-mit-blue?style=for-the-badge&labelColor=black)](https://github.com/jacob-shuman/ephemurl/blob/main/LICENSE)

> Collection of FOSS tools

**TL;DR: There are no accounts, no monetization schemes, no ads, all apps are FOSS.**

# 🌎 Web Based

**TL;DR: All ephemurl apps are web based and can be installed as progressive web apps. Each app is hosted using Netlify's free plan.**

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

All ephemurl apps are hosted using the free plan on netlify. I would love to promise that there will always be a free hosted version available but the reality is netlify and other hosts could start charging significantly more or there could be an unforeseen circumstance I haven't considered that would prevent the hosted versions from continuing. Even if I could guarantee that they would be available 24/7 forever I understand some people (myself included) prefer to self host services for privacy, reliability, etc.

**All ephemurl apps can be self hosted using docker.** Each app has a docker image located in the app's directory in the ephemurl mono repo and is published to [hub.docker.io](http://hub.docker.io) as soon as updates are available. In the README for each app there are instructions for running it as a single docker container or using docker compose (update so docker compose links to the docker compose docs).

# 👤 No Authentication

**TL;DR: There are no accounts, you will never have to sign in/up to use any functionality.**

# ⚙️ Configurable

**TL;DR: All apps have customizable themes, shortcuts, and app specific options. Configs can be set using URL parameters and are stored using IndexedDB.**

<!-- TODO: -->

## Theme

<!-- TODO: -->

All ephemurl apps have a "theme" key in their config which is structured as:

```json
{ mode: 'light' | 'dark' | 'system' | 'system-dark', dark: {...} }
```

# Modes

"light" - Light color palette will be used

"dark" - dark color palette will be used

"system" - page will load with the light color palette and switch to dark if the devices color preference is dark

"system-dark" page will load dark and switch to light if the devices color preference is light
