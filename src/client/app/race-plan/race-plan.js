(function () {
    'use strict';

    angular
        .module('app.race-plan')
        .controller('RacePlan', RacePlan);

    RacePlan.$inject = ['logger', '$scope'];

    /* @ngInject */
    function RacePlan(logger, $scope) {
        /*jshint validthis: true */
        var vm = this;
        
        vm.race = {};
      
        var races = [
        {
          name:'5k',
          distance: 3.10686,
          rows:[ 
            {mile: '1', note:''},
            {mile: '2', note:''},
            {mile: '3', note:''},
            {mile: '3.1', note:''}
          ]
        },
        {
          name:'8k',
          distance: 4.97097,
          rows: [1,2,3,4,4.9]
        },
        {
          name:'10k',
          distance: 6.21371,
          rows: [1,2,3,4,5,6,6.2]           
        },
        {
          name:'Half Marathon',
          distance: 13.10938,
          rows: [1,2,3,4,5,6,7,8,9,10,11,12,13,13.1]  
        },
        {
          name:'Marathon',
          distance: 26.21875,
          rows: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25, 26,26.2]
        }];
        
        vm.form = {};
        vm.form.races = races;
        vm.selectedRace = {
          name: '5k',
          distance: 3.10686,
          rows: [1,2,3,3.1]
        };
        
        $scope.$watch(angular.bind(vm, function(){
          return vm.selectedRace;
        }), function( newValue, oldValue ) {

          // Ignore initial setup.
          if ( newValue === oldValue ) {

              return;

          }

          console.log( "$watch: selectedRace changed." );

          // Ignore if the data-model already mirrors
          // the new value defined in the form.
          if ( $scope.vm.SelectedRace === newValue.value ) {

              return;

          }
          
          $scope.vm.selectedRace = newValue.value;
          //$scope.vm.selectedRace.rows = function(){} 

        });
      
     /* 
  vm.formData.reset = function() {
    vm.user = angular.copy(vm.master);
  };

  vm.formData.reset();
        */
        function activate() {
            logger.info('Activated Run Plan View');
        }
    }
})();