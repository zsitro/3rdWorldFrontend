/*
 * forEach
 */

obj1/* data source */.forEach(methods.method /* method to apply */, methods /* scope */ );

obj1.forEach(function(child){
    methods.method(child);
}

obj1.forEach(methods.method.bind(methods));