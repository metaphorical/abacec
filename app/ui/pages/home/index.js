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
			loading: false,
			highlightPos: -1
		};
    },
    render() {
        return homeView(this);
    },
	handleUp() {
		console.log('Position', this.state.highlightPos);
		if(this.state.searchResults) {
			var position = this.state.highlightPos;
			position = (position <= 0) ? this.state.searchResults.hits.length - 1 : (position - 1);
			this.setState({
				highlightPos: position
			});
		}
	},
	handleDown(){
		console.log('Position', this.state.highlightPos);
		if(this.state.searchResults) {
			var position = this.state.highlightPos;
			position = (position === this.state.searchResults.hits.length - 1) ? 0 : (position + 1);
			this.setState({
				highlightPos: position
			});
		}
	},
	handleChoice() {
		console.log('User has chosen: ', this.state.highlightPos);
	}
});

module.exports = React.createFactory(HomePage);