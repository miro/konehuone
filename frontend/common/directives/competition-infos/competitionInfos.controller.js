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



    // # Functions
    $scope.init = function() {
        apiService.getCompetitionData().then(
            function success(compData) {
                _.extend($scope.compData, compData);
            }
        );
    };
});
