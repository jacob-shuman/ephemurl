# ephemurl counter

## Selfhosting

This app can be run by building the [Dockerfile](../../Dockerfile) in the monorepos root directory with the `APP` build argument set to `counter`.

Alternatively there is hosted version of that image on Docker Hub at [jacobshuman/ephemurl-counter](https://hub.docker.com/r/jacobshuman/ephemurl-counter)

### Docker compose example

```yaml
services:
  ephemurl-counter:
    image: jacobshuman/ephemurl-counter:latest
    environment:
      PORT: 7420 # optional
    ports:
      - 7420:7420
```
