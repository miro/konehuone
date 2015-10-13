'use strict';

angular.module('konehuone.apiService', ['konehuone.conf'])

.factory('apiService', function ($q, $http, conf) {
    var service = {};

    // # Public functions
    service.getCompetitionData = function() {
        return _doApiRequest('competitions/kpi');
    };

    service.getLatestIgImages = function() {
        return _doApiRequest('instagram/recent');
    };


    // # Internal functions
    function _doApiRequest(apiFunction) {
        return $q(function (resolve, reject) {
            $http.get(conf.api.baseUrl + apiFunction).then(
                function success(response) {
                    resolve(response.data);
                },
                function failure(error) {
                    console.log('Error on API fetch', error);
                    reject(error);
                }
            );
        });
    }

    return service;
});
