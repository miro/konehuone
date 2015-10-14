'use strict';

angular.module('konehuone.djInfos')

.controller('DjInfosCtrl', function ($scope) {

    // # Variables
    $scope.djData = {
        wispy: {
            name: 'Wispy',
            picUrl: '/assets/dj-wispy.jpg',

            bio: 'Wispy aka Ville Penttinen on tamperelainen pitkän linjan dj-moniottelija. Lähes viisitoista vuotta kestäneen uransa aikana hän on järjestänyt ja ollut soittamassa lukemattomissa tapahtumissa. Oma Steps nimeä kantava klubi-ilta Tampereella, Double Drop -klubi Helsingin mbarissa yhdessä Maticin kanssa, yksi legendaarisen Plauge-kollektiivin jäsenistä ja viisi YleX:lle toimitettua XmiXiä puhuvat puolestaan. Tällä hetkellä Wispyä kuulee vakituisesti Bassoradiolla, jossa hän, Rico Tubbs ja Kimik vetävät Etkoplasma-nimistä showta joka toinen lauantai-ilta.',

            links: [
                { url: 'https://fb.com/wispyfin', title: 'Facebook' },
                { url: 'https://mixcloud.com/wispy', title: 'Mixcloud' }
            ],

            uiOpened: false
        }
    };

    // # Functions
    $scope.init = function() {
    };
});
