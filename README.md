# observe-single-mutation
call MutationObserver.observe() for single object, default for single attribute.

# Install
```
npm install observe-single-mutation
```

# Usage & Api
```javascript

var observe_single_mutation = require("observe-single-mutation");

_ele('divResult3').innerHTML = "<span myattr='11'>aaa</span>";

//observe_single_mutation(target, optionOrAttribute, callback= function( mutationItem ) )
observe_single_mutation(_ele('divResult3').firstChild, "myattr",
	function (mutationItem) {
		if (_ele('divResult3').firstChild.getAttribute("myattr") == "22") { done(false); }
	}
);

setTimeout(function () { _ele('divResult3').firstChild.setAttribute("myattr", "22"); }, 500);

```
