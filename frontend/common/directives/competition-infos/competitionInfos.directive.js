'use strict';

angular.module('konehuone.competitionInfos')

.directive('competitionInfos', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'directives/competition-infos/competitionInfos.tpl.html',
        controller: 'CompetitionInfosCtrl'
    };
});
