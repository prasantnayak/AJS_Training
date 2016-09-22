(function(){
  'use strict';
  angular.module('LunchCheck',[]).controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope)
  {
    $scope.lunch_menu="";
    $scope.messageDisp="";

    $scope.menuCheck = function (){
      var menu_items= $scope.lunch_menu.split(',');
      var menucount = menu_items.length;
      console.log(menu_items);
      console.log(menucount);
     if(menu_items == "")
     {
       $scope.messageDisp= "Please enter data first";
     }
     else {
      if (menucount <=3)
          {
            $scope.messageDisp= "Enjoy!";
          }
          else if (menucount>3) {
            $scope.messageDisp="Too Much";
          }
        }
  };
}
})();
