webpackJsonp([1],{1:function(e,t){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},2:function(e,t){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)"undefined"!=typeof e[o]&&(n[o]=e[o]);return n},t.merge=function(e,o,r){if(!o)return e;if("object"!=typeof o){if(Array.isArray(e))e.push(o);else{if("object"!=typeof e)return[e,o];(r.plainObjects||r.allowPrototypes||!n.call(Object.prototype,o))&&(e[o]=!0)}return e}if("object"!=typeof e)return[e].concat(o);var a=e;return Array.isArray(e)&&!Array.isArray(o)&&(a=t.arrayToObject(e,r)),Array.isArray(e)&&Array.isArray(o)?(o.forEach(function(o,a){n.call(e,a)?e[a]&&"object"==typeof e[a]?e[a]=t.merge(e[a],o,r):e.push(o):e[a]=o}),e):Object.keys(o).reduce(function(e,a){var i=o[a];return n.call(e,a)?e[a]=t.merge(e[a],i,r):e[a]=i,e},a)},t.assign=function(e,t){return Object.keys(t).reduce(function(e,n){return e[n]=t[n],e},e)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",r=0;r<t.length;++r){var a=t.charCodeAt(r);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?n+=t.charAt(r):a<128?n+=o[a]:a<2048?n+=o[192|a>>6]+o[128|63&a]:a<55296||a>=57344?n+=o[224|a>>12]+o[128|a>>6&63]+o[128|63&a]:(r+=1,a=65536+((1023&a)<<10|1023&t.charCodeAt(r)),n+=o[240|a>>18]+o[128|a>>12&63]+o[128|a>>6&63]+o[128|63&a])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var o=n||[],r=o.indexOf(e);if(r!==-1)return o[r];if(o.push(e),Array.isArray(e)){for(var a=[],i=0;i<e.length;++i)e[i]&&"object"==typeof e[i]?a.push(t.compact(e[i],o)):"undefined"!=typeof e[i]&&a.push(e[i]);return a}var l=Object.keys(e);return l.forEach(function(n){e[n]=t.compact(e[n],o)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&"undefined"!=typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},3:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.get=t.post=void 0;var r=n(11),a=o(r),i=n(18),l=o(i),c=n(5),s=o(c),p=n(17),u=o(p),d=n(6),f=n(19),m=function(e){return 0==e.code?l.default.resolve(e.data):e.code!=-100?l.default.reject(e):void setTimeout(function(){(0,f.MessageBox)({title:"错误",type:"error",message:"您的登录已超时，请重新登录！",duration:0,callback:function(){u.default.replace("/login")}})},200)},v=function(e){return e&&e instanceof FormData?e:(0,d.stringify)(e)};t.post=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return s.default.http.post(e,v(t),n).then(m)},t.get=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return s.default.http.get(e,(0,a.default)({},{params:t},n)).then(m)}},4:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.WEBMENU_LIST="/manage/webMenu/list",t.WEBMENU_EDIT="/manage/webMenu/edit",t.HOMEBANNER_LIST="/manage/homeBanner/list",t.HOMEBANNER_EDIT="/manage/homeBanner/edit",t.HOMEBANNER_DEL="/manage/homeBanner/del",t.PEOPLE_LIST="/manage/people/list",t.PEOPLE_EDIT="/manage/people/edit",t.PEOPLE_DEL="/manage/people/del",t.JOIN_LIST="/manage/join/list",t.JOIN_EDIT="/manage/join/edit",t.JOIN_DEL="/manage/join/del",t.WEB_SETTING_INFO="/manage/webSetting/getInfo",t.WEB_SETTING_EDIT="/manage/webSetting/edit",t.TEAMMINUS_INFO="/manage/teamminus/getInfo",t.TEAMMINUS_EDIT="/manage/teamminus/edit",t.ADMIN_LIST="/manage/admin/list",t.ADMIN_EDIT="/manage/admin/edit",t.ADMIN_RESETPWD="/manage/admin/resetPwd",t.ADMIN_DEL="/manage/admin/del",t.CHANGE_PWD="/manage/admin/changePwd",t.LOGIN="/manage/login",t.LOGOUT="/manage/admin/logout",t.MENU_TREE="/manage/menu/treeMenu",t.MENU_EDIT="/manage/menu/edit",t.VIDEO_LIST="/manage/video/list",t.VIDEO_EDIT="/manage/video/edit",t.VIDEO_DEL="/manage/video/del",t.PROJECT_LIST="/manage/project/list",t.PROJECT_EDIT="/manage/project/edit",t.PROJECT_DEL="/manage/project/del"},6:function(e,t,n){"use strict";var o=n(8),r=n(7),a=n(1);e.exports={formats:a,parse:r,stringify:o}},7:function(e,t,n){"use strict";var o=n(2),r=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:o.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t){for(var n={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,l=o.split(t.delimiter,i),c=0;c<l.length;++c){var s,p,u=l[c],d=u.indexOf("]="),f=d===-1?u.indexOf("="):d+1;f===-1?(s=t.decoder(u,a.decoder),p=t.strictNullHandling?null:""):(s=t.decoder(u.slice(0,f),a.decoder),p=t.decoder(u.slice(f+1),a.decoder)),r.call(n,s)?n[s]=[].concat(n[s]).concat(p):n[s]=p}return n},l=function(e,t,n){if(!e.length)return t;var o,r=e.shift();if("[]"===r)o=[],o=o.concat(l(e,t,n));else{o=n.plainObjects?Object.create(null):{};var a="["===r.charAt(0)&&"]"===r.charAt(r.length-1)?r.slice(1,-1):r,i=parseInt(a,10);!isNaN(i)&&r!==a&&String(i)===a&&i>=0&&n.parseArrays&&i<=n.arrayLimit?(o=[],o[i]=l(e,t,n)):o[a]=l(e,t,n)}return o},c=function(e,t,n){if(e){var o=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,c=a.exec(o),s=c?o.slice(0,c.index):o,p=[];if(s){if(!n.plainObjects&&r.call(Object.prototype,s)&&!n.allowPrototypes)return;p.push(s)}for(var u=0;null!==(c=i.exec(o))&&u<n.depth;){if(u+=1,!n.plainObjects&&r.call(Object.prototype,c[1].slice(1,-1))&&!n.allowPrototypes)return;p.push(c[1])}return c&&p.push("["+o.slice(c.index)+"]"),l(p,t,n)}};e.exports=function(e,t){var n=t?o.assign({},t):{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.ignoreQueryPrefix=n.ignoreQueryPrefix===!0,n.delimiter="string"==typeof n.delimiter||o.isRegExp(n.delimiter)?n.delimiter:a.delimiter,n.depth="number"==typeof n.depth?n.depth:a.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:a.arrayLimit,n.parseArrays=n.parseArrays!==!1,n.decoder="function"==typeof n.decoder?n.decoder:a.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:a.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:a.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:a.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:a.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:a.strictNullHandling,""===e||null===e||"undefined"==typeof e)return n.plainObjects?Object.create(null):{};for(var r="string"==typeof e?i(e,n):e,l=n.plainObjects?Object.create(null):{},s=Object.keys(r),p=0;p<s.length;++p){var u=s[p],d=c(u,r[u],n);l=o.merge(l,d,n)}return o.compact(l)}},8:function(e,t,n){"use strict";var o=n(2),r=n(1),a={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,n,r,a,i,c,s,p,u,d,f,m){var v=t;if("function"==typeof s)v=s(n,v);else if(v instanceof Date)v=d(v);else if(null===v){if(a)return c&&!m?c(n,l.encoder):n;v=""}if("string"==typeof v||"number"==typeof v||"boolean"==typeof v||o.isBuffer(v)){if(c){var g=m?n:c(n,l.encoder);return[f(g)+"="+f(c(v,l.encoder))]}return[f(n)+"="+f(String(v))]}var b=[];if("undefined"==typeof v)return b;var h;if(Array.isArray(s))h=s;else{var y=Object.keys(v);h=p?y.sort(p):y}for(var _=0;_<h.length;++_){var j=h[_];i&&null===v[j]||(b=Array.isArray(v)?b.concat(e(v[j],r(n,j),r,a,i,c,s,p,u,d,f,m)):b.concat(e(v[j],n+(u?"."+j:"["+j+"]"),r,a,i,c,s,p,u,d,f,m)))}return b};e.exports=function(e,t){var n=e,i=t?o.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var s="undefined"==typeof i.delimiter?l.delimiter:i.delimiter,p="boolean"==typeof i.strictNullHandling?i.strictNullHandling:l.strictNullHandling,u="boolean"==typeof i.skipNulls?i.skipNulls:l.skipNulls,d="boolean"==typeof i.encode?i.encode:l.encode,f="function"==typeof i.encoder?i.encoder:l.encoder,m="function"==typeof i.sort?i.sort:null,v="undefined"!=typeof i.allowDots&&i.allowDots,g="function"==typeof i.serializeDate?i.serializeDate:l.serializeDate,b="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:l.encodeValuesOnly;if("undefined"==typeof i.format)i.format=r.default;else if(!Object.prototype.hasOwnProperty.call(r.formatters,i.format))throw new TypeError("Unknown format option provided.");var h,y,_=r.formatters[i.format];"function"==typeof i.filter?(y=i.filter,n=y("",n)):Array.isArray(i.filter)&&(y=i.filter,h=y);var j=[];if("object"!=typeof n||null===n)return"";var w;w=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var x=a[w];h||(h=Object.keys(n)),m&&h.sort(m);for(var O=0;O<h.length;++O){var E=h[O];u&&null===n[E]||(j=j.concat(c(n[E],E,x,p,u,d?f:null,y,m,v,g,_,b)))}var T=j.join(s),D=i.addQueryPrefix===!0?"?":"";return T.length>0?D+T:""}},23:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},29:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(21),a=o(r),i=n(11),l=o(i),c=n(3),s=[];t.default={data:function(){return{vo:{loading:!1,currentPage:1,pageSize:20,total:0,data:[],timer:null}}},props:{params:{type:Object,default:function(){return{}}},url:String},computed:{},methods:{handleSizeChange:function(e){this.vo.pageSize=e,this.loadData()},handleCurrentChange:function(e){this.vo.currentPage=e,this.loadData()},loadData:function(){var e=this,t=(0,l.default)({},JSON.parse((0,a.default)(this.params)),{page:this.vo.currentPage,rows:this.vo.pageSize});this.vo.loading=!0,window.clearTimeout(this.vo.timer),this.vo.timer=setTimeout(function(){e.vo.loading&&(e.vo.loading=!1,e.$message({type:"error",message:"服务器响应超时",duration:2e3,showClose:!0}))},1e4),(0,c.get)(this.url,t).then(function(t){e.vo.loading=!1,e.vo.data=t.rows,e.vo.total=t.total}).catch(function(t){e.vo.loading=!1,e.$message({type:"error",message:t.message,duration:0,showClose:!0})})},reload:function(){this.loadData()},resize:function(){var e=(document.documentElement.scrollTop,this.$el.getBoundingClientRect().top);this.vo.height=window.document.documentElement.clientHeight-e-50}},mounted:function(){var e=this;s.push(this),this.$nextTick(function(){e.resize()}),this.loadData()},filters:{}}},33:function(e,t,n){var o=n(10),r=n(30),a=n(24),i=n(23),l="["+i+"]",c="​",s=RegExp("^"+l+l+"*"),p=RegExp(l+l+"*$"),u=function(e,t,n){var r={},l=a(function(){return!!i[e]()||c[e]()!=c}),s=r[e]=l?t(d):i[e];n&&(r[n]=s),o(o.P+o.F*l,"String",r)},d=u.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(p,"")),e};e.exports=u},34:function(e,t,n){t=e.exports=n(12)(),t.push([e.id,".dg__warp[data-v-0b9306d2]{background-color:#fff;padding-bottom:8px}.jf-pagintion[data-v-0b9306d2]{background:#fff;margin-top:3px}",""])},36:function(e,t,n){var o=n(34);"string"==typeof o&&(o=[[e.id,o,""]]);n(14)(o,{});o.locals&&(e.exports=o.locals)},37:function(e,t,n){var o,r;n(36),o=n(29);var a=n(38);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-0b9306d2",e.exports=o},38:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.vo.loading,expression:"vo.loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"dg__warp"},[n("el-table",{attrs:{data:e.vo.data,border:"",height:e.vo.height,"element-loading-text":"拼命加载中"}},[e._t("default")],2),e._v(" "),n("el-pagination",{staticClass:"jf-pagintion",attrs:{"current-page":e.vo.currentPage,"page-sizes":[5,10,20,30,50,100,200],"page-size":e.vo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.vo.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]}},43:function(e,t,n){e.exports={default:n(44),__esModule:!0}},44:function(e,t,n){n(52),e.exports=parseInt},50:function(e,t,n){var o=n(13).parseInt,r=n(33).trim,a=n(23),i=/^[-+]?0[xX]/;e.exports=8!==o(a+"08")||22!==o(a+"0x16")?function(e,t){var n=r(String(e),3);return o(n,t>>>0||(i.test(n)?16:10))}:o},52:function(e,t,n){var o=n(10),r=n(50);o(o.S+o.F*(Number.parseInt!=r),"Number",{parseInt:r})},62:function(e,t,n){e.exports={default:n(63),__esModule:!0}},63:function(e,t,n){n(57),n(53),e.exports=n(77)},77:function(e,t,n){var o=n(25),r=n(56);e.exports=n(16).getIterator=function(e){var t=r(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return o(t.call(e))}},160:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{dialogVisible:!1,dialogImageUrl:""}},computed:{},methods:{show:function(e){var t=this.$refs.view.querySelector("img");this.dialogImageUrl=t.getAttribute("src"),this.dialogVisible=!0}},mounted:function(){},components:{},filters:{}}},172:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(43),a=o(r),i=n(62),l=o(i),c=n(21),s=o(c),p=n(178),u=n(4),d=n(37),f=o(d),m=n(292),v=o(m);t.default={data:function(){return{po:{project:{id:"",name_cn:"",name_en:"",content_cn:"",content_en:"",time:null,type:1,files:[]},params:{name_cn:"",name_en:"",type:[1,2,3]}},vo:{labelWidth:"120px",dialog:{title:"",open:!1,mode:"",reloadFile:!0},activeTab:"base",url:u.PROJECT_LIST}}},methods:{openDialog:function(e,t){var n=this;this.clearFile(),this.vo.dialog.open=!0,this.$nextTick(function(){if(n.$refs.projectForm.resetFields(),n.vo.activeTab="base","add"==e)n.po.project={id:"",name_cn:"",name_en:"",content_cn:"",content_en:"",time:null,type:1,files:[""]},n.vo.dialog.title="添加项目";else{var o=JSON.parse((0,s.default)(t));n.po.project={id:o._id,name_cn:o.cn.name,name_en:o.en.name,content_cn:o.cn.content,content_en:o.en.content,time:new Date(o.time),type:o.type,files:o.files},n.vo.dialog.title="修改项目"}n.vo.dialog.mode=e})},editProject:function(){var e=this;this.$refs.projectForm.validate(function(t){if(!t)return!1;var n=new FormData;"edit"==e.vo.dialog.mode&&n.append("id",e.po.project.id),n.append("name_cn",e.po.project.name_cn),n.append("name_en",e.po.project.name_en),n.append("content_cn",e.po.project.content_cn),n.append("content_en",e.po.project.content_en),n.append("time",e.po.project.time),n.append("type",e.po.project.type);var o=[],r=0,a=e.$refs.projectForm.$el.querySelectorAll("input[type=file]"),i=!0,c=!1,u=void 0;try{for(var d,f=(0,l.default)(e.po.project.files);!(i=(d=f.next()).done);i=!0){d.value;a[r].files.length?(n.append("file"+r,a[r].files[0]),o.push("")):o.push(e.po.project.files[r]),r++}}catch(e){c=!0,u=e}finally{try{!i&&f.return&&f.return()}finally{if(c)throw u}}n.append("urls",(0,s.default)(o)),(0,p.edit)(n).then(function(t){e.loadList(),e.vo.dialog.open=!1}).catch(function(t){e.$message({type:"error",message:t.message,duration:0,showClose:!0})})})},addFile:function(){this.po.project.files.push(""),this.vo.activeTab="tab"+(this.po.project.files.length-1)},removeFile:function(e){var t=(0,a.default)(e.replace("tab",""));if(this.po.project.files.splice(t,1),e==this.vo.activeTab)0!=t?this.vo.activeTab="tab"+(t-1):this.vo.activeTab="base";else{var n=(0,a.default)(this.vo.activeTab.replace("tab",""));n>t&&(this.vo.activeTab="tab"+(n-1))}},selectImg:function(e,t){var n=e.target.files;if(n&&n.length){var o=n[0];if(this.isVideo(o.name))this.$set(this.po.project.files,t,"video"),console.info(this.po.project);else{var r=new FileReader,a=this;r.onload=function(e){a.$set(a.po.project.files,t,e.target.result)},r.readAsDataURL(o)}}},isVideo:function(e){return"mp4"==e.split(".").pop().toLowerCase()},clearFile:function(){var e=this;this.vo.dialog.reloadFile=!1,this.$nextTick(function(){e.vo.dialog.reloadFile=!0})},loadList:function(){this.$refs.dg.reload()},delProject:function(e){var t=this;(0,p.del)({id:e._id}).then(function(e){t.loadList()})},converToCNDate:function(e){function t(e){return parseInt(e)<10?"0"+e:e}var n=new Date(e),o=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return o+"-"+t(r)+"-"+t(a)}},mounted:function(){},components:{datagrid:f.default,fileView:v.default}}},178:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.del=t.edit=void 0;var r=n(3),a=n(4),i=o(a);t.edit=function(e){return(0,r.post)(i.PROJECT_EDIT,e,{timeout:216e5})},t.del=function(e){return(0,r.post)(i.PROJECT_DEL,e)}},243:function(e,t,n){t=e.exports=n(12)(),t.push([e.id,".dialog--project{width:80%;max-width:1024px}",""])},252:function(e,t,n){t=e.exports=n(12)(),t.push([e.id,"",""])},273:function(e,t,n){var o=n(243);"string"==typeof o&&(o=[[e.id,o,""]]);n(14)(o,{});o.locals&&(e.exports=o.locals)},283:function(e,t,n){var o=n(252);"string"==typeof o&&(o=[[e.id,o,""]]);n(14)(o,{});o.locals&&(e.exports=o.locals)},292:function(e,t,n){var o,r;n(283),o=n(160);var a=n(323);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-bb21888a",e.exports=o},304:function(e,t,n){var o,r;n(273),o=n(172);var a=n(311);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,e.exports=o},311:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-form",{staticStyle:{"padding-top":"20px","padding-left":"30px"},attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"中文名称:"}},[n("el-input",{model:{value:e.po.params.name_cn,callback:function(t){e.po.params.name_cn=t},expression:"po.params.name_cn"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"英文名称:"}},[n("el-input",{model:{value:e.po.params.name_en,callback:function(t){e.po.params.name_en=t},expression:"po.params.name_en"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"项目类型:"}},[n("el-checkbox-group",{model:{value:e.po.params.type,callback:function(t){e.po.params.type=t},expression:"po.params.type"}},[n("el-checkbox",{attrs:{label:1,name:"status"}},[e._v("小型")]),e._v(" "),n("el-checkbox",{attrs:{label:2,name:"status"}},[e._v("中型")]),e._v(" "),n("el-checkbox",{attrs:{label:3,name:"status"}},[e._v("大型")])],1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{icon:"search",type:"primary"},on:{click:e.loadList}},[e._v("查询")]),e._v(" "),n("el-button",{attrs:{icon:"plus",type:"success"},on:{click:function(t){e.openDialog("add")}}},[e._v("添加")])],1)],1),e._v(" "),n("datagrid",{ref:"dg",attrs:{url:e.vo.url,params:e.po.params}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-carousel",{attrs:{interval:5e3,type:"card",height:"200px",arrow:"always"}},e._l(t.row.files,function(t){return n("el-carousel-item",{staticStyle:{"text-align":"center"}},[e.isVideo(t)?n("div",[n("video",{staticStyle:{height:"200px"},attrs:{controls:""}},[n("source",{attrs:{src:t,type:"video/mp4"}}),e._v("\n                                您的浏览器不支持Video标签。\n                            ")])]):n("div",[n("img",{staticStyle:{height:"200px"},attrs:{src:t}})])])}))]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"cn.name",label:"项目中文名",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{prop:"en.name",label:"项目英文名",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{prop:"time",label:"日期",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(e.converToCNDate(t.row.time))+"\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"类型",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(1==t.row.type?"小型":2==t.row.type?"中型":"大型")+"\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"small",icon:"edit"},on:{click:function(n){e.openDialog("edit",t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{size:"small",icon:"delete"},on:{click:function(n){e.delProject(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("el-dialog",{attrs:{title:e.vo.dialog.title,"custom-class":"dialog--project",visible:e.vo.dialog.open},on:{"update:visible":function(t){e.vo.dialog.open=t}}},[n("el-form",{ref:"projectForm",attrs:{model:e.po.project}},[n("el-tabs",{staticStyle:{"min-height":"350px"},attrs:{type:"border-card"},on:{"tab-remove":e.removeFile},model:{value:e.vo.activeTab,callback:function(t){e.vo.activeTab=t},expression:"vo.activeTab"}},[n("el-tab-pane",{attrs:{label:"基本信息",name:"base"}},[n("el-form-item",{attrs:{label:"名称(中文)",prop:"name_cn",rules:{required:!0,message:"请输入中文名称",trigger:"blur"},"label-width":e.vo.labelWidth}},[n("el-input",{attrs:{placeholder:"请输入项目名称"},model:{value:e.po.project.name_cn,callback:function(t){e.po.project.name_cn=t},expression:"po.project.name_cn"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"名称(English)",prop:"name_en",rules:{required:!0,message:"请输入英文名称",trigger:"blur"},"label-width":e.vo.labelWidth}},[n("el-input",{attrs:{placeholder:"请输入项目名称"},model:{value:e.po.project.name_en,callback:function(t){e.po.project.name_en=t},expression:"po.project.name_en"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"日期",prop:"time",rules:{type:"date",required:!0,message:"请选择项目日期",trigger:"change"},"label-width":e.vo.labelWidth}},[n("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.po.project.time,callback:function(t){e.po.project.time=t},expression:"po.project.time"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"类型","label-width":e.vo.labelWidth}},[n("el-radio",{attrs:{label:1},model:{value:e.po.project.type,callback:function(t){e.po.project.type=t},expression:"po.project.type"}},[e._v("小型")]),e._v(" "),n("el-radio",{attrs:{label:2},model:{value:e.po.project.type,callback:function(t){e.po.project.type=t},expression:"po.project.type"}},[e._v("中型")]),e._v(" "),n("el-radio",{attrs:{label:3},model:{value:e.po.project.type,callback:function(t){e.po.project.type=t},expression:"po.project.type"}},[e._v("大型")])],1)],1),e._v(" "),n("el-tab-pane",{attrs:{label:"项目说明"}},[n("el-form-item",{attrs:{label:"说明(中文)",prop:"content_cn",rules:{required:!0,message:"内容不能为空",trigger:"blur"},"label-width":e.vo.labelWidth}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:5},placeholder:"请输入项目说明"},model:{value:e.po.project.content_cn,callback:function(t){e.po.project.content_cn=t},expression:"po.project.content_cn"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"说明(English)",prop:"content_en",rules:{required:!0,message:"内容不能为空",trigger:"blur"},"label-width":e.vo.labelWidth}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:5},placeholder:"请输入项目说明"},model:{value:e.po.project.content_en,callback:function(t){e.po.project.content_en=t},expression:"po.project.content_en"}})],1)],1),e._v(" "),e._l(e.po.project.files,function(t,o){return n("el-tab-pane",{attrs:{label:"文件"+(o+1),name:"tab"+o,closable:""}},[n("el-form-item",{attrs:{label:"图片或视频",prop:"files."+o,rules:{required:!0,message:"请选择项目文件",trigger:"change"},"label-width":e.vo.labelWidth}},[e.vo.dialog.reloadFile?n("input",{attrs:{type:"file"},on:{change:function(t){e.selectImg(t,o)}}}):e._e()]),e._v(" "),t&&"video"!=t?n("el-form-item",{attrs:{label:"文件预览","label-width":e.vo.labelWidth}},[n("file-view",[e.isVideo(t)?e._e():n("img",{staticClass:"imgPerview",attrs:{src:t,alt:""}}),e._v(" "),e.isVideo(t)?n("video",{attrs:{controls:"",width:"300"}},[n("source",{attrs:{src:t,type:"video/mp4"}}),e._v("\n                                您的浏览器不支持Video标签。\n                            ")]):e._e()])],1):e._e()],1)})],2)],1),e._v(" "),n("div",{staticClass:"dialog-footer",slot:"footer"},[n("el-button",{on:{click:e.addFile}},[e._v("添加文件")]),e._v(" "),n("el-button",{on:{click:function(t){e.vo.dialog.open=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.editProject()}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]}},323:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{ref:"view",staticClass:"grid-content bg-purple-dark",on:{click:function(t){e.show(t)}}},[e._t("default")],2)])],1),e._v(" "),n("el-dialog",{attrs:{size:"small","modal-append-to-body":!1},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}},[n("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]}}});