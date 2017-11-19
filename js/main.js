(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  }); 
})(jQuery); 

(function() {

var AppModule = angular.module('Portfolio', ['cards']);


AppModule.controller('MyController', ['$scope','cardsData', function($scope, cardsData)
    {
      $scope.listOfElements = cardsData.getElements();
    }
]);

AppModule.directive("skillWidget", function(){
    var linkFunction = function(scope, element, attributes){
       scope.text = attributes["text"]; 
       scope.percent = attributes["percent"];

       percent = parseInt(scope.percent);

        if (percent > 50) {
          //use this to toggle gt50 class on 
          scope.show = true;
        }
        
       scope.deg = function(){
          return 360*percent/100
       }
    }; 

    return {
      restrict: "E",
      templateUrl:"views/skillTemplate.html",
      link: linkFunction,
      scope: {
        text: "@text",
        percent : "@percent"
      }
    }
});

angular.module('cards', [])
.factory('cardsData', ['$http', function($http) {

 return {
     getElements: function(){
         
         return  [ 
            { "field" : "Machine learning",
                "details" : 75
              },
              {  "field" : "Data analysis",
                "details" : 80
              }, 
              { "field" : "Software development",
                "details" : 60
              },
              { "field" : "Web development",
                "details" : 75
              },   
              { "field" : "Big data",
                "details" : 80
              },  
              { "field" : "Data science",
                "details" : 70
 
              } ];
     }
 } 

}]);

})();
