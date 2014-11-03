(function () {
    'use strict';

    angular
        .module('app.run-plan')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun (routehelper){
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/run-plan',
                config: {
                    title: 'Run Plan',
                    controller: 'RunPlan',
                    controllerAs: 'vm',
                    templateUrl: 'app/run-plan/run-plan.html',
                    settings: {
                        nav: 5,
                        content: '<i class="fa fa-lock"></i> Run Plan'
                    }
                }
            }
        ];
    }
})();