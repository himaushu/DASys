app.service('DataUploadService', function () {

    this.GetTemplateInfo = function () {
        return [{ Name: 'CustomerName', DataType: 1, Size: 20, IsNullable: 'false' }, { Name: 'AcBal', DataType: 2, Size: 10, IsNullable: 'false' },{ Name: 'DrCrFlag', DataType: 2, Size: 1, IsNullable: 'false' },{ Name: 'BalDate', DataType: 3, Size: 1, IsNullable: 'true' }]
    };

});

app.directive('showError', function() {
  
  retTemplate = function (data){
    if(data == ''){
        return "<div>{{row.entity[col.field]}}</div>' }";
    }else{
        return "<div class='ngCellText' ng-cell-text ng-class='col.colIndex()'>"+ 
                "<span ng-show='COL_FIELD' class='icon icon-ok'/>"+
                "</div>";
    }
  
  };

  return {
    restrict: 'C',
    replace: true,
    transclude: true,
    scope: { myData: '@myData' },
    template: retTemplate (myData)
  }
  
});