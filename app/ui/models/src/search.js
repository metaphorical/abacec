"use strict";
const algoliasearch = require('algoliasearch');
const Immutable = require('immutable');


const SearchModel = function(options) {
	const client = algoliasearch(options.appId, options.apikey);
	const index = client.initIndex(options.index);
	var _data = null;
	return {
		fetch: function(text) {
            return new Promise((resolve, reject) => {
				index.search(text, {
					attributesToRetrieve: ['name', 'hierarchicalCategories'],
					hitsPerPage: 50,
					facets: "*"
				}, function searchDone(err, response) {
					if(err) {
						reject(err);
					} else {
						//@TODO: build search caching (or use falcor :D )
						_data = Immutable.fromJS(response);
						resolve(_data);
					}
				});	
			});
		}
	}
};

module.exports = SearchModel;