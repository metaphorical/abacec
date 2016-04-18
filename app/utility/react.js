const Immutable = require('immutable');
module.exports = {
	/**
	 * Factory for producing state mutators (AKA reducers)
	 */
	reducerFactory(context, stateKey) {
		var that = context;
		return function(entry, clean) {
			var stateAddition = {};
			/**
			 * if new state entry is not an object or is null (typeof null is object),
			 * we are just doing simple comparison and setting new value
			 */
			if((typeof entry !== 'object') || (entry === null)) {
				if((typeof that.state[stateKey] !== 'undefined')) {
					if (entry !== that.state[stateKey]) {
						stateAddition[stateKey] = entry;
						that.setState(stateAddition);
					} else {
						return;
					}
				} else {
					stateAddition[stateKey] = entry;
					that.setState(stateAddition);
				}
			} else {
				/**
				 * In more complex case of having to deal with updateing state entry that is object.
				 */
				var currentJS = null;
				if((typeof that.state[stateKey] !== 'undefined') && (that.state[stateKey] !== null)) {
					currentJS = that.state[stateKey];
					var current = Immutable.fromJS(currentJS);
					var extended = current.merge(entry);
					if (!current.equals(extended) && !clean) {
						stateAddition[stateKey] = extended.toJSON();
						that.setState(stateAddition);
					} else if(clean && !current.equals(Immutable.fromJS(entry))) {
						stateAddition[stateKey] = entry;
						that.setState(stateAddition);
					} else {
						return
					}
				} else {
					stateAddition[stateKey] = entry;
					that.setState(stateAddition);
				}	
				
			}
		};	
	}
};