/**
 * @memberOf app.states.details
 */
(function (module) {
  'use strict';

  function DetailsController($scope, movieData, movieCast) {
    var controller = this;

    $scope.movieData = movieData;
    $scope.movieCast = movieCast;
  }

  module.controller('detailsController', [
    '$scope',
    'movieData',
    'movieCast',
    DetailsController
  ]);

}(angular.module('app.states.details')));
