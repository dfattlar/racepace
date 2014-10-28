(function () {
    'use strict';

    angular
        .module('app.main')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun (routehelper){
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/main',
                config: {
                    title: 'main',
                    controller: 'Main',
                    controllerAs: 'vm',
                    templateUrl: 'app/main/main.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Main'
                    }
                }
            }
        ];
    }
})();