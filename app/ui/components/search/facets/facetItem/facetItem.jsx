const React = require('react');
const styles = require('./facetItem.css');

module.exports = (view) => {
	return (
		<div className={styles.container} key={view.props.key} >
			<div className={styles.name} ><input type="checkbox" onChange={view.changeHandler} checked={view.props.selected} /> {view.props.name}</div>
			<div className={styles.count} >{view.props.count}</div>
		</div>
	);
};