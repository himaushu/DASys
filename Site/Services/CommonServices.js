app.service('CommonService', ['$rootScope', 'DataUploadService', function (scope, DataUploadService) {
    var TemplateInfo = [];

    this.fetchTemplateInfo = function () {
        TemplateInfo = DataUploadService.GetTemplateInfo();
        return TemplateInfo;
    };

    this.fetchGridOptionsInfoEx = function (TemplateInfo) {
        this.TemplateInfo = TemplateInfo;
        this.fetchGridOptionsInfo();
    }

    //Define dynamic column definitions
    this.fetchGridOptionsInfo = function () {
        if (TemplateInfo == null) {
            console.log('Fetch Template Info.');
            return;
        }
        gridOptionsInfo = [];

        gridOptionsInfo = {
            data: 'csvData',
            columnDefs: [],
            multiSelect: false,
            showSelectionCheckbox: true,
            enableColumnResize: true,
        };
        var len = TemplateInfo.length;

        for (var i = 0; i < len; i++) {
            var objColDef = { field: TemplateInfo[i].Name, displayName: TemplateInfo[i].Name, width: '*' };

            gridOptionsInfo.columnDefs.push(objColDef);
        }

        return gridOptionsInfo;
    };

}]);