define([
    'dojo/_base/declare',
    'dojo/dom-attr',
    'dojo/dom-style',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'text!./templates/Card.html'
], function(
    declare,
    domAttr,
    domStyle,
    _WidgetBase,
    _TemplatedMixin,
    template
) {
    var Card = declare([_WidgetBase, _TemplatedMixin], {
        title: '',
        subTitle: '',
        expandableButton: true,
        expandableButtonIcon: '',
        baseClass: 'Card',
        avatarTemplate: '',
        templateString: template,
        _setTitleAttr: {
            node: 'titleNode',
            type: 'innerHTML'
        },
        _setSubTitleAttr: {
            node: 'subTitleNode',
            type: 'innerHTML'
        },
        _setExpandableButtonIconAttr: function (/**/iconPath) {

            domStyle.set(this.buttonIconNode, 'background-image', 'url(' + iconPath + ')');
            this._set('expandableButtonIcon', iconPath);
        },
        _setExpandableButtonAttr: function (/*boolean*/expandableButton) {
            expandableButton ? domStyle.set(this.expandableNode, 'display', 'inline-block') : domStyle.set(this.expandableNode, 'display', 'none');
            this._set('expandableButton', expandableButton);
        },
        postCreate: function() {
            this.inherited(arguments);

            var expandableButton = this.expandableButton,
            expandableButtonIcon = this.expandableButtonIcon;

            if (expandableButton) {
                expandableButton ? this.set('expandableButton', true) : this.set('expandableButton',false);
                expandableButtonIcon ? this.set('expandableButtonIcon', expandableButtonIcon) : '';
            }
        },
        _onClick: function(evt){
            return this.onClick(evt);
        },
        _onDblClick: function(evt) {
            return this.onDblClick(evt);
        },
        _onExpandableButton: function(evt) {
            evt.stopPropagation();

            return this.onExpandableButton(evt);
        },
        onClick: function(evt) {
            console.info('occur click event');
        },
        onDblClick: function(evt) {
            console.info('occur double event');
        },
        onExpandableButton: function(evt) {
            console.info('occur expandableButton event');
        }
    });

    return Card;
});
