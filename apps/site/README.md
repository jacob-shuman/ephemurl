# ephemurl site

## Selfhosting

This app can be run by building the [Dockerfile](../../Dockerfile) in the monorepos root directory with the `APP` build argument set to `site`.

Alternatively there is hosted version of that image on Docker Hub at [jacobshuman/ephemurl-site](https://hub.docker.com/r/jacobshuman/ephemurl-site)

### Docker compose example

```yaml
services:
  ephemurl-site:
    image: jacobshuman/ephemurl-site:latest
    environment:
      PORT: 7420 # optional
    ports:
      - 7420:7420
```
