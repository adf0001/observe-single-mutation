
// observe-single-mutation @ npm,
// call MutationObserver.observe() for single object (the last one), default for single attribute.

//observe_single_mutation(target, optionOrAttribute, callback= function( mutationItem ) )
module.exports = function (target, optionOrAttribute, callback) {
	if (typeof optionOrAttribute === "string") optionOrAttribute = { attributes: true, attributeFilter: [optionOrAttribute], attributeOldValue: true };

	var mo = new MutationObserver(function (mutationList) { return callback(mutationList[mutationList.length - 1]); });
	mo.observe(target, optionOrAttribute);
	return mo;
}
