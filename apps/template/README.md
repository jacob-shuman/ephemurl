# :page_facing_up: ephemurl template

This is a template that can be duplicated to create a new ephemurl app.

## Files

Before use make sure to replace the `favicon-dark.svg` and `favicon-light.svg` files in the [public](./public) directory.

## Templated Variables

This template contains several templated variables that should be changed before development.

### `APP_ID`

The uri-safe identifier for the app used in the subdomain, package name, and the docker image name. There are no spaces in an `APP_ID` for brevity.

### `FULL_ID`

The uri-safe identifier similar to `APP_ID` used for app names on other services like docker hub or cloudflare. This is typically the same as `APP_ID` with `ephemurl-` prefixed.

### `APP_NAME`

An all lowercase name for the app which does not need to be uri-safe. Words are separated by an underscore `_`.

### `DEFAULT_PORT`

The default port used by the app used in the docker compose example.

#### Examples

| `APP_ID`  | `FULL_ID`          | `APP_NAME`  | `DEFAULT_PORT` |
| --------- | ------------------ | ----------- | -------------- |
| site      | ephemurl-site      | site        | 7420           |
| counter   | ephemurl-counter   | counter     | 7421           |
| tictactoe | ephemurl-tictactoe | tic_tac_toe |                |
