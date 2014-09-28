app.controller('TemplateController', function ($scope, TemplateService) {
    
 $scope.Statuses        = TemplateService.getStatuses();
 $scope.Templates       = TemplateService.getTemplates();
 $scope.UpdateFrequency = TemplateService.getUpdateFrequency();
 $scope.DataTypes       = TemplateService.getDataTypes();
 $scope.TemplateDetails = [];//TemplateService.getTemplateDetails();
 $scope.SelectedRows    = [];
 
 //Column Templates
 $scope.cellInputEditableTemplate      = '<input ng-class="\'colt\' + col.index" ng-input="COL_FIELD" ng-model="COL_FIELD" />';
 $scope.cellSelectEditableTemplateD     = '<select ng-class="\'colt\' + col.index" ng-input="COL_FIELD" ng-model="COL_FIELD" ng-options="id as name for (id, name) in DataTypes" />';
 $scope.cellNumberInputEditableTemplate = '<input type="number" ng-class="\'colt\' + col.index" ng-input="COL_FIELD" ng-model="COL_FIELD" />';  
 $scope.cellSelectEditableTemplateB     = '<input type="checkbox"  ng-class="\'colt\' + col.index" ng-checked="row.entity.Nullable" ng-input="COL_FIELD" step="1"  /></div>';// '<input type="checkbox" ng-model="COL_FIELD"  grid-cell-checkbox="COL_FIELD"/>';//
 
 $scope.cellTemplate = "<div ng-class=\"'ngCellText colt' + $index\"> <span ng-cell-text>{{COL_FIELD}}</span></div>";
 $scope.cellEditTemplate = '<input type="checkbox" ng-checked="row.entity.Nullable==\'on\'" ng-input="COL_FIELD" /></div>';

 Init = function () {
     $scope.TemplateDetails.push(TemplateService.getTemplateDetailsNewRow());
 };

//load data on opening
 $scope.$on('$viewContentLoaded', function () {
     Init();
 });

 $scope.addTemplateDetails = function (){
   
    $scope.TemplateDetails.push(TemplateService.getTemplateDetailsNewRow());
    //$scope.gridOptions.selectItem($scope.TemplateDetails.length-1, true);
    //console.log($scope.TemplateDetails.length-1);
      //var grid = $scope.gridOptions.ngGrid;
      //grid.$viewport.scrollTop(grid.rowMap[$scope.TemplateDetails.length-1] * 200);
  
 };

$scope.RemoveTemplateDetails = function () {

  //console.log($scope.SelectedRows[0]);
  var index = $scope.TemplateDetails.indexOf($scope.SelectedRows[0]);
      //alert(index);
      $scope.gridOptions.selectItem(index, false);
      $scope.TemplateDetails.splice(index, 1);  

    //window.scrollTo(index-1,0);
  
};

//TO DO: connect to service to pass on the data
$scope.Save = function () {
    alert(JSON.stringify($scope.TemplateDetails));
};

   $scope.gridOptions = {
    data: 'TemplateDetails',
    enableRowSelection: true,
    enableCellEditOnFocus: true,
    multiSelect: false, 
    selectedItems: $scope.SelectedRows,  
      columnDefs: [
      { field: 'FieldName', displayName: 'Field Name', enableCellEditOnFocus: true,  CellFilter:'lowercase',
        editableCellTemplate: $scope.cellInputEditableTemplate, width: 190   },
      { field: 'FieldType', displayName: 'Data Type', enableCellEditOnFocus: true, 
        editableCellTemplate: $scope.cellSelectEditableTemplateD, 
        cellFilter:'dtFltr'},
      { field: 'FieldSize', displayName: 'Size', enableCellEdit: true, editableCellTemplate: $scope.cellNumberInputEditableTemplate},        
      { field: 'Nullable', displayName: 'Is Nullable',  editableCellTemplate: $scope.cellEditTemplate//,
        //cellTemplate:$scope.cellTemplate
        
      }        
    ]};

//var DTS       = [{Id:1, Name:'String'}, {Id:2, Name:'Numeric'}, {Id:3, Name:'Boolean'}, {Id:4, Name:'Date'}];  
    //$scope.dts = DTS;

   $scope.$on("$destroy", function () {
       //foreach TemplateService.TemplateDetails in TemplateDetails{
         //  $scope.TemplateDetails.splice;
       //}
   });

   $scope.$on('$locationChangeStart', function (event) {
       var answer = confirm("Are you sure you want to leave this page?")
       if (!answer) {
           event.preventDefault();
       }
   });

});


app.controller('NavbarController', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
});

/*app.filter('test', function (dataTypes) {
    return function (input) {
        return input + '!';
    };
});
*/
//Resource
//https://github.com/angular-ui/ng-grid/wiki/Templating
//https://github.com/angular-ui/ng-grid/wiki/Configuration-Options
//http://expertsoverflow.com/questions/tagged/ng-grid
//http://www.write-less.com/search/ng-grid#jquery-feed-tab
//http://plnkr.co/edit/mpjyAl?p=preview



/* Here is the directive I use. It automatically cleans itself up when the form is unloaded. 
If you want to prevent the prompt from firing (e.g. because you successfully saved the form), 
call $scope.FORMNAME.$setPristine(), where FORMNAME is the name of the form you want to prevent from prompting.

.directive('dirtyTracking', [function () {
    return {
        restrict: 'A',
        link: function ($scope, $element, $attrs) {
            function isDirty() {
                var formObj = $scope[$element.attr('name')];
                return formObj && formObj.$pristine === false;
            }

            function areYouSurePrompt() {
                if (isDirty()) {
                    return 'You have unsaved changes. Are you sure you want to leave this page?';
                }
            }

            window.addEventListener('beforeunload', areYouSurePrompt);

            $element.bind("$destroy", function () {
                window.removeEventListener('beforeunload', areYouSurePrompt);
            });

            $scope.$on('$locationChangeStart', function (event) {
                var prompt = areYouSurePrompt();
                if (!event.defaultPrevented && prompt && !confirm(prompt)) {
                    event.preventDefault();
                }
            });
        }
    };
}]);*/