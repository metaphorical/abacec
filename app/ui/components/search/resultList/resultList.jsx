const React = require('react');
const styles = require('./resultList.css');

const ResultCard = require('../resultCard');

module.exports = (view) => {
	const hasResults = (view.props.searchResults.length > 0);
    return (
		<div className={styles.container} >
			{(hasResults) ?
				view.props.searchResults.map((result, i) => {
					result.reactKey = i;
					result.highlighted = (i === view.state.highlightPos) ? true : false;
					return <ResultCard {...result} />
				})
				:
				<h1>No Results</h1>
			}
		</div>
    );
};