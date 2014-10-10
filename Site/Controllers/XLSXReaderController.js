'use strict';

app.controller('XLSXReaderController', function ($scope, XLSXReaderService) {
    $scope.showPreview = false;
    $scope.json_string = "";

    /*$(function() {
        $("#xlsxFile").change(function(event) {
            var file = this.files[0];
            XLSXReader(file, true, function(xlsxData) {
                var jsonData = JSON.stringify(xlsxData);
                console.log(jsonData);
            });
        });
    });  */
    $scope.fileChanged = function (files) {
        $scope.isProcessing = true;
        $scope.sheets = [];
        $scope.excelFile = files[0];
        XLSXReaderService.readFile($scope.excelFile, true).then(function (xlsxData) {
            $scope.sheets = xlsxData.sheets;
            $scope.isProcessing = false;
        });
    };

    $scope.updateJSONString = function () {
        $scope.json_string = JSON.stringify($scope.sheets[$scope.selectedSheetName], null, 2);
    }
    $scope.showPreviewChanged = function () {
        if ($scope.showPreview) {
            $scope.isProcessing = true;
            XLSXReaderService.readFile($scope.excelFile, true).then(function (xlsxData) {
                $scope.sheets = xlsxData.sheets;
                $scope.isProcessing = false;
            });
        };
    };
});