const React = require('react');
const styles = require('./resultCard.css');

module.exports = (view) => {
    return (
		<div className={styles.container}>
			<span>{view.props.result.name}</span>
		</div>
    );
};