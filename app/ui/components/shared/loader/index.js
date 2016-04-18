const styles = require('./loader.css');
const React = require('react');

var Loader = (props) => {
    return <div className={styles.container}> Loading, please wait...</div>
};


module.exports = Loader;
