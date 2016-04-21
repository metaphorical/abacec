"use strict";
const algoliasearch = require('algoliasearch');
const Immutable = require('immutable');


const SearchModel = function(options) {
	const client = algoliasearch(options.appId, options.apikey);
	const index = client.initIndex(options.index);
	var _data = null;
	return {
		fetch: function(params) {
			var text = params.text;
			var parameters = Object.assign({
					attributesToRetrieve: ['name', 'hierarchicalCategories'],
					hitsPerPage: 10,
					facets: "*"
				}, params);
			delete parameters.text;
            return new Promise((resolve, reject) => {
				index.search(text, parameters, function searchDone(err, response) {
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