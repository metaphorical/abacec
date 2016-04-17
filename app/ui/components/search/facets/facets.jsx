const React = require('react');
const styles = require('./facets.css');

const FacetList = require('./facetList');

module.exports = (view) => {
	return (
		<div>
			<h5 className={styles.title}>Improve your results - rafine criteria</h5>
			<div className={styles.container}>
				{Object.keys(view.props.facets).map((key, i) => {
						return <FacetList name={key} key={i} facets={view.props.facets[key]}/>
					})}
			</div>
		</div>
	);
};
					// Object.keys(view.props.facets[key]).map((name) => {
					// 	return (
					// 				<div className={styles.facetContainer}>
					// 						<span>{name}</span>
					// 						<span>{view.props.facets[key][name]}</span>
					// 				</div>
					// 				);
					// });