var inherit = require('dfilatov/inherit'),
    View = require('../common/view/View');

module.exports = inherit(View, {}, {
    build : function() {
        return '<div id="root"></div>';
    }
});
