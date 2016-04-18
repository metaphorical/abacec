"use strict";

const React = require('react');
const homeView = require('./homeView.jsx');
const Immutable = require('immutable');


var HomePage = React.createClass({
	getInitialState() {
		return {
			searchResults: null,
			facetFilters: null,
			searchOverrideNotification: 'Welcome! To begin - start typing your search.',
			loading: false
		};
    },
    render() {
        return homeView(this);
    }
});

module.exports = React.createFactory(HomePage);