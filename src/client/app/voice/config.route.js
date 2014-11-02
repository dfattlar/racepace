(function () {
    'use strict';

    angular
        .module('app.voice')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun (routehelper){
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/voice',
                config: {
                    title: 'Voice',
                    controller: 'Voice',
                    controllerAs: 'vm',
                    templateUrl: 'app/voice/voice.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Voice'
                    }
                }
            }
        ];
    }
})();