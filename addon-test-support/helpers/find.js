import Ember from 'ember';
import jQuery from 'jquery';

const { Test, get } = Ember;

Test.unregisterHelper('find');
Test.registerHelper('find', function(instance, selector, context) {
  context = context || get(instance, 'rootElement');
  return jQuery(selector, context);
});
