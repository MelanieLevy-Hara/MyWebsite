(function() {
  var app = angular.module('website', []);

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

})();
// (function(){
//   var myApp = angular.module('myApp', ['ui.router']);
//   myApp.config(function($stateProvider, $urlRouterProvider) {
//     //
//     // For any unmatched url, redirect to /state1
//     $urlRouterProvider.otherwise("/state1");
//     //
//     // Now set up the states
//     $stateProvider
//       .state('state1', {
//         url: "/state1",
//         templateUrl: "Homepage.html"
//       })
      
//       .state('state2', {
//         url: "/state2",
//         templateUrl: "AskMe.html"
//       })
      
//       .state('state3', {
//         url: "/state3",
//         templateUrl: "Resume.html"
//       })

//       .state('state4', {
//         url: "/state4",
//         templateUrl: "Contact.html"
//       })
//   });
// })();