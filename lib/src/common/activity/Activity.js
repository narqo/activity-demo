var inherit = require('dfilatov/inherit'),
    ActivityManager = require('./ActivityManager');

module.exports = inherit({
    __constructor : function(viewCls) {
        this._activityManager = new ActivityManager();
        this._viewCls = viewCls;

        this._view = null;
        this._container = null;
        this._started = false;
    },

    start : function(container, params) {
        if(!this._started) {
            this._params = params;
            this._container = container;
            this._start();
            this._started = true;
        }
        return this;
    },

    _start : function() {
        this._createView();
        this._onStart();
    },

    stop : function() {
        if(this._started) {
            this._stop();
            this._container = null;
            this._started = false;
        }
        return this;
    },

    _stop : function() {
        this._view.remove();
        this._view = null;
        this._params = null;
        this._onStop();
    },

    isStarted : function() {
        return this._started;
    },

    _onStart : function() {},

    _onStop : function() {},

    _createView : function() {
        this._view = this._viewCls.create(this._params);
        this._view.domElem.appendTo(this._container);
    }
});
