'use strict';

angular.module('konehuone.djInfos')

.controller('DjInfosCtrl', function ($scope) {

    // # Variables
    $scope.djData = {
        wispy: {
            name: 'Wispy',
            picUrl: '/assets/dj-wispy.jpg',
            bio: [
                'Wispy aka Ville Penttinen on tamperelainen pitkän linjan DJ-moniottelija. Lähes viisitoista vuotta kestäneen uransa aikana hän on järjestänyt ja ollut soittamassa lukemattomissa tapahtumissa. Oma Steps nimeä kantava klubi-ilta Tampereella, Double Drop -klubi Helsingin mbarissa yhdessä Maticin kanssa, yksi legendaarisen Plauge-kollektiivin jäsenistä ja viisi YleX:lle toimitettua XmiXiä puhuvat puolestaan.',
                'Wispy nousi konemusakansan huulille viimeistään vuonna 2008, jolloin hän voitti silloisen Suomen suurimman DJ-skaban, Laserpoint-tapahtuman DJ-kilpailun. Vuosien mittaan hän on tuonut Suomeen isoja drum&bass nimiä kuten Sigma, ShockOne ja A Sides, korkannut YleX:n perjantai-illan XmiXin ensimmäisenä artistina vuonna 2011 ja viihdyttänyt yleisöä sadoilla keikoilla Tampereella ja muualla Suomessa. Wispyä voi luonnehtia käveleväksi musiikin tietokirjaksi - ja sen voi kuulla lauantaina 31. päivä Kajaanissa.',
                'Tällä hetkellä Wispyä kuulee  DJ-keikkojen lisäksi vakituisesti Bassoradiolla, jossa hän, Rico Tubbs ja Kimik vetävät Etkoplasma-nimistä showta joka toinen lauantai-ilta.'
            ],
            isHeadliner: true,

            links: [
                { url: 'https://fb.com/wispyfin', title: 'Facebook' },
                { url: 'https://mixcloud.com/wispy', title: 'Mixcloud' },
                { url: 'http://mbar.fi/artists/446/', title: 'Wispy\'s bio @ mbar.fi' },
                { url: 'https://www.mixcloud.com/Kimik/etkoplasma-03102015-bassoradio-hosted-by-rico-tubbs-kimik-wispy/', title: 'Etkoplasma @ Mixcloud' }
            ],
        },

        noconino: {
            name: 'Nocomply & Nino',
            picUrl: '/assets/dj-noconino.jpg',
            bio: [
                'Viisi vuotta sitten heillä oli idea - järjestetään ysikutosessa elektronisen musiikin kemut kavereille. Vettä on virrannut Kajaaninjoessa ja Talvivaarakin on kerennyt mennä kerran konkurssiin - viidenkymmenen euron budjetista on tultu viiden vuoden päähän kymmenenteen tapahtumaan.',
                'Tällä välin Nocomply on pokannut Red Bullin järjestämän DJ-skaban voiton, soittanut samalla lavalla mm. Pendulumin, Noisian ja Infected Mushroomin kanssa, toimittanut XmiXin DJ Orionin luotsaamaan YleX:n perjantai-iltaan ja kolunnut tuhoamassa Etelä-Suomen kovimpien klubi-iltojen tanssilattioita. Nino taas on vaikuttanut Kajaanin yöelämässä pitkään ja on Konehuoneen toinen perustaja.',
                'Parivaljakon seteistä kuuluu ja näkyy pikkupoikamainen innokkuus musiikkiin, kokemus ja uho toimittaa yleisölle vain ja ainoastaan parasta. Kotikentällä mennään aina kaasu pohjassa.'
            ],

            links: [
                { url: 'https://fb.com/ncmpl', title: 'Nocomply @ Facebook' },
                { url: 'https://mixcloud.com/nocomply', title: 'Nocomply @ Mixcloud' },
                { url: 'https://www.mixcloud.com/DJKillroy/suck-my-beat/', title: 'Nino\'s Promomix' }
            ],
        },

        retrome: {
            name: 'Retrome',
            picUrl: '/assets/dj-retrome.jpg',
            bio: [
                'Paltamon kasvatti, nykyisin Tampereella vaikuttava Retrome löysi tiensä cd-soittimien ja mikserin taakse 2011 ja on edelleen samalla tiellä. Nuoren miehen intohimo musiikkiin ja etenkin drum & bassiin on ajanut eteenpäin musiikin parissa. Kolmen vuoden ajan hän on vaikuttanut Tampereella Spinnin riveissä ja tänä vuonna hänet on voinut nähdä mm. Helsingissä mbarin terassilla Double Drop -klubin vieraana sekä Tampere Drum & Bass Conventioneissa.',
                'Konehuoneessa häneltä kuullaan erityisselektio & erityissekoitus viiden vuoden takaisia elektrohittejä Justicesta MGMT:hen, tuoreempaa tavaraa Nerosta A-Trakiin ja siitä väliltä kaikkea tiukimpiin drum&bass järkäleisiin saakka.'
            ],

            links: [
                { url: 'https://fb.com/djretrome', title: 'Facebook' },
                { url: 'https://mixcloud.com/retrome', title: 'Mixcloud' },
                { url: 'https://soundcloud.com/retrome', title: 'Soundcloud' }
            ]
        },

        epeli: {
            name: 'Epeli',
            picUrl: '/assets/dj-epeli.jpg',
            bio: [
                'Kutosen Resident-DJ:n titteliä jo neljättä vuotta ylpeänä kantanut Epeli on nuoresta iästään huolimatta puskenut itsensä jo monille klubikeikoille & kiertueille ympäri Suomen. Epelin seteissä yhdistyy teknisyys, tiukat bassovoittoiset rallit ja nopeat vaihdot, mitkä pitävät tanssilattian liekeissä alusta loppuun asti.'
            ],

            links: [
                { url: 'https://fb.com/djepeli', title: 'Facebook' },
                { url: 'https://mixcloud.com/djepeli', title: 'Mixcloud' }
            ]
        }
    };

    // # Functions
    $scope.init = function() {

        // add uiOpened vars for each dj
        for (var dj in $scope.djData) {
            if ($scope.djData.hasOwnProperty(dj)) {
                $scope.djData[dj].uiOpened = false;
            }
        }
    };
});
