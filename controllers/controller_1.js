(function(){
  'use strict';

  angular.module('mainModule')
    .controller("mainController", mainControllerFn);

  function mainControllerFn(){
    this.name = 'Default';
    this.friendz = [];
    this.getName = getNaame;
    this.addFriends = addFriends;
    this.respectBhai = IterateOverFrineds;

    function getName(){
      return this.getName;
    };

    function addFriends(friendName){
      this.friendz.push(friendName);
    };

    function IterateOverFrineds(){
      var newArray = this.friendz.forEach(function(item, index, array){
          item = item + 'Bhai';
      });
    }
  }
})()
