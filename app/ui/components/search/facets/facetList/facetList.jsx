const React = require('react');

const styles = require('./facetList.css');
const FacetItem = require('../facetItem');

const reactUtils = require('../../../../../utility/react.js');

module.exports = (view) => {
	return (
		<div className={styles.container} key={view.props.key} >
			<div onClick={view.toggleFacets} className={styles.toggleFacets}>{view.getFacetName()} ({Object.keys(view.props.facets).length})</div>
			{(view.state.showFacets) ? 
				Object.keys(view.props.facets).map((name) => {
					return <FacetItem 
								name={name} 
								count={view.props.facets[name]} 
								selected = {view.state.selected[name] ? true : false}
								addCriteria={reactUtils.reducerFactory(view, 'selected')} />;
				}) :
			null}
		</div>
	);
};