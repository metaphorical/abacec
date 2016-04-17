"use strict";

const React = require('react');
const facetItem = require('./facetItem.jsx');


var FacetItemView = React.createClass({
	getInitialState() {
		return {};
    },
    render() {
        return facetItem(this);
    }
});

module.exports = FacetItemView;