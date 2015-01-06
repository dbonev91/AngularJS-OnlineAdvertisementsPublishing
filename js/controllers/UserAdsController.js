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

    $scope.getUserAds();
});