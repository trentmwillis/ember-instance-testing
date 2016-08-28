import Ember from 'ember';

const { Test } = Ember;

Test.unregisterHelper('visit');
Test.registerAsyncHelper('visit', function(instance, url) {
  const visitPromise = instance.boot({ location: 'none' }).then((instance) => {
    return instance.visit(url);
  });

  return instance.testHelpers.wait(visitPromise);
});
