module.exports = {
    hasDeepProp: function (obj /*, level1, level2, ... levelN*/) {
        var args = Array.prototype.slice.call(arguments, 1);
        var object = obj;
        for (var i = 0; i < args.length; i++) {
            if ((typeof object === 'undefined') || (typeof object[args[i]] === 'undefined')) {
                return false;
            }
            object = object[args[i]];
        }
        return true;
    },
	isObject(obj) {
		return (obj instanceof Object);	
	},
	deepMerge(target, source) {
		if (this.isObject(target) && this.isObject(source)) {
			Object.keys(source).forEach((key) => {
				if (this.isObject(source[key])) {
					if (!target[key]) Object.assign(target, { [key]: {} });
					this.deepMerge(target[key], source[key]);
				} else {
					Object.assign(target, { [key]: source[key] });
				}
			});
		}
		return target;
	}
};