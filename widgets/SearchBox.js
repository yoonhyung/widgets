define([
    'dojo/_base/declare',
    'dojo/dom-style',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'text!./templates/SearchBox.html'
], function(
    declare,
    domStyle,
    _WidgetBase,
    _TemplatedMixin,
    template
) {
    var SearchBox = declare([_WidgetBase, _TemplatedMixin], {
        value: '',
        templateString: template,
        baseClass: 'SearchBox',
        postCreate: function() {
            this.inherited(arguments);
        },
        _setValueAttr: {
            node: 'focusNode',
            type: 'attribute',
            attribute: 'value'
        },
        _getValueAttr: function () {
            var value = this.focusNode.value;
            this.set('value', value);

            return this._get('value');
        },
        // 내부 이벤트 처리
        _onInput: function() {
            domStyle.set(this.clearNode, 'display', 'block');

            var value = this.focusNode.value;
            if (!value) {
                this._onClear();
            }

            return this.onInput(value);
        },
        _onClear: function() {
            domStyle.set(this.clearNode, 'display', 'none');
            this.set('value', '');

            return this.onClear();
        },
        // 외부 노출 이벤트: 확장 포임트 (onInput, onClear)
        onInput: function(/*String*/ value) {
            // nothing here: the extension point!
            console.info('occur onInput event');
        },
        onClear: function() {
            // nothing here: the extension point!
            console.info('occur onclear event');
        }
    });

    return SearchBox;
});
