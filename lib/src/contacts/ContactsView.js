var inherit = require('dfilatov/inherit'),
    View = require('../../src/common/view/View');

module.exports = inherit(View, {
    __constructor : function() {
        this.__base.apply(this, arguments);
        this.domElem
            .find('#getContactsBtn')
            .on('click', this._onGetContactsBtnClick.bind(this));
    },

    _onGetContactsBtnClick : function() {
        this.emit('contacts-click');
    }
}, {
    build : function() {
        return '' +
            '<div id="contacts">' +
                '<button id="getContactsBtn">Ok</button>' +
            '</div>';
    }
});
