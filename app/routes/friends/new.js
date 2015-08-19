import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('friend');
  },
  resetController(controller, isExiting) {
    if(isExiting) {
      // Grab the model from the controller
      var model = controller.get('model');

      // Because we are leaving the route we verify if the model is in the new state, meaning wasn't saved to backend

      if(model.get('isNew')) {
        model.destoryRecord();
      }

    }
  }
});
