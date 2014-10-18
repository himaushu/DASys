app.service('TemplateService', function(){

    //Static Data 
    //var dataTypes       = [{Id:1, Name:'String'}, {Id:2, Name:'Numeric'}, {Id:3, Name:'Boolean'}, {Id:4, Name:'Date'}];
    var dataTypes       = { 1: 'String', 2: 'Numeric', 3: 'DateTime', 4: 'Other' };// {Id:2, Name:'Numeric'}, {Id:3, Name:'Boolean'}, {Id:4, Name:'Date'}];
    var statuses        = [{ Id: 1, Name: 'Active' }, { Id: 2, Name: 'Deactive' }, { Id: 1, Name: 'Suspended' }];
    var updateFrequency = [{ Id: 1, Name: 'Frequently' }, { Id: 2, Name: 'Once a Week' }, { Id: 3, Name: 'Once in a Month' }];
    var boolVal         = { 1: 'True', 2: 'False' };

    var templates       = [{ Id: 1, Name: 'Default' }];
    //Dynamic code
    //var templateInfo    = {};

    //var templateDetails = [];//[{Id:1, FieldName:'Field1', FieldType:1, FieldSize:10, FieldValidations:'', Nullable:true, IsPrimaryKey:false }];

    var dbDetails       = [{ Id: 1, Name: 'SQLServer' }, { Id: 2, Name: 'MangoDB' }];

    var cnt = 0;


    this.getDataTypes = function(){
      return dataTypes;
    };

    this.getStatuses = function(){
      return statuses;
    };

    this.getTemplates = function(){
      return templates;
    };

   
    this.getDBDetails = function () {
        return dbDetails;
    };
    /*this.getTemplateDetails = function(){
      cnt++;
      templateDetails.push(tmp());
      return templateDetails;
    };*/

    this.getTemplateDetailsNewRow = function(){
        cnt++;
        return tmp();
    };
    //Can used with RESTful service to fetch realtime data
    this.getTemplateInfo = function (Id)
    {
        var tmlt = {Id: 2, Name: 'CustomerCare', TableName: 'tbl_CustomerNetWroth', UpdateFrequency: 1, FirstLineHeader: 1,
                MakerCheckerReq: 2, ReplaceData: 1, DBId: 1, Status: 1, Details: [], CreatedBy: 1, CreatedOn: '15 Sep 2014'};
          
        tmlt.Details = [
                {Id:1, FieldName: 'CustomerName', FieldType: 1, FieldSize: 20, FieldValidations: '[a-z][A-Z][0-9][space]'   , IsNullable: 1, ValidationList: [], IsPrimaryKey:false}, 
                {Id:2, FieldName: 'AcBal'       , FieldType: 2, FieldSize: 10, FieldValidations: '[0-100000]'               , IsNullable: 1, ValidationList: [], IsPrimaryKey:false}, 
                {Id:3, FieldName: 'DrCrFlag'    , FieldType: 2, FieldSize: 10, FieldValidations: ''                         , IsNullable: 1, ValidationList: [{1:'Dr'},{2:'Cr'}], IsPrimaryKey:false}, 
                {Id:4, FieldName: 'BalDate'     , FieldType: 2, FieldSize: 10, FieldValidations: '["dd-mm-yyyy"]["01-01-1990"]', IsNullable: 1, ValidationList: [], IsPrimaryKey:false} 
                        ];
        return tmlt;
    };

    this.getNewTemplateInfo = function ()
    {
        var templateInfo = {
            Id: 1, Name: 'Default', TableName: '', UpdateFrequency: 1, FirstLineHeader: 1,
            MakerCheckerReq: 2, ReplaceData: 1, DBId: 1, Status: 1, Details: [], CreatedBy: 1, CreatedOn: '15 Sep 2014'};    

        templateInfo.Details.push(this.getTemplateDetailsNewRow());

        return templateInfo;
    };

    this.getBoolVal = function(){
      return boolVal;
    };

    this.getUpdateFrequency = function(){
      return updateFrequency;
    };

    //TemplateDetails sample
    var tmp = function(){
        var ret = {Id:0, FieldName:'<Field' + cnt + '>', FieldType:1, FieldSize:10,  FieldValidations:'', Nullable:1, ValidationList : [],  IsPrimaryKey:false };
     return ret ;
    };

});


