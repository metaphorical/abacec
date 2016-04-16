const React = require('react');
const styles = require('./homeView.css');

const Header = require('../../components/shared/header');
const ResultList = require('../../components/search/resultList');

module.exports = (view) => {
    return (
		<div>
			<Header 
					updateResults={view.reducerFactory("searchResults")}
					updateSearchNotification={view.reducerFactory("searchOverrideNotification")}
					setFacets={view.reducerFactory("facets")}
			/>
			{(view.state.searchResults && !view.state.searchOverrideNotification) ? 
			<ResultList searchResults={view.state.searchResults.hits} />
			: 
			<div className={styles.notification}>
				{view.state.searchOverrideNotification}
			</div>}
		</div>
    );
};