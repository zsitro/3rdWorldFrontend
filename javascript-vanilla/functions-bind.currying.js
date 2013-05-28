// http://jsbin.com/uwawoj/1/edit

var original = function(a,b,c){
    return a + b + c;
}

var curry = original.bind(null, 1, 2);

console.log( original(1,2,3), curry(3), original(1,2,3) === curry(3) );

