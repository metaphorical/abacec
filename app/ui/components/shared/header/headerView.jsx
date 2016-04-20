const React = require('react');
const styles = require('./headerView.css');

module.exports = (view) => {
    return (
		<div className={styles.container}>
			<form onSubmit={view.eventVoid}>
			<input type="text" placeholder="Enter your search" 
						ref={(ref) => view.searchInput = ref} 
						onChange={view.handleChange} 
						onKeyDown={view.handleKeyDown}
						/>	
			</form>
		</div>
    );
};