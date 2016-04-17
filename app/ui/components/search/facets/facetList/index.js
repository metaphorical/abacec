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
    render() {
        return facetList(this);
    }
});

module.exports = FacetListView;