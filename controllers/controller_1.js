(function(){
  'use strict';

  angular.module('mainModule')
    .controller("mainController", mainControllerFn);

  function mainControllerFn(){
    this.name = 'Default';
    this.getName = getNaame;

    function getName(){
      return this.getName;
    }
  }
})()
