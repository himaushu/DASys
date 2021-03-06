﻿app.controller('DataUploadController', function ($scope, $http, $parse, CommonService) {
    $scope.TemplateInfo     = CommonService.fetchTemplateInfo(2);
    $scope.gridOptionsInfo  = [];
    $scope.csvData          = [];

    var InfoLen             = $scope.TemplateInfo.Details.length;
    console.dir($scope.TemplateInfo);
    $scope.showContent = function ($fileContent) {
        $scope.content = $fileContent;
        csvJSON();
    };
    

    fetchGridOptionsInfo = function () {
        $scope.gridOptionsInfo = CommonService.fetchGridOptionsInfo();
    };

    //Define dynamic column definitions
    /*fetchGridOptionsInfo = function () {

        $scope.gridOptionsInfo = {
            data: 'csvData',
            columnDefs: [],
            multiSelect: false,
            showSelectionCheckbox: true,
            enableColumnResize: true,
        };

        for (var i = 0; i < $scope.TemplateInfo.length; i++)
        {
            var objColDef = { field: $scope.TemplateInfo[i].Name, displayName: $scope.TemplateInfo[i].Name, width: '*' };

            $scope.gridOptionsInfo.columnDefs.push(objColDef);
        }

    };*/

    //CSV to JSON
    csvJSON = function () {
        var csv = $scope.content;

        if (csv == undefined) {
            console.log('no data');
            return;
        }

        var lines=csv.split('\n');
 
        //var result = [];
 
        //var headers=lines[0].split(",");

        for(var i=0;i<lines.length;i++){
 
            var obj = {};
            var currentline = lines[i].replace('\r', '').split(",");
            
            if (currentline.length == InfoLen) {

                for (var j = 0; j < currentline.length; j++) {
                    if ($scope.TemplateInfo.Details [j].FieldType == 2) {
                        obj[$scope.TemplateInfo.Details[j].FieldName] = parseInt(currentline[j], 10);
                    } else  {
                        obj[$scope.TemplateInfo.Details[j].FieldName] = currentline[j];
                    }
                }
            } else {
                console.log('Length Missmatch :' + lines[i])
            }
            obj['Error'] = '';
            $scope.csvData.push(obj);
        }

        //alert(JSON.stringify($scope.csvData));
        //console.dir(JSON.stringify($scope.csvData));
    };


    fetchGridOptionsInfo();

    $scope.UDgridOptions = $scope.gridOptionsInfo;


    $scope.Fetch = function () {
        //$scope.csvData = [{ "CustomerName": "Narendra Modi", "AcBal": " 18970", "DrCrFlag": " Cr", "BalDate": " 23 Sep 2014" }, { "CustomerName": "James Bond", "AcBal": " 2000", "DrCrFlag": " Dr", "BalDate": " 1 Jan 2014" }, { "CustomerName": "Pramod Shukla", "AcBal": " 5600", "DrCrFlag": " Dr", "BalDate": " 21 Sep 2014" }, { "CustomerName": "Saniya Nehawal", "AcBal": " 600", "DrCrFlag": " Cr", "BalDate": " 1 Aug 2014" }, { "CustomerName": "Perter Brooks", "AcBal": " 23600", "DrCrFlag": " Cr", "BalDate": " 22 March 2014" }];
        $http.get('DBData.csv').success(function (data) {
            $scope.csvData = data;
        });

    };


    $scope.validate = function(){
        var lenDT       = $scope.TemplateInfo.Details.length;
        var lenData     = $scope.csvData.length;
        //Each row
        for(i=0; i < lenData; i++){
            var row     = $scope.csvData[i];
            //console.dir(row);
            var rowError = '';

            //Each field detail
            for (j=0;j<lenDT;j++){
                var detail  = $scope.TemplateInfo.Details[j];

                switch(detail.FieldType)
                {
                    case 1:
                        if(row[detail.FieldName].length > detail.FieldSize){
                            rowError += ' * Field :' + detail.FieldName + ' is more than ' + detail.FieldSize  + ' ';                        
                        }
                        break;
                    case 2:
                        if(isNaN(row[detail.FieldName])){
                            rowError += ' * Invalid data in field :' + detail.FieldName + ' ';
                        }
                        break;
                    default:
                        break;
                }            

            }

            row['Error'] = rowError;
        }

        console.log($scope.csvData)

    };

});


/* http://techslides.com/convert-csv-to-json-in-javascript/
//var csv is the CSV file with headers
function csvJSON(csv){
 
  var lines=csv.split("\n");
 
  var result = [];
 
  var headers=lines[0].split(",");
 
  for(var i=1;i<lines.length;i++){
 
	  var obj = {};
	  var currentline=lines[i].split(",");
 
	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }
 
	  result.push(obj);
 
  }*/

//http://jsfiddle.net/knvzk/10/
//http://buildinternet.com/2013/08/drag-and-drop-file-upload-with-angularjs/
//read File http://jsfiddle.net/alexsuch/6aG4x/
// File upload to server https://github.com/danialfarid/angular-file-upload


//Simple CSV2JSON  http://jsfiddle.net/sturtevant/AZFvQ/
//CSV to JSON http://jsfiddle.net/sturtevant/AZFvQ/

/* http://jsfiddle.net/vHKYH/
csv = """
Year,Make,Model,Description,Price
1997,Ford,E350,"ac, abs, moon",3000.00
1999,Chevy,"Venture ""Extended Edition""\","",4900.00
1999,Chevy,"Venture ""Extended Edition, Very Large""\","",5000.00
1996,Jeep,Grand Cherokee,"MUST SELL!
air, moon roof, loaded",4799.00
"""

$('#test-csv').val csv

grammar = $('#grammar').html()
csvParser = PEG.buildParser(grammar)

$('#parse-button').click ->
    try
        data = csvParser.parse $('#test-csv').val()
        $('#result').removeClass('error').html formatJSON data
    catch error
        $('#result').addClass('error').html formatJSON error





#Utility stuff
RealTypeOf = `function(a){if(typeof a=="object"){if(a===null)return"null";if(a.constructor==(new Array).constructor)return"array";if(a.constructor==(new Date).constructor)return"date";if(a.constructor==(new RegExp).constructor)return"regex";return"object"}return typeof a}`

formatJSON = `function(a,b){if(arguments.length<2){var b=""}var c="    ";var d=RealTypeOf(a);if(d=="array"){if(a.length==0){return"[]"}var e="["}else{var f=0;$.each(a,function(){f++;return});if(f==0){return"{}"}var e="{"}var f=0;$.each(a,function(a,g){if(f>0){e+=","}if(d=="array"){e+="\n"+b+c}else{e+="\n"+b+c+'"'+a+'"'+": "}switch(RealTypeOf(g)){case"array":case"object":e+=formatJSON(g,b+c);break;case"boolean":case"number":e+=g.toString();break;case"null":e+="null";break;case"string":e+='"'+g+'"';break;default:e+="TYPEOF: "+typeof g}f++});if(d=="array"){e+="\n"+b+"]"}else{e+="\n"+b+"}"}return e}`

$('#parse-button').click()



*/