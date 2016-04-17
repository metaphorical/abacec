"use strict";

const React = require('react');
const facetList = require('./facetList.jsx');


var FacetListView = React.createClass({
	getInitialState() {
		return {
            showFacets: false
        };
    },
    toggleFacets() {
      var newVal = this.state.showFacets === false;
      this.setState({
         showFacets: newVal
      });
    },
    getFacetName() {
      //For now override just category lvl1 if it is the case
      return this.props.name.includes('Categories') ? 'Category' : (this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1));
    },
    render() {
        return facetList(this);
    }
});

module.exports = FacetListView;