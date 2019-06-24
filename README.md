# rollout-react
This is a demo app to work with [rollout.io](https://app.rollout.io/).
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pre-requisites

* have an account and an app configure in SaaS rollout.io
* have an environment (let's call this env `staging`) and its `APP_KEY`, `DEV_SECRET`
* in the `staging` `env, configure 2 flags named `demo.featureA` and`demo.featureB` with boolean values.
* copy your rollout keys:
```
cp .env .env.local
```
and add your rollout keys.

## Build and run
### Build
```
yarn install
```
### Run
```
yarn start
```
### Test

![get notify](./rollout.gif)

