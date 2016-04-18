"use strict";

const React = require('react');
const facetsView = require('./facets.jsx');


var Facets = React.createClass({
	getInitialState() {
		return {
            selected:{}
        };
    },
    componentDidUpdate() {
        this.props.updateFacetFilters(this.state.selected);
    },
    render() {
        return facetsView(this);
    }
});

module.exports = Facets;