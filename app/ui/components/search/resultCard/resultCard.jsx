const React = require('react');
const styles = require('./resultCard.css');

module.exports = (view) => {
    return (
		<div className={styles.container} key={view.props.reactKey}>
			<p className={styles.title} dangerouslySetInnerHTML={view.getHighlightedName()} />
			<span className={styles.category}>{view.getCategory()}</span>
		</div>
    );
};