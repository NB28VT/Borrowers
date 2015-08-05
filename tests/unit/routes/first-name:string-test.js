import { moduleFor, test } from 'ember-qunit';

moduleFor('route:first-name:string', 'Unit | Route | first name:string', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});
