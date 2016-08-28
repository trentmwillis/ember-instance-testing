import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this._super(...arguments);
    this.set('keypressCount', 0);
  },
  actions: {
    onKeypress() {
      this.incrementProperty('keypressCount');
    }
  }
});
