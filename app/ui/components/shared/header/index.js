"use strict";

const React = require('react');
const Immutable = require('immutable');

const headerView = require('./headerView.jsx');
const SearchModel = require('./../../../models').search;

const searchModel = SearchModel({
	appId: '1MH4O8CODD',
	apikey: 'f5092cc1626fbed7bf001fc826a7d2ac',
	index: 'products'
});

const reactUtils = require('../../../../utility/react.js')
const objectUtils = require('../../../../utility/object.js')

var Header = React.createClass({
	getInitialState() {
		return {
			facets: {},
			facetFilters: {}
		};
    },
	doSearch(e) {
		if(e) {
			e.preventDefault();
		}
		this.props.setLoading(true);
		var that = this;
		var text = this.searchInput.value.trim();
		var searchParams = {};
		searchParams.text = text;
		if(this.generateFacetFilters() && this.generateFacetFilters().length !== 0) {
			searchParams.facetFilters = this.generateFacetFilters();
		}  
		searchModel.fetch(searchParams).then((results) => {
			this.props.updateResults(results.toJSON());
			this.props.setFacets(results.toJSON().facets);
			this.setState({
				facets: results.toJSON().facets
			});
			this.props.updateSearchNotification(null);
			that.props.setLoading(false);
			
		}).catch((err) => {
			that.props.setLoading(false);		
			console.log('ERROR', err);
		})
	},
	updateFacetFilters(facetFiltersObject, clean) {
		var cleaning = clean || false;
		reactUtils.reducerFactory(this, 'facetFilters')(facetFiltersObject, cleaning);
	},
	componentDidUpdate(prevP, prevS) {
		this.updateFacetFilters(this.generateFacetFilters(), true);
		var prevFF = (typeof prevP.facetFilters === 'object' && prevP.facetFilters!== null) ? Immutable.fromJS(prevP.facetFilters) : Immutable.fromJS({});
		var currFF = (typeof this.props.facetFilters === 'object' && this.props.facetFilters !== null) ? Immutable.fromJS(this.props.facetFilters) : Immutable.fromJS({});
		
		if(!currFF.equals(prevFF)) {
			this.doSearch();
		}
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
						if(key && this.props.facetFilters[check[0]][check[1]] && objectUtils.hasDeepProp(this.state.facets, check[0], check[1])) {
							return true;
						}
					});
				} else if(this.props.facetFilters[groupName][keys[0]] && objectUtils.hasDeepProp(this.state.facets, groupName, keys[0])){
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
	handleKeyDown(e) {
		if(e.keyCode === 38) {
			this.props.handleUp();
		}	
		if(e.keyCode === 40) {
			this.props.handleDown();
		}	
		if(e.keyCode === 13) {
			this.props.handleChoice();
		}	
	},
	eventVoid(e) {
		e.preventDefault;
		return;
	},
    render() {
        return headerView(this);
    }
});

module.exports = Header;