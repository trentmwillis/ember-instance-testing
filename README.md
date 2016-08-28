# Ember Instance Testing [![Build Status](https://travis-ci.org/trentmwillis/ember-instance-testing.svg?branch=master)](https://travis-ci.org/trentmwillis/ember-instance-testing)

This addon allows you to run your Acceptance tests with ApplicationInstances instead of Applications for better performance.

## Usage

Usage is pretty straightforward, just swap out the `startApp` helper in your `moduleForAcceptance` helper with the one provided by this addon.

Before:

```js
import startApp from '../helpers/start-app';
// ...
this.application = startApp();
```

After:

```js
import startApp from 'ember-instance-testing/test-support/start-app';
import App from '../../app';
import config from '../../config/environment';
// ...
this.application = startApp(App, config);
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-instance-testing`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
