function Classname(name, prop1) {
    this.name = name;    
    this.prop1 = prop1;
}

Classname.prototype.toString = function() {
    return "[Class " + this.name + "]";
};

Classname.prototype.getName = function() {
    return this.name;
};

var instance = new Classname("instance1", "value1");