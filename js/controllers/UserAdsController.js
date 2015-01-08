/**
 * Created by Dimitar on 6.1.2015 г..
 */
app.controller('UserAdsController',
    function ($scope, $location, userService, authService, notifyService, pageSize) {
    $scope.personalAdsParams = {
        startPage: 1,
        pageSize: pageSize
    };

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

    // This event is sent by LeftSideBarController when the ads by type is changed
    $scope.$on("adsByType", function (event, statusClickedId) {
        $scope.personalAdsParams.status = statusClickedId;
        $scope.personalAdsParams.startPage = 1;
        $scope.getUserAds();
    });

    $scope.getUserAds();
});