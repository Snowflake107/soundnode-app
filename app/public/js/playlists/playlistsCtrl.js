'use strict';

app.controller('PlaylistsCtrl', function ($scope, SCapiService) {
    var endpoint = 'playlists'
        , params = '?limit=32';

    $scope.title = 'Playlists';
    $scope.data = '';

    SCapiService.get(endpoint, params)
                .then(function(data) {
                    $scope.data = data;
                }, function(error) {
                    console.log('error', error);
                });

    $scope.checkForPlaceholder = function (thumb) {
        var newSize;

        if ( thumb === null ) {
            return 'public/img/temp-playing.png';
        } else {
            newSize = thumb.replace('large', 'badge');
            return newSize;
        }
    }
});