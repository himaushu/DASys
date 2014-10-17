'use strict';

app.controller('XLSXReaderController', function ($scope, XLSXReaderService, CommonService) {

    $scope.TemplateInfo     = CommonService.fetchTemplateInfo();

    $scope.gridOptionsInfo  = [];
    $scope.csvData          = [];

    $scope.showPreview      = false;
    $scope.showJSONPreview  = true;
    $scope.json_string      = "";

    $scope.fileChanged = function (files) {
        $scope.csvData      = [];
        $scope.selectedSheetName = '---- Select a sheet ----';

        $scope.isProcessing = true;
        $scope.sheets = [];
        $scope.excelFile = files[0];

        XLSXReaderService.readFile($scope.excelFile, $scope.showPreview, $scope.showJSONPreview).then(function (xlsxData) {
            console.log($scope.sheets);
            $scope.sheets = xlsxData.sheets;
            $scope.isProcessing = false;
            console.log($scope.sheets);
        });
    }
    

    $scope.updateJSONString = function () {
        $scope.csvData      = $scope.sheets[$scope.selectedSheetName];
        //console.dir($scope.csvData);
        $scope.json_string  = JSON.stringify($scope.csvData, null, 2);
    }

    $scope.showPreviewChanged = function () {
        if ($scope.showPreview) {
            $scope.showJSONPreview = false;
            $scope.isProcessing = true;
            XLSXReaderService.readFile($scope.excelFile, $scope.showPreview, $scope.showJSONPreview).then(function (xlsxData) {
                $scope.sheets   = xlsxData.sheets;
                $scope.isProcessing = false;
            });
        }
    }

    $scope.gridOptionsInfo = CommonService.fetchGridOptionsInfoEx(CommonService.fetchTemplateInfo);

    $scope.ExcelGridOptions = $scope.gridOptionsInfo;
});