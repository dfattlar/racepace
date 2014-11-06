(function () {
    'use strict';

    angular
        .module('app.racepace')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun (routehelper){
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    title: 'RacePace',
                    controller: 'RacePace',
                    controllerAs: 'vm',
                    templateUrl: 'app/racepace/racepace.html',
                    settings: {
                        nav: 5,
                        content: '<i class="fa fa-lock"></i> RacePace'
                    }
                }
            }
        ];
    }
})();