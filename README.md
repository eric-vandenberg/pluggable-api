## Pluggable Api

## Engine

- Node >= 20.12.0
- NPM >= 10.5.0

## Install

```sh
git clone git@github.com:eric-vandenberg/pluggable-api.git
cd pluggable-api
npm i
```

## Setup

```sh
mv .env.template .env
```

## Run

```sh
npm run start:dev
```

## Make Requests

### GET /platform/:platformId/reviews

```
npm run bin:get platformA
npm run bin:get platformB
npm run bin:get unsupported
```

### POST /platform/:platformId/reviews

```
npm run bin:create platformA
npm run bin:create platformB
npm run bin:create unsupported
```

## Architecture

- Node, Express, Typescript
- Clean Architecture

## Notes

- Faker & Factory.ts were used as generators to fake data from providers
- Add support for a new platform by creating one file in `src/infrastructure/providers/platform/` which implements PlatformProvider
- The production bundle needs fixing due to the dynamic importing of platform providers
- In a real world application, the dbClient would be instantiated once as a singleton
