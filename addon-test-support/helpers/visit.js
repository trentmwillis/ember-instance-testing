import Ember from 'ember';

Ember.Test.unregisterHelper('visit');
Ember.Test.registerAsyncHelper('visit', function(instance, url) {
  var visitPromise = instance.boot({ location: 'none' }).then((instance) => {
    return instance.visit(url);
  });

  return instance.testHelpers.wait(visitPromise);
});
