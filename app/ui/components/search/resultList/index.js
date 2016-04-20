"use strict";

const React = require('react');
const resultList = require('./resultList.jsx');
const searchModel = require('../../../models').search;


var ResultList = React.createClass({
	getInitialState() {
		return {};
    },
    componentDidUpdate(prevProps) {
        if(prevProps.highlightPos !== this.props.highlightPos) {
            this.setState({
                highlightPos: this.props.highlightPos 
            });      
        }
    },
    render() {
        return resultList(this);
    }
});

module.exports = ResultList;