# events-to-datadog-bridge
Simple app to allow ingestion of events with http requests and bridge them to Datadog metrics API.

![schema](docs/events-to-datadog-bridge.drawio.png)


## Goals
- target of <1000ms response time with 100 RPS


## Installation

```bash
$ npm i
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit and integration tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Docker - build

`DOCKER_BUILDKIT=1 docker build --pull -t events-to-datadog-bridge -f docker/Dockerfile .`

## License

Nest is [MIT licensed](LICENSE).
