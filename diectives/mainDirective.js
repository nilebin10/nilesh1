(function(){
  'use strict';

  angular.module('directiveModule',[]);

  angular.module('directiveModule')
    .directive('myDirective', function factory() {
      var directiveDefinitionObject = {

        compile: function compile(tElement, tAttrs, transclude) {

          return function (scope, element, attrs) {

          }
        }
      };
      return directiveDefinitionObject;
    })
})();
