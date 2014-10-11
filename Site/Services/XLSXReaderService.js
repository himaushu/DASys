app.factory("XLSXReaderService", ['$q', '$rootScope',
    function ($q, $rootScope) {
        var service = function (data) {
            angular.extend(this, data);
        }

        service.readFile = function (file, readCells, toJSON) {
            var deferred = $q.defer();

            XLSXReader(file, readCells, toJSON, function (data) {
                $rootScope.$apply(function () {
                    deferred.resolve(data);
                });
            });

            return deferred.promise;
        }


        return service;
    }
]);

//IE10 issue for readAsBinaryString not working
//http://www.nczonline.net/blog/2012/05/15/working-with-files-in-javascript-part-2/