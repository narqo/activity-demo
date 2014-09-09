var inherit = require('dfilatov/inherit'),
    vow = require('dfilatov/vow'),
    jsonp = require('webmodules/jsonp');

module.exports = inherit({
    __constructor : function(id, url) {
        this._id = id;
        this._url = url;
        this._promise = null;
    },

    start : function(params) {
        var defer = this._promise = vow.defer();
        jsonp(this._url, params, function(err, data) {
            err?
                defer.reject(err) :
                defer.resolve(data);
        });
        return defer.promise();
    },

    stop : function() {
        // TODO: `Loader#stop()`
    }
}, {
    create : function(id, url) {
        return new this(id, url)
    }
});
