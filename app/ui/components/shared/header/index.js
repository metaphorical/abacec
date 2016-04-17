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
			} else if(this.searchInput.value.trim().length > 0) {
				this.props.updateSearchNotification('Your search criteria has to be longer than 3 characters');
			} else {
				this.props.updateSearchNotification('Welcome! To begin - start typing your search.');
				this.props.updateResults(null);
			}
		}, 500);	
	},
    render() {
        return headerView(this);
    }
});

module.exports = Header;