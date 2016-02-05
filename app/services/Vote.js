'use strict';

module.exports = function($resource) {
  return $resource(
    'http://localhost:3000/api/v1/victories/:victory_id/votes/:id',
    { victory_id: '@vote.victory_id', id: '@vote.id' },
    { update: { method: 'PUT' } }
  );
};