(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["steps-select-c"],{"0e99":function(t,e,s){"use strict";s("780f")},"3bcc":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"config-item select-character"},[s("img",{staticClass:"image",attrs:{src:t.c.cardURL}}),s("h3",{staticClass:"config-title"},[t._v("选择角色")]),s("select-character",{attrs:{value:t.characterName},on:{input:t.handleChangeCharacter}})],1),t.needExtraConfig?s(t.c.config,{ref:"extraConfig",tag:"component"}):t._e(),s("div",{staticClass:"config-item"},[s("h3",{staticClass:"config-title"},[t._v("技能等级（包含命之座加成）")]),s("el-input-number",{staticClass:"skill",attrs:{min:1,max:11,size:"small"},model:{value:t.skill1,callback:function(e){t.skill1=e},expression:"skill1"}}),s("el-input-number",{staticClass:"skill",attrs:{min:1,max:13,size:"small"},model:{value:t.skill2,callback:function(e){t.skill2=e},expression:"skill2"}}),s("el-input-number",{staticClass:"skill",attrs:{min:1,max:13,size:"small"},model:{value:t.skill3,callback:function(e){t.skill3=e},expression:"skill3"}})],1),s("div",{staticClass:"config-item"},[s("h3",{staticClass:"config-title"},[t._v("命之座")]),s("el-input-number",{attrs:{min:0,max:6,size:"small"},model:{value:t.constellation,callback:function(e){t.constellation=e},expression:"constellation"}})],1),s("select-level",{attrs:{value:t.levelText,title:"角色等级"},on:{input:t.handleChangeLevel}})],1)},l=[],n=(s("99af"),s("c975"),s("b0c0"),s("d3b7"),s("25f0"),s("c592")),i=s("caeb"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-select",{attrs:{value:t.value,placeholder:"角色",size:"small"},on:{input:function(e){return t.$emit("input",e)}}},t._l(t.charactersByElement,(function(e,a){return s("el-option-group",{key:a,attrs:{label:t.element2Chs(a)}},t._l(e,(function(e){return s("el-option",{key:e.name,attrs:{label:e.chs,value:e.name}},[s("div",{staticClass:"option-item flex-row"},[s("img",{attrs:{src:e.avatar}}),s("span",{style:{color:t.getColor(e.star)}},[t._v(t._s(e.chs))])])])})),1)})),1)},r=[],o=s("2fd2"),u={name:"SelectCharacter",props:["value"],created:function(){this.charactersByElement=n["a"]},methods:{element2Chs:function(t){switch(t){case"fire":return"火";case"ice":return"冰";case"grass":return"草";case"thunder":return"雷";case"wind":return"风";case"rock":return"岩";case"water":return"水"}},getColor:function(t){return o["a"][t-1]}}},v=u,f=(s("0e99"),s("2877")),h=Object(f["a"])(v,c,r,!1,null,"f3c70350",null),p=h.exports,C={name:"ConfigCharacter",components:{SelectLevel:i["a"],SelectCharacter:p},inject:["notifyChange"],data:function(){return{skill1:6,skill2:6,skill3:6,constellation:0,level:{ascend:!1,level:1},characterName:"anbo"}},methods:{handleChangeCharacter:function(t){t!==this.characterName&&(this.characterName=t,this.notifyChange("character",t))},handleChangeLevel:function(t){this.level.level=parseInt(t),this.level.ascend=-1!==t.indexOf("+")},getExtraConfig:function(){if(!this.needExtraConfig)return{};var t=this.$refs.extraConfig;return t.compact?t.compact():Object.assign({},t.$data)},getCharacterConfig:function(){return{name:this.characterName,skill1:this.skill1,skill2:this.skill2,skill3:this.skill3,constellation:this.constellation,ascend:this.level.ascend,level:this.level.level,args:this.getExtraConfig()}},setCharacterConfig:function(t){var e=this;this.characterName=t.name,this.skill1=t.skill1,this.skill2=t.skill2,this.skill3=t.skill3,this.constellation=t.constellation,this.level.ascend=t.ascend,this.level.level=t.level,this.$nextTick((function(){e.needExtraConfig&&e.$refs.extraConfig.setData(t.args)}))}},computed:{levelText:function(){var t=this.level.ascend,e=this.level.level,s=[20,40,50,60,70,80];return-1===s.indexOf(e)?e.toString():"".concat(e).concat(t?"+":"-")},c:function(){return n["b"][this.characterName]},needExtraConfig:function(){return!!this.c.config}}},d=C,m=(s("c17c"),Object(f["a"])(d,a,l,!1,null,"03d85744",null));e["default"]=m.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var a=s("1d80"),l=s("5899"),n="["+l+"]",i=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),r=function(t){return function(e){var s=String(a(e));return 1&t&&(s=s.replace(i,"")),2&t&&(s=s.replace(c,"")),s}};t.exports={start:r(1),end:r(2),trim:r(3)}},"780f":function(t,e,s){},"92be":function(t,e,s){},a9e3:function(t,e,s){"use strict";var a=s("83ab"),l=s("da84"),n=s("94ca"),i=s("6eeb"),c=s("5135"),r=s("c6b6"),o=s("7156"),u=s("c04e"),v=s("d039"),f=s("7c73"),h=s("241c").f,p=s("06cf").f,C=s("9bf2").f,d=s("58a8").trim,m="Number",g=l[m],_=g.prototype,k=r(f(_))==m,b=function(t){var e,s,a,l,n,i,c,r,o=u(t,!1);if("string"==typeof o&&o.length>2)if(o=d(o),e=o.charCodeAt(0),43===e||45===e){if(s=o.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(o.charCodeAt(1)){case 66:case 98:a=2,l=49;break;case 79:case 111:a=8,l=55;break;default:return+o}for(n=o.slice(2),i=n.length,c=0;c<i;c++)if(r=n.charCodeAt(c),r<48||r>l)return NaN;return parseInt(n,a)}return+o};if(n(m,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var x,N=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof N&&(k?v((function(){_.valueOf.call(s)})):r(s)!=m)?o(new g(b(e)),s,N):b(e)},E=a?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;E.length>y;y++)c(g,x=E[y])&&!c(N,x)&&C(N,x,p(g,x));N.prototype=_,_.constructor=N,i(l,m,N)}},c17c:function(t,e,s){"use strict";s("f2bc")},caeb:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"config-item"},[s("h3",{staticClass:"config-title"},[t._v(t._s(t.title))]),s("div",{staticClass:"delegate",on:{click:t.handleClickLevel}},[s("div",{staticClass:"panel"},[t._l(19,(function(e){return s("span",{key:e,staticClass:"select-int",class:{active:e.toString()===t.value}},[t._v(t._s(e))])})),s("span",{staticClass:"select-int",class:{active:"20-"===t.value}},[t._v("20-")])],2),s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"20+"===t.value}},[t._v("20+")]),t._l(19,(function(e){return s("span",{key:e+20,staticClass:"select-int",class:{active:(e+20).toString()===t.value}},[t._v(t._s(e+20))])})),s("span",{staticClass:"select-int",class:{active:"40-"===t.value}},[t._v("40-")])],2),s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"40+"===t.value}},[t._v("40+")]),t._l(9,(function(e){return s("span",{key:e+40,staticClass:"select-int",class:{active:(e+40).toString()===t.value}},[t._v(t._s(e+40))])})),s("span",{staticClass:"select-int",class:{active:"50-"===t.value}},[t._v("50-")])],2),s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"50+"===t.value}},[t._v("50+")]),t._l(9,(function(e){return s("span",{key:e+50,staticClass:"select-int",class:{active:(e+50).toString()===t.value}},[t._v(t._s(e+50))])})),s("span",{staticClass:"select-int",class:{active:"60-"===t.value}},[t._v("60-")])],2),s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"60+"===t.value}},[t._v("60+")]),t._l(9,(function(e){return s("span",{key:e+60,staticClass:"select-int",class:{active:(e+60).toString()===t.value}},[t._v(t._s(e+60))])})),t.star>=3?s("span",{staticClass:"select-int",class:{active:"70-"===t.value}},[t._v("70-")]):s("span",{staticClass:"select-int",class:{active:"70"===t.value}},[t._v("70")])],2),t.star>=3?s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"70+"===t.value}},[t._v("70+")]),t._l(9,(function(e){return s("span",{key:e+70,staticClass:"select-int",class:{active:e+70==t.value}},[t._v(t._s(e+70))])})),s("span",{staticClass:"select-int",class:{active:"80-"===t.value}},[t._v("80-")])],2):t._e(),t.star>=3?s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"80+"===t.value}},[t._v("80+")]),t._l(10,(function(e){return s("span",{key:e+80,staticClass:"select-int",class:{active:e+80==t.value}},[t._v(t._s(e+80))])}))],2):t._e()])])},l=[],n=(s("a9e3"),{name:"SelectLevel",props:{value:{type:String},star:{type:Number,default:5},title:{type:String,default:""}},methods:{handleClickLevel:function(t){if(t.target.classList.contains("select-int")){var e=t.target.textContent;this.$emit("input",e)}}},computed:{}}),i=n,c=(s("d360"),s("2877")),r=Object(c["a"])(i,a,l,!1,null,"373f0d1c",null);e["a"]=r.exports},d360:function(t,e,s){"use strict";s("92be")},f2bc:function(t,e,s){}}]);