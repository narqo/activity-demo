var inherit = require('dfilatov/inherit'),
    dom = require('component/dom'),
    Emitter = require('component/emitter');

/**
 * @class View
 */
module.exports = inherit({
    __constructor : function(domElem) {
        Emitter(this);
        this.domElem = domElem;
    }
}, {
    create : function(params) {
        return new this(dom(this.build(params)));
    },

    build : function() {
        return '<div></div>';
    },

    findView : function(ctx, id) {
        var domElem = dom(ctx).find('#' + id);
        if(domElem) {
            return new this(domElem);
        }
        return null;
    }
});
