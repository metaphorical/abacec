"use strict";

const React = require('react');
const headerView = require('./headerView.jsx');
const SearchModel = require('./../../../models').search;
const searchModel = SearchModel({
	appId: '1MH4O8CODD',
	apikey: 'f5092cc1626fbed7bf001fc826a7d2ac',
	index: 'products'
});

var Header = React.createClass({
	getInitialState() {
		return {};
    },
	doSearch(e) {
		if(e) {
			e.preventDefault();
		}
		var text = this.searchInput.value.trim();
		searchModel.fetch(text).then((results) => {
			// Object.keys(results.toJSON().facets).forEach((key) => {
			// 	console.log('facet: ', key);
			// 	Object.keys(results.toJSON().facets[key]).forEach((name) => {
			// 		console.log("   " + name + ": ", results.toJSON().facets[key][name]);
			// 	});
			// });
			this.props.updateResults(results.toJSON());
			this.props.setFacets(results.toJSON().facets);
			this.props.updateSearchNotification(null)
		}).catch((err) => {
			console.log('ERROR', err)
		})
	},
	handleChange(e) {
		e.preventDefault();
		setTimeout(() => {
			if(this.searchInput.value.trim().length > 3) {
				this.doSearch();	
			} else if(length !== 0) {
				this.props.updateSearchNotification('Search criteria has to be longer than 3 characters')
			} else {
				this.props.updateSearchNotification('To start enter your search');
				this.props.updateResults(null);
			}
		}, 500);	
	},
    render() {
        return headerView(this);
    }
});

module.exports = Header;