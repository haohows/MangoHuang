(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{222:function(t,e,r){var content=r(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("f963f066",content,!0,{sourceMap:!1})},228:function(t,e,r){"use strict";var n=r(222);r.n(n).a},229:function(t,e,r){(e=r(36)(!1)).push([t.i,".adminWrap[data-v-78f7f26b]{display:flex;justify-content:center;align-items:flex-start;margin:120px auto 40px;min-height:calc(100vh - 240px)}",""]),t.exports=e},241:function(t,e,r){"use strict";r.r(e);var n=r(83),c={data:function(){return{orderList:{}}},methods:{getOrder:function(){var t=this;n.a.ref("/order").once("value",(function(e){t.orderList=e.val()}))}},mounted:function(){this.getOrder()}},o=(r(228),r(28)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"adminWrap"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),r("tbody",t._l(t.orderList,(function(e,n){return r("tr",{key:n},[r("th",{attrs:{scope:"row"}},[t._v(t._s(n))]),t._v(" "),r("td",[t._v(t._s(e.buyerName))]),t._v(" "),r("td",[t._v(t._s(e.buyerPhone))]),t._v(" "),r("td",[t._v(t._s(e.buyerQuantity))]),t._v(" "),r("td",[t._v(t._s(e.buyerPrice)+"元")]),t._v(" "),r("td",[t._v(t._s(e.buyerAddress))]),t._v(" "),r("td",[t._v(t._s(e.buyerRemarks))])])})),0)])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"thead-dark"},[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("訂單編號")]),t._v(" "),r("th",{staticStyle:{"min-width":"85px"},attrs:{scope:"col"}},[t._v("姓名")]),t._v(" "),r("th",{staticStyle:{"min-width":"120px"},attrs:{scope:"col"}},[t._v("電話")]),t._v(" "),r("th",{staticStyle:{"min-width":"60px"},attrs:{scope:"col"}},[t._v("箱數")]),t._v(" "),r("th",{staticStyle:{"min-width":"80px"},attrs:{scope:"col"}},[t._v("金額")]),t._v(" "),r("th",{staticStyle:{"min-width":"150px"},attrs:{scope:"col"}},[t._v("住址")]),t._v(" "),r("th",{staticStyle:{"min-width":"120px"},attrs:{scope:"col"}},[t._v("備註")])])])}],!1,null,"78f7f26b",null);e.default=component.exports}}]);