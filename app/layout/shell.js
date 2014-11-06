(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    Shell.$inject = ['$timeout', 'config', 'logger', '$scope', '$location'];

    function Shell($timeout, config, logger, $scope, $location) {
        /*jshint validthis: true */
        var vm = this;

        vm.title = config.appTitle;
        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        vm.showSplash = true;

        activate();
      

        $scope.isActive =function(viewLocation){return $location.path().indexOf(viewLocation) == 0;};

        function activate() {
            logger.success(config.appTitle + ' loaded!', null);
            hideSplash();
        }

        function hideSplash() {
            //TODO: Force a 1 second delay so we can see the splash.
            $timeout(function () {
                vm.showSplash = false;
            }, 1000);
        }
    }
})();