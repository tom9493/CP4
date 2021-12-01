(function(t){function e(e){for(var i,a,l=e[0],o=e[1],c=e[2],u=0,p=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],i=!0,l=1;l<r.length;l++){var o=r[l];0!==n[o]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var i={},n={app:0},s=[];function a(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=i,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(r,i,function(e){return t[e]}.bind(null,i));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=o;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-full w-full",attrs:{id:"app"}},[r("div",{staticClass:"bg-gray-500 w-full flex justify-center rounded-sm"},[r("router-link",{staticClass:"flex flex-col items-center h-32 hover:text-blue-900",attrs:{to:"/"}},[r("img",{staticClass:"rounded-full p-6 h-24",attrs:{src:"/icon.jpeg"}}),r("h4",{staticClass:"font-bold"},[t._v("My Collection")])])],1),r("div",{staticClass:"content"},[r("router-view")],1),r("div",{staticClass:"w-full h-20 pt-2 bg-gray-500 rounded-sm"},[r("router-link",{staticClass:"m-5 font-bold hover:shadow-sm hover:text-blue-900",attrs:{to:"/edit"}},[t._v("Edit collection items")]),r("p"),r("a",{staticClass:"m-5 font-bold hover:text-blue-900",attrs:{href:"https://github.com/tom9493/CP4.git"}},[t._v("Creative Project 4 Github Repository")])],1)])},s=[],a=r("2877"),l={},o=Object(a["a"])(l,n,s,!1,null,null,null),c=o.exports,d=r("8c4f"),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home flex flex-col items-center bg-gray-200 p-10"},[r("img",{staticClass:"w-full h-64 object-cover -mb-20",attrs:{src:"https://source.unsplash.com/random",alt:""}}),r("section",{staticClass:"flex flex-col items-center bg-white rounded-lg shadow-lg w-11/12"},[r("h1",{staticClass:"pt-4 font-bold text-gray-700"},[t._v("Catalog")]),r("section",{staticClass:"flex-none w-11/12 justify-center bg-white rounded-lg shadow-lg"},t._l(t.items,(function(e){return r("div",{key:e.id,staticClass:"inline-block w-1/4 m-10 bg-gray-200 rounded-lg shadow-sm"},[r("h2",{staticClass:"m-1 pt-2 pl-3 pr-3 font-medium"},[t._v(t._s(e.title))]),r("h3",{staticClass:"pl-4 pr-3 pb-1 font-medium"},[t._v("Value: $"+t._s(e.price))]),r("div",{staticClass:"flex justify-center"},[r("img",{staticClass:"rounded-lg w-11/12 h-40 object-cover",attrs:{src:e.path}})]),r("p",{staticClass:"pl-3 pt-2 pr-3 pb-2"},[t._v(t._s(e.description))])])})),0)])])},p=[],m=r("1da1"),f=(r("96cf"),r("bc3a")),v=r.n(f),h={name:"Home",data:function(){return{items:[]}},created:function(){this.getItems()},methods:{getItems:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/items");case 3:return r=e.sent,t.items=r.data,console.log("Got items!"),e.abrupt("return",!0);case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},g=h,b=Object(a["a"])(g,u,p,!1,null,null,null),w=b.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home flex flex-col items-center bg-gray-200 p-10"},[r("img",{staticClass:"w-full h-64 object-cover -mb-20",attrs:{src:"https://source.unsplash.com/random",alt:""}}),r("section",{staticClass:"flex flex-col items-center bg-white rounded-lg shadow-lg w-10/12"},[r("h1",{staticClass:"pt-4 font-bold text-gray-700"},[t._v("Edit Collection Items")]),r("div",{staticClass:"flex flex-col items-start bg-gray-200 shadow-lg p-3 m-5 w-10/12"},[r("h2",{staticClass:"p-2 font-bold"},[t._v("Add an Item")]),r("div",{staticClass:"p-2"},[r("div",{staticClass:"form"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"border border-black mb-2",attrs:{placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),r("p"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"border border-black mb-2",attrs:{placeholder:"Value"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}}),r("p"),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"border border-black mb-2",attrs:{placeholder:"Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),r("p"),r("input",{attrs:{type:"file",name:"photo"},on:{change:t.fileChanged}}),r("button",{staticClass:"border border-black pr-1 pl-1",on:{click:t.upload}},[t._v("Upload")])]),t.addItem?r("div",{staticClass:"w-full"},[r("div",{staticClass:"w-2/3 m-10 bg-gray-400 rounded-lg shadow-lg"},[t._m(0),r("h2",{staticClass:"m-1 pt-2 pl-3 pr-3 font-medium"},[t._v(t._s(t.addItem.title))]),r("h3",{staticClass:"pl-4 pr-3 pb-1 font-medium"},[t._v("Value: $"+t._s(t.addItem.price))]),r("div",{staticClass:"flex justify-center relative"},[r("img",{staticClass:"rounded-lg w-11/12 h-40 object-cover",attrs:{src:t.addItem.path}})]),r("p",{staticClass:"pl-3 pt-2 pr-3 pb-2"},[t._v(t._s(t.addItem.description))])])]):t._e()]),r("h2",{staticClass:"p-2 font-bold"},[t._v("Edit/Delete an Item")]),r("div",{staticClass:"p-2"},[r("div",{staticClass:"form"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.findTitle,expression:"findTitle"}],staticClass:"border border-black",attrs:{placeholder:"Search"},domProps:{value:t.findTitle},on:{input:function(e){e.target.composing||(t.findTitle=e.target.value)}}}),t.suggestions.length>0?r("div",{staticClass:"border border-black"},t._l(t.suggestions,(function(e){return r("div",{key:e.id,staticClass:"hover:border hover:text-blue-900",on:{click:function(r){return t.selectItem(e)}}},[t._v(t._s(e.title)+" ")])})),0):t._e()]),t.findItem?r("div",{staticClass:"upload"},[r("div",{staticClass:"flex justify-center"},[r("div",{staticClass:"w-1/3 m-10 bg-gray-400 rounded-lg shadow-lg"},[r("h1",{staticClass:"m-1 font-bold"},[t._v("Edit values here:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.findItem.title,expression:"findItem.title"}],staticClass:"m-1 font-medium",attrs:{placeholder:"New title"},domProps:{value:t.findItem.title},on:{input:function(e){e.target.composing||t.$set(t.findItem,"title",e.target.value)}}}),r("p"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.findItem.price,expression:"findItem.price"}],staticClass:"m-1 font-medium",attrs:{placeholder:"New price"},domProps:{value:t.findItem.price},on:{input:function(e){e.target.composing||t.$set(t.findItem,"price",e.target.value)}}}),r("p"),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.findItem.description,expression:"findItem.description"}],staticClass:"m-1",attrs:{placeholder:"New description"},domProps:{value:t.findItem.description},on:{input:function(e){e.target.composing||t.$set(t.findItem,"description",e.target.value)}}})]),r("div",{staticClass:"w-1/3 m-10 bg-gray-400 rounded-lg shadow-lg"},[r("h2",{staticClass:"m-1 pt-2 pl-3 pr-3 font-medium"},[t._v(t._s(t.findItem.title))]),r("h3",{staticClass:"pl-4 pr-3 pb-1 font-medium"},[t._v("Value: $"+t._s(t.findItem.price))]),r("div",{staticClass:"flex justify-center relative"},[r("img",{staticClass:"rounded-lg w-11/12 h-40 object-cover",attrs:{src:t.findItem.path}})]),r("p",{staticClass:"pl-3 pt-2 pr-3 pb-2"},[t._v(t._s(t.findItem.description))]),r("div")])])]):t._e(),t.findItem?r("div",{staticClass:"flex justify-center"},[r("div",{staticClass:"flex justify-center w-1/2"},[r("button",{staticClass:"bg-gray-400 rounded-lg hover:shadow-lg p-1",on:{click:function(e){return t.deleteItem(t.findItem)}}},[t._v("Delete Item")])]),r("div",{staticClass:"flex justify-center w-1/2"},[r("button",{staticClass:"bg-gray-400 rounded-lg hover:shadow-lg p-1",on:{click:function(e){return t.editItem(t.findItem)}}},[t._v("Finish Editing")])])]):t._e()])])])])},x=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center"},[r("h1",{staticClass:"font-bold"},[t._v("New Item Added!")])])}],_=(r("4de4"),r("d3b7"),r("2ca0"),r("4e82"),r("a4d3"),r("e01a"),r("b0c0"),{name:"Admin",data:function(){return{title:"",price:null,items:[],file:null,addItem:null,findTitle:"",findItem:null,description:""}},computed:{suggestions:function(){var t=this,e=this.items.filter((function(e){return e.title.toLowerCase().startsWith(t.findTitle.toLowerCase())}));return e.sort((function(t,e){return t.title>e.title}))}},created:function(){this.getItems()},methods:{editItem:function(t){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.put("/api/items/"+t._id,{title:e.findItem.title,price:e.findItem.price,description:e.findItem.description});case 3:return e.findItem=null,e.getItems(),r.abrupt("return",!0);case 8:r.prev=8,r.t0=r["catch"](0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},selectItem:function(t){this.findTitle="",this.findItem=t},getItems:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/items");case 3:return r=e.sent,t.items=r.data,e.abrupt("return",!0);case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},deleteItem:function(t){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.delete("/api/items/"+t._id);case 3:return e.findItem=null,e.getItems(),r.abrupt("return",!0);case 8:r.prev=8,r.t0=r["catch"](0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},fileChanged:function(t){this.file=t.target.files[0]},upload:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var r,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return 0==t.title.length&&(t.title="No Title"),null==t.price&&(t.price=0),0==t.description.length&&(t.description="No description"),e.prev=3,r=new FormData,r.append("photo",t.file,t.file.name),e.next=8,v.a.post("/api/photos",r);case 8:return i=e.sent,e.next=11,v.a.post("/api/items",{title:t.title,price:t.price,description:t.description,path:i.data.path});case 11:n=e.sent,t.addItem=n.data,e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](3),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))()}}}),I=_,y=Object(a["a"])(I,C,x,!1,null,null,null),j=y.exports;i["a"].use(d["a"]);var k=[{path:"/",name:"home",component:w},{path:"/edit",name:"edit",component:j}],O=new d["a"]({mode:"history",base:"/",routes:k}),P=O;r("def6"),r("ba8c");i["a"].config.productionTip=!1,new i["a"]({router:P,render:function(t){return t(c)}}).$mount("#app")},ba8c:function(t,e,r){},def6:function(t,e,r){}});
//# sourceMappingURL=app.e9ba2fb9.js.map