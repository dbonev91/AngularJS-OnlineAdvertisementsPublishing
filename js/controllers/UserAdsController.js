/**
 * Created by Dimitar on 6.1.2015 г..
 */
app.controller('UserAdsController',
    function ($scope, $location, $rootScope, userService, authService, notifyService, pageSize) {
    $scope.personalAdsParams = {
        startPage: 1,
        pageSize: pageSize
    };

    $rootScope.showRightSidebar = false;
    $rootScope.ngViewSize = 'col-md-10';

    $scope.getUserAds = function () {
        userService.getUserAds(
            $scope.personalAdsParams,
            function success (data) {
                $scope.ads = data;
            }, function error (error) {
                notifyService.showError('Error: ' + error);
            }
        );
    };

    $scope.editButtonClicked = function (id) {
        userService.getCurrentAd(
            id,
            function success(data) {
                $scope.editAdData = data;
                $rootScope.$broadcast("EditAdData", data);
            }, function error() {

            }
        );
    };

    // This event is sent by LeftSideBarController when the ads by type is changed
    $scope.$on("adsByType", function (event, statusClickedId) {
        $scope.personalAdsParams.status = statusClickedId;
        $scope.personalAdsParams.startPage = 1;
        $scope.getUserAds();
    });

    $scope.getUserAds();
});