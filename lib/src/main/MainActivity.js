var inherit = require('dfilatov/inherit'),
    Activity = require('../common/activity/Activity'),
    ContactsActivity = require('./../contacts/ContactsActivity'),
    ContactsView = require('./../contacts/ContactsView');

module.exports = inherit(Activity, {
    __constructor : function() {
        this.__base.apply(this, arguments);
        this._activityManager
            .register('contacts', ContactsActivity, ContactsView);
    },

    _createView : function() {
        this._view = this._viewCls.findView(this._container, 'root');
        if(this._view == null) {
            this.__base();
        }
    },

    _onStart : function() {
        this._activityManager
            .start('contacts', this._view.domElem);
    }
});
