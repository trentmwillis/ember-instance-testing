import 'ember-instance-testing/test-support/helpers/find';
import 'ember-instance-testing/test-support/helpers/visit';

import createApplication from 'ember-instance-testing/test-support/-private/create-application';
import buildTestInstance from 'ember-instance-testing/test-support/-private/build-test-instance';

let globalApplication;

/**
 * Starts an application for testing. Builds a single instance of the passed in
 * Application class and then uses ApplicationInstances to actually test.
 *
 * @public
 * @method startApp
 * @param {Ember.Application} App
 * @param {Object} config
 * @param {Object} attrs
 * @return {Ember.ApplicationInstance}
 */
export default function startApp(App, config, attrs) {
  if (!globalApplication) {
    globalApplication = createApplication(App, config, attrs);
  }

  return buildTestInstance(globalApplication);
}
