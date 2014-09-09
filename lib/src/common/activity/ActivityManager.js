var inherit = require('dfilatov/inherit');

module.exports = inherit({
    __constructor : function() {
        this._decls = {};
        this._instances = {}
    },

    register : function(id, activityCls, viewCls) {
        this._decls[id] = {
            activityCls : activityCls,
            viewCls : viewCls
        };
        return this;
    },

    getActivity : function(id) {
        var instance = this._instances[id];
        if(!instance) {
            var decl = this._decls[id];
            instance = this._instances[id] = new decl.activityCls(decl.viewCls);
        }
        return instance;
    },

    start : function(id, params) {
        var activity = this.getActivity(id);
        if(activity.isStarted()) {
            activity.stop();
        }
        activity.start(params);
        return this;
    },

    stop : function(id) {
        this.getActivity(id).stop();
        return this;
    }
});
