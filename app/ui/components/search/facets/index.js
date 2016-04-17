"use strict";

const React = require('react');
const facetsView = require('./facets.jsx');


var Facets = React.createClass({
	getInitialState() {
		return {};
    },
    render() {
        return facetsView(this);
    }
});

module.exports = Facets;