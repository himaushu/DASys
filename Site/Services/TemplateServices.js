app.service('TemplateService', function(){

    //Static Data 
    //var dataTypes       = [{Id:1, Name:'String'}, {Id:2, Name:'Numeric'}, {Id:3, Name:'Boolean'}, {Id:4, Name:'Date'}];
    var dataTypes       = { 1: 'String', 2: 'Numeric', 3: 'DateTime', 4: 'Other' };// {Id:2, Name:'Numeric'}, {Id:3, Name:'Boolean'}, {Id:4, Name:'Date'}];
    var statuses        = [{ Id: 1, Name: 'Active' }, { Id: 2, Name: 'Deactive' }, { Id: 1, Name: 'Suspended' }];
    var updateFrequency = [{ Id: 1, Name: 'Frequently' }, { Id: 2, Name: 'Once a Week' }, { Id: 3, Name: 'Once in a Month' }];
    var boolVal         = { 1: 'True', 2: 'False' };

    var templates       = [{ Id: 1, Name: 'Default' }];
    //Dynamic code
    var templateInfo    = {
        Id: 1, Name: 'Default', TableName: '', UpdateFrequency: 1, FirstLineHeader: 1,
        MakerCheckerReq: 2, ReplaceData: 1, DBId: 1, Status: 1, Details: [], CreatedBy: 1, CreatedOn: '15 Sep 2014'
    };
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

    this.getTemplateInfo = function(){
      templateInfo.Details.push(this.getTemplateDetailsNewRow());
      return templateInfo;
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
      //console.log(cnt);
      return tmp();
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


