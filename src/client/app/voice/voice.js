(function () {
    'use strict';

    angular
        .module('app.voice')
        .controller('Voice', Voice);

    Voice.$inject = ['logger', '$scope'];

    /* @ngInject */
    function Voice(logger, $scope) {
        /*jshint validthis: true */
        var vm = this;
        vm.text = 'nothing';
        var commands = {
          'new item *val': function(val){
            vm.newTodo = val;
            vm.addTodo();
            console.log(vm.text);
            $scope.$apply();
          },
          'remove item *val': function(val){
            alert('trying to remove' + val);
            vm.todos.splice(parseInt(val)-1,1);
            console.log('Removing item ' + val);
            $scope.$apply();
          }
        }
        annyang.addCommands(commands);
        annyang.start();
        
        vm.title = 'Voice';
        vm.todos = [
          {'title':'Build a todo app', 'done':false}
        ];
        
        vm.addTodo = function(){
          vm.todos.push({'title':vm.newTodo, 'done':false});
          vm.newTodo = '';
        }
        vm.clearCompleted = function(){
          vm.todos = vm.todos.filter(function(item){
            return !item.done;
          })
        }
        
        activate();

        function activate() {
            logger.info('Activated Voice View');
        }
    }
})();