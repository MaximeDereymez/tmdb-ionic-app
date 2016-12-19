/**
 * @memberOf app.states.details
 */
(function (module) {
  'use strict';

  function DetailsController($scope, movieData) {
    var controller = this;

    $scope.movieData = movieData;
    $scope.poster = "http://image.tmdb.org/t/p/w185"+movieData.poster_path;
  }

  module.controller('detailsController', [
    '$scope',
    'movieData',
    DetailsController
  ]);

}(angular.module('app.states.details')));
