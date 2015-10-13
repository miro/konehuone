'use strict';

angular.module('konehuone.competitionInfos')

.controller('CompetitionInfosCtrl', function ($scope, lodash, apiService) {
    var _ = lodash;

    // # Variables
    $scope.uiClosed = {
        jj1: true,
        jj2: true,
        rc: true
    };
    $scope.compData = {};
    $scope.igImages = [];


    // # Functions
    $scope.init = function() {
        apiService.getCompetitionData().then(
            function success(compData) {
                _.extend($scope.compData, compData);
            }
        );

        apiService.getLatestIgImages().then(
            function success(igImages) {
                $scope.igImages = igImages;
            }
        );
    };
});
