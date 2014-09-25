app.service('DataUploadService', function () {

    this.GetTemplateInfo = function () {
        return [{ Name: 'CustomerName', DataType: 1, Size: 20, IsNullable: 'false' }, { Name: 'AcBal', DataType: 2, Size: 10, IsNullable: 'false' },{ Name: 'DrCrFlag', DataType: 2, Size: 1, IsNullable: 'false' },{ Name: 'BalDate', DataType: 3, Size: 1, IsNullable: 'true' }]
    };

});