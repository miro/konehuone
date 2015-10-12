'use strict';

angular.module('konehuone.competitionInfos')

.controller('CompetitionInfosCtrl', function ($scope, lodash, apiService) {
    var _ = lodash;

    // # Variables
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
