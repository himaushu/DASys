app.filter('dtFltr', function(TemplateService){
    return function (Input) {

        var a = function () {
      if (!dt){
        return TemplateService.getDataTypes();
      }
    };
    
    var dt = a ();     
    //console.log(dt);
    //console.log(Input);
    //console.log(dt);

    if (dt [Input]){
      return dt[Input] ;
    }else{
      return 'unknown';        
    }
  }

});

app.filter('boolFltr', function (TemplateService) {
    return function (Input) {

        var a = function () {
            if (!dt) {
                return TemplateService.getBoolVal();
            }
        };

        var dt = a();

        if (dt[Input]) {
            return dt[Input];
        } else {
            return 'unknown';
        }
    }

});

/*app.filter('BoolValFilter', function(){
  
 return function(BoolVal){
    return function (id){
            console.write('test again');      
      if (BoolVal[id]){
        return BoolVal[id].Name;
      }else{
        return 'unknown';        
      }
    }
  }

});*/