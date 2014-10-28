(function () {
    'use strict';

    angular
        .module('app.run-plan')
        .controller('RunPlan', RunPlan);

    RunPlan.$inject = ['logger', '$scope', 'dataservice', '$q'];

    /* @ngInject */
    function RunPlan(logger, $scope, dataservice, $q) {
        /*jshint validthis: true */
        var vm = this;
        
        vm.race = {};
        vm.pace = {
          hh: 0,
          mm: 0,
          ss: 0
        };
        vm.form = {};
        vm.form.races = [];
        
        activate();
        
        function activate() {
            var promises = [getRunTypes()];
            return $q.all(promises).then(function(){
                logger.info('Activated Run Plan View');
            });  
        }
      
        function getRunTypes() {
            return dataservice.getRunTypes().then(function (data) {
                vm.form.races = data;
                vm.selectedRace = data[0];
                return vm.form.races;
            });
        }
    }
})();