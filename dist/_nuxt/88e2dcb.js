(window.webpackJsonp=window.webpackJsonp||[]).push([[34,4,13,15],{898:function(e,t,r){var content=r(901);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("09083c9e",content,!0,{sourceMap:!1})},899:function(e,t,r){"use strict";r.r(t);r(45);var n={name:"SuperButton",props:{loading:{type:Boolean,default:!1},color:{type:String,required:!1},size:{type:String,required:!1},text:String,to:String,href:String},computed:{classes:function(){var e="",t="";switch(this.color){case"slate":e="bg-slate-700 hover:bg-slate-800 focus:ring-slate-500 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800";break;case"gray":e="bg-gray-700 hover:bg-gray-800 focus:ring-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800";break;case"zinc":e="bg-zinc-700 hover:bg-zinc-800 focus:ring-zinc-500 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800";break;case"neutral":e="bg-neutral-700 hover:bg-neutral-800 focus:ring-neutral-500 dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800";break;case"stone":e="bg-stone-700 hover:bg-stone-800 focus:ring-stone-500 dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800";break;case"red":e="bg-red-700 hover:bg-red-800 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800";break;case"orange":e="bg-orange-700 hover:bg-orange-800 focus:ring-orange-500 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800";break;case"amber":e="bg-amber-700 hover:bg-amber-800 focus:ring-amber-500 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800";break;case"yellow":e="bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-500 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800";break;case"lime":e="bg-lime-700 hover:bg-lime-800 focus:ring-lime-500 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800";break;case"green":e="bg-green-700 hover:bg-green-800 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";break;case"emerald":e="bg-emerald-700 hover:bg-emerald-800 focus:ring-emerald-500 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800";break;case"teal":e="bg-teal-700 hover:bg-teal-800 focus:ring-teal-500 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800";break;case"cyan":e="bg-cyan-700 hover:bg-cyan-800 focus:ring-cyan-500 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800";break;case"sky":e="bg-sky-700 hover:bg-sky-800 focus:ring-sky-500 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800";break;case"blue":e="bg-blue-700 hover:bg-blue-800 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";break;case"indigo":e="bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-500 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800";break;case"violet":e="bg-violet-700 hover:bg-violet-800 focus:ring-violet-500 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800";break;case"purple":e="bg-purple-700 hover:bg-purple-800 focus:ring-purple-500 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800";break;case"fuchsia":e="bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-fuchsia-500 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800";break;case"pink":e="bg-pink-700 hover:bg-pink-800 focus:ring-pink-500 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800";break;case"rose":e="bg-rose-700 hover:bg-rose-800 focus:ring-rose-500 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800";break;default:e="bg-primary-700 hover:bg-primary-800 focus:ring-primary-500 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"}switch(this.size){case"extra-small":t="text-xs px-3 py-2";break;case"small":t="text-sm px-3 py-2";break;case"extra-large":t="text-base px-6 py-3.5";break;case"large":t="py-3 px-5 text-base";break;default:t="text-sm px-5 py-2.5"}return"".concat(e," inline-flex item-centers text-white gap-x-2 focus:ring-4 focus:outline-none font-medium rounded-lg text-center ").concat(t)}}},o=r(17),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return e.to?t("NuxtLink",{class:e.classes,attrs:{to:e.to}},[e._t("default"),e._v("\n  "+e._s(e.text)+"\n")],2):e.href?t("a",{class:e.classes,attrs:{href:e.href,target:"_blank"}},[e._t("default"),e._v("\n  "+e._s(e.text)+"\n")],2):t("button",{class:e.classes,attrs:{type:"button",disabled:e.loading},on:{click:function(t){return e.$emit("click")}}},[e.loading?t("svg",{staticClass:"animate-twSpin animate-infinite h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[t("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),e._v(" "),t("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):e._t("default"),e._v("\n  "+e._s(e.text)+"\n")],2)}),[],!1,null,null,null);t.default=component.exports},900:function(e,t,r){"use strict";r(898)},901:function(e,t,r){var n=r(38)((function(i){return i[1]}));n.push([e.i,".modal-enter-active{animation:flipInY .3s}.modal-leave-active{animation:flipOutY .3s}.modalWrapper-enter-active{animation:fadeIn .3s}.modalWrapper-leave-active{animation:fadeOut .3s}",""]),n.locals={},e.exports=n},902:function(e,t,r){"use strict";r.r(t);r(46);var n={name:"Modal",transitions:["modal","modalWrapper"],data:function(){return{}},props:{show:{type:Boolean,default:!0},type:{type:String,required:!0,validator:function(e){return["success","error","warning"].includes(e)}},actionText:{type:String,default:"Tiếp tục"},title:{type:String,required:!0}},computed:{classIcon:function(){switch(this.type){case"success":return"w-12 h-12 rounded-full bg-success dark:bg-success-content p-2 flex items-center justify-center mx-auto mb-3.5";case"warning":return"w-12 h-12 rounded-full bg-warning dark:bg-warning-content p-2 flex items-center justify-center mx-auto mb-3.5";case"error":return"w-12 h-12 rounded-full bg-error dark:bg-error-content p-2 flex items-center justify-center mx-auto mb-3.5";default:return"w-12 h-12 rounded-full bg-primary dark:bg-primary-900 p-2 flex items-center justify-center mx-auto mb-3.5"}}},methods:{clickOut:function(){this.$emit("close")}}},o=(r(900),r(17)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("transition",{attrs:{"enter-active-class":"animate-fadeIn animate-duration-300","leave-active-class":"animate-fadeOut animate-duration-300"}},[e.show?t("div",{staticClass:"fixed top-0 right-0 left-0 bottom-0 flex z-50 bg-black/50 justify-center items-center"},[t("transition",[t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickOut,expression:"clickOut"}],staticClass:"relative p-4 max-w-sm text-center w-full bg-white rounded-lg shadow-lg dark:bg-gray-800 sm:p-5"},[t("button",{staticClass:"text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",attrs:{type:"button","data-modal-toggle":"successModal"},on:{click:function(t){return e.$emit("close")}}},[t("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})]),e._v(" "),t("span",{staticClass:"sr-only"},[e._v("Close modal")])]),e._v(" "),t("div",{class:e.classIcon},["success"==e.type?t("svg",{staticClass:"w-8 h-8 text-white dark:text-success",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]):"warning"==e.type?t("svg",{staticClass:"w-8 h-8 text-warning-content dark:text-warning",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"}})]):"error"==e.type?t("svg",{staticClass:"w-8 h-8 text-error-content dark:text-error",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"}})]):t("svg",{staticClass:"w-8 h-8 text-primary-600 dark:text-primary-200",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}})]),e._v(" "),t("span",{staticClass:"sr-only"},[e._v(e._s(e.title))])]),e._v(" "),t("p",{staticClass:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},[e._v(e._s(e.title))]),e._v(" "),t("button",{staticClass:"py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900",attrs:{type:"button"},on:{click:function(t){return e.$emit("action")}}},[e._v("\n        "+e._s(e.actionText)+"\n      ")])])])],1):e._e()])}),[],!1,null,null,null);t.default=component.exports},905:function(e,t,r){"use strict";r.r(t);var n={name:"ConfirmModal",data:function(){return{loading:!1}},props:{show:{type:Boolean,default:!1},cancelText:String,actionText:String,loadingState:{type:Boolean,default:!1},question:String,list:{type:Array}},methods:{close:function(){this.$emit("close")},action:function(){var e=this;this.loadingState?(this.loading=!0,this.$emit("action",(function(){e.loading=!1,e.close()}))):this.$emit("action")}}},o=r(17),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("transition",{attrs:{"enter-active-class":"animate-fadeIn animate-duration-300","leave-active-class":"animate-fadeOut animate-duration-300"}},[e.show?t("div",{staticClass:"flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full bg-black/30"},[t("div",{staticClass:"relative p-4 w-full max-w-md h-full md:h-auto"},[t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.close,expression:"close"}],staticClass:"relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"},[t("button",{staticClass:"text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",attrs:{type:"button","data-modal-toggle":"deleteModal"},on:{click:e.close}},[t("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})]),e._v(" "),t("span",{staticClass:"sr-only"},[e._v("Close modal")])]),e._v(" "),t("svg",{staticClass:"text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"}})]),e._v(" "),t("p",{staticClass:"mb-4 text-gray-700 dark:text-gray-400 font-semibold"},[e._v(e._s(e.question))]),e._v(" "),e.list?t("ul",{staticClass:"space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400 text-left mb-4"},e._l(e.list,(function(r){return t("li",{key:r},[e._v("\n              "+e._s(r)+"\n          ")])})),0):e._e(),e._v(" "),t("div",{staticClass:"flex justify-center items-center space-x-4"},[t("SuperButton",{attrs:{text:e.cancelText||"Không, hủy bỏ.",color:"gray"},on:{click:e.close}}),e._v(" "),t("SuperButton",{attrs:{loading:e.loading,text:e.actionText||"Tôi chắc chắn",color:"red"},on:{click:e.action}})],1)])])]):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SuperButton:r(899).default})},983:function(e,t,r){"use strict";r.r(t);r(57),r(37),r(9),r(45),r(33),r(55),r(31),r(48),r(56);var n=r(22),o=r(12);r(27),r(161),r(36),r(35),r(30),r(126),r(245),r(24),r(61);function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){d=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(d)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var d={name:"ContentCategory",transition:{enterActiveClass:"animate-fadeIn"},data:function(){return{pagination:{},orders:[],baseUrlShop:"",selected:[],state:{confirm:!1,success:!1},fetchUrl:"",search:"",orderState:null}},watch:{fetchUrl:function(e){e.length>0&&this.fetching(e)},orderState:function(e){this.debounceSearching()}},created:function(){this.debounceSearching=this.$_.debounce((function(){this.searching()}),500)},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.fetchUrl="/sales/orders",e.baseUrlShop="https://meo2x.cielot.com";case 2:case"end":return t.stop()}}),t)})))()},methods:{searching:function(){this.search.length&&this.$toast.global.info({message:'Đang tìm "'.concat(this.search,'" ...')}),this.fetching(this.fetchUrl,{state:this.orderState})},fetching:function(e){var t=arguments,r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.length>1&&void 0!==t[1]?t[1]:{},n.prev=1,n.next=4,r.$axios.get(e,{params:o});case 4:l=n.sent,r.pagination=l.data,r.orders=r.pagination.data,n.next=11;break;case 9:n.prev=9,n.t0=n.catch(1);case 11:case"end":return n.stop()}}),n,null,[[1,9]])})))()},del:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,c,d,h;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o=[],r.prev=1,c=l(t.selected.entries()),r.prev=3,h=regeneratorRuntime.mark((function e(){var r,i,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(n.a)(d.value,2),i=r[0],l=r[1],e.next=3,t.$axios.delete("/sales/orders/"+l.id);case 3:t.$toast.global.success({message:"Đã xóa ".concat(l.name)}),t.orders.splice(t.orders.findIndex((function(e){return e.id===l.id})),1),o.push(i),0==t.orders.length&&null!=t.pagination.prev_page_url&&t.paginate(t.pagination.prev_page_url);case 7:case"end":return e.stop()}}),e)})),c.s();case 6:if((d=c.n()).done){r.next=10;break}return r.delegateYield(h(),"t0",8);case 8:r.next=6;break;case 10:r.next=15;break;case 12:r.prev=12,r.t1=r.catch(3),c.e(r.t1);case 15:return r.prev=15,c.f(),r.finish(15);case 18:e(),t.state.success=!0,r.next=25;break;case 22:r.prev=22,r.t2=r.catch(1),e();case 25:return r.prev=25,o.forEach((function(i){t.selected.splice(i,1)})),r.finish(25);case 28:case"end":return r.stop()}}),r,null,[[1,22,25,28],[3,12,15,18]])})))()}},computed:{isRequestLoading:function(){return this.$store.state.loading.isRequestLoading},selectedListConfirm:function(){var e=[];return this.selected.forEach((function(t){e.push("".concat(t.name," (").concat(t.slug,")"))})),e},selectAll:{get:function(){return!this.$fetchState.pending&&(!!this.orders&&this.selected.length==this.orders.length)},set:function(e){var t=[];e&&this.orders.forEach((function(e){t.push(e)})),this.selected=t}}}},h=d,f=r(17),component=Object(f.a)(h,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container mx-auto px-4 lg:px-0"},[t("Modal",{attrs:{show:e.state.success,type:"success",title:"Thành công"},on:{close:function(t){e.state.success=!1},action:function(t){e.state.success=!1}}}),e._v(" "),t("ConfirmModal",{attrs:{loadingState:!0,show:e.state.confirm,list:e.selectedListConfirm,question:"Bạn có chắc muốn xóa những đơn hàng này?"},on:{close:function(t){e.state.confirm=!1},action:e.del}}),e._v(" "),t("h1",{staticClass:"text-4xl font-extrabold dark:text-white mb-8"},[e._v("Đơn hàng")]),e._v(" "),t("div",{staticClass:"flex gap-x-4 items-center pb-4"}),e._v(" "),e.$fetchState.error?t("div",{attrs:{role:"alert"}},[t("svg",{staticClass:"flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clip-rule":"evenodd"}})]),e._v(" "),t("span",{staticClass:"sr-only"},[e._v("Error")]),e._v(" "),t("div",{staticClass:"ml-3 text-sm font-medium text-red-700 dark:text-red-800"},[e._v("\n      Lỗi khi tìm nạp dữ liệu\n    ")]),e._v(" "),t("button",{staticClass:"ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",attrs:{type:"button","data-dismiss-target":"#alert-2","aria-label":"Close"}},[t("span",{staticClass:"sr-only"},[e._v("Close")]),e._v(" "),t("svg",{staticClass:"w-5 h-5",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]):e._e(),e._v(" "),t("div",{staticClass:"flex gap-x-4 items-center justify-between pb-4"},[t("div",{staticClass:"flex gap-x-2 items-center grow"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.orderState,expression:"orderState"}],staticClass:"max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.orderState=t.target.multiple?r:r[0]}}},[t("option",{attrs:{selected:""},domProps:{value:null}},[e._v("Tất cả trạng thái")]),e._v(" "),t("option",{domProps:{value:1}},[e._v("Chờ duyệt")]),e._v(" "),t("option",{domProps:{value:2}},[e._v("Chờ đóng gói")]),e._v(" "),t("option",{domProps:{value:3}},[e._v("Chờ giao hàng")]),e._v(" "),t("option",{domProps:{value:4}},[e._v("Chờ hoàn thành")])])])]),e._v(" "),t("div",{staticClass:"overflow-x-auto relative rounded-xl shadow-xl mb-4"},[t("table",{staticClass:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},[t("thead",{staticClass:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t("tr",[t("th",{staticClass:"p-4",attrs:{scope:"col"}},[t("div",{staticClass:"flex items-center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectAll,expression:"selectAll"}],staticClass:"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",attrs:{id:"checkbox-all-search",type:"checkbox"},domProps:{checked:Array.isArray(e.selectAll)?e._i(e.selectAll,null)>-1:e.selectAll},on:{change:function(t){var r=e.selectAll,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=e._i(r,null);n.checked?l<0&&(e.selectAll=r.concat([null])):l>-1&&(e.selectAll=r.slice(0,l).concat(r.slice(l+1)))}else e.selectAll=o}}}),e._v(" "),t("label",{staticClass:"sr-only",attrs:{for:"checkbox-all-search"}},[e._v("checkbox")])])]),e._v(" "),t("th",{staticClass:"py-3 px-6",attrs:{scope:"col"}},[e._v("\n            Địa chị giao hàng\n          ")]),e._v(" "),t("th",{staticClass:"py-3 px-6",attrs:{scope:"col"}},[e._v("\n            Số điện thoại liên lạc\n          ")]),e._v(" "),t("th",{staticClass:"py-3 px-6",attrs:{scope:"col"}},[e._v("\n            Cập nhật lần cuối\n          ")]),e._v(" "),t("th",{staticClass:"py-3 px-6",attrs:{scope:"col"}},[e._v("\n            Khởi tạo\n          ")]),e._v(" "),t("th",{staticClass:"py-3 px-6",attrs:{scope:"col"}},[t("span",{staticClass:"inline-flex items-center gap-x-2"},[t("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{d:"M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"}}),e._v(" "),t("path",{attrs:{d:"M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"}})]),e._v("\n              Trạng thái đơn\n            ")])])])]),e._v(" "),e.$fetchState.pending||e.isRequestLoading.state&&e.isRequestLoading.url==e.fetchUrl?t("tbody",e._l(5,(function(r){return t("tr",{key:r,staticClass:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 animate-twPulse"},[e._m(0,!0),e._v(" "),e._m(1,!0),e._v(" "),e._m(2,!0),e._v(" "),e._m(3,!0),e._v(" "),e._m(4,!0),e._v(" "),e._m(5,!0)])})),0):t("tbody",[e.orders.length?e._e():t("tr",[t("td",{staticClass:"p-4 text-center",attrs:{colspan:"1000"}},[e._v("\n            Không có dữ liệu\n          ")])]),e._v(" "),e._l(e.orders,(function(r){return t("tr",{key:r.id,staticClass:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[t("td",{staticClass:"p-4 w-4"},[t("div",{staticClass:"flex items-center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",attrs:{id:"checkbox-table-search-1",type:"checkbox"},domProps:{value:r,checked:Array.isArray(e.selected)?e._i(e.selected,r)>-1:e.selected},on:{change:function(t){var n=e.selected,o=t.target,l=!!o.checked;if(Array.isArray(n)){var c=r,d=e._i(n,c);o.checked?d<0&&(e.selected=n.concat([c])):d>-1&&(e.selected=n.slice(0,d).concat(n.slice(d+1)))}else e.selected=l}}}),e._v(" "),t("label",{staticClass:"sr-only",attrs:{for:"checkbox-table-search-1"}},[e._v("checkbox")])])]),e._v(" "),t("th",{staticClass:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer",attrs:{scope:"row"},on:{click:function(t){return e.$router.push({path:"/sales/order/"+r.id})}}},[e._v("\n            "+e._s(r.address.address)+" - "+e._s(r.address.province)+" - "+e._s(r.address.country)+"\n          ")]),e._v(" "),t("td",{staticClass:"py-4 px-6 cursor-pointer",on:{click:function(t){return e.$router.push({path:"/sales/order/"+r.id})}}},[e._v("\n            "+e._s(r.address.phone_number)+"\n          ")]),e._v(" "),t("td",{staticClass:"py-4 px-6 cursor-pointer",on:{click:function(t){return e.$router.push({path:"/sales/order/"+r.id})}}},[e._v("\n            "+e._s(r.updated_at)+"\n          ")]),e._v(" "),t("td",{staticClass:"py-4 px-6 cursor-pointer",on:{click:function(t){return e.$router.push({path:"/sales/order/"+r.id})}}},[e._v("\n            "+e._s(r.created_at)+"\n          ")]),e._v(" "),t("td",{staticClass:"py-4 px-6 cursor-pointer font-bold text-blue-500",on:{click:function(t){return e.$router.push({path:"/sales/order/"+r.id})}}},[e._v("\n            "+e._s(r.state_name)+"\n          ")])])}))],2)])]),e._v(" "),t("nav",{staticClass:"flex justify-between items-center pt-4",attrs:{"aria-label":"Table navigation"}},[t("span",{staticClass:"text-sm font-normal text-gray-500 dark:text-gray-400"},[e._v("Đang hiển thị "),t("span",{staticClass:"font-semibold text-gray-900 dark:text-white"},[e._v(e._s(e.pagination.from)+" - "+e._s(e.pagination.to))]),e._v(" của\n      "),t("span",{staticClass:"font-semibold text-gray-900 dark:text-white"},[e._v(e._s(e.pagination.total))]),e._v(" kết quả")]),e._v(" "),t("ul",{staticClass:"inline-flex -space-x-px"},e._l(e.pagination.links,(function(link,r){return t("li",{key:r},[t("button",{class:(null==link.url?"cursor-not-allowed bg-gray-200/50 ":"")+(0==r?"rounded-l-lg ":r==e.pagination.links.length-1?"rounded-r-lg ":link.active?"text-primary-50 bg-primary-600 ":"text-gray-500 bg-white ")+"py-2 px-3 ml-0 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",attrs:{disabled:null==link.url},domProps:{innerHTML:e._s(link.label)},on:{click:function(t){e.fetchUrl=link.url}}})])})),0)])],1)}),[function(){var e=this,t=e._self._c;return t("td",{staticClass:"p-4 w-4"},[t("div",{staticClass:"flex items-center"},[t("input",{staticClass:"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",attrs:{id:"checkbox-table-search-1",type:"checkbox",disabled:""}}),e._v(" "),t("label",{staticClass:"sr-only",attrs:{for:"checkbox-table-search-1"}},[e._v("checkbox")])])])},function(){var e=this._self._c;return e("th",{staticClass:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white",attrs:{scope:"row"}},[e("div",{staticClass:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"})])},function(){var e=this._self._c;return e("td",{staticClass:"py-4 px-6"},[e("div",{staticClass:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})])},function(){var e=this._self._c;return e("td",{staticClass:"py-4 px-6"},[e("div",{staticClass:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})])},function(){var e=this._self._c;return e("td",{staticClass:"py-4 px-6"},[e("div",{staticClass:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})])},function(){var e=this._self._c;return e("td",{staticClass:"py-4 px-6"},[e("div",{staticClass:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Modal:r(902).default,ConfirmModal:r(905).default})}}]);