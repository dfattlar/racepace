(function () {
    'use strict';

    angular
        .module('app.tom')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun (routehelper){
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/photos',
                config: {
                    title: 'Photos',
                    controller: 'Tom',
                    controllerAs: 'vm',
                    templateUrl: 'app/tom/tom.html',
                    settings: {
                        nav: 4,
                        content: '<i class="fa fa-lock"></i> Photos'
                    }
                }
            }
        ];
    }
})();