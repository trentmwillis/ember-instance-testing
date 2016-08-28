import Ember from 'ember';

const assign = Ember.assign || Ember.merge;

/**
 * Builds a new Application that is setup to build test instances.
 *
 * @private
 * @method createApplication
 * @param {Ember.Application} App
 * @param {Object} config
 * @param {Object} attrs
 * @return {Ember.Application} application
 */
export default function createApplication(App, config, attrs) {
  const baseAttributes = assign({}, config.APP);
  const attributes = assign(baseAttributes, attrs);
  const application = Ember.run(() => {
    const application = App.create(attributes);

    Ember.setupForTesting();
    application.testing = true;

    return application;
  });

  return application;
}
