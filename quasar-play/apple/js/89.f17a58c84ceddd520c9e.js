webpackJsonp([89],{yKQo:function(t,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("q-page",{attrs:{padding:""}},[a("p",{staticClass:"caption"},[a("span",{staticClass:"desktop-only"},[t._v("Click")]),t._v(" "),a("span",{staticClass:"mobile-only"},[t._v("Tap")]),t._v("\n    on each inline FABs below.\n    The one that opens on the right also has a backdrop.\n  ")]),t._v(" "),a("div",{staticClass:"column items-center",staticStyle:{"margin-top":"100px","margin-bottom":"100px"}},[a("q-fab",{attrs:{color:"purple",icon:"keyboard_arrow_up",direction:"up"}},[a("q-fab-action",{attrs:{color:"primary",click:"notify('mail')",icon:"mail"}}),t._v(" "),a("q-fab-action",{attrs:{color:"secondary",icon:"alarm"},on:{click:function(o){t.notify("alarm")}}})],1),t._v(" "),a("br"),t._v(" "),a("q-fab",{attrs:{color:"amber","text-color":"black",icon:"keyboard_arrow_left",direction:"left"}},[a("q-fab-action",{attrs:{color:"amber","text-color":"black",icon:"mail"},on:{click:function(o){t.notify("mail")}}}),t._v(" "),a("q-fab-action",{attrs:{color:"amber","text-color":"black",icon:"alarm"},on:{click:function(o){t.notify("alarm")}}})],1),t._v(" "),a("br"),t._v(" "),a("q-fab",{attrs:{color:"secondary",push:"",icon:"keyboard_arrow_right",direction:"right"}},[a("q-fab-action",{attrs:{color:"primary",icon:"mail"},on:{click:function(o){t.notify("mail")}}}),t._v(" "),a("q-fab-action",{attrs:{color:"tertiary",icon:"alarm"},on:{click:function(o){t.notify("alarm")}}})],1),t._v(" "),a("br"),t._v(" "),a("q-fab",{attrs:{color:"tertiary",glossy:"",icon:"keyboard_arrow_down",direction:"down"}},[a("q-fab-action",{attrs:{color:"amber","text-color":"black",icon:"mail"},on:{click:function(o){t.notify("mail")}}}),t._v(" "),a("q-fab-action",{attrs:{color:"amber","text-color":"black",icon:"alarm"},on:{click:function(o){t.notify("alarm")}}})],1)],1),t._v(" "),a("p",{staticClass:"caption",staticStyle:{"margin-bottom":"100px"}},[t._v("\n    There's also the absolute positioned one on bottom\n    right of screen which maintains position on Page scroll.\n    It has a click/tap event injected on itself when expanded.\n    You can close it by clicking/tapping on the whitey backdrop.\n  ")]),t._v(" "),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[a("q-fab",{attrs:{icon:"add",direction:"up",color:"primary"}},[a("q-fab-action",{staticClass:"white",attrs:{color:"blue",icon:"person add"},on:{click:t.alert}}),t._v(" "),a("q-fab-action",{staticClass:"white",attrs:{color:"blue",icon:"mail"},on:{click:function(o){t.notify("mail")}}})],1)],1),t._v(" "),a("div",{staticStyle:{height:"1000px"}})],1)},n=[];i._withStripped=!0;var c=a("XyMi"),r=Object(c.a)({methods:{alert:function(){this.$q.dialog({title:"FAB",message:"Good job! Keep it going."})},notify:function(t){this.$q.notify({icon:t,message:"So you want your "+t+"s, huh?"})}}},i,n,!1,null,null,null);r.options.__file="src/pages/layout-demo/floating-action-button.vue";o.default=r.exports}});