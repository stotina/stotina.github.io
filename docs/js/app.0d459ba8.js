(function(t){function e(e){for(var o,s,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},i=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"0db4":function(t,e,n){},"11d8":function(t,e,n){},1822:function(t,e,n){"use strict";var o=n("c023"),a=n.n(o);a.a},"1e90":function(t,e,n){"use strict";var o=n("d394"),a=n.n(o);a.a},"30c7":function(t,e,n){"use strict";var o=n("81f2"),a=n.n(o);a.a},"32c8":function(t,e,n){},"340b":function(t,e,n){},5699:function(t,e,n){"use strict";var o=n("8aaf"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("8c4f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-bg-appBase theme-c-mainFont",attrs:{id:"app"}},[n("link",{attrs:{rel:"stylesheet",href:"/styles/colorScheme.css"}}),n("HeaderElement"),this.shouldDisplaySloganHeader?n("SloganHeader",{attrs:{id:"sloganHeader",title:this.sloganTitle,description:this.sloganDescription,phone1PositionLeftPercent:this.phone1PositionLeftPercent,phone2PositionLeftPercent:this.phone2PositionLeftPercent,phone1Rotate:this.phone1Rotate,phone2Rotate:this.phone2Rotate,backgroundLeft:this.backgroundLeft}}):t._e(),n("div",{staticClass:"bellow-slogan theme-bg-main"},[n("router-view")],1),n("FooterElement")],1)},s=[],r=(n("c975"),n("d3b7"),n("25f0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header theme-bg-nav"},[n("nav",{staticClass:"navbar navbar-expand navbar-fixed-top"},[n("a",{staticClass:"navbar-brand pointer",on:{click:function(e){return t.navigate("/")}}},[t._m(0)]),n("ul",{staticClass:"nav navbar-nav ml-auto"},[n("li",{staticClass:"nav-item theme-c-headerLinks theme-c-hover"},[n("a",{staticClass:"nav-link pointer",on:{click:function(e){return t.navigate("/")}}},[n("i",{staticClass:"fas fa-home"}),t._v(" Home ")])]),n("li",{staticClass:"nav-item theme-c-headerLinks theme-c-hover"},[n("a",{staticClass:"nav-link pointer",on:{click:function(e){return t.navigate("/apps")}}},[t._v("Applications")])])])])])}),c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"site-title titleFont"},[n("img",{attrs:{id:"site-title-logo",src:"/images/logo-small.png"}}),t._v(" STOTINA ")])}],l={name:"HeaderElement",data:function(){return{}},props:{},computed:{currentPage:function(){return this.$router.currentRoute.path}},methods:{navigate:function(t){this.$router.push(t)}}},p=l,u=(n("efc3"),n("2877")),d=Object(u["a"])(p,r,c,!1,null,"30821e14",null),m=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer theme-bg-nav row"},[t._m(0),n("div",{staticClass:"footer-group col-md-3 col-lg-2"},[n("div",{staticClass:"footer-group-title"},[t._v("Links")]),n("div",{staticClass:"footer-link theme-c-footerLinks theme-c-hover pointer",on:{click:function(e){return t.navigate("/faq")}}},[t._v(" FAQ ")]),n("div",{staticClass:"footer-link theme-c-footerLinks theme-c-hover pointer",on:{click:function(e){return t.navigate("/terms")}}},[t._v(" Terms ")]),n("div",{staticClass:"footer-link theme-c-footerLinks theme-c-hover pointer",on:{click:function(e){return t.navigate("/privacy")}}},[t._v(" Privacy ")])]),n("div",{staticClass:"footer-group col-md-3 col-lg-2"},[n("div",{staticClass:"footer-group-title"},[t._v("Stotina")]),n("div",{staticClass:"footer-link theme-c-footerLinks theme-c-hover pointer",on:{click:function(e){return t.navigate("/contact")}}},[t._v(" Contact Us ")]),n("div",{staticClass:"footer-link theme-c-footerLinks theme-c-hover pointer",on:{click:function(e){return t.navigate("/about")}}},[t._v(" About Us ")]),n("div",{staticClass:"footer-link theme-c-footerLinks theme-c-hover pointer",on:{click:function(e){return t.navigate("/blog")}}},[t._v(" News Blog ")])])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-group col-md-6 col-lg-4",staticStyle:{"text-align":"center"}},[n("div",[n("img",{attrs:{src:"/images/logo.png",alt:""}})]),n("div",[t._v("Copyright © 2020 Stotina")])])}],v={name:"FooterElement",data:function(){return{}},props:{},computed:{currentPage:function(){return this.$router.currentRoute.path}},methods:{navigate:function(t){this.$router.push(t)}}},g=v,b=(n("5d42"),Object(u["a"])(g,h,f,!1,null,"3a6623c8",null)),_=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{style:this.backgroundStyle,attrs:{id:"appsPageHeader",title:this.backgroundAttribution}},[n("div",{staticClass:"theme-bg-nav",style:this.contentStyle,attrs:{id:"appsPageHeaderContent"}},[n("div",{staticClass:"title titleFont"},[t._v(t._s(this.title))]),n("p",{staticClass:"slogan"},[t._v(t._s(this.description))])]),n("PhoneElement",{style:t.phone1Style,attrs:{id:"appsPageHeaderPhone",imagePath:"/images/screenshots/idle.jpg",width:"15rem"}}),n("PhoneElement",{style:t.phone2Style,attrs:{id:"appsPageHeaderPhone2",imagePath:"/images/screenshots/idle.jpg",width:"18rem"}})],1)])},C=[],P=(n("a15b"),n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"phone theme-bg-mainFont theme-c-passiveFont",style:t.inlineStyleValue},[t.imagePath?t._e():n("div",[n("InteractiveLogo",{attrs:{widthPercent:60}}),n("div",{staticClass:"appPageHeaderPhoneTitle"},[t._v("STOTINA")])],1),t.imagePath?n("img",{attrs:{src:t.imagePath}}):t._e()])}),x=[],S=(n("d81d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"interactive-logo"},[n("div",{staticClass:"logoBox",style:"width: "+this.widthPercent+"%;"},[n("div",{staticClass:"logoFrame absolutePosition"}),n("div",{staticClass:"logoImageBox"})])])}),w=[],k=(n("7db0"),n("ac1f"),n("1276"),n("1157")),T=n.n(k),L={name:"InteractiveLogo",data:function(){return{}},props:{widthPercent:Number},computed:{},methods:{getOwnRotation:function(t){var e=window.getComputedStyle(t.parentNode.parentNode,null),n=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("-moz-transform")||e.getPropertyValue("-ms-transform")||e.getPropertyValue("-o-transform")||e.getPropertyValue("transform")||"fail...";if("none"===n)return 0;var o=n.split("(")[1];o=o.split(")")[0],o=o.split(",");var a=o[0],i=o[1],s=Math.atan2(i,a);s<0&&(s+=2*Math.PI);var r=s*(180/Math.PI);return r},onMouseMove:function(t){var e=T()(".logoBox");if(e[0])for(var n=0;n<e.length;n++){var o=e[n],a=T()(o),i=[a.offset().left+a.width()/2,a.offset().top+a.height()/2],s=Math.atan2(t.pageX-i[0],-(t.pageY-i[1]))*(180/Math.PI)-180;s-=this.getOwnRotation(o),s<-360&&(s+=360),T()(a.find(".logoFrame")).css("background-image","linear-gradient(".concat(s,"deg, #2a9fd6, #2a9fd633, #00000000)"))}}},created:function(){document.addEventListener("mousemove",this.onMouseMove)}},E=L,N=(n("1e90"),Object(u["a"])(E,S,w,!1,null,"27bd5cac",null)),O=N.exports,j={name:"PhoneElement",data:function(){return{}},props:{width:{type:String,default:"300px"},borderColor:{type:String,default:"var(--border-color-phones)"},imagePath:{type:String,default:null}},computed:{inlineStyleValue:function(){var t=["width:".concat(this.width),"height: calc(2 * ".concat(this.width,")"),"border-style: solid","border-color: ".concat(this.borderColor),"border-width: calc(".concat(this.width," / 30)"),"border-top-width: calc(".concat(this.width," / 7.5)"),"border-bottom-width: calc(".concat(this.width," / 10)"),"border-radius: calc(".concat(this.width," / 30)"),"font-size: calc(".concat(this.width," / 10)"),this.imagePath?"":"padding-top: calc(".concat(this.width," / 2.5)")].map((function(t){return t+";"})).join(" ")+";";return t}},methods:{},components:{InteractiveLogo:O}},$=j,A=(n("30c7"),Object(u["a"])($,P,x,!1,null,"974dfc48",null)),I=A.exports,M={name:"SloganHeader",data:function(){return{}},props:{title:{type:String,default:"STOTINA"},description:{type:String,default:"Make the amazing simple."},contentLeft:{type:Boolean,default:!0},phone1Rotate:{type:Number,default:40},phone1PositionLeftPercent:{type:Number,default:65},phone1PositionTopPercent:{type:Number,default:5},phone2Rotate:{type:Number,default:50},phone2PositionLeftPercent:{type:Number,default:75},phone2PositionTopPercent:{type:Number,default:5},backgroundLeft:{type:Boolean,default:!0},background:{type:String,default:"/images/matt-cannon-0r6gDVlIr4A-unsplash.jpg"},backgroundAttribution:{type:String,default:"Photo by Matt Cannon on Unsplash"},backgroundWidth:{type:String,default:"160%"}},components:{PhoneElement:I},computed:{backgroundStyle:function(){return["background-image:url('".concat(this.background,"')"),"background-size: ".concat(this.backgroundWidth," auto"),"background-position: top ".concat(this.backgroundLeft?"left":"right")].join(";")},phone1Style:function(){return["transform: rotate(".concat(this.phone1Rotate,"deg)"),"position: absolute","left: ".concat(this.phone1PositionLeftPercent,"%"),"top: ".concat(this.phone1PositionTopPercent,"%")].join("; ")+";"},phone2Style:function(){return["transform: rotate(".concat(this.phone2Rotate,"deg)"),"position: absolute","left: ".concat(this.phone2PositionLeftPercent,"%"),"top: ".concat(this.phone2PositionTopPercent,"%")].join("; ")+";"},contentStyle:function(){return"position: relative; top: 10%;"+(this.contentLeft?"left: 5%":"left: 65%")}}},R=M,H=(n("c25e"),Object(u["a"])(R,y,C,!1,null,"248f0de6",null)),z=H.exports,F=n("9f0e"),B={name:"App",data:function(){return{path:"",shouldDisplaySloganHeader:!0,backgroundLeft:!1,sloganTitle:"",sloganDescription:"",phone1PositionLeftPercent:0,phone2PositionLeftPercent:0,phone1Rotate:0,phone2Rotate:0}},computed:{},components:{HeaderElement:m,FooterElement:_,SloganHeader:z},methods:{updateSloganHeader:function(){var t=window.location.hash,e=t.indexOf("?"),n=t.substr(1,e>=0?e:t.length);this.path.toString()!==n&&(this.path=n,this.shouldDisplaySloganHeader=void 0!=F.texts[this.path],this.shouldDisplaySloganHeader&&(this.sloganTitle=F.texts[this.path].title,this.sloganDescription=F.texts[this.path].slogan,this.phone1PositionLeftPercent=F.movement.positions[this.path][0],this.phone2PositionLeftPercent=F.movement.positions[this.path][1],this.phone1Rotate=F.movement.rotations[this.path][0],this.phone2Rotate=F.movement.rotations[this.path][1],this.backgroundLeft=F.movement.backgroundLeft[this.path]))}},created:function(){this.updateSloganHeader(),setInterval(this.updateSloganHeader,200)}},D=B,U=(n("034f"),Object(u["a"])(D,i,s,!1,null,null,null)),q=U.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"phones"},[n("div",{staticClass:"phones3d"},[n("Phone3DElement",{attrs:{frameColor:"#535353",showControls:!1,positionRight:!0,positionSide:150,positionTop:80,imagePath:"/images/screenshots/idle.jpg",y:30*this.x-15,x:10,s:1.1}}),n("Phone3DElement",{attrs:{frameColor:"white",showControls:!1,positionRight:!0,positionSide:300,positionTop:120,imagePath:"/images/screenshots/idle.jpg",y:30*this.x-15,x:10,s:1}})],1),n("div",{staticClass:"phones2d"},[n("PhoneElement",{attrs:{id:"phoneFrame2d",width:"300px",borderColor:"gray",imagePath:"/images/screenshots/idle.jpg"}})],1)]),t._m(0)])},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("br"),t._v("Lorem Ipsum "),n("br"),t._v("Lorem Ipsum "),n("br"),t._v("Lorem Ipsum "),n("br"),t._v("Lorem Ipsum "),n("br"),t._v("Lorem Ipsum "),n("br"),t._v("Lorem Ipsum "),n("br"),t._v("Lorem Ipsum "),n("br"),t._v("Lorem Ipsum "),n("br"),t._v("Lorem Ipsum "),n("br"),t._v("Lorem Ipsum ")])}],X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[this.showControls?n("div",{staticStyle:{padding:"1rem"},attrs:{id:"controls"}},[n("div",{staticStyle:{"font-size":"2em"}},[t._v("Controls for 3D element")]),n("span",[t._v("X:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.x,expression:"x"}],attrs:{type:"range",min:"-180",max:"180",step:"0.1"},domProps:{value:t.x},on:{__r:function(e){t.x=e.target.value}}}),t._v(" - "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.x,expression:"x"}],attrs:{type:"number",min:"-180",max:"180",step:"0.1"},domProps:{value:t.x},on:{input:function(e){e.target.composing||(t.x=e.target.value)}}}),n("br"),n("span",[t._v("Y:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.y,expression:"y"}],attrs:{type:"range",min:"-180",max:"180",step:"0.1"},domProps:{value:t.y},on:{__r:function(e){t.y=e.target.value}}}),t._v(" - "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.y,expression:"y"}],attrs:{type:"number",min:"-180",max:"180",step:"0.1"},domProps:{value:t.y},on:{input:function(e){e.target.composing||(t.y=e.target.value)}}}),n("br"),n("span",[t._v("Z:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.z,expression:"z"}],attrs:{type:"range",min:"-180",max:"180",step:"0.1"},domProps:{value:t.z},on:{__r:function(e){t.z=e.target.value}}}),t._v(" - "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.z,expression:"z"}],attrs:{type:"number",min:"-180",max:"180",step:"0.1"},domProps:{value:t.z},on:{input:function(e){e.target.composing||(t.z=e.target.value)}}}),n("br"),n("br"),n("span",[t._v("S:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.s,expression:"s"}],attrs:{type:"range",min:"0",max:"3",step:"0.01"},domProps:{value:t.s},on:{__r:function(e){t.s=e.target.value}}}),t._v(" - "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.s,expression:"s"}],attrs:{type:"number",min:"0",max:"3",step:"0.01"},domProps:{value:t.s},on:{input:function(e){e.target.composing||(t.s=e.target.value)}}}),n("br"),n("br"),n("span",[t._v("top :")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.positionTop,expression:"positionTop"}],attrs:{type:"range",min:"0",max:"500",step:"10"},domProps:{value:t.positionTop},on:{__r:function(e){t.positionTop=e.target.value}}}),t._v(" - "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.positionTop,expression:"positionTop"}],attrs:{type:"number",min:"0",max:"500",step:"10"},domProps:{value:t.positionTop},on:{input:function(e){e.target.composing||(t.positionTop=e.target.value)}}}),n("br"),n("span",[t._v("side:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.positionSide,expression:"positionSide"}],attrs:{type:"range",min:"0",max:"500",step:"10"},domProps:{value:t.positionSide},on:{__r:function(e){t.positionSide=e.target.value}}}),t._v(" - "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.positionSide,expression:"positionSide"}],attrs:{type:"number",min:"0",max:"500",step:"10"},domProps:{value:t.positionSide},on:{input:function(e){e.target.composing||(t.positionSide=e.target.value)}}})]):t._e(),n("div",{staticClass:"phoneWrapper",style:this.wrapperPositionCss},[n("div",{staticClass:"phoneThickness",style:this.getThicknessCSS(1,6)}),n("div",{staticClass:"phoneThickness",style:this.getThicknessCSS(2,6)}),n("div",{staticClass:"phoneThickness",style:this.getThicknessCSS(3,6)}),n("div",{staticClass:"phoneThickness",style:this.getThicknessCSS(4,6)}),n("div",{staticClass:"phoneThickness",style:this.getThicknessCSS(5,6)}),n("div",{staticClass:"phoneThickness",style:this.getThicknessCSS(6,6)}),n("div",{staticClass:"phoneFrame",style:"border-color:"+this.frameColor+";"+this.getRotationsCSS()+";"},[n("img",{attrs:{src:this.imagePath}})])])])},J=[],K=(n("99af"),{name:"Phone3DElement",components:{},data:function(){return{}},methods:{getRotationsCSS:function(){return"transform: scale(".concat(this.s,") rotateX(").concat(this.x,"deg) rotateY(").concat(this.y,"deg) rotateZ(").concat(this.z,"deg)")},getThicknessCSS:function(t,e){var n="translateX(".concat(-this.y/e*t,"px) ")+"translateY(".concat(this.x/e*t,"px) ")+"translateZ(".concat(-.9/e*t,"vw)");return this.getRotationsCSS()+" "+n+";"}},computed:{wrapperPositionCss:function(){return"position: absolute; "+"top: ".concat(this.positionTop,"px; ")+"".concat(this.positionRight?"right":"left",": ").concat(this.positionSide,"px;")}},props:{positionRight:{type:Boolean,default:!0},positionSide:{type:Number,default:150},positionTop:{type:Number,default:100},showControls:{type:Boolean,default:!1},x:{type:Number,default:10},y:{type:Number,default:-20},z:{type:Number,default:0},s:{type:Number,default:1.1},frameColor:{type:String,default:"#afafaf"},imagePath:{type:String,default:"/images/screenshots/idle.jpg"}}}),Z=K,Y=(n("5699"),Object(u["a"])(Z,X,J,!1,null,"e4bf590c",null)),G=Y.exports,Q={name:"AppNewsPage",data:function(){return{x:.5,w:document.body.clientWidth}},computed:{},created:function(){document.addEventListener("mousemove",this.onMouseUpdate,!1)},methods:{onMouseUpdate:function(t){this.w=document.body.clientWidth,this.x=t.pageX/this.w}},components:{Phone3DElement:G,PhoneElement:I},props:{}},tt=Q,et=(n("b5dc"),Object(u["a"])(tt,W,V,!1,null,"e49a9cdc",null)),nt=et.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"appListArea"}},[n("AppListElement")],1)])},at=[],it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"appListBox row"},t._l(t.apps,(function(e){return n("div",{key:e.id,staticClass:"col-lg-4 col-md-6"},[n("div",{staticClass:"appListItem theme-br-mainFont",class:e.path?"pointer animate":"empty",on:{click:function(n){return t.onAppClick(e)}}},[n("div",{staticClass:"appTitleArea"},[n("div",{staticClass:"appTitleIconBox theme-bg-mainFont"},[e.icon?n("img",{attrs:{src:e.icon,alt:e.name}}):t._e()]),n("div",{staticClass:"appTitle"},[t._v(t._s(e.name))])]),n("div",{staticClass:"appPhoneBox"},[n("div",{staticClass:"appPhoneFrame theme-br-mainFont",style:"background-image:url('"+e.screenImage+"')"})])])])})),0)])},st=[],rt={name:"AppListElement",data:function(){return{apps:[{id:1,path:"",name:"[work in progress...]",icon:"",screenImage:""}]}},props:{},computed:{},methods:{onAppClick:function(t){t.path&&this.$router.push(t.path)}}},ct=rt,lt=(n("9002"),Object(u["a"])(ct,it,st,!1,null,"ea434bb0",null)),pt=lt.exports,ut={name:"AppsPage",data:function(){return{}},props:{},components:{AppListElement:pt}},dt=ut,mt=Object(u["a"])(dt,ot,at,!1,null,"761edd8c",null),ht=mt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"home"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("IntroTextElement"),n("InteractiveLogo",{staticStyle:{"max-width":"200px",margin:"auto",padding:"1rem"}})],1),n("div",{staticClass:"col-lg-6"},[n("SubscribeElement")],1)])])])},vt=[],gt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},bt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"introWrapper"},[n("div",{staticClass:"intro"},[n("div",{staticClass:"title"},[t._v("Simplicity is Key")]),n("div",{staticClass:"description"},[n("div",[t._v("Amazing technology is only trully amazing when it is simple to use. The world moves faster than ever. Simplicity is the key to keeping up with it.")])])])])}],_t={name:"IntroTextElement",data:function(){return{}},props:{},components:{}},yt=_t,Ct=(n("be03"),Object(u["a"])(yt,gt,bt,!1,null,"51339cc4",null)),Pt=Ct.exports,xt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},St=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"subscribe"},[n("iframe",{staticStyle:{display:"block","margin-left":"auto","margin-right":"auto","max-width":"100%"},attrs:{width:"540",height:"600",src:"https://e3bd4b8e.sibforms.com/serve/MUIEANZK2q6THyTCqGKZGkBDnk0fitoGv8Gz1amFlzj7Lw62gmLqeVUZ__ojqo9cSMapbjRzuIizoRQ3fUYPvTQsGuCnHRti8Pg3xKC2JN5Ft9PLZSQFBBA11uKlWiqFeTtlnFATyS3aja-_YDsznRetzPLW5MgpAUF24aBprrwnWTnJ6Xb2qssSivXN_FKCnyJCXTHeLkvRK8xm",frameborder:"0",scrolling:"auto",allowfullscreen:""}})])])}],wt={name:"HomePage",data:function(){return{}},props:{},components:{}},kt=wt,Tt=Object(u["a"])(kt,xt,St,!1,null,"bfa9562e",null),Lt=Tt.exports,Et={name:"HomePage",data:function(){return{}},props:{},components:{IntroTextElement:Pt,InteractiveLogo:O,SubscribeElement:Lt}},Nt=Et,Ot=Object(u["a"])(Nt,ft,vt,!1,null,"0cb50618",null),jt=Ot.exports,$t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},At=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"about"},[n("h3",[t._v("Under Construction...")])])])}],It={name:"AboutPage",data:function(){return{}},props:{},components:{}},Mt=It,Rt=Object(u["a"])(Mt,$t,At,!1,null,"04a11b01",null),Ht=Rt.exports,zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"blog"},[n("div",{staticClass:"title"},[t._v(t._s(t.article.title))]),t.article?t._e():n("div",{staticClass:"not-found"},[t._v("Article not found.")]),n("div",{staticClass:"center"},[n("div",{staticClass:"article-date"},[t._v(t._s(t.article.date))]),n("div",{staticClass:"article-author"},[t._v(t._s(t.article.author))])]),t.article?n("div",[n("div",{staticClass:"article theme-br-blog"},[n("div",{staticClass:"article-description",domProps:{innerHTML:t._s(t.article.content)}})])]):t._e()]),n("br")])},Ft=[],Bt=(n("4de4"),window.location.hash),Dt=Bt.indexOf("?"),Ut=Bt.substr(Dt<0?Bt.length:Dt+1).split("--"),qt=Ut[0]||"main-feed",Wt=Ut.length>1?Ut[1]:"",Vt=n("5dda"),Xt=Vt.map((function(t){return t.feedName})),Jt=Vt[Xt.indexOf(qt)],Kt=Jt.items.filter((function(t){return t.id.toString()===Wt.toString()}))[0],Zt={name:"ArticlePage",data:function(){return{articleId:Wt,feedName:qt,article:Kt,feed:Jt}},props:{},components:{},methods:{}},Yt=Zt,Gt=(n("c012"),Object(u["a"])(Yt,zt,Ft,!1,null,"b8fbeda6",null)),Qt=Gt.exports,te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"blog"},[n("div",{staticClass:"title"},[t._v(t._s(t.feed.title))]),n("div",t._l(t.feed.items||[],(function(e){return n("div",{key:e.id,staticClass:"article theme-br-blog pointer",on:{click:function(n){return t.openArticle(e.id)}}},[n("div",{staticClass:"article-title"},[t._v(t._s(e.title))]),n("div",{staticClass:"article-date"},[t._v(t._s(e.date))]),n("div",{staticClass:"article-author"},[t._v(t._s(e.author))]),n("div",{staticClass:"article-description",domProps:{innerHTML:t._s(e.description)}})])})),0)]),n("br")])},ee=[],ne=window.location.hash,oe=ne.indexOf("?"),ae=ne.substr(oe<0?ne.length:oe+1).split("--"),ie=ae[0]||"main-feed",se=n("5dda"),re=se.map((function(t){return t.feedName})),ce={name:"BlogPage",data:function(){return{feedName:ie,feed:se[re.indexOf(ie)]}},props:{},components:{},methods:{openArticle:function(t){var e="/article?".concat(ie,"--").concat(t);console.log(e),this.$router.push(e),window.location.reload()}}},le=ce,pe=(n("1822"),Object(u["a"])(le,te,ee,!1,null,"5500d2e5",null)),ue=pe.exports,de=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},me=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"contact"},[n("h3",[t._v("Under Construction...")])])])}],he={name:"ContactPage",data:function(){return{}},props:{},components:{}},fe=he,ve=Object(u["a"])(fe,de,me,!1,null,"0c5a3bb4",null),ge=ve.exports,be=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_e=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"faq"},[n("h3",[t._v("Under Construction...")])])])}],ye={name:"FaqPage",data:function(){return{}},props:{},components:{}},Ce=ye,Pe=Object(u["a"])(Ce,be,_e,!1,null,"dbcc092c",null),xe=Pe.exports,Se=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},we=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"privacy"},[n("h3",[t._v("Under Construction...")])])])}],ke={name:"PrivacyPage",data:function(){return{}},props:{},components:{}},Te=ke,Le=Object(u["a"])(Te,Se,we,!1,null,"44c18e1c",null),Ee=Le.exports,Ne=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Oe=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"terms"},[n("h3",[t._v("Under Construction...")])])])}],je={name:"TermsPage",data:function(){return{}},props:{},components:{}},$e=je,Ae=Object(u["a"])($e,Ne,Oe,!1,null,"2f6a0f8a",null),Ie=Ae.exports;n("1157"),n("4989"),n("11d8"),n("5ed1"),n("becf"),o["a"].config.productionTip=!1,o["a"].use(a["a"]);var Me=new a["a"]({routes:[{path:"/",component:jt},{path:"/apps",component:ht},{path:"/apps/news",component:nt},{path:"/about",component:Ht},{path:"/article",component:Qt},{path:"/blog",component:ue},{path:"/contact",component:ge},{path:"/faq",component:xe},{path:"/privacy",component:Ee},{path:"/terms",component:Ie}]});new o["a"]({router:Me,render:function(t){return t(q)}}).$mount("#app")},"5d42":function(t,e,n){"use strict";var o=n("340b"),a=n.n(o);a.a},"5dda":function(t){t.exports=JSON.parse('[{"title":"Stotina Blog","path":"/feed.xml","feedName":"main-feed","items":[{"title":"Our first article","description":"This is our first article.","id":"2","categories":["first","content"],"author":"Aleksandar Dinkov","date":"May 10, 2020","content":"This is our first article. We are testing the functionality of our blog."},{"title":"Wellcome to Stotina","description":"Stotina is a startup aiming to provide solutions that...","id":"1","categories":["wellcome","stotina"],"author":"Aleksandar Dinkov","date":"May 10, 2020","content":"Stotina is a startup aiming to provide solutions that simplify common tasks and help people use technology without requiring any technical expertese.<br> Simplicity is key."}]},{"title":"Stotina News App Blog","path":"/appData/news/feed.xml","feedName":"news-app-feed","items":[{"title":"Stotina News is being developed","description":"Nothing to see here. Move along.","id":"1","categories":["news","app"],"author":"Aleksandar Dinkov","date":"May 10, 2020","content":"Nothing to see here.<br> Move along.<br> Stotina News is still under development.<br> Come back later."}]}]')},"81f2":function(t,e,n){},"85ec":function(t,e,n){},"862b":function(t,e,n){},"8aaf":function(t,e,n){},9002:function(t,e,n){"use strict";var o=n("862b"),a=n.n(o);a.a},"9f0e":function(t){t.exports=JSON.parse('{"texts":{"":{"title":"STOTINA","slogan":"Make the amazing simple."},"/":{"title":"STOTINA","slogan":"Make the amazing simple."},"/apps":{"title":"APPS","slogan":"We aim for quality in all our applications"}},"movement":{"positions":{"":[55,45],"/":[55,45],"/apps":[70,75]},"rotations":{"":[25,30],"/apps":[40,50],"/":[25,30]},"backgroundLeft":{"":true,"/":true,"/apps":false}}}')},a796:function(t,e,n){},b5dc:function(t,e,n){"use strict";var o=n("e5c8"),a=n.n(o);a.a},be03:function(t,e,n){"use strict";var o=n("32c8"),a=n.n(o);a.a},c012:function(t,e,n){"use strict";var o=n("a796"),a=n.n(o);a.a},c023:function(t,e,n){},c25e:function(t,e,n){"use strict";var o=n("0db4"),a=n.n(o);a.a},d394:function(t,e,n){},e5c8:function(t,e,n){},eaa9:function(t,e,n){},efc3:function(t,e,n){"use strict";var o=n("eaa9"),a=n.n(o);a.a}});
//# sourceMappingURL=app.0d459ba8.js.map