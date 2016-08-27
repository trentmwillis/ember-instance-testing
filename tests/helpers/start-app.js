import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';
import 'ember-instance-testing/test-support/helpers/visit';
import 'ember-instance-testing/test-support/setup-instance-testing';

let attributes = Ember.merge({ autoboot: false }, config.APP);
let application = Ember.run(Application, 'create', attributes);

export default function startApp(attrs) {
  return application.buildTestInstance();
}
