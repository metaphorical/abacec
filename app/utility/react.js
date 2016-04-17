const Immutable = require('immutable');
module.exports = {
	reducerFactory(context, stateKey) {
		var that = context;
		return function(entry) {
			var mergeEntryJS = {}; 
				mergeEntryJS[stateKey] = entry;
			var currentJS = {};
			if(typeof that.state[stateKey] !== 'undefined') {
				currentJS[stateKey] = that.state[stateKey];
			}	
		    var current = Immutable.fromJS(currentJS);
            var extended = current.merge(mergeEntryJS);
            if (!current.equals(extended)) {
				var stateAddition = extended.toJSON();
                that.setState(stateAddition);
            }
		};	
	}
};