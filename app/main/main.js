(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('Main', Main);

    Main.$inject = ['logger'];

    /* @ngInject */
    function Main(logger) {
        /*jshint validthis: true */
        var vm = this;

        vm.title = 'Main';

        activate();

        function activate() {
            logger.info('Activated Main View');
        }
    }
})();