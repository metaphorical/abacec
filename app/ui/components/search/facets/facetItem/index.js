"use strict";

const React = require('react');
const facetItem = require('./facetItem.jsx');


var FacetItemView = React.createClass({
	getInitialState() {
		return {};
    },
    changeHandler(e) {
      var selected = false;
      var entry = {};
      if(e.target.checked) {
          selected = true;
      } else {
          selected = false;
      }
      entry[this.props.name] = selected;
      this.props.addCriteria(entry);
    },
    render() {
        return facetItem(this);
    }
});

module.exports = FacetItemView;