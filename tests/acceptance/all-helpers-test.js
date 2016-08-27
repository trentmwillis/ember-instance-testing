import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | all helpers');

test('visiting /all-helpers', function(assert) {
  const helpers = this.application.testHelpers;
  helpers.visit('/all-helpers');

  helpers.andThen(function() {
    assert.equal(helpers.currentURL(), '/all-helpers');
  });
});
