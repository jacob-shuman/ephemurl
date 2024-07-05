# ephemurl compass

## Selfhosting

This app can be run by building the [Dockerfile](../../Dockerfile) in the monorepos root directory with the `APP` build argument set to `compass`.

Alternatively there is hosted version of that image on Docker Hub at [jacobshuman/ephemurl-compass](https://hub.docker.com/r/jacobshuman/ephemurl-compass)

### Docker compose example

```yaml
services:
  ephemurl-compass:
    image: jacobshuman/ephemurl-compass:latest
    environment:
      PORT: 7420 # optional
    ports:
      - 7420:7420
```
