"use strict";

const React = require('react');
const headerView = require('./headerView.jsx');
const SearchModel = require('./../../../models').search;

const searchModel = SearchModel({
	appId: '1MH4O8CODD',
	apikey: 'f5092cc1626fbed7bf001fc826a7d2ac',
	index: 'products'
});

const reactUtils = require('../../../../utility/react.js')

var Header = React.createClass({
	getInitialState() {
		return {
			facetFilters: null,
			facets: null
		};
    },
	doSearch(e) {
		if(e) {
			e.preventDefault();
		}
		var text = this.searchInput.value.trim();
		searchModel.fetch(text).then((results) => {
			this.props.updateResults(results.toJSON());
			this.props.setFacets(results.toJSON().facets);
			this.setState({
				facets: results.toJSON().facets
			});
			this.props.updateSearchNotification(null)
		}).catch((err) => {
			console.log('ERROR', err)
		})
	},
	updateFacetFilters(facetFiltersObject) {
		reactUtils.reducerFactory(this, 'facetFilters')(facetFiltersObject);
	},
	componentDidUpdate() {
		this.updateFacetFilters(this.generateFacetFilters(), true);
	},
	generateFacetFilters() {
		if(this.props.facetFilters) {
			return Object.keys(this.props.facetFilters).map((groupName) => {
				var keys = Object.keys(this.props.facetFilters[groupName]);
				if(keys.length > 1) {
					return keys.map((facetName) => {
						if(this.props.facetFilters[groupName][facetName]) {
							return groupName + ":" + facetName;
						}
					}).filter((key) => {
						var check = key ? key.split(':') : null;
						if(key && this.props.facetFilters[check[0]][check[1]]) {
							return true;
						}
					});
				} else if(this.props.facetFilters[groupName][keys[0]]){
					return groupName + ":" + keys[0];
				}
			}).filter((key) => {
						if(key && key.length > 1) {
							return true;
						}
					});		
		} else {
			return null;
		}
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