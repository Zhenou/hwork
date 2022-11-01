(function(){"use strict";var t={8593:function(t,o,s){var e=s(6369),n=function(){var t=this,o=t._self._c;return o("div",[o("MyHeader",{attrs:{title:"购物车案例"}}),o("div",{staticClass:"main"},t._l(t.list,(function(s){return o("MyGoods",{key:s.id,attrs:{item:s},model:{value:t.list,callback:function(o){t.list=o},expression:"list"}})})),1),o("MyFooter",{model:{value:t.list,callback:function(o){t.list=o},expression:"list"}})],1)},i=[],c=function(){var t=this,o=t._self._c;return o("div",{staticClass:"my-header"},[t._v("购物车案例")])},r=[],a={},u=a,l=s(1001),d=(0,l.Z)(u,c,r,!1,null,"6271e54c",null),p=d.exports,g=function(){var t=this,o=t._self._c;return o("div",{staticClass:"my-goods-item",attrs:{value:t.value}},[o("div",{staticClass:"left"},[o("div",{staticClass:"custom-control custom-checkbox"},[o("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"input"},domProps:{checked:t.item.goods_state},on:{click:function(o){t.item.goods_state=!t.item.goods_state}}}),o("label",{staticClass:"custom-control-label",attrs:{for:"input"}},[o("img",{attrs:{src:t.item.goods_img}})])])]),o("div",{staticClass:"right"},[o("div",{staticClass:"top"},[t._v(t._s(t.item.goods_name))]),o("div",{staticClass:"bottom"},[o("span",{staticClass:"price"},[t._v("¥ "+t._s(t.item.goods_price))]),o("span",[o("MyCount",{attrs:{num:t.item.goods_count,id:t.item.id},on:{addFn:t.addFn,subFn:t.subFn}})],1)])])])},_=[],v=function(){var t=this,o=t._self._c;return o("div",{staticClass:"my-footer"},[o("div",{staticClass:"custom-control custom-checkbox"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.isAll,expression:"isAll"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"footerCheck"},domProps:{checked:Array.isArray(t.isAll)?t._i(t.isAll,null)>-1:t.isAll},on:{change:function(o){var s=t.isAll,e=o.target,n=!!e.checked;if(Array.isArray(s)){var i=null,c=t._i(s,i);e.checked?c<0&&(t.isAll=s.concat([i])):c>-1&&(t.isAll=s.slice(0,c).concat(s.slice(c+1)))}else t.isAll=n}}}),o("label",{staticClass:"custom-control-label",attrs:{for:"footerCheck"}},[t._v("全选")])]),o("div",[o("span",[t._v("合计:")]),o("span",{staticClass:"price"},[t._v("¥ "+t._s(t.totalPrice))])]),o("button",{staticClass:"footer-btn btn btn-primary",attrs:{type:"button"}},[t._v(" 结算 ( "+t._s(t.total)+" ) ")])])},m=[],f={props:{value:Array},data(){return{}},watch:{},computed:{isAll:{get(){return this.value.every((t=>!0===t.goods_state))},set(t){this.value.forEach((o=>o.goods_state=t))}},totalPrice(){return this.value.filter((t=>t.goods_state)).reduce(((t,o)=>t+o.goods_price*o.goods_count),0)},total(){return this.value.filter((t=>t.goods_state)).reduce(((t,o)=>t+o.goods_count),0)}}},h=f,b=(0,l.Z)(h,v,m,!1,null,"5c0dbede",null),w=b.exports,y=function(){var t=this,o=t._self._c;return o("div",{staticClass:"my-counter"},[o("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(o){return t.$emit("subFn",t.id)}}},[t._v(" - ")]),o("input",{staticClass:"form-control inp",attrs:{type:"number"},domProps:{value:t.num}}),o("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(o){return t.$emit("addFn",t.id)}}},[t._v(" + ")])])},k=[],C={props:["num","id"]},A=C,x=(0,l.Z)(A,y,k,!1,null,"37224dcb",null),O=x.exports,F={props:{item:Object,value:Array},components:{MyCount:O,MyFooter:w},methods:{addFn(t){this.value.find((o=>o.id===t)).goods_count++},subFn(t){const o=this.value.find((o=>o.id===t));0!==o.goods_count&&o.goods_count--}}},M=F,P=(0,l.Z)(M,g,_,!1,null,"a7e04124",null),j=P.exports,Z={components:{MyHeader:p,MyGoods:j,MyFooter:w},data(){return{list:[{id:1,goods_name:"班俏BANQIAO超火ins潮卫衣女士2020秋季新款韩版宽松慵懒风薄款外套带帽上衣",goods_img:"https://www.escook.cn/vuebase/pics/1.png",goods_price:108,goods_count:1,goods_state:!0},{id:2,goods_name:"嘉叶希连帽卫衣女春秋薄款2020新款宽松bf韩版字母印花中长款外套ins潮",goods_img:"https://www.escook.cn/vuebase/pics/2.png",goods_price:129,goods_count:1,goods_state:!0},{id:3,goods_name:"思蜜怡2020休闲运动套装女春秋季新款时尚大码宽松长袖卫衣两件套",goods_img:"https://www.escook.cn/vuebase/pics/3.png",goods_price:198,goods_count:1,goods_state:!1},{id:4,goods_name:"思蜜怡卫衣女加绒加厚2020秋冬装新款韩版宽松上衣连帽中长款外套",goods_img:"https://www.escook.cn/vuebase/pics/4.png",goods_price:99,goods_count:1,goods_state:!1},{id:5,goods_name:"幂凝早秋季卫衣女春秋装韩版宽松中长款假两件上衣薄款ins盐系外套潮",goods_img:"https://www.escook.cn/vuebase/pics/5.png",goods_price:156,goods_count:1,goods_state:!0},{id:6,goods_name:"ME&CITY女装冬季新款针织抽绳休闲连帽卫衣女",goods_img:"https://www.escook.cn/vuebase/pics/6.png",goods_price:142.8,goods_count:1,goods_state:!0},{id:7,goods_name:"幂凝假两件女士卫衣秋冬女装2020年新款韩版宽松春秋季薄款ins潮外套",goods_img:"https://www.escook.cn/vuebase/pics/7.png",goods_price:219,goods_count:2,goods_state:!0},{id:8,goods_name:"依魅人2020休闲运动衣套装女秋季新款秋季韩版宽松卫衣 时尚两件套",goods_img:"https://www.escook.cn/vuebase/pics/8.png",goods_price:178,goods_count:1,goods_state:!0},{id:9,goods_name:"芷臻(zhizhen)加厚卫衣2020春秋季女长袖韩版宽松短款加绒春秋装连帽开衫外套冬",goods_img:"https://www.escook.cn/vuebase/pics/9.png",goods_price:128,goods_count:1,goods_state:!1},{id:10,goods_name:"Semir森马卫衣女冬装2019新款可爱甜美大撞色小清新连帽薄绒女士套头衫",goods_img:"https://www.escook.cn/vuebase/pics/10.png",goods_price:153,goods_count:1,goods_state:!1}]}}},T=Z,E=(0,l.Z)(T,n,i,!1,null,null,null),$=E.exports;e.ZP.config.productionTip=!1,new e.ZP({render:t=>t($)}).$mount("#app")}},o={};function s(e){var n=o[e];if(void 0!==n)return n.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(o,e,n,i){if(!e){var c=1/0;for(l=0;l<t.length;l++){e=t[l][0],n=t[l][1],i=t[l][2];for(var r=!0,a=0;a<e.length;a++)(!1&i||c>=i)&&Object.keys(s.O).every((function(t){return s.O[t](e[a])}))?e.splice(a--,1):(r=!1,i<c&&(c=i));if(r){t.splice(l--,1);var u=n();void 0!==u&&(o=u)}}return o}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[e,n,i]}}(),function(){s.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(o,{a:o}),o}}(),function(){s.d=function(t,o){for(var e in o)s.o(o,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};s.O.j=function(o){return 0===t[o]};var o=function(o,e){var n,i,c=e[0],r=e[1],a=e[2],u=0;if(c.some((function(o){return 0!==t[o]}))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(a)var l=a(s)}for(o&&o(e);u<c.length;u++)i=c[u],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(l)},e=self["webpackChunkshopcar"]=self["webpackChunkshopcar"]||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var e=s.O(void 0,[998],(function(){return s(8593)}));e=s.O(e)})();
//# sourceMappingURL=app.7cbcb646.js.map