var dom = require('component/dom'),
    inherit = require('dfilatov/inherit'),
    Activity = require('./src/common/activity/Activity'),
    MainActivity = require('./src/main/MainActivity'),
    MainView = require('./src/main/MainView');

module.exports = inherit(Activity, {
    __constructor : function() {
        this.__base.apply(this, arguments);
        this._activityManager
            .register('main', MainActivity, MainView);
    },

    start : function() {
        this._container = dom('body');
        this._activityManager.start('main', this._container);
    }
});
