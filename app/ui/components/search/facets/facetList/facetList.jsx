const React = require('react');

const styles = require('./facetList.css');

const FacetItem = require('../facetItem');

module.exports = (view) => {
	return (
		<div className={styles.container} key={view.props.key} >
			<div onClick={view.toggleFacets} className={styles.toggleFacets}>{view.props.name}</div>
			{(view.state.showFacets) ? 
				Object.keys(view.props.facets).map((name) => {
					return <FacetItem name={name} count={view.props.facets[name]} />;
				}) :
			null}
		</div>
	);
};