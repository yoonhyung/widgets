define([
    'dojo/_base/declare',
    'dojo/dom-attr',
    'dojo/dom-style',
    'dijit/_WidgetsInTemplateMixin',
    './Card',
    "text!./templates/avatar.html"
], function(
    declare,
    domAttr,
    domStyle,
    _WidgetsInTemplateMixin,
    Card,
    avatarMarkup
) {
    var AvatarCard = declare([Card, _WidgetsInTemplateMixin], {
        avatar: '',
        avatarTemplate: avatarMarkup,
        _setAvatarAttr: function(/*String*/imagePath) {
            domAttr.set(this.avatarNode, 'src', imagePath);
            this._set('avatar', imagePath);
        },
        postCreate: function() {
            this.inherited(arguments);

            if (!this.avatar) {
                // defaultAvatar 는 임시
                var defaultAvatar = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-48.png';
                this.set('avatar', defaultAvatar);
            }
        }
    });

    return AvatarCard;
});
