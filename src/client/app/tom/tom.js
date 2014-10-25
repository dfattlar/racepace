(function () {
    'use strict';

    angular
        .module('app.tom')
        .controller('Tom', Tom);

    Tom.$inject = ['logger'];

    /* @ngInject */
    function Tom(logger) {
        /*jshint validthis: true */
        var vm = this;

        vm.title = 'Photos';
        vm.photos = [
          {
            src: 'img1.png',
            title: 'Pic 1'
          }, {
            src: 'img2.jpg',
            title: 'Pic 2'
          }, {
            src: 'img3.jpg',
            title: 'Pic 3'
          }, {
            src: 'img4.png',
            title: 'Pic 4'
          }, {
            src: 'img5.png',
            title: 'Pic 5'
          }];

        activate();

        function activate() {
            logger.info('Activated Photos View');
        }
    }
})();