"use strict";

(function(){
  angular
  .module("wdinstagramer", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])

  .controller("WdiNstagIndexController", [
    WdiNstagIndexControllerFunction
  ])

  .controller("WdiNstagShowController", [
    "$stateParams",
    WdiNstagShowControllerFunction
  ])

  function RouterFunction($stateProvider){
    console.log("working")
    $stateProvider
      .state("wdinstagramIndex", {
        url: "/wdinstagrams",
        templateUrl: "js/ng-views/index.html",
        controller: "WdiNstagIndexController",
        controllerAs: "vm"
      })
      .state("wdinstagramShow", {
      url: "/wdinstagrams/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "WdiNstagShowController",
      controllerAs: "vm"
      })
  }

  function WdiNstagIndexControllerFunction(){
    this.wdinstagrams = wdinstagramData;
  }

  function WdiNstagShowControllerFunction($stateParams){
    console.log($stateParams)
    this.wdinstagram = wdinstagramData[$stateParams.id]
  }

})();
