var inherit = require('dfilatov/inherit'),
    View = require('../common/view/View');

/**
 * @class HelloView
 * @augments View
 */
module.exports = inherit(View, {}, {
    create : function(params) {
        return '<p>Hello, ' + params.name + '</p>';
    }
});
