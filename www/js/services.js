angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Footprints', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var footprints = [
    { id: 0, name: 'Puffy' },
    { id: 1, name: 'Dogo' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ashy' }
  ];

  return {
    all: function() {
      return footprints;
    },
    get: function(footprintId) {
      // Simple index lookup
      return footprints[footprintId];
    }
  }
});
