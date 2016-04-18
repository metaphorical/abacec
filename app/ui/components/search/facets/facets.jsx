const React = require('react');
const styles = require('./facets.css');

const FacetList = require('./facetList');

const reactUtils = require('../../../../utility/react.js');

module.exports = (view) => {
	return (
		<div className={styles.container}>
			<h5 className={styles.title}>Improve your results - fine tune your criteria</h5>
			<div>
				{Object.keys(view.props.facets).map((key, i) => {
						return <FacetList 
										name={key} 
										key={i} 
										facets={view.props.facets[key]}
										mergeFacets={reactUtils.reducerFactory(view, 'selected')}/>
					})}
			</div>
		</div>
	);
};