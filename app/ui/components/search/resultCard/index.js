"use strict";

const React = require('react');
const resultCard = require('./resultCard.jsx');


var ResultCard = React.createClass({
	getInitialState() {
		return {
            highlighted: false
        };
    },
    getCategory() {
        // Because of potential length of anything above hierarchicalCategories.lvl1
        // Checking for lvl2 and if it is not there going for lvl1 or lvl0, and if that is not there also, go with empty string
        return this.props.hierarchicalCategories ? 
                      (this.props.hierarchicalCategories.lvl2 || 
                       this.props.hierarchicalCategories.lvl1 || 
                       this.props.hierarchicalCategories.lvl0 || 
                       '') : ''; 
    },
    componentDidUpdate(prevProps) {
        if(prevProps.highlighted !== this.props.highlighted) {
            this.setState({
                highlighted: this.props.highlighted 
            });      
        }
    },
    getHighlightedName() {
        // Needed to insert html to jsx
        return {
            __html: this.props._highlightResult.name.value
        }
    },
    render() {
        return resultCard(this);
    }
});

module.exports = ResultCard;