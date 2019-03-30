angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page', {
    url: '/page3',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('android', {
    url: '/page4',
    templateUrl: 'templates/android.html',
    controller: 'androidCtrl'
  })

  .state('aboutUs', {
    url: '/page5',
    templateUrl: 'templates/aboutUs.html',
    controller: 'aboutUsCtrl'
  })

  .state('page_slider', {
    url: '/page6',
    templateUrl: 'templates/page_slider.html',
    controller: 'page_sliderCtrl'
  })

$urlRouterProvider.otherwise('/page6')


});