"use strict";

(function(){
  angular
  .module("wdinstagram", [
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
    this.wdinstagrams = [
      {photo_url:"http://www.goodfood.com.vn/images/I_home.jpg", author:"Chef Jackson", body:"8 oz Sirloin"},
      {photo_url:"http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/02/harissa-chicken-traybake.jpg?itok=tt3UYJEu", author:"Chef Solomon", body:"Harissa Chicken"},
      {photo_url:"http://lifeloveandgoodfood.com/wp-content/uploads/2015/02/chicken-n-waffles-900x600.jpg", author:"Chef Pookie", body:"Chicken and Waffles"}
    ]
  }

  function WdiNstagShowControllerFunction($stateParams){
    this.wdinstagram = wdinstagrams[$stateParams.id];
  }


})();
