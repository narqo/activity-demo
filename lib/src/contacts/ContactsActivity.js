var inherit = require('dfilatov/inherit'),
    Activity = require('../../src/common/activity/Activity');

module.exports = inherit(Activity, {
    _onStart : function() {
        this._view.on('contacts-click', this._onContactsClick.bind(this));
    },

    _onContactsClick : function(e) {
        console.log(e);
    }
});
