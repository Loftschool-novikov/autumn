(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{416:function(t,e,r){},443:function(t,e,r){"use strict";var n=r(416);r.n(n).a},469:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"works-section"},[t._m(0),r("div",{staticClass:"works-container"},[r("div",{staticClass:"container container--mobile-wide"},[t.showForm?r("add-new-work-form",{attrs:{mode:t.mode},on:{closeForm:function(e){t.showForm=!1}}}):t._e(),r("ul",{staticClass:"works"},[r("li",{staticClass:"works__item"},[r("add-new-button",{on:{click:t.openAddingForm}})],1),t._l(t.works,(function(e){return r("li",{staticClass:"works__item"},[r("works-item",{attrs:{work:e},on:{updateWork:t.updateWork}})],1)}))],2)],1)])])};n._withStripped=!0;var o=r(37);function i(t,e,r,n,o,i,s){try{var c=t[i](s),a=c.value}catch(t){return void r(t)}c.done?e(a):Promise.resolve(a).then(n,o)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={props:{pageTitle:{type:String,default:""}},components:{addNewButton:function(){return r.e(5).then(r.bind(null,479))},addNewWorkForm:function(){return r.e(14).then(r.bind(null,480))},worksItem:function(){return r.e(15).then(r.bind(null,481))}},data:function(){return{showForm:!1,mode:"add"}},computed:c({},Object(o.e)("works",{works:function(t){return t.works}})),methods:c({},Object(o.b)("works",["fetchWorks"]),{},Object(o.b)("tooltips",["showTooltip"]),{openAddingForm:function(){this.showForm=!0,this.mode="add"},collectWorks:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.fetchWorks();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),e.showTooltip({type:"error",text:"Ошибка при загрузке работ"});case 8:case"end":return t.stop()}}),t,null,[[0,5]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var s=t.apply(e,r);function c(t){i(s,n,o,c,a,"next",t)}function a(t){i(s,n,o,c,a,"throw",t)}c(void 0)}))})()},updateWork:function(){this.mode="edit",this.showForm=!0}}),created:function(){this.collectWorks()}},l=(r(443),r(128)),d=Object(l.a)(u,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h1",{staticClass:"page-title"},[this._v('Блок "Мои работы"')])])}],!1,null,"0c1d3217",null);d.options.__file="src/admin/components/pages/works.vue";e.default=d.exports}}]);