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
    }
};