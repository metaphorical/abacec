const React = require('react');
const styles = require('./homeView.css');

const Header = require('../../components/shared/header');
const ResultList = require('../../components/search/resultList');
const Facets = require('../../components/search/facets');
	
const reactUtils = require('../../../utility/react.js');

module.exports = (view) => {
    return (
		<div>
			<Header 
					updateResults={reactUtils.reducerFactory(view, "searchResults")}
					updateSearchNotification={reactUtils.reducerFactory(view, "searchOverrideNotification")}
					setFacets={reactUtils.reducerFactory(view, "facets")}
					facetFilters={view.state.facetFilters}
			/>
			
			
			{(view.state.searchResults && !view.state.searchOverrideNotification) ? 
			(<div className={styles.acContainer}>
				<div className={styles.acMainColumn}>
						<ResultList searchResults={view.state.searchResults.hits} />
				</div>
					{(view.state.facets) ?
						<div className={styles.acSidebarColumn}>
								<Facets 
									facets={view.state.facets} 
									updateFacetFilters={reactUtils.reducerFactory(view, 'facetFilters')}
									/>
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