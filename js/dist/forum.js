module.exports=function(t){var r={};function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)e.d(o,n,function(r){return t[r]}.bind(null,n));return o},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=8)}([function(t,r){t.exports=flarum.core.compat.app},function(t,r){t.exports=flarum.core.compat.extend},function(t,r){t.exports=flarum.core.compat.ForumApplication},function(t,r){t.exports=flarum.core.compat.Model},function(t,r){t.exports=flarum.core.compat["models/User"]},function(t,r){t.exports=flarum.core.compat["components/Alert"]},function(t,r){t.exports=flarum.core.compat["components/Button"]},function(t,r){t.exports=flarum.core.compat["helpers/icon"]},function(t,r,e){"use strict";e.r(r);var o=e(0),n=e.n(o),a=e(1),i=e(2),s=e.n(i),c=e(3),u=e.n(c),p=e(4),f=e.n(p);var l=e(5),d=e.n(l),w=e(6),b=e.n(w),y=e(7),h=e.n(y);function v(t){var r=t.session.user;if(r&&r.hasPwnedPassword()&&r.isEmailConfirmed()){var e=b.a.component({className:"Button Button--link",children:t.translator.trans("fof-pwned-passwords.forum.alert.resend_button"),onclick:function(){e.props.loading=!0,m.redraw(),t.request({method:"POST",url:t.forum.attribute("apiUrl")+"/forgot",data:{email:r.email()}}).then(function(){e.props.loading=!1,e.props.children=[h()("fas fa-check")," ",t.translator.trans("fof-pwned-passwords.forum.alert.sent_message")],e.props.disabled=!0,m.redraw()}).catch(function(){e.props.loading=!1,m.redraw()})}}),o=function(t){var r,e;function o(){return t.apply(this,arguments)||this}return e=t,(r=o).prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e,o.prototype.view=function(){var r=t.prototype.view.call(this);return r.children=[m("div",{className:"container"},r.children)],r},o}(d.a);m.mount($("<div/>").insertBefore("#content")[0],o.component({dismissible:!1,children:t.translator.trans("fof-pwned-passwords.forum.alert.warning"),controls:[e]}))}}n.a.initializers.add("fof/pwned-passwords",function(){f.a.prototype.hasPwnedPassword=u.a.attribute("hasPwnedPassword"),Object(a.extend)(s.a.prototype,"mount",function(){v(this)})})}]);
//# sourceMappingURL=forum.js.map