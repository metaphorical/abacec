const React = require('react');
const styles = require('./facetItem.css');

module.exports = (view) => {
	return (
		<div className={styles.container}>
			<div className={styles.name} ><input type="checkbox"/> {view.props.name}</div>
			<div className={styles.count} >{view.props.count}</div>
		</div>
	);
};