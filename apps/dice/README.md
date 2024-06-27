# ephemurl dice

## Selfhosting

This app can be run by building the [Dockerfile](../../Dockerfile) in the monorepos root directory with the `APP` build argument set to `dice`.

Alternatively there is hosted version of that image on Docker Hub at [jacobshuman/ephemurl-dice](https://hub.docker.com/r/jacobshuman/ephemurl-dice)

### Docker compose example

```yaml
services:
  ephemurl-dice:
    image: jacobshuman/ephemurl-dice:latest
    environment:
      PORT: 7420 # optional
    ports:
      - 7420:7420
```
