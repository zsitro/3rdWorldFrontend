/*
 * Iterator
 */

function iterator(){
    var i = 0;
	var a = arguments;
	var n = a.length;
	
	return {
		hasNext: function() {
			return i < n;
		},
		next: function() {
			if (i < n){
				return a[i++];
			} else {
				throw new Error("end of iteration");
			}
		}
	};
}
