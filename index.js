/*
 * This demo module is only expose/export one function call 'calc',
 * it will return 2 (1+1). Only the functions or attributes attached
 * on exports can be used in other apps or modules.
 */

/**
 * 1 + 1 function
 */
exports.calc = function() {
	return 1 + 1;
}

/* End of file */
