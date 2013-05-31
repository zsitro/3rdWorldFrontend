var myObject = function() {
    this.names = "pony,cat".split(",");
    this.prefix = "Mr. ";

};

/* 
 * You can avoid _this/that/me extra aliases like here
 */
myObject.prototype.getNames = function() {
    var _this = this;
    return this.names.map(function(name){
        return _this.prefix + name;
    });
}; // ["Mr. pony", "Mr. cat"]

/*
 * with function(){}.bind(this);
 */
myObject.prototype.getNames = function() {
    return this.names.map(function(name){
        return this.prefix + name;
    }.bind(this));
}; // ["Mr. pony", "Mr. cat"]