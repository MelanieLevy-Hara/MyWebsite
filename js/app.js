// (function() {
//   var app = angular.module('website', []);

//   app.controller('TabController', function(){
//     this.tab = 1;

//     this.setTab = function(newValue){
//       this.tab = newValue;
//     };

//     this.isSet = function(tabName){
//       return this.tab === tabName;
//     };
//   });
// })();
(function(){
  var myApp = angular.module('myApp', ['ui.router']);
  myApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "templates/Homepage.html"
      })
      
      .state('aboutme', {
        url: "/aboutme",
        templateUrl: "templates/AskMe.html"
      })
      
      .state('resume', {
        url: "/resume",
        templateUrl: "templates/Resume.html"
      })

      .state('contact', {
        url: "/contact",
        templateUrl: "templates/Contact.html"
      })
      // .state('panel2', {
      //   url:"/panel2",
      //   template:
      //       '<dl class="accordion" data-accordion>
      //         <dd class="accordion-navigation">
      //             <a ui-sref="#panel11">Software Developer - Audatex (a Solera Company)</a>
      //             <div id="panel11" class="content active">
                      
      //             </div>
      //         </dd>
      //       </dl>'
      // })
      // .state('#panel11', {
      //   url:"/#panel11"
      //   '<ul>
      //       <li>Self-learned SQL and PLSQL to understand the company&#39;s data framework</li>
      //       <li>Learned the Scrum Methodology in a team and used the JIRA website to document progress</li>
      //       <li>Mapped four large .xml files to an Oracle database using Pentaho</li>
      //       <li>Ensured ETLs were maintainable, optimized (by 50% runtime) and documented</li>
      //       <li>Used Ruby on Rails to write software for Audatex&#39;s website</li>
      //   </ul>'
      // })

  });
})();