(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[83],{"P/7v":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{attrs:{padding:""}},[n("p",{staticClass:"caption"},[t._v("\n    Switch to another\n    "),n("span",{staticClass:"cordova-hide"},[t._v("\n      tab in your browser\n    ")]),n("span",{staticClass:"cordova-only"},[t._v("\n      App\n    ")]),t._v("\n    then come back here to see Visibility in action.\n  ")]),t.eventList.length>0?n("table",{staticClass:"q-table striped"},[n("tbody",t._l(t.eventList,function(e){return n("tr",{key:e.timestamp},[n("td",[t._v(t._s(e.timestamp))]),n("td",[t._v(t._s(e.label))])])}))]):t._e()])},s=[];function a(t){return(t<10?"0":"")+t}i._withStripped=!0;var c={data:function(){return{eventList:[]}},watch:{"$q.appVisible":function(t){var e=new Date;this.eventList.unshift({timestamp:a(e.getHours())+":"+a(e.getMinutes())+":"+a(e.getSeconds())+"."+e.getMilliseconds(),label:" App became ".concat(t?"visible":"hidden")})}}},o=c,r=n("KHd+"),l=Object(r["a"])(o,i,s,!1,null,null,null);e["default"]=l.exports}}]);