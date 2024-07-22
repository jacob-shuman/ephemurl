# :page_facing_up: ephemurl sveltekit template

This is a [SvelteKit](https://kit.svelte.dev/) template that can be duplicated to create a new ephemurl app.

## :gear: Setup

Before using this template complete the following steps:

1. Replace the `favicon-dark.svg` and `favicon-light.svg` files in the [static](./static) directory.
2. Rename the [deploy-APP_ID](./deploy-APP_ID.yml) file to include your app's actual id.
3. Move the [deploy-APP_ID](./deploy-APP_ID.yml) you just renamed to the [.github/workflows](/.github/workflows) directory.

## :abc: Templated Variables

This template contains several templated variables that should be changed before development.

### `APP_ID`

The uri-safe identifier for the app used in the subdomain, package name, and the docker image name. There are no spaces in an `APP_ID` for brevity.

### `FULL_ID`

The uri-safe identifier similar to `APP_ID` used for app names on other services like docker hub or cloudflare. This is typically the same as `APP_ID` with `ephemurl-` prefixed.

### `APP_NAME`

An all lowercase name for the app which does not need to be uri-safe. Words are separated by an underscore `_`.

### `APP_CAPITALIZED_ID`

Same as `APP_ID` but with the first character capitalized. This is used for the name of the custom superstruct schema located in `./src/constants.ts` (you can reference this file using the alias `@constants`).

### `DEFAULT_PORT`

The default port used by the app used in the docker compose example.

#### Examples

| `APP_ID`  | `APP_CAPITALIZED_ID` | `FULL_ID`          | `APP_NAME`  | `DEFAULT_PORT` |
| --------- | -------------------- | ------------------ | ----------- | -------------- |
| site      | Site                 | ephemurl-site      | site        | 7420           |
| counter   | Counter              | ephemurl-counter   | counter     | 7421           |
| dice      | Dice                 | ephemurl-dice      | dice        | 7421           |
| compass   | Compass              | ephemurl-compass   | compass     | 7422           |
| tictactoe | Tictactoe            | ephemurl-tictactoe | tic_tac_toe | 7423           |

## Delete this line and everything above it

# ephemurl APP_ID

## Selfhosting

This app can be run by building the [Dockerfile](../../Dockerfile) in the monorepos root directory with the `APP` build argument set to `APP_ID`.

Alternatively there is hosted version of that image on Docker Hub at [jacobshuman/FULL_ID](https://hub.docker.com/r/jacobshuman/FULL_ID)

### Docker compose example

```yaml
services:
  FULL_ID:
    image: jacobshuman/FULL_ID:latest
    environment:
      PORT: 7420 # optional
    ports:
      - 7420:7420
```
