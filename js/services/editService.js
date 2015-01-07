/**
 * Created by Dimitar on 7.1.2015 г..
 */
app.factory('editService', function ($http, baseServiceUrl, authService) {
    return {
        editProfile: function (params, success, error) {
            var request = {
                method: 'PUT',
                url: baseServiceUrl + '/api/user/profile',
                headers: authService.getAuthHeaders(),
                data: params
            };
            $http(request).success(success).error(error);
        }
    }
});