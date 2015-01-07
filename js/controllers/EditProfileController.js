/**
 * Created by Dimitar on 7.1.2015 г..
 */
app.controller('EditProfileController', function ($scope, notifyService, userService, editService, townsService) {
    $scope.data = function () {
        userService.getUserData(
            null,
            function (data) {
                $scope.userData = data;
                $scope.userData.username = JSON.parse(sessionStorage['currentUser']).username;
                $scope.userData.phone = data.phoneNumber;
            },
            function (err) {
                console.log('Error getting user data: ' + err);
            }
        );
    };

    $scope.editProfile = function (data) {
        editService.editProfile(data,
        function success () {
            notifyService.showInfo('Success: profile edited!');
        }, function error (err) {
            console.log(err);
            notifyService.showError('Error: ' + err);
        });
    };

    $scope.towns = townsService.getTowns();

    $scope.data();
});