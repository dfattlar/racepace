/* Based on Sandeep Panda's Angular Slider tutorial: 
*http://www.sitepoint.com/creating-slide-show-plugin-angularjs/
*/
(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('slider', Slider);
        
        /* @ngInject */
        function Slider($timeout) {
          // Display Image slider.
          // Usage:
          //  <slider>
          var directive = {
            restrict: 'AE',
            replace: true,
            scope: {
              images: '='
            },
            link: link,
            templateUrl: 'app/widgets/slider.html'
          }
          return directive;
          
          function link (scope, elem, attrs) {
            scope.currentIndex = 0; // Initially the index is at the first image
 
            scope.next = function() {
              scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
            };

            scope.prev = function() {
              scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
            };
            
            scope.$watch('currentIndex', function() {
              scope.images.forEach(function(image) {
                image.visible = false; // make every image invisible
              });

              scope.images[scope.currentIndex].visible = true; // make the current image visible
            });
            
            var timer;
            var sliderFunc = function() {
              timer = $timeout(function() {
                scope.next();
                timer = $timeout(sliderFunc, 5000);
              }, 5000);
            };

            sliderFunc();

            scope.$on('$destroy', function() {
              $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
            });
          }
        }
})();