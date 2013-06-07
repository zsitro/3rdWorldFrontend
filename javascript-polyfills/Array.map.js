if ( !Array.prototype.map) {
  Array.prototype.map = function(fn, thisArg) {
    var result = [];
    for(var i = 0, n = this.length; i < n; i++) {
      result[i] = fn.call(thisArg, this[i], i);
    }
    
    return result;
  };
}