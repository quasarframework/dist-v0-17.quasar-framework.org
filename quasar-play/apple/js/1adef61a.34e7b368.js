(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1adef61a"],{1003:function(t,s,a){"use strict";var e=a("557a"),i=a.n(e);i.a},"557a":function(t,s,a){},b8ee:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{staticClass:"page-showcase",attrs:{padding:""}},[e("div",{staticClass:"showcase-top text-center"},[e("img",{attrs:{src:a("2918")}}),e("p",{staticClass:"caption"},[t._v("\n      Use sidebar to browse through demos, which showcase only a few of the Quasar components and features.\n      "),e("br"),t._v("\n      For a full list, visit the documentation website.\n    ")])]),e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"row",staticStyle:{width:"850px","max-width":"90vw"}},t._l(t.list,function(s){return e("div",{key:s.hash,staticClass:"col-xs-6 col-sm-4 col-lg-3"},[e("div",{staticClass:"card text-center category-link text-primary",on:{click:function(a){t.show(s)}}},[e("q-icon",{attrs:{name:s.icon}}),e("p",{staticClass:"caption"},[t._v(t._s(s.title))])],1)])}))]),e("q-page-sticky",{directives:[{name:"show",rawName:"v-show",value:t.category,expression:"category"}],attrs:{position:"bottom-right",offset:[18,18]}},[e("q-btn",{staticClass:"animate-pop",attrs:{round:"",color:"secondary"},on:{click:function(s){t.category=!1}}},[e("q-icon",{attrs:{name:"keyboard_backspace"}})],1)],1)],1)},i=[];e._withStripped=!0;var o=a("a1e6"),c={data:function(){return{category:!1}},computed:{list:function(){return this.category||o["a"]}},methods:{show:function(t){if(t.features)return this.category=t.features,void(this.hash=t.hash);this.$router.push("/showcase/".concat(this.hash,"/").concat(t.hash))}}},n=c,r=(a("1003"),a("2877")),h=Object(r["a"])(n,e,i,!1,null,null,null);h.options.__file="index.vue";s["default"]=h.exports}}]);