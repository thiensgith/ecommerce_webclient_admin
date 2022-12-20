(window.webpackJsonp=window.webpackJsonp||[]).push([[17,8,13,15],{898:function(e,r,t){var content=t(901);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(39).default)("09083c9e",content,!0,{sourceMap:!1})},899:function(e,r,t){"use strict";t.r(r);t(45);var n={name:"SuperButton",props:{loading:{type:Boolean,default:!1},color:{type:String,required:!1},size:{type:String,required:!1},text:String,to:String,href:String},computed:{classes:function(){var e="",r="";switch(this.color){case"slate":e="bg-slate-700 hover:bg-slate-800 focus:ring-slate-500 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800";break;case"gray":e="bg-gray-700 hover:bg-gray-800 focus:ring-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800";break;case"zinc":e="bg-zinc-700 hover:bg-zinc-800 focus:ring-zinc-500 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800";break;case"neutral":e="bg-neutral-700 hover:bg-neutral-800 focus:ring-neutral-500 dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800";break;case"stone":e="bg-stone-700 hover:bg-stone-800 focus:ring-stone-500 dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800";break;case"red":e="bg-red-700 hover:bg-red-800 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800";break;case"orange":e="bg-orange-700 hover:bg-orange-800 focus:ring-orange-500 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800";break;case"amber":e="bg-amber-700 hover:bg-amber-800 focus:ring-amber-500 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800";break;case"yellow":e="bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-500 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800";break;case"lime":e="bg-lime-700 hover:bg-lime-800 focus:ring-lime-500 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800";break;case"green":e="bg-green-700 hover:bg-green-800 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";break;case"emerald":e="bg-emerald-700 hover:bg-emerald-800 focus:ring-emerald-500 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800";break;case"teal":e="bg-teal-700 hover:bg-teal-800 focus:ring-teal-500 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800";break;case"cyan":e="bg-cyan-700 hover:bg-cyan-800 focus:ring-cyan-500 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800";break;case"sky":e="bg-sky-700 hover:bg-sky-800 focus:ring-sky-500 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800";break;case"blue":e="bg-blue-700 hover:bg-blue-800 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";break;case"indigo":e="bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-500 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800";break;case"violet":e="bg-violet-700 hover:bg-violet-800 focus:ring-violet-500 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800";break;case"purple":e="bg-purple-700 hover:bg-purple-800 focus:ring-purple-500 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800";break;case"fuchsia":e="bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-fuchsia-500 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800";break;case"pink":e="bg-pink-700 hover:bg-pink-800 focus:ring-pink-500 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800";break;case"rose":e="bg-rose-700 hover:bg-rose-800 focus:ring-rose-500 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800";break;default:e="bg-primary-700 hover:bg-primary-800 focus:ring-primary-500 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"}switch(this.size){case"extra-small":r="text-xs px-3 py-2";break;case"small":r="text-sm px-3 py-2";break;case"extra-large":r="text-base px-6 py-3.5";break;case"large":r="py-3 px-5 text-base";break;default:r="text-sm px-5 py-2.5"}return"".concat(e," inline-flex item-centers text-white gap-x-2 focus:ring-4 focus:outline-none font-medium rounded-lg text-center ").concat(r)}}},o=t(17),component=Object(o.a)(n,(function(){var e=this,r=e._self._c;return e.to?r("NuxtLink",{class:e.classes,attrs:{to:e.to}},[e._t("default"),e._v("\n  "+e._s(e.text)+"\n")],2):e.href?r("a",{class:e.classes,attrs:{href:e.href,target:"_blank"}},[e._t("default"),e._v("\n  "+e._s(e.text)+"\n")],2):r("button",{class:e.classes,attrs:{type:"button",disabled:e.loading},on:{click:function(r){return e.$emit("click")}}},[e.loading?r("svg",{staticClass:"animate-twSpin animate-infinite h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[r("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),e._v(" "),r("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):e._t("default"),e._v("\n  "+e._s(e.text)+"\n")],2)}),[],!1,null,null,null);r.default=component.exports},900:function(e,r,t){"use strict";t(898)},901:function(e,r,t){var n=t(38)((function(i){return i[1]}));n.push([e.i,".modal-enter-active{animation:flipInY .3s}.modal-leave-active{animation:flipOutY .3s}.modalWrapper-enter-active{animation:fadeIn .3s}.modalWrapper-leave-active{animation:fadeOut .3s}",""]),n.locals={},e.exports=n},902:function(e,r,t){"use strict";t.r(r);t(46);var n={name:"Modal",transitions:["modal","modalWrapper"],data:function(){return{}},props:{show:{type:Boolean,default:!0},type:{type:String,required:!0,validator:function(e){return["success","error","warning"].includes(e)}},actionText:{type:String,default:"Tiếp tục"},title:{type:String,required:!0}},computed:{classIcon:function(){switch(this.type){case"success":return"w-12 h-12 rounded-full bg-success dark:bg-success-content p-2 flex items-center justify-center mx-auto mb-3.5";case"warning":return"w-12 h-12 rounded-full bg-warning dark:bg-warning-content p-2 flex items-center justify-center mx-auto mb-3.5";case"error":return"w-12 h-12 rounded-full bg-error dark:bg-error-content p-2 flex items-center justify-center mx-auto mb-3.5";default:return"w-12 h-12 rounded-full bg-primary dark:bg-primary-900 p-2 flex items-center justify-center mx-auto mb-3.5"}}},methods:{clickOut:function(){this.$emit("close")}}},o=(t(900),t(17)),component=Object(o.a)(n,(function(){var e=this,r=e._self._c;return r("transition",{attrs:{"enter-active-class":"animate-fadeIn animate-duration-300","leave-active-class":"animate-fadeOut animate-duration-300"}},[e.show?r("div",{staticClass:"fixed top-0 right-0 left-0 bottom-0 flex z-50 bg-black/50 justify-center items-center"},[r("transition",[r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickOut,expression:"clickOut"}],staticClass:"relative p-4 max-w-sm text-center w-full bg-white rounded-lg shadow-lg dark:bg-gray-800 sm:p-5"},[r("button",{staticClass:"text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",attrs:{type:"button","data-modal-toggle":"successModal"},on:{click:function(r){return e.$emit("close")}}},[r("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})]),e._v(" "),r("span",{staticClass:"sr-only"},[e._v("Close modal")])]),e._v(" "),r("div",{class:e.classIcon},["success"==e.type?r("svg",{staticClass:"w-8 h-8 text-white dark:text-success",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]):"warning"==e.type?r("svg",{staticClass:"w-8 h-8 text-warning-content dark:text-warning",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"}})]):"error"==e.type?r("svg",{staticClass:"w-8 h-8 text-error-content dark:text-error",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"}})]):r("svg",{staticClass:"w-8 h-8 text-primary-600 dark:text-primary-200",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}})]),e._v(" "),r("span",{staticClass:"sr-only"},[e._v(e._s(e.title))])]),e._v(" "),r("p",{staticClass:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},[e._v(e._s(e.title))]),e._v(" "),r("button",{staticClass:"py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900",attrs:{type:"button"},on:{click:function(r){return e.$emit("action")}}},[e._v("\n        "+e._s(e.actionText)+"\n      ")])])])],1):e._e()])}),[],!1,null,null,null);r.default=component.exports},903:function(e,r,t){"use strict";t.r(r);t(30),t(160);var n={name:"FormInput",props:{label:String,placeholder:{type:String},value:[String,Number,Boolean],textarea:{type:Boolean,default:function(){return!1}},inputType:{type:String,default:function(){return"text"}},select:{type:Array,default:function(){return[]}},required:{type:Boolean,default:function(){return!1}},loading:{type:Boolean,default:function(){return!1}}},data:function(){return{scopedSlots:this.$scopedSlots,slot:this.$slots}}},o=t(17),component=Object(o.a)(n,(function(){var e,r,t=this,n=t._self._c;return n("div",{staticClass:"w-full flex flex-col gap-y-2"},[n("label",{staticClass:"block text-sm font-medium text-gray-900 dark:text-gray-300"},[t._v(t._s(t.label)+" "),t.required?n("span",{staticClass:"text-red-700 font-bold"},[t._v("*")]):t._e()]),t._v(" "),t.loading?n("div",{attrs:{role:"status"}},[n("svg",{staticClass:"mr-2 w-8 h-8 text-gray-200 animate-twSpin animate-infinite dark:text-gray-600 fill-blue-600",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),t._v(" "),n("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t.textarea?n("textarea",{staticClass:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",attrs:{rows:"5",placeholder:null!==(e=t.placeholder)&&void 0!==e?e:t.label},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}):t.select.length?n("select",{staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",domProps:{value:t.value},on:{change:function(e){return t.$emit("input",e.target.value)}}},[n("option",{attrs:{selected:""},domProps:{value:null}},[t._v(t._s(t.placeholder))]),t._v(" "),t._l(t.select,(function(e,r){return n("option",{key:r,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2):n("div",{staticClass:"relative"},[n("div",{staticClass:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400"},[t._t("icon",null,{_class:"w-5 h-5"})],2),t._v(" "),n("input",{class:(t.$scopedSlots.icon?"pl-10 ":"")+"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",attrs:{type:t.inputType,placeholder:null!==(r=t.placeholder)&&void 0!==r?r:t.label,required:""},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})]),t._v(" "),t.$scopedSlots.helper?n("p",{staticClass:"mt-2 text-sm text-gray-500 dark:text-gray-400",attrs:{id:"helper-text-explanation"}},[t._t("helper")],2):t._e()])}),[],!1,null,null,null);r.default=component.exports},984:function(e,r,t){"use strict";t.r(r);t(30);var n=t(12),o=(t(61),{name:"ContentAdministratorCreate",transition:{enterActiveClass:"animate-fadeIn"},data:function(){return{state:{success:!1},administrator:{}}},methods:{submit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.post("/account/administrators",e.administrator);case 3:r.sent,e.state.success=!0,r.next=9;break;case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})))()}},computed:{isRequestLoading:function(){return this.$store.state.loading.isRequestLoading}}}),l=t(17),component=Object(l.a)(o,(function(){var e=this,r=e._self._c;return r("transition",[r("div",{staticClass:"container mx-auto px-4 lg:px-0"},[r("Modal",{attrs:{show:e.state.success,type:"success",title:"Thành công"},on:{close:function(r){return e.$router.push("/account/administrator")},action:function(r){return e.$router.push("/account/administrator")}}}),e._v(" "),r("h1",{staticClass:"text-4xl font-extrabold dark:text-white mb-8"},[e._v("Quản trị viên")]),e._v(" "),r("section",{staticClass:"bg-white dark:bg-gray-900"},[r("div",{staticClass:"max-w-2xl px-4 mx-auto py-8"},[r("h2",{staticClass:"mb-4 text-xl font-bold text-gray-900 dark:text-white"},[e._v("Thêm quản trị viên mới")]),e._v(" "),r("form",{attrs:{action:"#"}},[r("div",{staticClass:"grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5"},[r("div",{staticClass:"sm:col-span-2"},[r("FormInput",{attrs:{label:"Tên quản trị viên",required:""},model:{value:e.administrator.name,callback:function(r){e.$set(e.administrator,"name",r)},expression:"administrator.name"}})],1),e._v(" "),r("div",{staticClass:"sm:col-span-2"},[r("FormInput",{attrs:{label:"Địa chỉ email",required:""},model:{value:e.administrator.email,callback:function(r){e.$set(e.administrator,"email",r)},expression:"administrator.email"}})],1),e._v(" "),r("div",[r("FormInput",{attrs:{label:"Tên đăng nhập",required:""},model:{value:e.administrator.username,callback:function(r){e.$set(e.administrator,"username",r)},expression:"administrator.username"}})],1),e._v(" "),r("div",[r("FormInput",{attrs:{label:"Vai trò"},model:{value:e.administrator.role,callback:function(r){e.$set(e.administrator,"role",r)},expression:"administrator.role"}})],1)]),e._v(" "),r("div",{staticClass:"flex justify-between items-center"},[r("SuperButton",{attrs:{to:"/account/administrator",text:"Trở về",color:"blue"}},[r("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z","clip-rule":"evenodd"}})])]),e._v(" "),r("SuperButton",{attrs:{loading:e.isRequestLoading.state&&"post"==e.isRequestLoading.method,text:"Thêm quản trị viên"},on:{click:e.submit}})],1)])])])],1)])}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{Modal:t(902).default,FormInput:t(903).default,SuperButton:t(899).default})}}]);