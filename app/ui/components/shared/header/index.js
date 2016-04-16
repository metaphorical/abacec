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
		}).catch((err) => {
			console.log('ERROR', err)
		})
	},
	handleChange(e) {
		e.preventDefault();
		setTimeout(() => {
			if(this.searchInput.value.trim().length > 2) {
				this.doSearch();	
			} else {
				this.props.updateResults({});
			}
		}, 500);	
	},
    render() {
        return headerView(this);
    }
});

module.exports = Header;