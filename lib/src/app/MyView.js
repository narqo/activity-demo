var inherit = require('dfilatov/inherit'),
    View = require('../common/view/View');

/**
 * @class MyView
 * @augments View
 */
module.exprots = inherit(View, null, /** @lends View */{
    /** @override */
    create : function() {
        return '<h1>My view</h1>';
    }
});
