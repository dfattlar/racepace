(function () {
    'use strict';

    angular
        .module('app.race-plan')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun (routehelper){
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/race-plan',
                config: {
                    title: 'Run Plan',
                    controller: 'RacePlan',
                    controllerAs: 'vm',
                    templateUrl: 'app/race-plan/race-plan.html',
                    settings: {
                        nav: 5,
                        content: '<i class="fa fa-lock"></i> Run Plan'
                    }
                }
            }
        ];
    }
})();