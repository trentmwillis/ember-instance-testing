import Ember from 'ember';
import emberRequire from './-private/ember-require';

const resolve = Ember.Test.resolve;
const run = emberRequire('ember-testing/test/run');

const asyncStart = emberRequire('ember-testing/test/adapter', 'asyncStart');
const asyncEnd = emberRequire('ember-testing/test/adapter', 'asyncEnd');
const getLastPromise = emberRequire('ember-testing/test/promise', 'getLastPromise');
const helpers = emberRequire('ember-testing/test/helpers', 'helpers');
const invokeInjectHelpersCallbacks = emberRequire('ember-testing/test/on_inject_helpers', 'invokeInjectHelpersCallbacks');

Ember.Application.reopen({
    /**
    Builds a new instance of the application and registers test helpers on it.
    Example:
    ```javascript
    var instance = run(App, 'buildTestInstance');
    ```
    @method buildTestInstance
    @public
  */
  buildTestInstance() {
    Ember.setupForTesting();

    const instance = this.buildInstance();
    instance.injectTestHelpers();

    return instance;
  }
});

Ember.ApplicationInstance.reopen({
  /**
    This property contains the testing helpers for the current instance. These
    are created once `injectTestHelpers` has been called.
    @property testHelpers
    @type {Object}
    @default null
    @public
  */
  testHelpers: null,

  /**
    This injects test helpers into the `testHelpers` property bound to the
    current context. Any callbacks registered with `onInjectHelpers` will be
    called once the helpers have been injected.
    In most cases, you shouldn't need to call this method directly, as using
    `App.buildTestInstance` will create an instance and call this method on
    it, and is the preferred way of testing with instances.
    Example:
    ```
    instance.injectTestHelpers();
    ```
    @method injectTestHelpers
    @public
  */
  injectTestHelpers() {
    this.reopen({
      willDestroy() {
        this._super(...arguments);
        this.removeTestHelpers();
      }
    });

    this.testHelpers = {};
    for (var name in helpers) {
      this.testHelpers[name] = helper(this, name);
    }

    invokeInjectHelpersCallbacks(this);
  },

  /**
    This removes all helpers that have been registered by setting the
    `testHelpers` property to null again.
    Example:
    ```javascript
    instance.removeTestHelpers();
    ```
    @method removeTestHelpers
    @public
  */
  removeTestHelpers() {
    this.testHelpers = null;
  }
});

function helper(app, name) {
  let fn = helpers[name].method;
  let meta = helpers[name].meta;
  if (!meta.wait) {
    return (...args) => fn.apply(app, [app, ...args]);
  }

  return (...args) => {
    let lastPromise = run(() => resolve(getLastPromise()));

    // wait for last helper's promise to resolve and then
    // execute. To be safe, we need to tell the adapter we're going
    // asynchronous here, because fn may not be invoked before we
    // return.
    asyncStart();
    return lastPromise.then(() => fn.apply(app, [app, ...args])).finally(asyncEnd);
  };
}
