app.service('CommonService', ['$rootScope', 'TemplateService', function (scope, TemplateService) {
    var TemplateInfo = {};

    this.fetchTemplateInfo = function (Id) {
        //TemplateInfo = DataUploadService.GetTemplateInfo();
        TemplateInfo = TemplateService.getTemplateInfo(Id);
        return TemplateInfo;
    };

    this.fetchGridOptionsInfoEx = function (TemplateInfo) {
        this.TemplateInfo = TemplateInfo;
        return this.fetchGridOptionsInfo();
    }

    //Define dynamic column definitions
    this.fetchGridOptionsInfo = function () {
        if (TemplateInfo == null) {
            console.log('Fetch Template Info.');
            return;
        }
        //console.dir(TemplateInfo);
        gridOptionsInfo = [];

        gridOptionsInfo = {
            data: 'csvData',
            columnDefs: [],
            multiSelect: false,
            showSelectionCheckbox: true,
            enableColumnResize: true,
        };
        var len = TemplateInfo.Details.length;

        for (var i = 0; i < len; i++) {
            var objColDef = { field: TemplateInfo.Details [i].FieldName , displayName: TemplateInfo.Details[i].FieldName , width: '*' };

            gridOptionsInfo.columnDefs.push(objColDef);
        }

        gridOptionsInfo.columnDefs.push({ field: 'Error' , displayName: 'Result' , width: '*',cellTemplate:'<div class="ngCellText" ng-class="col.colIndex()"><span ng-cell-text>{{row.getProperty(col.field)}}</span></div>'});

        return gridOptionsInfo;
    };

}]);