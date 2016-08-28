/**
 * Builds a new ApplicationInstance of the passed in Application and registers
 * test helpers on it.
 *
 * @private
 * @method buildTestInstance
 * @param {Ember.Application} application
 * @param {Object} options
 * @return {Ember.ApplicationInstance} instance
 */
export default function buildTestInstance(application, options) {
  const instance = application.buildInstance(options);

  instance.originalMethods = {};
  instance.removeTestHelpers = application.removeTestHelpers;
  application.injectTestHelpers.call(instance);

  return instance;
}
