'use strict';

module.exports = function($resource) {
  return $resource(
    'https://small-victories-api.herokuapp.com/api/v1/victories/:victory_id/votes/:id',
    { victory_id: '@vote.victory_id', id: '@vote.id' },
    { update: { method: 'PUT' } }
  );
};