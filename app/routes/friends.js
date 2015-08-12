import Ember from 'ember';

export default Ember.Route.extend({

    actions: {
    save() {
      console.log('+- save action bubbled up to friends route');
      return false;
    },
    cancel () {
      console.log('+- cancel action bubbled up to friends route');
      return false;
    },

    delete: function(friend) {
      friend.destroyRecord().then(()=> {
        this.transitionTo('friends.index');
      });
    }
  }

});
