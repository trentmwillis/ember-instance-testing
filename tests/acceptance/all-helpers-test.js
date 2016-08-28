import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | all-helpers');

test('all the helpers - local', function(assert) {
  const helpers = this.application.testHelpers;

  helpers.visit('/');
  helpers.andThen(function() {
    assert.equal(helpers.currentURL(), '/');
    assert.equal(helpers.currentPath(), 'index');
    assert.equal(helpers.currentRouteName(), 'index');
  });

  helpers.click('.all-helpers-link');
  helpers.andThen(() => {
    assert.equal(helpers.currentURL(), '/all-helpers');
    assert.equal(helpers.currentPath(), 'all-helpers');
    assert.equal(helpers.currentRouteName(), 'all-helpers');

    const title = helpers.findWithAssert('.title');
    assert.equal(title.text(), 'All Test Helpers Page');
  });

  helpers.fillIn('#name', 'Trent Willis');
  helpers.andThen(() => {
    assert.equal(helpers.find('#name').val(), 'Trent Willis');
  });

  helpers.keyEvent('#key-capture', 'keypress', 13);
  helpers.andThen(() => {
    assert.equal(helpers.find('#key-capture').text(), '1');
  });

  helpers.triggerEvent('#key-capture', 'keypress');
  helpers.andThen(() => {
    assert.equal(helpers.find('#key-capture').text(), '2');
  });
});

test('all the helpers - global', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(currentPath(), 'index');
    assert.equal(currentRouteName(), 'index');
  });

  click('.all-helpers-link');
  andThen(() => {
    assert.equal(currentURL(), '/all-helpers');
    assert.equal(currentPath(), 'all-helpers');
    assert.equal(currentRouteName(), 'all-helpers');

    const title = findWithAssert('.title');
    assert.equal(title.text(), 'All Test Helpers Page');
  });

  fillIn('#name', 'Trent Willis');
  andThen(() => {
    assert.equal(find('#name').val(), 'Trent Willis');
  });

  keyEvent('#key-capture', 'keypress', 13);
  andThen(() => {
    assert.equal(find('#key-capture').text(), '1');
  });

  triggerEvent('#key-capture', 'keypress');
  andThen(() => {
    assert.equal(find('#key-capture').text(), '2');
  });
});
