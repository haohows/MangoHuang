(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{224:function(t,e,r){var content=r(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("1df9d11b",content,!0,{sourceMap:!1})},232:function(t,e,r){"use strict";var o=r(224);r.n(o).a},233:function(t,e,r){(e=r(36)(!1)).push([t.i,".orderWrap[data-v-0db4d6bd]{display:flex;justify-content:center;align-items:flex-start;margin:100px auto 60px;min-height:calc(100vh - 240px)}.price[data-v-0db4d6bd]{width:60px;text-align:right;padding-right:5px;padding-left:5px}.submitBtn[data-v-0db4d6bd]{width:80px;height:35px;display:flex;justify-content:center;align-items:center}",""]),t.exports=e},243:function(t,e,r){"use strict";r.r(e);var o=r(83),n={data:function(){return{submitIng:!1,finish:!1,checkInputOk:!0,orderNumber:"",buyerName:"",buyerPhone:"",buyerAddress:"",buyerQuantity:"",buyerRemarks:""}},watch:{buyerQuantity:function(t){t<=0&&(this.buyerQuantity=0)}},methods:{getNumber:function(){return(new Date).getTime()},checkInput:function(){return""==this.buyerName?(alert("姓名未填寫"),this.submitIng=!1,void(this.checkInputOk=!1)):""==this.buyerPhone?(alert("電話未填寫"),this.submitIng=!1,void(this.checkInputOk=!1)):""==this.buyerAddress?(alert("配送住址未填寫"),this.submitIng=!1,void(this.checkInputOk=!1)):""==this.buyerQuantity||0==this.buyerQuantity?(alert("箱數未填寫"),this.submitIng=!1,void(this.checkInputOk=!1)):void 0},submit:function(){var t=this;this.submitIng=!0,this.checkInput(),this.checkInputOk&&o.a.ref("/order/".concat(this.orderNumber)).set({buyerName:this.buyerName,buyerPhone:this.buyerPhone,buyerAddress:this.buyerAddress,buyerQuantity:this.buyerQuantity,buyerPrice:this.countPrice,buyerRemarks:this.buyerRemarks}).then((function(){t.finish=!0}))}},computed:{countPrice:function(){return 1e3*this.buyerQuantity}},mounted:function(){this.orderNumber=this.getNumber()}},c=(r(232),r(28)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"orderWrap"},[t.finish?r("div",[r("div",{staticClass:"card-deck"},[r("div",{staticClass:"card bg-light shadow my-5"},[r("h5",{staticClass:"card-header"},[t._v("訂購資訊")]),t._v(" "),r("div",{staticClass:"card-body"},[r("p",[t._v("姓名："+t._s(t.buyerName))]),t._v(" "),r("p",[t._v("電話："+t._s(t.buyerPhone))]),t._v(" "),r("p",[t._v("箱數："+t._s(t.buyerQuantity))]),t._v(" "),r("p",[t._v("金額："+t._s(t.countPrice)+"元")]),t._v(" "),r("p",[t._v("配送住址："+t._s(t.buyerAddress))]),t._v(" "),r("p",[t._v("備註內容："+t._s(t.buyerRemarks))])]),t._v(" "),r("div",{staticClass:"card-footer text-center"},[t._v("訂單編號："+t._s(t.orderNumber))])]),t._v(" "),t._m(0)])]):r("div",{staticClass:"card shadow"},[r("h5",{staticClass:"card-header"},[t._v("訂購內容")]),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-sm-3 col-form-label",attrs:{for:"buyerName"}},[t._v("姓名")]),t._v(" "),r("div",{staticClass:"col-sm-9"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.buyerName,expression:"buyerName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"buyerName",maxlength:"5"},domProps:{value:t.buyerName},on:{input:function(e){e.target.composing||(t.buyerName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-sm-3 col-form-label",attrs:{for:"buyerPhone"}},[t._v("電話")]),t._v(" "),r("div",{staticClass:"col-sm-9"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.buyerPhone,expression:"buyerPhone",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"tel",id:"buyerPhone"},domProps:{value:t.buyerPhone},on:{input:function(e){e.target.composing||(t.buyerPhone=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-sm-3 col-form-label",attrs:{for:"buyerAddress"}},[t._v("配送住址")]),t._v(" "),r("div",{staticClass:"col-sm-9"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.buyerAddress,expression:"buyerAddress",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"buyerAddress"},domProps:{value:t.buyerAddress},on:{input:function(e){e.target.composing||(t.buyerAddress=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-sm-3 col-form-label",attrs:{for:"buyerQuantity"}},[t._v("箱數")]),t._v(" "),r("div",{staticClass:"col-sm-9"},[r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.buyerQuantity,expression:"buyerQuantity"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.buyerQuantity},on:{input:function(e){e.target.composing||(t.buyerQuantity=e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-append"},[r("span",{staticClass:"input-group-text"},[r("span",[t._v("金額：")]),t._v(" "),r("span",{staticClass:"price"},[t._v(t._s(t.countPrice))]),t._v(" "),r("span",[t._v("元")])])])])])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-sm-3 col-form-label",attrs:{for:"remarks"}},[t._v("備註")]),t._v(" "),r("div",{staticClass:"col-sm-9"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.buyerRemarks,expression:"buyerRemarks"}],staticClass:"form-control",attrs:{id:"remarks",rows:"5"},domProps:{value:t.buyerRemarks},on:{input:function(e){e.target.composing||(t.buyerRemarks=e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"card-footer text-right"},[r("button",{staticClass:"btn btn-outline-dark btn-sm p-0",on:{click:t.submit}},[r("div",{staticClass:"submitBtn"},[t.submitIng?r("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}}):r("div",[t._v("確認送出")])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card bg-light shadow my-5"},[r("h5",{staticClass:"card-header"},[t._v("匯款資訊")]),t._v(" "),r("div",{staticClass:"card-body"},[r("p",[t._v("匯款戶頭：黃澤欽")]),t._v(" "),r("p",[t._v("匯款銀行：橋頭農會")]),t._v(" "),r("p",[t._v("匯款帳號：00059221932420")]),t._v(" "),r("p",[t._v("訂購電話：0937-475-691")])]),t._v(" "),r("div",{staticClass:"card-footer text-center"},[t._v("匯款後告知後三碼，小本經營謝謝訂購")])])}],!1,null,"0db4d6bd",null);e.default=component.exports}}]);