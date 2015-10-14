'use strict';

angular.module('konehuone.djInfos')

.directive('djInfos', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'directives/dj-infos/djInfos.tpl.html',
        controller: 'DjInfosCtrl'
    };
});
