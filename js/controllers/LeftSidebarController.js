/**
 * Created by Dimitar on 8.1.2015 г..
 */
app.controller('LeftSidebarController', function ($scope, $rootScope) {
    $scope.selectedMenuItem = 'Home';
    $scope.menuClick = function (option) {
        $scope.menuOption = option;
        $rootScope.pageTitle = option;
        $scope.selectedMenuItem = option;
    };

    $scope.myAdsMenuClick = function (option) {
        $scope.selectedMyAds = option;
    };
});