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
          ss: 0,
          // figure out pace - mins per mile
          total: function(hh, mm, ss, distance){
            var totalSS,
                outputMM,
                outputSS;
            totalSS = ((hh * 3600) + (mm * 60) + ss) / distance;
            outputMM = Math.floor(totalSS / 60);
            outputSS = Math.floor((((totalSS / 60) % 1) * 60) *10) / 10;
            if(outputSS < 10){
              outputSS = '0' + outputSS;
            }
            return outputMM + ':' + outputSS;
          },
          minpermile: ''
        };
        vm.form = {};
        vm.form.races = [];
        
        activate();
        
        //STATIC plugin data to method - figure out how to run method on data load and then watch data change (with watcher) and rerun method to track pace. Move method to factory?
        //alert(vm.pace.total(0,14,58, 3.13223));
        
        $scope.$watch("vm.pace.hh", function( newValue, oldValue ) {
          if ( newValue === oldValue ) {
              return;
          }
          console.log( "$watch: hour changed." );
          vm.pace.hh = newValue;
          vm.pace.minpermile = vm.pace.total(vm.pace.hh, vm.pace.mm, vm.pace.ss, vm.selectedRace.distance);
        });
      
        // TODO: Can combine $watch into single watch?
            $scope.$watch("vm.pace.mm", function( newValue, oldValue ) {
              if ( newValue === oldValue ) {
                  return;
              }
              console.log( "$watch: minutes changed." );
              vm.pace.mm = newValue;
              vm.pace.minpermile = vm.pace.total(vm.pace.hh, vm.pace.mm, vm.pace.ss, vm.selectedRace.distance);
            });
            $scope.$watch("vm.pace.ss", function( newValue, oldValue ) {
              if ( newValue === oldValue ) {
                  return;
              }
              console.log( "$watch: seconds changed." );
              vm.pace.ss = newValue;
              vm.pace.minpermile = vm.pace.total(vm.pace.hh, vm.pace.mm, vm.pace.ss, vm.selectedRace.distance);
            });
            $scope.$watch("vm.selectedRace", function( newValue, oldValue ) {
              if ( newValue === oldValue ) {
                  return;
              }
              console.log( "$watch: selected race changed." );
              vm.selectedRace = newValue;
              vm.pace.minpermile = vm.pace.total(vm.pace.hh, vm.pace.mm, vm.pace.ss, vm.selectedRace.distance);
            });
      
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
                vm.pace.minpermile = vm.pace.total(vm.pace.hh, vm.pace.mm, vm.pace.ss, vm.selectedRace.distance);
                return vm.form.races;
            });
        }
    }
})();