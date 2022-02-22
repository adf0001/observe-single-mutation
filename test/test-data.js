
//global variable, for html page, refer tpsvr @ npm.
observe_single_mutation = require("../observe-single-mutation.js");

module.exports = {

	"observe_single_mutation": function (done) {
		_ele('divResult3').innerHTML = "<span myattr='11'>aaa</span>";

		//observe_single_mutation(target, optionOrAttribute, callback= function( mutationItem ) )
		observe_single_mutation(_ele('divResult3').firstChild, "myattr",
			function (mutationItem) {
				if (_ele('divResult3').firstChild.getAttribute("myattr") == "22") { done(false); }
			}
		);

		setTimeout(function () { _ele('divResult3').firstChild.setAttribute("myattr", "22"); }, 500);
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('observe_single_mutation', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
