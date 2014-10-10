app.factory("XLSXReaderService", ['$q', '$rootScope',
    function ($q, $rootScope) {
        var service = function (data) {
            angular.extend(this, data);
        };

        service.readFile = function (file, showPreview) {
            var deferred = $q.defer();

            XLSXReader(file, showPreview, function (data) {
                $rootScope.$apply(function () {
                    deferred.resolve(data);
                    console.dir(data);
                });
            });

            return deferred.promise;
        };


        return service;
    }
]);