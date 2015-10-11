'use strict';

angular.module('konehuone.home')

.controller('HomeCtrl', function ($scope, $translate) {

    $scope.i18nTestClick = function() {
        console.log('asd');
        $translate.use('en');
    };
});
