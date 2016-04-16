"use strict";

const React = require('react');
const homeView = require('./homeView.jsx');
const Immutable = require('immutable');


var HomePage = React.createClass({
	getInitialState() {
		return {
			searchResults: null,
			searchOverrideNotification: 'To start enter your search'
		};
    },
	reducerFactory(stateKey) {
		
		var that = this;
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
	},

    render() {
        return homeView(this);
    }
});

module.exports = React.createFactory(HomePage);