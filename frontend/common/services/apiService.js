'use strict';

angular.module('konehuone.apiService', ['konehuone.conf'])

.factory('apiService', function ($q, $http, conf) {
    var service = {};

    service.getCompetitionData = function() {
        return $q(function (resolve, reject) {
            $http.get(conf.api.baseUrl + 'competitions/kpi').then(
                function success(response) {
                    resolve(response.data);
                },
                function failure(error) {
                    console.log('Error on API fetch', error);
                    reject(error);
                }
            );
        });
    };

    return service;
});
