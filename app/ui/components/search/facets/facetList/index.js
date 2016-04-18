"use strict";

const React = require('react');
const facetList = require('./facetList.jsx');


var FacetListView = React.createClass({
	getInitialState() {
		return {
            showFacets: false,
            selected: {}
        };
    },
    toggleFacets() {
      var newVal = this.state.showFacets === false;
      this.setState({
         showFacets: newVal
      });
    },
    componentDidUpdate() {
      var facetsEntry = {};
      facetsEntry[this.props.name] = this.state.selected;
      this.props.mergeFacets(facetsEntry);
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