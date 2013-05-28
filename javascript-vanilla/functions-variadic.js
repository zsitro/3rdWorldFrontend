/*
 * Variadic Functions
 */
(function(){
    
	/* All in one */
	var args = [].slice.call(arguments);
	
	/* Just opts */
	var args = [].slice.call(arguments, 2);
	
})(a, b, opt1, opt2, opt3);