const React = require('react');
const styles = require('./homeView.css');

const Header = require('../../components/shared/header');
const ResultList = require('../../components/search/resultList');
const Facets = require('../../components/search/facets');

module.exports = (view) => {
    return (
		<div>
			<Header 
					updateResults={view.reducerFactory("searchResults")}
					updateSearchNotification={view.reducerFactory("searchOverrideNotification")}
					setFacets={view.reducerFactory("facets")}
			/>
			
			
			{(view.state.searchResults && !view.state.searchOverrideNotification) ? 
			(<div className={styles.acContainer}>
				<div className={styles.acMainColumn}>
						<ResultList searchResults={view.state.searchResults.hits} />
				</div>
					{(view.state.facets) ?
						<div className={styles.acSidebarColumn}>
								<Facets facets={view.state.facets} />
						</div>
						: null }
			</div>)
			: 
			(<div className={styles.notification}>
						{view.state.searchOverrideNotification}
			</div>)}
		</div>
    );
};