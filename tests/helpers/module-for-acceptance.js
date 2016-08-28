import { module } from 'qunit';
import Ember from 'ember';
import startApp from 'ember-instance-testing/test-support/start-app';
import destroyApp from '../helpers/destroy-app';

import Application from '../../app';
import config from '../../config/environment';

const { RSVP: { Promise } } = Ember;

export default function(name, options = {}) {
  module(name, {
    beforeEach() {
      this.application = startApp(Application, config);

      if (options.beforeEach) {
        return options.beforeEach.apply(this, arguments);
      }
    },

    afterEach() {
      let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
      return Promise.resolve(afterEach).then(() => destroyApp(this.application));
    }
  });
}
