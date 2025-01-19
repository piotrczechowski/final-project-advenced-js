var cd=Object.defineProperty;var ld=(n,e,t)=>e in n?cd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var xn=(n,e,t)=>ld(n,typeof e!="symbol"?e+"":e,t);import"../burger-CmnGz_Ol.js";var ee;let ud=(ee=class{static handleErrors(e){return async()=>{try{return await e()}catch(t){console.error("Błąd podczas zapytania: ",t.message)}}}static async fetchJson(e,t){return(await fetch(e,t)).json()}async getQuotes(){return await ee.handleErrors(async()=>await ee.fetchJson(`${ee.BASE_URL}/quote`))()}async getByFilterName(e){return await ee.handleErrors(async()=>{const r=new URLSearchParams({...e});return await ee.fetchJson(`${ee.BASE_URL}/filters?${r}`)})()}async getByFilterCategory(e){return await ee.handleErrors(async()=>{const r=new URLSearchParams({...e});return await ee.fetchJson(`${ee.BASE_URL}/exercises?${r}`)})()}async getOneExercises(e){return await ee.handleErrors(async()=>await ee.fetchJson(`${ee.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,t){return await ee.handleErrors(async()=>{const s={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return await ee.fetchJson(`${ee.BASE_URL}/exercises/${e}/rating`,s)})()}async addSubscription(e){return await ee.handleErrors(async()=>{const r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await ee.fetchJson(`${ee.BASE_URL}/subscription`,r)})()}},xn(ee,"BASE_URL","https://your-energy.b.goit.study/api"),ee);const Tt=new ud;var qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Or={exports:{}},ja=Or.exports,$a;function dd(){return $a||($a=1,function(n,e){(function(t,r){n.exports=r(t)})(typeof qa<"u"?qa:window||ja.window||ja.global,function(t){var r={},s="iziToast";document.querySelector("body");var o=!!/Mobi/.test(navigator.userAgent),a=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),l=typeof InstallTrigger<"u",d="ontouchstart"in document.documentElement,p=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],E={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},I=568,b={};r.children={};var S={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var D=function(P,_){_=_||{bubbles:!1,cancelable:!1,detail:void 0};var h=document.createEvent("CustomEvent");return h.initCustomEvent(P,_.bubbles,_.cancelable,_.detail),h};D.prototype=window.Event.prototype,window.CustomEvent=D}var L=function(P,_,h){if(Object.prototype.toString.call(P)==="[object Object]")for(var f in P)Object.prototype.hasOwnProperty.call(P,f)&&_.call(h,P[f],f,P);else if(P)for(var y=0,T=P.length;y<T;y++)_.call(h,P[y],y,P)},N=function(P,_){var h={};return L(P,function(f,y){h[y]=P[y]}),L(_,function(f,y){h[y]=_[y]}),h},j=function(P){var _=document.createDocumentFragment(),h=document.createElement("div");for(h.innerHTML=P;h.firstChild;)_.appendChild(h.firstChild);return _},W=function(P){var _=btoa(encodeURIComponent(P));return _.replace(/=/g,"")},K=function(P){return P.substring(0,1)=="#"||P.substring(0,3)=="rgb"||P.substring(0,3)=="hsl"},ne=function(P){try{return btoa(atob(P))==P}catch{return!1}},le=function(){return{move:function(P,_,h,f){var y,T=.3,v=180;f!==0&&(P.classList.add(s+"-dragged"),P.style.transform="translateX("+f+"px)",f>0?(y=(v-f)/v,y<T&&_.hide(N(h,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),P,"drag")):(y=(v+f)/v,y<T&&_.hide(N(h,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),P,"drag")),P.style.opacity=y,y<T&&((a||l)&&(P.style.left=f+"px"),P.parentNode.style.opacity=T,this.stopMoving(P,null)))},startMoving:function(P,_,h,f){f=f||window.event;var y=d?f.touches[0].clientX:f.clientX,T=P.style.transform.replace("px)","");T=T.replace("translateX(","");var v=y-T;h.transitionIn&&P.classList.remove(h.transitionIn),h.transitionInMobile&&P.classList.remove(h.transitionInMobile),P.style.transition="",d?document.ontouchmove=function(g){g.preventDefault(),g=g||window.event;var q=g.touches[0].clientX,Y=q-v;le.move(P,_,h,Y)}:document.onmousemove=function(g){g.preventDefault(),g=g||window.event;var q=g.clientX,Y=q-v;le.move(P,_,h,Y)}},stopMoving:function(P,_){d?document.ontouchmove=function(){}:document.onmousemove=function(){},P.style.opacity="",P.style.transform="",P.classList.contains(s+"-dragged")&&(P.classList.remove(s+"-dragged"),P.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){P.style.transition=""},400))}}}();return r.setSetting=function(P,_,h){r.children[P][_]=h},r.getSetting=function(P,_){return r.children[P][_]},r.destroy=function(){L(document.querySelectorAll("."+s+"-overlay"),function(P,_){P.remove()}),L(document.querySelectorAll("."+s+"-wrapper"),function(P,_){P.remove()}),L(document.querySelectorAll("."+s),function(P,_){P.remove()}),this.children={},document.removeEventListener(s+"-opened",{},!1),document.removeEventListener(s+"-opening",{},!1),document.removeEventListener(s+"-closing",{},!1),document.removeEventListener(s+"-closed",{},!1),document.removeEventListener("keyup",{},!1),b={}},r.settings=function(P){r.destroy(),b=P,S=N(S,P||{})},L(E,function(P,_){r[_]=function(h){var f=N(b,h||{});f=N(P,f||{}),this.show(f)}}),r.progress=function(P,_,h){var f=this,y=_.getAttribute("data-iziToast-ref"),T=N(this.children[y],P||{}),v=_.querySelector("."+s+"-progressbar div");return{start:function(){typeof T.time.REMAINING>"u"&&(_.classList.remove(s+"-reseted"),v!==null&&(v.style.transition="width "+T.timeout+"ms "+T.progressBarEasing,v.style.width="0%"),T.time.START=new Date().getTime(),T.time.END=T.time.START+T.timeout,T.time.TIMER=setTimeout(function(){clearTimeout(T.time.TIMER),_.classList.contains(s+"-closing")||(f.hide(T,_,"timeout"),typeof h=="function"&&h.apply(f))},T.timeout),f.setSetting(y,"time",T.time))},pause:function(){if(typeof T.time.START<"u"&&!_.classList.contains(s+"-paused")&&!_.classList.contains(s+"-reseted")){if(_.classList.add(s+"-paused"),T.time.REMAINING=T.time.END-new Date().getTime(),clearTimeout(T.time.TIMER),f.setSetting(y,"time",T.time),v!==null){var g=window.getComputedStyle(v),q=g.getPropertyValue("width");v.style.transition="none",v.style.width=q}typeof h=="function"&&setTimeout(function(){h.apply(f)},10)}},resume:function(){typeof T.time.REMAINING<"u"?(_.classList.remove(s+"-paused"),v!==null&&(v.style.transition="width "+T.time.REMAINING+"ms "+T.progressBarEasing,v.style.width="0%"),T.time.END=new Date().getTime()+T.time.REMAINING,T.time.TIMER=setTimeout(function(){clearTimeout(T.time.TIMER),_.classList.contains(s+"-closing")||(f.hide(T,_,"timeout"),typeof h=="function"&&h.apply(f))},T.time.REMAINING),f.setSetting(y,"time",T.time)):this.start()},reset:function(){clearTimeout(T.time.TIMER),delete T.time.REMAINING,f.setSetting(y,"time",T.time),_.classList.add(s+"-reseted"),_.classList.remove(s+"-paused"),v!==null&&(v.style.transition="none",v.style.width="100%"),typeof h=="function"&&setTimeout(function(){h.apply(f)},10)}}},r.hide=function(P,_,h){typeof _!="object"&&(_=document.querySelector(_));var f=this,y=N(this.children[_.getAttribute("data-iziToast-ref")],P||{});y.closedBy=h||null,delete y.time.REMAINING,_.classList.add(s+"-closing"),function(){var g=document.querySelector("."+s+"-overlay");if(g!==null){var q=g.getAttribute("data-iziToast-ref");q=q.split(",");var Y=q.indexOf(String(y.ref));Y!==-1&&q.splice(Y,1),g.setAttribute("data-iziToast-ref",q.join()),q.length===0&&(g.classList.remove("fadeIn"),g.classList.add("fadeOut"),setTimeout(function(){g.remove()},700))}}(),y.transitionIn&&_.classList.remove(y.transitionIn),y.transitionInMobile&&_.classList.remove(y.transitionInMobile),o||window.innerWidth<=I?y.transitionOutMobile&&_.classList.add(y.transitionOutMobile):y.transitionOut&&_.classList.add(y.transitionOut);var T=_.parentNode.offsetHeight;_.parentNode.style.height=T+"px",_.style.pointerEvents="none",(!o||window.innerWidth>I)&&(_.parentNode.style.transitionDelay="0.2s");try{var v=new CustomEvent(s+"-closing",{detail:y,bubbles:!0,cancelable:!0});document.dispatchEvent(v)}catch(g){console.warn(g)}setTimeout(function(){_.parentNode.style.height="0px",_.parentNode.style.overflow="",setTimeout(function(){delete f.children[y.ref],_.parentNode.remove();try{var g=new CustomEvent(s+"-closed",{detail:y,bubbles:!0,cancelable:!0});document.dispatchEvent(g)}catch(q){console.warn(q)}typeof y.onClosed<"u"&&y.onClosed.apply(null,[y,_,h])},1e3)},200),typeof y.onClosing<"u"&&y.onClosing.apply(null,[y,_,h])},r.show=function(P){var _=this,h=N(b,P||{});if(h=N(S,h),h.time={},h.id===null&&(h.id=W(h.title+h.message+h.color)),h.displayMode===1||h.displayMode=="once")try{if(document.querySelectorAll("."+s+"#"+h.id).length>0)return!1}catch{console.warn("["+s+"] Could not find an element with this selector: #"+h.id+". Try to set an valid id.")}if(h.displayMode===2||h.displayMode=="replace")try{L(document.querySelectorAll("."+s+"#"+h.id),function(v,g){_.hide(h,v,"replaced")})}catch{console.warn("["+s+"] Could not find an element with this selector: #"+h.id+". Try to set an valid id.")}h.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),r.children[h.ref]=h;var f={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:h.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};f.toast.setAttribute("data-iziToast-ref",h.ref),f.toast.appendChild(f.toastBody),f.toastCapsule.appendChild(f.toast),function(){if(f.toast.classList.add(s),f.toast.classList.add(s+"-opening"),f.toastCapsule.classList.add(s+"-capsule"),f.toastBody.classList.add(s+"-body"),f.toastTexts.classList.add(s+"-texts"),o||window.innerWidth<=I?h.transitionInMobile&&f.toast.classList.add(h.transitionInMobile):h.transitionIn&&f.toast.classList.add(h.transitionIn),h.class){var v=h.class.split(" ");L(v,function(g,q){f.toast.classList.add(g)})}h.id&&(f.toast.id=h.id),h.rtl&&(f.toast.classList.add(s+"-rtl"),f.toast.setAttribute("dir","rtl")),h.layout>1&&f.toast.classList.add(s+"-layout"+h.layout),h.balloon&&f.toast.classList.add(s+"-balloon"),h.maxWidth&&(isNaN(h.maxWidth)?f.toast.style.maxWidth=h.maxWidth:f.toast.style.maxWidth=h.maxWidth+"px"),(h.theme!==""||h.theme!=="light")&&f.toast.classList.add(s+"-theme-"+h.theme),h.color&&(K(h.color)?f.toast.style.background=h.color:f.toast.classList.add(s+"-color-"+h.color)),h.backgroundColor&&(f.toast.style.background=h.backgroundColor,h.balloon&&(f.toast.style.borderColor=h.backgroundColor))}(),function(){h.image&&(f.cover.classList.add(s+"-cover"),f.cover.style.width=h.imageWidth+"px",ne(h.image.replace(/ /g,""))?f.cover.style.backgroundImage="url(data:image/png;base64,"+h.image.replace(/ /g,"")+")":f.cover.style.backgroundImage="url("+h.image+")",h.rtl?f.toastBody.style.marginRight=h.imageWidth+10+"px":f.toastBody.style.marginLeft=h.imageWidth+10+"px",f.toast.appendChild(f.cover))}(),function(){h.close?(f.buttonClose=document.createElement("button"),f.buttonClose.type="button",f.buttonClose.classList.add(s+"-close"),f.buttonClose.addEventListener("click",function(v){v.target,_.hide(h,f.toast,"button")}),f.toast.appendChild(f.buttonClose)):h.rtl?f.toast.style.paddingLeft="18px":f.toast.style.paddingRight="18px"}(),function(){h.progressBar&&(f.progressBar=document.createElement("div"),f.progressBarDiv=document.createElement("div"),f.progressBar.classList.add(s+"-progressbar"),f.progressBarDiv.style.background=h.progressBarColor,f.progressBar.appendChild(f.progressBarDiv),f.toast.appendChild(f.progressBar)),h.timeout&&(h.pauseOnHover&&!h.resetOnHover&&(f.toast.addEventListener("mouseenter",function(v){_.progress(h,f.toast).pause()}),f.toast.addEventListener("mouseleave",function(v){_.progress(h,f.toast).resume()})),h.resetOnHover&&(f.toast.addEventListener("mouseenter",function(v){_.progress(h,f.toast).reset()}),f.toast.addEventListener("mouseleave",function(v){_.progress(h,f.toast).start()})))}(),function(){h.iconUrl?(f.icon.setAttribute("class",s+"-icon"),f.icon.setAttribute("src",h.iconUrl)):h.icon&&(f.icon.setAttribute("class",s+"-icon "+h.icon),h.iconText&&f.icon.appendChild(document.createTextNode(h.iconText)),h.iconColor&&(f.icon.style.color=h.iconColor)),(h.icon||h.iconUrl)&&(h.rtl?f.toastBody.style.paddingRight="33px":f.toastBody.style.paddingLeft="33px",f.toastBody.appendChild(f.icon))}(),function(){h.title.length>0&&(f.strong=document.createElement("strong"),f.strong.classList.add(s+"-title"),f.strong.appendChild(j(h.title)),f.toastTexts.appendChild(f.strong),h.titleColor&&(f.strong.style.color=h.titleColor),h.titleSize&&(isNaN(h.titleSize)?f.strong.style.fontSize=h.titleSize:f.strong.style.fontSize=h.titleSize+"px"),h.titleLineHeight&&(isNaN(h.titleSize)?f.strong.style.lineHeight=h.titleLineHeight:f.strong.style.lineHeight=h.titleLineHeight+"px")),h.message.length>0&&(f.p=document.createElement("p"),f.p.classList.add(s+"-message"),f.p.appendChild(j(h.message)),f.toastTexts.appendChild(f.p),h.messageColor&&(f.p.style.color=h.messageColor),h.messageSize&&(isNaN(h.titleSize)?f.p.style.fontSize=h.messageSize:f.p.style.fontSize=h.messageSize+"px"),h.messageLineHeight&&(isNaN(h.titleSize)?f.p.style.lineHeight=h.messageLineHeight:f.p.style.lineHeight=h.messageLineHeight+"px")),h.title.length>0&&h.message.length>0&&(h.rtl?f.strong.style.marginLeft="10px":h.layout!==2&&!h.rtl&&(f.strong.style.marginRight="10px"))}(),f.toastBody.appendChild(f.toastTexts);var y;(function(){h.inputs.length>0&&(f.inputs.classList.add(s+"-inputs"),L(h.inputs,function(v,g){f.inputs.appendChild(j(v[0])),y=f.inputs.childNodes,y[g].classList.add(s+"-inputs-child"),v[3]&&setTimeout(function(){y[g].focus()},300),y[g].addEventListener(v[1],function(q){var Y=v[2];return Y(_,f.toast,this,q)})}),f.toastBody.appendChild(f.inputs))})(),function(){h.buttons.length>0&&(f.buttons.classList.add(s+"-buttons"),L(h.buttons,function(v,g){f.buttons.appendChild(j(v[0]));var q=f.buttons.childNodes;q[g].classList.add(s+"-buttons-child"),v[2]&&setTimeout(function(){q[g].focus()},300),q[g].addEventListener("click",function(Y){Y.preventDefault();var Os=v[1];return Os(_,f.toast,this,Y,y)})})),f.toastBody.appendChild(f.buttons)}(),h.message.length>0&&(h.inputs.length>0||h.buttons.length>0)&&(f.p.style.marginBottom="0"),(h.inputs.length>0||h.buttons.length>0)&&(h.rtl?f.toastTexts.style.marginLeft="10px":f.toastTexts.style.marginRight="10px",h.inputs.length>0&&h.buttons.length>0&&(h.rtl?f.inputs.style.marginLeft="8px":f.inputs.style.marginRight="8px")),function(){f.toastCapsule.style.visibility="hidden",setTimeout(function(){var v=f.toast.offsetHeight,g=f.toast.currentStyle||window.getComputedStyle(f.toast),q=g.marginTop;q=q.split("px"),q=parseInt(q[0]);var Y=g.marginBottom;Y=Y.split("px"),Y=parseInt(Y[0]),f.toastCapsule.style.visibility="",f.toastCapsule.style.height=v+Y+q+"px",setTimeout(function(){f.toastCapsule.style.height="auto",h.target&&(f.toastCapsule.style.overflow="visible")},500),h.timeout&&_.progress(h,f.toast).start()},100)}(),function(){var v=h.position;if(h.target)f.wrapper=document.querySelector(h.target),f.wrapper.classList.add(s+"-target"),h.targetFirst?f.wrapper.insertBefore(f.toastCapsule,f.wrapper.firstChild):f.wrapper.appendChild(f.toastCapsule);else{if(p.indexOf(h.position)==-1){console.warn("["+s+`] Incorrect position.
It can be › `+p);return}o||window.innerWidth<=I?h.position=="bottomLeft"||h.position=="bottomRight"||h.position=="bottomCenter"?v=s+"-wrapper-bottomCenter":h.position=="topLeft"||h.position=="topRight"||h.position=="topCenter"?v=s+"-wrapper-topCenter":v=s+"-wrapper-center":v=s+"-wrapper-"+v,f.wrapper=document.querySelector("."+s+"-wrapper."+v),f.wrapper||(f.wrapper=document.createElement("div"),f.wrapper.classList.add(s+"-wrapper"),f.wrapper.classList.add(v),document.body.appendChild(f.wrapper)),h.position=="topLeft"||h.position=="topCenter"||h.position=="topRight"?f.wrapper.insertBefore(f.toastCapsule,f.wrapper.firstChild):f.wrapper.appendChild(f.toastCapsule)}isNaN(h.zindex)?console.warn("["+s+"] Invalid zIndex."):f.wrapper.style.zIndex=h.zindex}(),function(){h.overlay&&(document.querySelector("."+s+"-overlay.fadeIn")!==null?(f.overlay=document.querySelector("."+s+"-overlay"),f.overlay.setAttribute("data-iziToast-ref",f.overlay.getAttribute("data-iziToast-ref")+","+h.ref),!isNaN(h.zindex)&&h.zindex!==null&&(f.overlay.style.zIndex=h.zindex-1)):(f.overlay.classList.add(s+"-overlay"),f.overlay.classList.add("fadeIn"),f.overlay.style.background=h.overlayColor,f.overlay.setAttribute("data-iziToast-ref",h.ref),!isNaN(h.zindex)&&h.zindex!==null&&(f.overlay.style.zIndex=h.zindex-1),document.querySelector("body").appendChild(f.overlay)),h.overlayClose?(f.overlay.removeEventListener("click",{}),f.overlay.addEventListener("click",function(v){_.hide(h,f.toast,"overlay")})):f.overlay.removeEventListener("click",{}))}(),function(){if(h.animateInside){f.toast.classList.add(s+"-animateInside");var v=[200,100,300];(h.transitionIn=="bounceInLeft"||h.transitionIn=="bounceInRight")&&(v=[400,200,400]),h.title.length>0&&setTimeout(function(){f.strong.classList.add("slideIn")},v[0]),h.message.length>0&&setTimeout(function(){f.p.classList.add("slideIn")},v[1]),(h.icon||h.iconUrl)&&setTimeout(function(){f.icon.classList.add("revealIn")},v[2]);var g=150;h.buttons.length>0&&f.buttons&&setTimeout(function(){L(f.buttons.childNodes,function(q,Y){setTimeout(function(){q.classList.add("revealIn")},g),g=g+150})},h.inputs.length>0?150:0),h.inputs.length>0&&f.inputs&&(g=150,L(f.inputs.childNodes,function(q,Y){setTimeout(function(){q.classList.add("revealIn")},g),g=g+150}))}}(),h.onOpening.apply(null,[h,f.toast]);try{var T=new CustomEvent(s+"-opening",{detail:h,bubbles:!0,cancelable:!0});document.dispatchEvent(T)}catch(v){console.warn(v)}setTimeout(function(){f.toast.classList.remove(s+"-opening"),f.toast.classList.add(s+"-opened");try{var v=new CustomEvent(s+"-opened",{detail:h,bubbles:!0,cancelable:!0});document.dispatchEvent(v)}catch(g){console.warn(g)}h.onOpened.apply(null,[h,f.toast])},1e3),h.drag&&(d?(f.toast.addEventListener("touchstart",function(v){le.startMoving(this,_,h,v)},!1),f.toast.addEventListener("touchend",function(v){le.stopMoving(this,v)},!1)):(f.toast.addEventListener("mousedown",function(v){v.preventDefault(),le.startMoving(this,_,h,v)},!1),f.toast.addEventListener("mouseup",function(v){v.preventDefault(),le.stopMoving(this,v)},!1))),h.closeOnEscape&&document.addEventListener("keyup",function(v){v=v||window.event,v.keyCode==27&&_.hide(h,f.toast,"esc")}),h.closeOnClick&&f.toast.addEventListener("click",function(v){_.hide(h,f.toast,"toast")}),_.toast=f.toast},r})}(Or)),Or.exports}var fd=dd();const pt=hd(fd);pt.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});let pd=class{error(e){pt.error({title:"Error",message:e})}success(e){pt.success({title:"OK",message:e})}info(e){pt.info({title:"Info",message:e})}};const It=new pd;function zi(n){if(n)return n[0].toUpperCase()+n.slice(1)}var Me;let md=(Me=class{open(){(!Me.loaderEl||Me.loaderEl.classList.contains("js-loader"))&&(Me.loaderEl.style.display="block")}close(){Me.loaderEl&&(Me.loaderEl.style.display="none")}},xn(Me,"loaderEl",document.querySelector(".js-loader")),Me);const he=new md,gd=document.querySelector(".wrap-button"),ll=document.querySelector(".muscles-list"),_d=document.querySelector(".pagination-numbers"),yd=document.querySelector(".title-exercises");gd.addEventListener("click",Ed);document.addEventListener("DOMContentLoaded",()=>{ul({filter:"Muscles",page:1,limit:12})});function vd(){var n=window.scrollY||window.pageYOffset||document.documentElement.scrollTop,e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return n+t>=e}async function Ed(n){n.preventDefault(),yd.innerHTML="Exercises";const{target:e,currentTarget:t}=n;if(e.nodeName!=="BUTTON")return;const r=e.dataset.name;e.classList.contains("btn-filter")&&[...t.children].forEach(a=>{a.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const s={filter:r,page:1,limit:12};ll.innerHTML="",ul(s)}async function ul(n){document.querySelector(".filter-list-js").classList.remove("exercises_list"),document.querySelector(".form-js").classList.add("hidden-form");try{he.open();const e=await Tt.getByFilterName(n);he.close();const t=e.results;if(!e||t.length===0){It.error("Przepraszamy, nie znaleziono nic zgodnego z Twoim zapytaniem.");return}ll.insertAdjacentHTML("beforeend",vi(t)),window.addEventListener("scroll",function(){vd()&&(console.log("Strona została załadowana do końca!"),vi(t))});const{totalPages:r}=e,s=JSON.stringify({totalPages:r,categoryName:n.filter});localStorage.setItem("infoRequest",s),document.querySelector(".filter-list-js").classList.add("muscles-list"),_d.innerHTML="",Wi(r,n),Qi(1)}catch(e){console.log(e.message)}}function vi(n){return n.map(({filter:t,name:r,imgURL:s})=>{let o=t.toLocaleLowerCase().replaceAll(" ","");return o==="bodyparts"&&(o="bodypart"),`
      <li class="muscles-item" data-name=${r} data-filter=${o}>
      <a href="" class="muscles-link" data-alt="${r}">
        <img loading="lazy" class="muscles-image" src="${s}" alt="${r}" width="290" height="242" >
        <button class="muscles-box-menu">
          <h3 class="muscles-small-title">${zi(r)}</h3>
          <p class="muscles-text">${t}</p>
        </button>
      </a>
    </li>
    `}).join("")}const ce="/final-project-advenced-js/assets/sprite-BjzD74W5.svg",Yt=(n,e)=>n.length<=e?n:`${n.slice(0,e)}...`,Td=document.querySelector(".pagination-numbers"),Gr=document.querySelector(".filter-list-js"),Id=document.querySelector(".title-exercises");Gr.addEventListener("click",wd);async function wd(n){n.preventDefault();const{target:e}=n;if(e.nodeName!=="IMG"&e.parentNode.nodeName!=="BUTTON")return;document.querySelector(".form-js").classList.remove("hidden-form");let t,r;try{e.nodeName==="IMG"&&(t=e.parentNode.parentNode.dataset.filter,r=e.alt),(e.nodeName==="P"||e.nodeName==="H3")&&(t=e.parentNode.parentNode.parentNode.dataset.filter,r=e.parentNode.parentNode.dataset.alt);const s={[t]:r,page:1,limit:10};Id.innerHTML=`Exercises / <spam class="search-target" id="tagret-js">${zi(r)}</spam>`,he.open();const o=await Tt.getByFilterCategory(s);if(he.close(),o!=null&&o.results.length){Gr.classList.add("exercises_list"),Gr.classList.remove("muscles-list"),Hi(o),Td.innerHTML="";const{totalPages:a}=o;Wi(a,s),Qi(1)}else It.info("Oops. please, try other category this list empty :(")}catch(s){It.error(s.message)}}function Hi(n){if(n.results.length){const e=n.results.map(({_id:t,target:r,rating:s,name:o,burnedCalories:a,time:l,bodyPart:d})=>`
      <li class="exercises_list_item" id=${t}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${r.toString().length>8?r.slice(0,8)+"...":r}</div>
          <p class="exercises_rating">${s.toFixed(1)}</p>
          <div class="rating-container-not-cursore">
            <svg class="exercises_start_icon" width="56" height="18" data-id=${t}>
              <use xlink:href="${ce}#icon-star" data-id=${t}></use>
              />
            </svg>
          </div>
        </div>
        <div class="exercises_list_item_up_right" >
          <button class="exercises_btn_start exercises_btn_start_text" data-id=${t}>Start
          <div class="arrow-container">
            <svg class="exercises_btn_arrow_icon" width="56" height="18" data-id=${t}>
              <use xlink:href="${ce}#icon-arrow" data-id=${t}></use>
              />
            </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="exercises_list_item_middle">
        <div class="exercises_list_item_middle_icon">
          <svg class="exercises_list_item_middle_icon_svg" width="24" height="24">
            <use xlink:href="${ce}#icon-run-man"></use>
            />
          </svg>
        </div>
        <h3 class="exercises_list_item_middle_title" id="name">${o.toString().length>20?o.slice(0,20)+"...":o} </h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>${a||""} / ${l||"your wish"} min</span>
            </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
          <p class="exercises_list_item_bottom_list_item_text">
            Body part: <span>${Yt(d,5)}</span>
          </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
<p class="exercises_list_item_bottom_list_item_text"">Target: <span>${Yt(r,7)}</span></p>
</li>
      </ul>
        </div>
    </li>`).join("");Gr.innerHTML=e}}const Gi=document.querySelector(".pagination-numbers"),Ad=document.querySelector(".muscles-list");let Wr=1,hl,dl;try{Gi.addEventListener("click",n=>{n.target.nodeName==="BUTTON"&&bd(n)})}catch(n){console.error("Error initializing pagination:",n)}async function bd(n){const e=Number(n.target.textContent);if(e===Wr)return;const t={...hl,page:e};try{if(he.open(),t.filter){const r=await Tt.getByFilterName(t);Ad.innerHTML=vi(r.results)}else{const r=await Tt.getByFilterCategory(t);Hi(r)}he.close(),Wr=e,Ki()}catch(r){console.error("Error fetching data:",r),he.close()}}function Rd(n){const e=document.createElement("button");e.className="pagination-number",e.textContent=n,e.setAttribute("page-index",n),e.setAttribute("aria-label",`Page ${n}`),Gi.appendChild(e)}function Wi(n,e){if(dl=n,hl=e,!(n<=1)){Gi.innerHTML="";for(let t=1;t<=n;t++)Rd(t);Ki()}}function Ki(){document.querySelectorAll(".pagination-number").forEach(n=>{const e=Number(n.getAttribute("page-index"));n.classList.toggle("active",e===Wr)})}function Qi(n){if(n>dl){console.error("Invalid page number:",n);return}Wr=n,Ki()}class Sd{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.closeEsc(e),this.overlayClickHandler=e=>this.closeBack(e)}open(e){this.overlay.innerHTML=e,this.overlay.style.zIndex=3,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(e){e.key==="Escape"&&this.close()}closeBack(e){e.target===this.overlay&&this.close()}}const Kr=new Sd;function Cd(n){const e=(n%1).toFixed(1)*100;let t='<div class="rating-container-not-cursore" data-rating="0">';for(let r=1;r<=n+1;r+=1)r<=n?t+=`<span class="star-js selected" data-value="${r}"><svg class="exercises_btn_start_icon_modal star-js selected">
              <use xlink:href="${ce}#icon-star"></use>
              />
            </svg></span>`:e>0&&(t+=`<span class="last-star-js" data-value="${r}"><svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 20 19" fill="none">
                    <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="url(#paint0_linear_126_18474)"/>
                    <defs>
                    <linearGradient id="paint0_linear_126_18474" x1="20" y1="10" x2="-1.99998" y2="10.0209" gradientUnits="userSpaceOnUse">
                    <stop offset="${100-e}%" stop-color="rgba(244, 244, 244, 0.20)" />
                    <stop offset="${e}%" stop-color="#EEA10C" />
                    </linearGradient>
                    </defs>
                  </svg></span>`);for(let r=n+1;r<=5;r+=1)t+=`<span class="star-js" data-value="${r}"><svg class="exercises_btn_start_icon_modal star-js">
              <use xlink:href="${ce}#icon-star"></use>
              />
            </svg></span>`;return t+"</div>"}function Pd(n){return n?`<button class="add-favorite-js" type="button" style="font-size: 14px;">
              <span class="remote-favorites">Remove from favorites</span>
              <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
                  <use href="${ce}#icon-trash"></use>
              </svg>
          </button>`:`<button class="add-favorite-js" type="button" style="font-size: 14px;">
                <span>Add to favorites</span>
                <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                    <use href="${ce}#icon-heart"></use>
                </svg>
              </button>`}function kd(n){return`<div class="modal-info" data-id="${n._id}">
     <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${ce}#icon-close"></use>
      </svg>
    </button>
    <div class="modal-image-vrapper">
      <img loading="lazy" class="modal-img" src="${n.gifUrl}" alt="${n.name}" />
    </div>
    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${zi(n.name)}</h3>
        <div class="rating-modal-container-wrapper"><p>${n.rating.toFixed(1)}</p>${Cd(n.rating)}</div>
      </div>
      <hr class="modal-decoration-line" />
      <ul class="modal-table">
        <li>
          <h4 class="title-collum">Target</h4>
          <p class="data-collumn">${n.target}</p>
        </li>
        <li>
          <h4 class="title-collum">Body Part</h4>
          <p class="data-collumn">${n.bodyPart}</p>
        </li>
        <li>
          <h4 class="title-collum">Equipment</h4>
          <p class="data-collumn">${n.equipment}</p>
        </li>
        <li>
          <h4 class="title-collum">Popular</h4>
          <p class="data-collumn">${n.popularity}</p>
        </li>
        <li>
          <h4 class="title-collum">Burned Calories</h4>
          <p class="data-collumn">${n.burnedCalories}/${n.time} min</p>
        </li>
      </ul>
      <hr class="modal-decoration-line" />
      <p class="about-exercise">
        ${n.description}
      </p>
      <div class="button-section-modal">
        <div class="refresh-button-js" data-favorite="${n.favorite}">
          ${Pd(n.favorite)}
        </div>
        <button class="add-rating" type="button" style="font-size: 14px;">Give a rating</button>
      </div>`}function Nd(n){return`<div class="modal-get-raiting" data-id="${n}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${ce}#icon-close"></use>
      </svg>
    </button>
    <div class="get-rating-container">
      <div class="get-rating-choise">
        <h3 class="title-card-get-rating">Rating</h3>
        <div class="rating-container-js rating-container" data-rating="" data-id="">
          <p class="user-rating-js">0</p>
          <span class="star-js" data-value="1"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${ce}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="2"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${ce}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="3"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${ce}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="4"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${ce}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="5"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${ce}#icon-star"></use>
              />
            </svg></span>
        </div>
      <form class="form raiting-form">
        <label class="raiting-form-field">
          <input
            type="Email"
            class="raiting-form-field-input"
            name="user_email"
            placeholder="Email"
            required
          />
        </label>
        <label class="form-comment">
          <textarea
            class="raiting-form-field-comment"
            name="user_comment"
            placeholder="Your comment"
          ></textarea>
        </label>
        <button class="raiting-form-submit" type="submit">Send</button>
      </form>
    </div>
  </div>`}function Dd(){const n=document.querySelector(".rating-container-js"),e=n.querySelectorAll(".exercises_btn_start_icon_rating");let t=n.querySelector(".user-rating-js");e.forEach((a,l)=>{a.addEventListener("mouseover",()=>r(l)),a.addEventListener("mouseout",s),a.addEventListener("click",()=>o(l+1))});function r(a){s();for(let l=0;l<=a;l++)e[l].classList.add("hovered"),t.textContent=`${l+1}`}function s(){e.forEach(a=>{const l=n.dataset.rating;a.classList.remove("hovered"),t.textContent=`${l||0}`})}function o(a){n.setAttribute("data-rating",a),e.forEach((l,d)=>{d+1<=a?l.classList.add("selected"):l.classList.remove("selected")})}}const ie=class ie{static handleErrors(e){return async()=>{try{return await e()}catch(t){console.error("Error during request: ",t.message)}}}static async fetchJson(e,t){return(await fetch(e,t)).json()}async getQuotes(){return await ie.handleErrors(async()=>await ie.fetchJson(`${ie.BASE_URL}/quote`))()}async getByFilterName(e){return await ie.handleErrors(async()=>{const r=new URLSearchParams({...e});return await ie.fetchJson(`${ie.BASE_URL}/filters?${r}`)})()}async getByFilterCategory(e){return await ie.handleErrors(async()=>{const r=new URLSearchParams({...e});return await ie.fetchJson(`${ie.BASE_URL}/exercises?${r}`)})()}async getOneExercises(e){return await ie.handleErrors(async()=>await ie.fetchJson(`${ie.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,t){return await ie.handleErrors(async()=>{const s={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return await ie.fetchJson(`${ie.BASE_URL}/exercises/${e}/rating`,s)})()}async addSubscription(e){return await ie.handleErrors(async()=>{const r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await ie.fetchJson(`${ie.BASE_URL}/subscription`,r)})()}};xn(ie,"BASE_URL","https://your-energy.b.goit.study/api");let Ei=ie;const Ji=new Ei;var za={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ld=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],l=n[t++],d=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},pl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,d=s+2<n.length,p=d?n[s+2]:0,E=o>>2,I=(o&3)<<4|l>>4;let b=(l&15)<<2|p>>6,S=p&63;d||(S=64,a||(b=64)),r.push(t[E],t[I],t[b],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(fl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ld(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const p=s<n.length?t[n.charAt(s)]:64;++s;const I=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||l==null||p==null||I==null)throw new Vd;const b=o<<2|l>>4;if(r.push(b),p!==64){const S=l<<4&240|p>>2;if(r.push(S),I!==64){const D=p<<6&192|I;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Vd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Od=function(n){const e=fl(n);return pl.encodeByteArray(e,!0)},Qr=function(n){return Od(n).replace(/\./g,"")},ml=function(n){try{return pl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=()=>Md().__FIREBASE_DEFAULTS__,Ud=()=>{if(typeof process>"u"||typeof za>"u")return;const n=za.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Fd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ml(n[1]);return e&&JSON.parse(e)},ms=()=>{try{return xd()||Ud()||Fd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},gl=n=>{var e,t;return(t=(e=ms())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Bd=n=>{const e=gl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},_l=()=>{var n;return(n=ms())===null||n===void 0?void 0:n.config},yl=n=>{var e;return(e=ms())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Qr(JSON.stringify(t)),Qr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $d(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function zd(){var n;const e=(n=ms())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Gd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Wd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kd(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Qd(){return!zd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jd(){try{return typeof indexedDB=="object"}catch{return!1}}function Xd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="FirebaseError";class rt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Yd,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zn.prototype.create)}}class Zn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?Zd(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new rt(s,l,r)}}function Zd(n,e){return n.replace(ef,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ef=/\{\$([^}]+)}/g;function tf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Jr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(Ha(o)&&Ha(a)){if(!Jr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ha(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nf(n,e){const t=new rf(n,e);return t.subscribe.bind(t)}class rf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");sf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=oi),s.error===void 0&&(s.error=oi),s.complete===void 0&&(s.complete=oi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function oi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(n){return n&&n._delegate?n._delegate:n}class Mt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new qd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cf(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:af(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function af(n){return n===Dt?void 0:n}function cf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new of(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const uf={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},hf=$.INFO,df={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},ff=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=df[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xi{constructor(e){this.name=e,this._logLevel=hf,this._logHandler=ff,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const pf=(n,e)=>e.some(t=>n instanceof t);let Ga,Wa;function mf(){return Ga||(Ga=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gf(){return Wa||(Wa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vl=new WeakMap,Ti=new WeakMap,El=new WeakMap,ai=new WeakMap,Yi=new WeakMap;function _f(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(mt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&vl.set(t,n)}).catch(()=>{}),Yi.set(e,n),e}function yf(n){if(Ti.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ti.set(n,e)}let Ii={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ti.get(n);if(e==="objectStoreNames")return n.objectStoreNames||El.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function vf(n){Ii=n(Ii)}function Ef(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ci(this),e,...t);return El.set(r,e.sort?e.sort():[e]),mt(r)}:gf().includes(n)?function(...e){return n.apply(ci(this),e),mt(vl.get(this))}:function(...e){return mt(n.apply(ci(this),e))}}function Tf(n){return typeof n=="function"?Ef(n):(n instanceof IDBTransaction&&yf(n),pf(n,mf())?new Proxy(n,Ii):n)}function mt(n){if(n instanceof IDBRequest)return _f(n);if(ai.has(n))return ai.get(n);const e=Tf(n);return e!==n&&(ai.set(n,e),Yi.set(e,n)),e}const ci=n=>Yi.get(n);function If(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),l=mt(a);return r&&a.addEventListener("upgradeneeded",d=>{r(mt(a.result),d.oldVersion,d.newVersion,mt(a.transaction),d)}),t&&a.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),l.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",p=>s(p.oldVersion,p.newVersion,p))}).catch(()=>{}),l}const wf=["get","getKey","getAll","getAllKeys","count"],Af=["put","add","delete","clear"],li=new Map;function Ka(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(li.get(e))return li.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Af.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wf.includes(t)))return;const o=async function(a,...l){const d=this.transaction(a,s?"readwrite":"readonly");let p=d.store;return r&&(p=p.index(l.shift())),(await Promise.all([p[t](...l),s&&d.done]))[0]};return li.set(e,o),o}vf(n=>({...n,get:(e,t,r)=>Ka(e,t)||n.get(e,t,r),has:(e,t)=>!!Ka(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Rf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Rf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wi="@firebase/app",Qa="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new Xi("@firebase/app"),Sf="@firebase/app-compat",Cf="@firebase/analytics-compat",Pf="@firebase/analytics",kf="@firebase/app-check-compat",Nf="@firebase/app-check",Df="@firebase/auth",Lf="@firebase/auth-compat",Vf="@firebase/database",Of="@firebase/data-connect",Mf="@firebase/database-compat",xf="@firebase/functions",Uf="@firebase/functions-compat",Ff="@firebase/installations",Bf="@firebase/installations-compat",qf="@firebase/messaging",jf="@firebase/messaging-compat",$f="@firebase/performance",zf="@firebase/performance-compat",Hf="@firebase/remote-config",Gf="@firebase/remote-config-compat",Wf="@firebase/storage",Kf="@firebase/storage-compat",Qf="@firebase/firestore",Jf="@firebase/vertexai",Xf="@firebase/firestore-compat",Yf="firebase",Zf="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="[DEFAULT]",ep={[wi]:"fire-core",[Sf]:"fire-core-compat",[Pf]:"fire-analytics",[Cf]:"fire-analytics-compat",[Nf]:"fire-app-check",[kf]:"fire-app-check-compat",[Df]:"fire-auth",[Lf]:"fire-auth-compat",[Vf]:"fire-rtdb",[Of]:"fire-data-connect",[Mf]:"fire-rtdb-compat",[xf]:"fire-fn",[Uf]:"fire-fn-compat",[Ff]:"fire-iid",[Bf]:"fire-iid-compat",[qf]:"fire-fcm",[jf]:"fire-fcm-compat",[$f]:"fire-perf",[zf]:"fire-perf-compat",[Hf]:"fire-rc",[Gf]:"fire-rc-compat",[Wf]:"fire-gcs",[Kf]:"fire-gcs-compat",[Qf]:"fire-fst",[Xf]:"fire-fst-compat",[Jf]:"fire-vertex","fire-js":"fire-js",[Yf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Map,tp=new Map,bi=new Map;function Ja(n,e){try{n.container.addComponent(e)}catch(t){Ze.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function sn(n){const e=n.name;if(bi.has(e))return Ze.debug(`There were multiple attempts to register component ${e}.`),!1;bi.set(e,n);for(const t of Xr.values())Ja(t,n);for(const t of tp.values())Ja(t,n);return!0}function Zi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Qe(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gt=new Zn("app","Firebase",np);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=Zf;function Tl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ai,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw gt.create("bad-app-name",{appName:String(s)});if(t||(t=_l()),!t)throw gt.create("no-options");const o=Xr.get(s);if(o){if(Jr(t,o.options)&&Jr(r,o.config))return o;throw gt.create("duplicate-app",{appName:s})}const a=new lf(s);for(const d of bi.values())a.addComponent(d);const l=new rp(t,r,a);return Xr.set(s,l),l}function Il(n=Ai){const e=Xr.get(n);if(!e&&n===Ai&&_l())return Tl();if(!e)throw gt.create("no-app",{appName:n});return e}function _t(n,e,t){var r;let s=(r=ep[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${e}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ze.warn(l.join(" "));return}sn(new Mt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="firebase-heartbeat-database",ip=1,Gn="firebase-heartbeat-store";let ui=null;function wl(){return ui||(ui=If(sp,ip,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Gn)}catch(t){console.warn(t)}}}}).catch(n=>{throw gt.create("idb-open",{originalErrorMessage:n.message})})),ui}async function op(n){try{const t=(await wl()).transaction(Gn),r=await t.objectStore(Gn).get(Al(n));return await t.done,r}catch(e){if(e instanceof rt)Ze.warn(e.message);else{const t=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ze.warn(t.message)}}}async function Xa(n,e){try{const r=(await wl()).transaction(Gn,"readwrite");await r.objectStore(Gn).put(e,Al(n)),await r.done}catch(t){if(t instanceof rt)Ze.warn(t.message);else{const r=gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ze.warn(r.message)}}}function Al(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=1024,cp=30*24*60*60*1e3;class lp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ya();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=cp}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ze.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ya(),{heartbeatsToSend:r,unsentEntries:s}=up(this._heartbeatsCache.heartbeats),o=Qr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Ze.warn(t),""}}}function Ya(){return new Date().toISOString().substring(0,10)}function up(n,e=ap){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Za(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Za(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class hp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jd()?Xd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await op(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Za(n){return Qr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(n){sn(new Mt("platform-logger",e=>new bf(e),"PRIVATE")),sn(new Mt("heartbeat",e=>new lp(e),"PRIVATE")),_t(wi,Qa,n),_t(wi,Qa,"esm2017"),_t("fire-js","")}dp("");var ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yt,bl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,h){function f(){}f.prototype=h.prototype,_.D=h.prototype,_.prototype=new f,_.prototype.constructor=_,_.C=function(y,T,v){for(var g=Array(arguments.length-2),q=2;q<arguments.length;q++)g[q-2]=arguments[q];return h.prototype[T].apply(y,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,h,f){f||(f=0);var y=Array(16);if(typeof h=="string")for(var T=0;16>T;++T)y[T]=h.charCodeAt(f++)|h.charCodeAt(f++)<<8|h.charCodeAt(f++)<<16|h.charCodeAt(f++)<<24;else for(T=0;16>T;++T)y[T]=h[f++]|h[f++]<<8|h[f++]<<16|h[f++]<<24;h=_.g[0],f=_.g[1],T=_.g[2];var v=_.g[3],g=h+(v^f&(T^v))+y[0]+3614090360&4294967295;h=f+(g<<7&4294967295|g>>>25),g=v+(T^h&(f^T))+y[1]+3905402710&4294967295,v=h+(g<<12&4294967295|g>>>20),g=T+(f^v&(h^f))+y[2]+606105819&4294967295,T=v+(g<<17&4294967295|g>>>15),g=f+(h^T&(v^h))+y[3]+3250441966&4294967295,f=T+(g<<22&4294967295|g>>>10),g=h+(v^f&(T^v))+y[4]+4118548399&4294967295,h=f+(g<<7&4294967295|g>>>25),g=v+(T^h&(f^T))+y[5]+1200080426&4294967295,v=h+(g<<12&4294967295|g>>>20),g=T+(f^v&(h^f))+y[6]+2821735955&4294967295,T=v+(g<<17&4294967295|g>>>15),g=f+(h^T&(v^h))+y[7]+4249261313&4294967295,f=T+(g<<22&4294967295|g>>>10),g=h+(v^f&(T^v))+y[8]+1770035416&4294967295,h=f+(g<<7&4294967295|g>>>25),g=v+(T^h&(f^T))+y[9]+2336552879&4294967295,v=h+(g<<12&4294967295|g>>>20),g=T+(f^v&(h^f))+y[10]+4294925233&4294967295,T=v+(g<<17&4294967295|g>>>15),g=f+(h^T&(v^h))+y[11]+2304563134&4294967295,f=T+(g<<22&4294967295|g>>>10),g=h+(v^f&(T^v))+y[12]+1804603682&4294967295,h=f+(g<<7&4294967295|g>>>25),g=v+(T^h&(f^T))+y[13]+4254626195&4294967295,v=h+(g<<12&4294967295|g>>>20),g=T+(f^v&(h^f))+y[14]+2792965006&4294967295,T=v+(g<<17&4294967295|g>>>15),g=f+(h^T&(v^h))+y[15]+1236535329&4294967295,f=T+(g<<22&4294967295|g>>>10),g=h+(T^v&(f^T))+y[1]+4129170786&4294967295,h=f+(g<<5&4294967295|g>>>27),g=v+(f^T&(h^f))+y[6]+3225465664&4294967295,v=h+(g<<9&4294967295|g>>>23),g=T+(h^f&(v^h))+y[11]+643717713&4294967295,T=v+(g<<14&4294967295|g>>>18),g=f+(v^h&(T^v))+y[0]+3921069994&4294967295,f=T+(g<<20&4294967295|g>>>12),g=h+(T^v&(f^T))+y[5]+3593408605&4294967295,h=f+(g<<5&4294967295|g>>>27),g=v+(f^T&(h^f))+y[10]+38016083&4294967295,v=h+(g<<9&4294967295|g>>>23),g=T+(h^f&(v^h))+y[15]+3634488961&4294967295,T=v+(g<<14&4294967295|g>>>18),g=f+(v^h&(T^v))+y[4]+3889429448&4294967295,f=T+(g<<20&4294967295|g>>>12),g=h+(T^v&(f^T))+y[9]+568446438&4294967295,h=f+(g<<5&4294967295|g>>>27),g=v+(f^T&(h^f))+y[14]+3275163606&4294967295,v=h+(g<<9&4294967295|g>>>23),g=T+(h^f&(v^h))+y[3]+4107603335&4294967295,T=v+(g<<14&4294967295|g>>>18),g=f+(v^h&(T^v))+y[8]+1163531501&4294967295,f=T+(g<<20&4294967295|g>>>12),g=h+(T^v&(f^T))+y[13]+2850285829&4294967295,h=f+(g<<5&4294967295|g>>>27),g=v+(f^T&(h^f))+y[2]+4243563512&4294967295,v=h+(g<<9&4294967295|g>>>23),g=T+(h^f&(v^h))+y[7]+1735328473&4294967295,T=v+(g<<14&4294967295|g>>>18),g=f+(v^h&(T^v))+y[12]+2368359562&4294967295,f=T+(g<<20&4294967295|g>>>12),g=h+(f^T^v)+y[5]+4294588738&4294967295,h=f+(g<<4&4294967295|g>>>28),g=v+(h^f^T)+y[8]+2272392833&4294967295,v=h+(g<<11&4294967295|g>>>21),g=T+(v^h^f)+y[11]+1839030562&4294967295,T=v+(g<<16&4294967295|g>>>16),g=f+(T^v^h)+y[14]+4259657740&4294967295,f=T+(g<<23&4294967295|g>>>9),g=h+(f^T^v)+y[1]+2763975236&4294967295,h=f+(g<<4&4294967295|g>>>28),g=v+(h^f^T)+y[4]+1272893353&4294967295,v=h+(g<<11&4294967295|g>>>21),g=T+(v^h^f)+y[7]+4139469664&4294967295,T=v+(g<<16&4294967295|g>>>16),g=f+(T^v^h)+y[10]+3200236656&4294967295,f=T+(g<<23&4294967295|g>>>9),g=h+(f^T^v)+y[13]+681279174&4294967295,h=f+(g<<4&4294967295|g>>>28),g=v+(h^f^T)+y[0]+3936430074&4294967295,v=h+(g<<11&4294967295|g>>>21),g=T+(v^h^f)+y[3]+3572445317&4294967295,T=v+(g<<16&4294967295|g>>>16),g=f+(T^v^h)+y[6]+76029189&4294967295,f=T+(g<<23&4294967295|g>>>9),g=h+(f^T^v)+y[9]+3654602809&4294967295,h=f+(g<<4&4294967295|g>>>28),g=v+(h^f^T)+y[12]+3873151461&4294967295,v=h+(g<<11&4294967295|g>>>21),g=T+(v^h^f)+y[15]+530742520&4294967295,T=v+(g<<16&4294967295|g>>>16),g=f+(T^v^h)+y[2]+3299628645&4294967295,f=T+(g<<23&4294967295|g>>>9),g=h+(T^(f|~v))+y[0]+4096336452&4294967295,h=f+(g<<6&4294967295|g>>>26),g=v+(f^(h|~T))+y[7]+1126891415&4294967295,v=h+(g<<10&4294967295|g>>>22),g=T+(h^(v|~f))+y[14]+2878612391&4294967295,T=v+(g<<15&4294967295|g>>>17),g=f+(v^(T|~h))+y[5]+4237533241&4294967295,f=T+(g<<21&4294967295|g>>>11),g=h+(T^(f|~v))+y[12]+1700485571&4294967295,h=f+(g<<6&4294967295|g>>>26),g=v+(f^(h|~T))+y[3]+2399980690&4294967295,v=h+(g<<10&4294967295|g>>>22),g=T+(h^(v|~f))+y[10]+4293915773&4294967295,T=v+(g<<15&4294967295|g>>>17),g=f+(v^(T|~h))+y[1]+2240044497&4294967295,f=T+(g<<21&4294967295|g>>>11),g=h+(T^(f|~v))+y[8]+1873313359&4294967295,h=f+(g<<6&4294967295|g>>>26),g=v+(f^(h|~T))+y[15]+4264355552&4294967295,v=h+(g<<10&4294967295|g>>>22),g=T+(h^(v|~f))+y[6]+2734768916&4294967295,T=v+(g<<15&4294967295|g>>>17),g=f+(v^(T|~h))+y[13]+1309151649&4294967295,f=T+(g<<21&4294967295|g>>>11),g=h+(T^(f|~v))+y[4]+4149444226&4294967295,h=f+(g<<6&4294967295|g>>>26),g=v+(f^(h|~T))+y[11]+3174756917&4294967295,v=h+(g<<10&4294967295|g>>>22),g=T+(h^(v|~f))+y[2]+718787259&4294967295,T=v+(g<<15&4294967295|g>>>17),g=f+(v^(T|~h))+y[9]+3951481745&4294967295,_.g[0]=_.g[0]+h&4294967295,_.g[1]=_.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,_.g[2]=_.g[2]+T&4294967295,_.g[3]=_.g[3]+v&4294967295}r.prototype.u=function(_,h){h===void 0&&(h=_.length);for(var f=h-this.blockSize,y=this.B,T=this.h,v=0;v<h;){if(T==0)for(;v<=f;)s(this,_,v),v+=this.blockSize;if(typeof _=="string"){for(;v<h;)if(y[T++]=_.charCodeAt(v++),T==this.blockSize){s(this,y),T=0;break}}else for(;v<h;)if(y[T++]=_[v++],T==this.blockSize){s(this,y),T=0;break}}this.h=T,this.o+=h},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var h=1;h<_.length-8;++h)_[h]=0;var f=8*this.o;for(h=_.length-8;h<_.length;++h)_[h]=f&255,f/=256;for(this.u(_),_=Array(16),h=f=0;4>h;++h)for(var y=0;32>y;y+=8)_[f++]=this.g[h]>>>y&255;return _};function o(_,h){var f=l;return Object.prototype.hasOwnProperty.call(f,_)?f[_]:f[_]=h(_)}function a(_,h){this.h=h;for(var f=[],y=!0,T=_.length-1;0<=T;T--){var v=_[T]|0;y&&v==h||(f[T]=v,y=!1)}this.g=f}var l={};function d(_){return-128<=_&&128>_?o(_,function(h){return new a([h|0],0>h?-1:0)}):new a([_|0],0>_?-1:0)}function p(_){if(isNaN(_)||!isFinite(_))return I;if(0>_)return N(p(-_));for(var h=[],f=1,y=0;_>=f;y++)h[y]=_/f|0,f*=4294967296;return new a(h,0)}function E(_,h){if(_.length==0)throw Error("number format error: empty string");if(h=h||10,2>h||36<h)throw Error("radix out of range: "+h);if(_.charAt(0)=="-")return N(E(_.substring(1),h));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=p(Math.pow(h,8)),y=I,T=0;T<_.length;T+=8){var v=Math.min(8,_.length-T),g=parseInt(_.substring(T,T+v),h);8>v?(v=p(Math.pow(h,v)),y=y.j(v).add(p(g))):(y=y.j(f),y=y.add(p(g)))}return y}var I=d(0),b=d(1),S=d(16777216);n=a.prototype,n.m=function(){if(L(this))return-N(this).m();for(var _=0,h=1,f=0;f<this.g.length;f++){var y=this.i(f);_+=(0<=y?y:4294967296+y)*h,h*=4294967296}return _},n.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(D(this))return"0";if(L(this))return"-"+N(this).toString(_);for(var h=p(Math.pow(_,6)),f=this,y="";;){var T=ne(f,h).g;f=j(f,T.j(h));var v=((0<f.g.length?f.g[0]:f.h)>>>0).toString(_);if(f=T,D(f))return v+y;for(;6>v.length;)v="0"+v;y=v+y}},n.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function D(_){if(_.h!=0)return!1;for(var h=0;h<_.g.length;h++)if(_.g[h]!=0)return!1;return!0}function L(_){return _.h==-1}n.l=function(_){return _=j(this,_),L(_)?-1:D(_)?0:1};function N(_){for(var h=_.g.length,f=[],y=0;y<h;y++)f[y]=~_.g[y];return new a(f,~_.h).add(b)}n.abs=function(){return L(this)?N(this):this},n.add=function(_){for(var h=Math.max(this.g.length,_.g.length),f=[],y=0,T=0;T<=h;T++){var v=y+(this.i(T)&65535)+(_.i(T)&65535),g=(v>>>16)+(this.i(T)>>>16)+(_.i(T)>>>16);y=g>>>16,v&=65535,g&=65535,f[T]=g<<16|v}return new a(f,f[f.length-1]&-2147483648?-1:0)};function j(_,h){return _.add(N(h))}n.j=function(_){if(D(this)||D(_))return I;if(L(this))return L(_)?N(this).j(N(_)):N(N(this).j(_));if(L(_))return N(this.j(N(_)));if(0>this.l(S)&&0>_.l(S))return p(this.m()*_.m());for(var h=this.g.length+_.g.length,f=[],y=0;y<2*h;y++)f[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<_.g.length;T++){var v=this.i(y)>>>16,g=this.i(y)&65535,q=_.i(T)>>>16,Y=_.i(T)&65535;f[2*y+2*T]+=g*Y,W(f,2*y+2*T),f[2*y+2*T+1]+=v*Y,W(f,2*y+2*T+1),f[2*y+2*T+1]+=g*q,W(f,2*y+2*T+1),f[2*y+2*T+2]+=v*q,W(f,2*y+2*T+2)}for(y=0;y<h;y++)f[y]=f[2*y+1]<<16|f[2*y];for(y=h;y<2*h;y++)f[y]=0;return new a(f,0)};function W(_,h){for(;(_[h]&65535)!=_[h];)_[h+1]+=_[h]>>>16,_[h]&=65535,h++}function K(_,h){this.g=_,this.h=h}function ne(_,h){if(D(h))throw Error("division by zero");if(D(_))return new K(I,I);if(L(_))return h=ne(N(_),h),new K(N(h.g),N(h.h));if(L(h))return h=ne(_,N(h)),new K(N(h.g),h.h);if(30<_.g.length){if(L(_)||L(h))throw Error("slowDivide_ only works with positive integers.");for(var f=b,y=h;0>=y.l(_);)f=le(f),y=le(y);var T=P(f,1),v=P(y,1);for(y=P(y,2),f=P(f,2);!D(y);){var g=v.add(y);0>=g.l(_)&&(T=T.add(f),v=g),y=P(y,1),f=P(f,1)}return h=j(_,T.j(h)),new K(T,h)}for(T=I;0<=_.l(h);){for(f=Math.max(1,Math.floor(_.m()/h.m())),y=Math.ceil(Math.log(f)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),v=p(f),g=v.j(h);L(g)||0<g.l(_);)f-=y,v=p(f),g=v.j(h);D(v)&&(v=b),T=T.add(v),_=j(_,g)}return new K(T,_)}n.A=function(_){return ne(this,_).h},n.and=function(_){for(var h=Math.max(this.g.length,_.g.length),f=[],y=0;y<h;y++)f[y]=this.i(y)&_.i(y);return new a(f,this.h&_.h)},n.or=function(_){for(var h=Math.max(this.g.length,_.g.length),f=[],y=0;y<h;y++)f[y]=this.i(y)|_.i(y);return new a(f,this.h|_.h)},n.xor=function(_){for(var h=Math.max(this.g.length,_.g.length),f=[],y=0;y<h;y++)f[y]=this.i(y)^_.i(y);return new a(f,this.h^_.h)};function le(_){for(var h=_.g.length+1,f=[],y=0;y<h;y++)f[y]=_.i(y)<<1|_.i(y-1)>>>31;return new a(f,_.h)}function P(_,h){var f=h>>5;h%=32;for(var y=_.g.length-f,T=[],v=0;v<y;v++)T[v]=0<h?_.i(v+f)>>>h|_.i(v+f+1)<<32-h:_.i(v+f);return new a(T,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,bl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=p,a.fromString=E,yt=a}).apply(typeof ec<"u"?ec:typeof self<"u"?self:typeof window<"u"?window:{});var Sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rl,Un,Sl,Mr,Ri,Cl,Pl,kl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,u){return i==Array.prototype||i==Object.prototype||(i[c]=u.value),i};function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sr=="object"&&Sr];for(var c=0;c<i.length;++c){var u=i[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function s(i,c){if(c)e:{var u=r;i=i.split(".");for(var m=0;m<i.length-1;m++){var w=i[m];if(!(w in u))break e;u=u[w]}i=i[i.length-1],m=u[i],c=c(m),c!=m&&c!=null&&e(u,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var u=0,m=!1,w={next:function(){if(!m&&u<i.length){var A=u++;return{value:c(A,i[A]),done:!1}}return m=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function d(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function p(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function E(i,c,u){return i.call.apply(i.bind,arguments)}function I(i,c,u){if(!i)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,m),i.apply(c,w)}}return function(){return i.apply(c,arguments)}}function b(i,c,u){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:I,b.apply(null,arguments)}function S(i,c){var u=Array.prototype.slice.call(arguments,1);return function(){var m=u.slice();return m.push.apply(m,arguments),i.apply(this,m)}}function D(i,c){function u(){}u.prototype=c.prototype,i.aa=c.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(m,w,A){for(var k=Array(arguments.length-2),X=2;X<arguments.length;X++)k[X-2]=arguments[X];return c.prototype[w].apply(m,k)}}function L(i){const c=i.length;if(0<c){const u=Array(c);for(let m=0;m<c;m++)u[m]=i[m];return u}return[]}function N(i,c){for(let u=1;u<arguments.length;u++){const m=arguments[u];if(d(m)){const w=i.length||0,A=m.length||0;i.length=w+A;for(let k=0;k<A;k++)i[w+k]=m[k]}else i.push(m)}}class j{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function W(i){return/^[\s\xa0]*$/.test(i)}function K(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function ne(i){return ne[" "](i),i}ne[" "]=function(){};var le=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function P(i,c,u){for(const m in i)c.call(u,i[m],m,i)}function _(i,c){for(const u in i)c.call(void 0,i[u],u,i)}function h(i){const c={};for(const u in i)c[u]=i[u];return c}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,c){let u,m;for(let w=1;w<arguments.length;w++){m=arguments[w];for(u in m)i[u]=m[u];for(let A=0;A<f.length;A++)u=f[A],Object.prototype.hasOwnProperty.call(m,u)&&(i[u]=m[u])}}function T(i){var c=1;i=i.split(":");const u=[];for(;0<c&&i.length;)u.push(i.shift()),c--;return i.length&&u.push(i.join(":")),u}function v(i){l.setTimeout(()=>{throw i},0)}function g(){var i=Ms;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class q{constructor(){this.h=this.g=null}add(c,u){const m=Y.get();m.set(c,u),this.h?this.h.next=m:this.g=m,this.h=m}}var Y=new j(()=>new Os,i=>i.reset());class Os{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Tn,In=!1,Ms=new q,qo=()=>{const i=l.Promise.resolve(void 0);Tn=()=>{i.then(Ch)}};var Ch=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(u){v(u)}var c=Y;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}In=!1};function st(){this.s=this.s,this.C=this.C}st.prototype.s=!1,st.prototype.ma=function(){this.s||(this.s=!0,this.N())},st.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var Ph=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return i}();function wn(i,c){if(ve.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,m=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if(le){e:{try{ne(c.nodeName);var w=!0;break e}catch{}w=!1}w||(c=null)}}else u=="mouseover"?c=i.fromElement:u=="mouseout"&&(c=i.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:kh[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&wn.aa.h.call(this)}}D(wn,ve);var kh={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var cr="closure_listenable_"+(1e6*Math.random()|0),Nh=0;function Dh(i,c,u,m,w){this.listener=i,this.proxy=null,this.src=c,this.type=u,this.capture=!!m,this.ha=w,this.key=++Nh,this.da=this.fa=!1}function lr(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function ur(i){this.src=i,this.g={},this.h=0}ur.prototype.add=function(i,c,u,m,w){var A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);var k=Us(i,c,m,w);return-1<k?(c=i[k],u||(c.fa=!1)):(c=new Dh(c,this.src,A,!!m,w),c.fa=u,i.push(c)),c};function xs(i,c){var u=c.type;if(u in i.g){var m=i.g[u],w=Array.prototype.indexOf.call(m,c,void 0),A;(A=0<=w)&&Array.prototype.splice.call(m,w,1),A&&(lr(c),i.g[u].length==0&&(delete i.g[u],i.h--))}}function Us(i,c,u,m){for(var w=0;w<i.length;++w){var A=i[w];if(!A.da&&A.listener==c&&A.capture==!!u&&A.ha==m)return w}return-1}var Fs="closure_lm_"+(1e6*Math.random()|0),Bs={};function jo(i,c,u,m,w){if(Array.isArray(c)){for(var A=0;A<c.length;A++)jo(i,c[A],u,m,w);return null}return u=Ho(u),i&&i[cr]?i.K(c,u,p(m)?!!m.capture:!1,w):Lh(i,c,u,!1,m,w)}function Lh(i,c,u,m,w,A){if(!c)throw Error("Invalid event type");var k=p(w)?!!w.capture:!!w,X=js(i);if(X||(i[Fs]=X=new ur(i)),u=X.add(c,u,m,k,A),u.proxy)return u;if(m=Vh(),u.proxy=m,m.src=i,m.listener=u,i.addEventListener)Ph||(w=k),w===void 0&&(w=!1),i.addEventListener(c.toString(),m,w);else if(i.attachEvent)i.attachEvent(zo(c.toString()),m);else if(i.addListener&&i.removeListener)i.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Vh(){function i(u){return c.call(i.src,i.listener,u)}const c=Oh;return i}function $o(i,c,u,m,w){if(Array.isArray(c))for(var A=0;A<c.length;A++)$o(i,c[A],u,m,w);else m=p(m)?!!m.capture:!!m,u=Ho(u),i&&i[cr]?(i=i.i,c=String(c).toString(),c in i.g&&(A=i.g[c],u=Us(A,u,m,w),-1<u&&(lr(A[u]),Array.prototype.splice.call(A,u,1),A.length==0&&(delete i.g[c],i.h--)))):i&&(i=js(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Us(c,u,m,w)),(u=-1<i?c[i]:null)&&qs(u))}function qs(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[cr])xs(c.i,i);else{var u=i.type,m=i.proxy;c.removeEventListener?c.removeEventListener(u,m,i.capture):c.detachEvent?c.detachEvent(zo(u),m):c.addListener&&c.removeListener&&c.removeListener(m),(u=js(c))?(xs(u,i),u.h==0&&(u.src=null,c[Fs]=null)):lr(i)}}}function zo(i){return i in Bs?Bs[i]:Bs[i]="on"+i}function Oh(i,c){if(i.da)i=!0;else{c=new wn(c,this);var u=i.listener,m=i.ha||i.src;i.fa&&qs(i),i=u.call(m,c)}return i}function js(i){return i=i[Fs],i instanceof ur?i:null}var $s="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ho(i){return typeof i=="function"?i:(i[$s]||(i[$s]=function(c){return i.handleEvent(c)}),i[$s])}function Ee(){st.call(this),this.i=new ur(this),this.M=this,this.F=null}D(Ee,st),Ee.prototype[cr]=!0,Ee.prototype.removeEventListener=function(i,c,u,m){$o(this,i,c,u,m)};function Se(i,c){var u,m=i.F;if(m)for(u=[];m;m=m.F)u.push(m);if(i=i.M,m=c.type||c,typeof c=="string")c=new ve(c,i);else if(c instanceof ve)c.target=c.target||i;else{var w=c;c=new ve(m,i),y(c,w)}if(w=!0,u)for(var A=u.length-1;0<=A;A--){var k=c.g=u[A];w=hr(k,m,!0,c)&&w}if(k=c.g=i,w=hr(k,m,!0,c)&&w,w=hr(k,m,!1,c)&&w,u)for(A=0;A<u.length;A++)k=c.g=u[A],w=hr(k,m,!1,c)&&w}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var u=i.g[c],m=0;m<u.length;m++)lr(u[m]);delete i.g[c],i.h--}}this.F=null},Ee.prototype.K=function(i,c,u,m){return this.i.add(String(i),c,!1,u,m)},Ee.prototype.L=function(i,c,u,m){return this.i.add(String(i),c,!0,u,m)};function hr(i,c,u,m){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,A=0;A<c.length;++A){var k=c[A];if(k&&!k.da&&k.capture==u){var X=k.listener,me=k.ha||k.src;k.fa&&xs(i.i,k),w=X.call(me,m)!==!1&&w}}return w&&!m.defaultPrevented}function Go(i,c,u){if(typeof i=="function")u&&(i=b(i,u));else if(i&&typeof i.handleEvent=="function")i=b(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(i,c||0)}function Wo(i){i.g=Go(()=>{i.g=null,i.i&&(i.i=!1,Wo(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Mh extends st{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Wo(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function An(i){st.call(this),this.h=i,this.g={}}D(An,st);var Ko=[];function Qo(i){P(i.g,function(c,u){this.g.hasOwnProperty(u)&&qs(c)},i),i.g={}}An.prototype.N=function(){An.aa.N.call(this),Qo(this)},An.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zs=l.JSON.stringify,xh=l.JSON.parse,Uh=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function Hs(){}Hs.prototype.h=null;function Jo(i){return i.h||(i.h=i.i())}function Xo(){}var bn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gs(){ve.call(this,"d")}D(Gs,ve);function Ws(){ve.call(this,"c")}D(Ws,ve);var Ct={},Yo=null;function dr(){return Yo=Yo||new Ee}Ct.La="serverreachability";function Zo(i){ve.call(this,Ct.La,i)}D(Zo,ve);function Rn(i){const c=dr();Se(c,new Zo(c))}Ct.STAT_EVENT="statevent";function ea(i,c){ve.call(this,Ct.STAT_EVENT,i),this.stat=c}D(ea,ve);function Ce(i){const c=dr();Se(c,new ea(c,i))}Ct.Ma="timingevent";function ta(i,c){ve.call(this,Ct.Ma,i),this.size=c}D(ta,ve);function Sn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},c)}function Cn(){this.g=!0}Cn.prototype.xa=function(){this.g=!1};function Fh(i,c,u,m,w,A){i.info(function(){if(i.g)if(A)for(var k="",X=A.split("&"),me=0;me<X.length;me++){var Q=X[me].split("=");if(1<Q.length){var Te=Q[0];Q=Q[1];var Ie=Te.split("_");k=2<=Ie.length&&Ie[1]=="type"?k+(Te+"="+Q+"&"):k+(Te+"=redacted&")}}else k=null;else k=A;return"XMLHTTP REQ ("+m+") [attempt "+w+"]: "+c+`
`+u+`
`+k})}function Bh(i,c,u,m,w,A,k){i.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+w+"]: "+c+`
`+u+`
`+A+" "+k})}function zt(i,c,u,m){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+jh(i,u)+(m?" "+m:"")})}function qh(i,c){i.info(function(){return"TIMEOUT: "+c})}Cn.prototype.info=function(){};function jh(i,c){if(!i.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var m=u[i];if(!(2>m.length)){var w=m[1];if(Array.isArray(w)&&!(1>w.length)){var A=w[0];if(A!="noop"&&A!="stop"&&A!="close")for(var k=1;k<w.length;k++)w[k]=""}}}}return zs(u)}catch{return c}}var fr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},na={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ks;function pr(){}D(pr,Hs),pr.prototype.g=function(){return new XMLHttpRequest},pr.prototype.i=function(){return{}},Ks=new pr;function it(i,c,u,m){this.j=i,this.i=c,this.l=u,this.R=m||1,this.U=new An(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ra}function ra(){this.i=null,this.g="",this.h=!1}var sa={},Qs={};function Js(i,c,u){i.L=1,i.v=yr(We(c)),i.m=u,i.P=!0,ia(i,null)}function ia(i,c){i.F=Date.now(),mr(i),i.A=We(i.v);var u=i.A,m=i.R;Array.isArray(m)||(m=[String(m)]),va(u.i,"t",m),i.C=0,u=i.j.J,i.h=new ra,i.g=xa(i.j,u?c:null,!i.m),0<i.O&&(i.M=new Mh(b(i.Y,i,i.g),i.O)),c=i.U,u=i.g,m=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(Ko[0]=w.toString()),w=Ko);for(var A=0;A<w.length;A++){var k=jo(u,w[A],m||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=i.H?h(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),Rn(),Fh(i.i,i.u,i.A,i.l,i.R,i.m)}it.prototype.ca=function(i){i=i.target;const c=this.M;c&&Ke(i)==3?c.j():this.Y(i)},it.prototype.Y=function(i){try{if(i==this.g)e:{const Ie=Ke(this.g);var c=this.g.Ba();const Wt=this.g.Z();if(!(3>Ie)&&(Ie!=3||this.g&&(this.h.h||this.g.oa()||Ra(this.g)))){this.J||Ie!=4||c==7||(c==8||0>=Wt?Rn(3):Rn(2)),Xs(this);var u=this.g.Z();this.X=u;t:if(oa(this)){var m=Ra(this.g);i="";var w=m.length,A=Ke(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pt(this),Pn(this);var k="";break t}this.h.i=new l.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,i+=this.h.i.decode(m[c],{stream:!(A&&c==w-1)});m.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=u==200,Bh(this.i,this.u,this.A,this.l,this.R,Ie,u),this.o){if(this.T&&!this.K){t:{if(this.g){var X,me=this.g;if((X=me.g?me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(X)){var Q=X;break t}}Q=null}if(u=Q)zt(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ys(this,u);else{this.o=!1,this.s=3,Ce(12),Pt(this),Pn(this);break e}}if(this.P){u=!0;let Ve;for(;!this.J&&this.C<k.length;)if(Ve=$h(this,k),Ve==Qs){Ie==4&&(this.s=4,Ce(14),u=!1),zt(this.i,this.l,null,"[Incomplete Response]");break}else if(Ve==sa){this.s=4,Ce(15),zt(this.i,this.l,k,"[Invalid Chunk]"),u=!1;break}else zt(this.i,this.l,Ve,null),Ys(this,Ve);if(oa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||k.length!=0||this.h.h||(this.s=1,Ce(16),u=!1),this.o=this.o&&u,!u)zt(this.i,this.l,k,"[Invalid Chunked Response]"),Pt(this),Pn(this);else if(0<k.length&&!this.W){this.W=!0;var Te=this.j;Te.g==this&&Te.ba&&!Te.M&&(Te.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),si(Te),Te.M=!0,Ce(11))}}else zt(this.i,this.l,k,null),Ys(this,k);Ie==4&&Pt(this),this.o&&!this.J&&(Ie==4?La(this.j,this):(this.o=!1,mr(this)))}else od(this.g),u==400&&0<k.indexOf("Unknown SID")?(this.s=3,Ce(12)):(this.s=0,Ce(13)),Pt(this),Pn(this)}}}catch{}finally{}};function oa(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function $h(i,c){var u=i.C,m=c.indexOf(`
`,u);return m==-1?Qs:(u=Number(c.substring(u,m)),isNaN(u)?sa:(m+=1,m+u>c.length?Qs:(c=c.slice(m,m+u),i.C=m+u,c)))}it.prototype.cancel=function(){this.J=!0,Pt(this)};function mr(i){i.S=Date.now()+i.I,aa(i,i.I)}function aa(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Sn(b(i.ba,i),c)}function Xs(i){i.B&&(l.clearTimeout(i.B),i.B=null)}it.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(qh(this.i,this.A),this.L!=2&&(Rn(),Ce(17)),Pt(this),this.s=2,Pn(this)):aa(this,this.S-i)};function Pn(i){i.j.G==0||i.J||La(i.j,i)}function Pt(i){Xs(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,Qo(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function Ys(i,c){try{var u=i.j;if(u.G!=0&&(u.g==i||Zs(u.h,i))){if(!i.K&&Zs(u.h,i)&&u.G==3){try{var m=u.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var w=m;if(w[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)Ar(u),Ir(u);else break e;ri(u),Ce(18)}}else u.za=w[1],0<u.za-u.T&&37500>w[2]&&u.F&&u.v==0&&!u.C&&(u.C=Sn(b(u.Za,u),6e3));if(1>=ua(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Nt(u,11)}else if((i.K||u.g==i)&&Ar(u),!W(c))for(w=u.Da.g.parse(c),c=0;c<w.length;c++){let Q=w[c];if(u.T=Q[0],Q=Q[1],u.G==2)if(Q[0]=="c"){u.K=Q[1],u.ia=Q[2];const Te=Q[3];Te!=null&&(u.la=Te,u.j.info("VER="+u.la));const Ie=Q[4];Ie!=null&&(u.Aa=Ie,u.j.info("SVER="+u.Aa));const Wt=Q[5];Wt!=null&&typeof Wt=="number"&&0<Wt&&(m=1.5*Wt,u.L=m,u.j.info("backChannelRequestTimeoutMs_="+m)),m=u;const Ve=i.g;if(Ve){const Rr=Ve.g?Ve.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rr){var A=m.h;A.g||Rr.indexOf("spdy")==-1&&Rr.indexOf("quic")==-1&&Rr.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(ei(A,A.h),A.h=null))}if(m.D){const ii=Ve.g?Ve.g.getResponseHeader("X-HTTP-Session-Id"):null;ii&&(m.ya=ii,Z(m.I,m.D,ii))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),m=u;var k=i;if(m.qa=Ma(m,m.J?m.ia:null,m.W),k.K){ha(m.h,k);var X=k,me=m.L;me&&(X.I=me),X.B&&(Xs(X),mr(X)),m.g=k}else Na(m);0<u.i.length&&wr(u)}else Q[0]!="stop"&&Q[0]!="close"||Nt(u,7);else u.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Nt(u,7):ni(u):Q[0]!="noop"&&u.l&&u.l.ta(Q),u.v=0)}}Rn(4)}catch{}}var zh=class{constructor(i,c){this.g=i,this.map=c}};function ca(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function la(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ua(i){return i.h?1:i.g?i.g.size:0}function Zs(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function ei(i,c){i.g?i.g.add(c):i.h=c}function ha(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}ca.prototype.cancel=function(){if(this.i=da(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function da(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const u of i.g.values())c=c.concat(u.D);return c}return L(i.i)}function Hh(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(d(i)){for(var c=[],u=i.length,m=0;m<u;m++)c.push(i[m]);return c}c=[],u=0;for(m in i)c[u++]=i[m];return c}function Gh(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(d(i)||typeof i=="string"){var c=[];i=i.length;for(var u=0;u<i;u++)c.push(u);return c}c=[],u=0;for(const m in i)c[u++]=m;return c}}}function fa(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(d(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var u=Gh(i),m=Hh(i),w=m.length,A=0;A<w;A++)c.call(void 0,m[A],u&&u[A],i)}var pa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wh(i,c){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var m=i[u].indexOf("="),w=null;if(0<=m){var A=i[u].substring(0,m);w=i[u].substring(m+1)}else A=i[u];c(A,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function kt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof kt){this.h=i.h,gr(this,i.j),this.o=i.o,this.g=i.g,_r(this,i.s),this.l=i.l;var c=i.i,u=new Dn;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),ma(this,u),this.m=i.m}else i&&(c=String(i).match(pa))?(this.h=!1,gr(this,c[1]||"",!0),this.o=kn(c[2]||""),this.g=kn(c[3]||"",!0),_r(this,c[4]),this.l=kn(c[5]||"",!0),ma(this,c[6]||"",!0),this.m=kn(c[7]||"")):(this.h=!1,this.i=new Dn(null,this.h))}kt.prototype.toString=function(){var i=[],c=this.j;c&&i.push(Nn(c,ga,!0),":");var u=this.g;return(u||c=="file")&&(i.push("//"),(c=this.o)&&i.push(Nn(c,ga,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Nn(u,u.charAt(0)=="/"?Jh:Qh,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Nn(u,Yh)),i.join("")};function We(i){return new kt(i)}function gr(i,c,u){i.j=u?kn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function _r(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function ma(i,c,u){c instanceof Dn?(i.i=c,Zh(i.i,i.h)):(u||(c=Nn(c,Xh)),i.i=new Dn(c,i.h))}function Z(i,c,u){i.i.set(c,u)}function yr(i){return Z(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function kn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Nn(i,c,u){return typeof i=="string"?(i=encodeURI(i).replace(c,Kh),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Kh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ga=/[#\/\?@]/g,Qh=/[#\?:]/g,Jh=/[#\?]/g,Xh=/[#\?@]/g,Yh=/#/g;function Dn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function ot(i){i.g||(i.g=new Map,i.h=0,i.i&&Wh(i.i,function(c,u){i.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=Dn.prototype,n.add=function(i,c){ot(this),this.i=null,i=Ht(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(c),this.h+=1,this};function _a(i,c){ot(i),c=Ht(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function ya(i,c){return ot(i),c=Ht(i,c),i.g.has(c)}n.forEach=function(i,c){ot(this),this.g.forEach(function(u,m){u.forEach(function(w){i.call(c,w,m,this)},this)},this)},n.na=function(){ot(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let m=0;m<c.length;m++){const w=i[m];for(let A=0;A<w.length;A++)u.push(c[m])}return u},n.V=function(i){ot(this);let c=[];if(typeof i=="string")ya(this,i)&&(c=c.concat(this.g.get(Ht(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)c=c.concat(i[u])}return c},n.set=function(i,c){return ot(this),this.i=null,i=Ht(this,i),ya(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function va(i,c,u){_a(i,c),0<u.length&&(i.i=null,i.g.set(Ht(i,c),L(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var m=c[u];const A=encodeURIComponent(String(m)),k=this.V(m);for(m=0;m<k.length;m++){var w=A;k[m]!==""&&(w+="="+encodeURIComponent(String(k[m]))),i.push(w)}}return this.i=i.join("&")};function Ht(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function Zh(i,c){c&&!i.j&&(ot(i),i.i=null,i.g.forEach(function(u,m){var w=m.toLowerCase();m!=w&&(_a(this,m),va(this,w,u))},i)),i.j=c}function ed(i,c){const u=new Cn;if(l.Image){const m=new Image;m.onload=S(at,u,"TestLoadImage: loaded",!0,c,m),m.onerror=S(at,u,"TestLoadImage: error",!1,c,m),m.onabort=S(at,u,"TestLoadImage: abort",!1,c,m),m.ontimeout=S(at,u,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=i}else c(!1)}function td(i,c){const u=new Cn,m=new AbortController,w=setTimeout(()=>{m.abort(),at(u,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:m.signal}).then(A=>{clearTimeout(w),A.ok?at(u,"TestPingServer: ok",!0,c):at(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),at(u,"TestPingServer: error",!1,c)})}function at(i,c,u,m,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),m(u)}catch{}}function nd(){this.g=new Uh}function rd(i,c,u){const m=u||"";try{fa(i,function(w,A){let k=w;p(w)&&(k=zs(w)),c.push(m+A+"="+encodeURIComponent(k))})}catch(w){throw c.push(m+"type="+encodeURIComponent("_badmap")),w}}function vr(i){this.l=i.Ub||null,this.j=i.eb||!1}D(vr,Hs),vr.prototype.g=function(){return new Er(this.l,this.j)},vr.prototype.i=function(i){return function(){return i}}({});function Er(i,c){Ee.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Er,Ee),n=Er.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,Vn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ln(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ea(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ea(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Ln(this):Vn(this),this.readyState==3&&Ea(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Ln(this))},n.Qa=function(i){this.g&&(this.response=i,Ln(this))},n.ga=function(){this.g&&Ln(this)};function Ln(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Vn(i)}n.setRequestHeader=function(i,c){this.u.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=c.next();return i.join(`\r
`)};function Vn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Er.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ta(i){let c="";return P(i,function(u,m){c+=m,c+=":",c+=u,c+=`\r
`}),c}function ti(i,c,u){e:{for(m in u){var m=!1;break e}m=!0}m||(u=Ta(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):Z(i,c,u))}function se(i){Ee.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(se,Ee);var sd=/^https?$/i,id=["POST","PUT"];n=se.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,c,u,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ks.g(),this.v=this.o?Jo(this.o):Jo(Ks),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(A){Ia(this,A);return}if(i=u||"",u=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var w in m)u.set(w,m[w]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const A of m.keys())u.set(A,m.get(A));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(u.keys()).find(A=>A.toLowerCase()=="content-type"),w=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(id,c,void 0))||m||w||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,k]of u)this.g.setRequestHeader(A,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ba(this),this.u=!0,this.g.send(i),this.u=!1}catch(A){Ia(this,A)}};function Ia(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,wa(i),Tr(i)}function wa(i){i.A||(i.A=!0,Se(i,"complete"),Se(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Se(this,"complete"),Se(this,"abort"),Tr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tr(this,!0)),se.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Aa(this):this.bb())},n.bb=function(){Aa(this)};function Aa(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ke(i)!=4||i.Z()!=2)){if(i.u&&Ke(i)==4)Go(i.Ea,0,i);else if(Se(i,"readystatechange"),Ke(i)==4){i.h=!1;try{const k=i.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var m;if(m=k===0){var w=String(i.D).match(pa)[1]||null;!w&&l.self&&l.self.location&&(w=l.self.location.protocol.slice(0,-1)),m=!sd.test(w?w.toLowerCase():"")}u=m}if(u)Se(i,"complete"),Se(i,"success");else{i.m=6;try{var A=2<Ke(i)?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.Z()+"]",wa(i)}}finally{Tr(i)}}}}function Tr(i,c){if(i.g){ba(i);const u=i.g,m=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||Se(i,"ready");try{u.onreadystatechange=m}catch{}}}function ba(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ke(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ke(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),xh(c)}};function Ra(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function od(i){const c={};i=(i.g&&2<=Ke(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<i.length;m++){if(W(i[m]))continue;var u=T(i[m]);const w=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const A=c[w]||[];c[w]=A,A.push(u)}_(c,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function On(i,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||c}function Sa(i){this.Aa=0,this.i=[],this.j=new Cn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=On("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=On("baseRetryDelayMs",5e3,i),this.cb=On("retryDelaySeedMs",1e4,i),this.Wa=On("forwardChannelMaxRetries",2,i),this.wa=On("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new ca(i&&i.concurrentRequestLimit),this.Da=new nd,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Sa.prototype,n.la=8,n.G=1,n.connect=function(i,c,u,m){Ce(0),this.W=i,this.H=c||{},u&&m!==void 0&&(this.H.OSID=u,this.H.OAID=m),this.F=this.X,this.I=Ma(this,null,this.W),wr(this)};function ni(i){if(Ca(i),i.G==3){var c=i.U++,u=We(i.I);if(Z(u,"SID",i.K),Z(u,"RID",c),Z(u,"TYPE","terminate"),Mn(i,u),c=new it(i,i.j,c),c.L=2,c.v=yr(We(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=xa(c.j,null),c.g.ea(c.v)),c.F=Date.now(),mr(c)}Oa(i)}function Ir(i){i.g&&(si(i),i.g.cancel(),i.g=null)}function Ca(i){Ir(i),i.u&&(l.clearTimeout(i.u),i.u=null),Ar(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function wr(i){if(!la(i.h)&&!i.s){i.s=!0;var c=i.Ga;Tn||qo(),In||(Tn(),In=!0),Ms.add(c,i),i.B=0}}function ad(i,c){return ua(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Sn(b(i.Ga,i,c),Va(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new it(this,this.j,i);let A=this.o;if(this.S&&(A?(A=h(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(w.H=A,A=null),this.P)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var m=this.i[u];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=ka(this,w,c),u=We(this.I),Z(u,"RID",i),Z(u,"CVER",22),this.D&&Z(u,"X-HTTP-Session-Id",this.D),Mn(this,u),A&&(this.O?c="headers="+encodeURIComponent(String(Ta(A)))+"&"+c:this.m&&ti(u,this.m,A)),ei(this.h,w),this.Ua&&Z(u,"TYPE","init"),this.P?(Z(u,"$req",c),Z(u,"SID","null"),w.T=!0,Js(w,u,null)):Js(w,u,c),this.G=2}}else this.G==3&&(i?Pa(this,i):this.i.length==0||la(this.h)||Pa(this))};function Pa(i,c){var u;c?u=c.l:u=i.U++;const m=We(i.I);Z(m,"SID",i.K),Z(m,"RID",u),Z(m,"AID",i.T),Mn(i,m),i.m&&i.o&&ti(m,i.m,i.o),u=new it(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),c&&(i.i=c.D.concat(i.i)),c=ka(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ei(i.h,u),Js(u,m,c)}function Mn(i,c){i.H&&P(i.H,function(u,m){Z(c,m,u)}),i.l&&fa({},function(u,m){Z(c,m,u)})}function ka(i,c,u){u=Math.min(i.i.length,u);var m=i.l?b(i.l.Na,i.l,i):null;e:{var w=i.i;let A=-1;for(;;){const k=["count="+u];A==-1?0<u?(A=w[0].g,k.push("ofs="+A)):A=0:k.push("ofs="+A);let X=!0;for(let me=0;me<u;me++){let Q=w[me].g;const Te=w[me].map;if(Q-=A,0>Q)A=Math.max(0,w[me].g-100),X=!1;else try{rd(Te,k,"req"+Q+"_")}catch{m&&m(Te)}}if(X){m=k.join("&");break e}}}return i=i.i.splice(0,u),c.D=i,m}function Na(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;Tn||qo(),In||(Tn(),In=!0),Ms.add(c,i),i.v=0}}function ri(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Sn(b(i.Fa,i),Va(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Da(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Sn(b(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ce(10),Ir(this),Da(this))};function si(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function Da(i){i.g=new it(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=We(i.qa);Z(c,"RID","rpc"),Z(c,"SID",i.K),Z(c,"AID",i.T),Z(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&Z(c,"TO",i.ja),Z(c,"TYPE","xmlhttp"),Mn(i,c),i.m&&i.o&&ti(c,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=yr(We(c)),u.m=null,u.P=!0,ia(u,i)}n.Za=function(){this.C!=null&&(this.C=null,Ir(this),ri(this),Ce(19))};function Ar(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function La(i,c){var u=null;if(i.g==c){Ar(i),si(i),i.g=null;var m=2}else if(Zs(i.h,c))u=c.D,ha(i.h,c),m=1;else return;if(i.G!=0){if(c.o)if(m==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var w=i.B;m=dr(),Se(m,new ta(m,u)),wr(i)}else Na(i);else if(w=c.s,w==3||w==0&&0<c.X||!(m==1&&ad(i,c)||m==2&&ri(i)))switch(u&&0<u.length&&(c=i.h,c.i=c.i.concat(u)),w){case 1:Nt(i,5);break;case 4:Nt(i,10);break;case 3:Nt(i,6);break;default:Nt(i,2)}}}function Va(i,c){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*c}function Nt(i,c){if(i.j.info("Error code "+c),c==2){var u=b(i.fb,i),m=i.Xa;const w=!m;m=new kt(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||gr(m,"https"),yr(m),w?ed(m.toString(),u):td(m.toString(),u)}else Ce(2);i.G=0,i.l&&i.l.sa(c),Oa(i),Ca(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function Oa(i){if(i.G=0,i.ka=[],i.l){const c=da(i.h);(c.length!=0||i.i.length!=0)&&(N(i.ka,c),N(i.ka,i.i),i.h.i.length=0,L(i.i),i.i.length=0),i.l.ra()}}function Ma(i,c,u){var m=u instanceof kt?We(u):new kt(u);if(m.g!="")c&&(m.g=c+"."+m.g),_r(m,m.s);else{var w=l.location;m=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var A=new kt(null);m&&gr(A,m),c&&(A.g=c),w&&_r(A,w),u&&(A.l=u),m=A}return u=i.D,c=i.ya,u&&c&&Z(m,u,c),Z(m,"VER",i.la),Mn(i,m),m}function xa(i,c,u){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new se(new vr({eb:u})):new se(i.pa),c.Ha(i.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ua(){}n=Ua.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function br(){}br.prototype.g=function(i,c){return new ke(i,c)};function ke(i,c){Ee.call(this),this.g=new Sa(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!W(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!W(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Gt(this)}D(ke,Ee),ke.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ke.prototype.close=function(){ni(this.g)},ke.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=zs(i),i=u);c.i.push(new zh(c.Ya++,i)),c.G==3&&wr(c)},ke.prototype.N=function(){this.g.l=null,delete this.j,ni(this.g),delete this.g,ke.aa.N.call(this)};function Fa(i){Gs.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const u in c){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}D(Fa,Gs);function Ba(){Ws.call(this),this.status=1}D(Ba,Ws);function Gt(i){this.g=i}D(Gt,Ua),Gt.prototype.ua=function(){Se(this.g,"a")},Gt.prototype.ta=function(i){Se(this.g,new Fa(i))},Gt.prototype.sa=function(i){Se(this.g,new Ba)},Gt.prototype.ra=function(){Se(this.g,"b")},br.prototype.createWebChannel=br.prototype.g,ke.prototype.send=ke.prototype.o,ke.prototype.open=ke.prototype.m,ke.prototype.close=ke.prototype.close,kl=function(){return new br},Pl=function(){return dr()},Cl=Ct,Ri={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fr.NO_ERROR=0,fr.TIMEOUT=8,fr.HTTP_ERROR=6,Mr=fr,na.COMPLETE="complete",Sl=na,Xo.EventType=bn,bn.OPEN="a",bn.CLOSE="b",bn.ERROR="c",bn.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,Un=Xo,se.prototype.listenOnce=se.prototype.L,se.prototype.getLastError=se.prototype.Ka,se.prototype.getLastErrorCode=se.prototype.Ba,se.prototype.getStatus=se.prototype.Z,se.prototype.getResponseJson=se.prototype.Oa,se.prototype.getResponseText=se.prototype.oa,se.prototype.send=se.prototype.ea,se.prototype.setWithCredentials=se.prototype.Ha,Rl=se}).apply(typeof Sr<"u"?Sr:typeof self<"u"?self:typeof window<"u"?window:{});const tc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ae=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gn="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=new Xi("@firebase/firestore");function Kt(){return xt.logLevel}function V(n,...e){if(xt.logLevel<=$.DEBUG){const t=e.map(eo);xt.debug(`Firestore (${gn}): ${n}`,...t)}}function et(n,...e){if(xt.logLevel<=$.ERROR){const t=e.map(eo);xt.error(`Firestore (${gn}): ${n}`,...t)}}function on(n,...e){if(xt.logLevel<=$.WARN){const t=e.map(eo);xt.warn(`Firestore (${gn}): ${n}`,...t)}}function eo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n="Unexpected state"){const e=`FIRESTORE (${gn}) INTERNAL ASSERTION FAILED: `+n;throw et(e),new Error(e)}function J(n,e){n||x()}function B(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends rt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ae.UNAUTHENTICATED))}shutdown(){}}class pp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class mp{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0);let r=this.i;const s=d=>this.i!==r?(r=this.i,t(d)):Promise.resolve();let o=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new vt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const d=o;e.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},l=d=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>l(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new vt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new Nl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new Ae(e)}}class gp{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class _p{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new gp(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vp{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){J(this.o===void 0);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string"),this.R=t.token,new yp(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Ep(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%e.length))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function an(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new de(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new de(0,0))}static max(){return new F(new de(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(),r===void 0?r=e.length-t:r>e.length-t&&x(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Fe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fe?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=Fe.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=Fe.isNumericId(e),s=Fe.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Fe.extractNumericId(e).compare(Fe.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yt.fromString(e.substring(4,e.length-2))}}class te extends Fe{construct(e,t,r){return new te(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new te(t)}static emptyPath(){return new te([])}}const Tp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends Fe{construct(e,t,r){return new _e(e,t,r)}static isValidIdentifier(e){return Tp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _e(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=d,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(t)}static emptyPath(){return new _e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(te.fromString(e))}static fromName(e){return new M(te.fromString(e).popFirst(5))}static empty(){return new M(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new te(e.slice()))}}function Ip(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new de(t+1,0):new de(t,r));return new wt(s,M.empty(),e)}function wp(n){return new wt(n.readTime,n.key,-1)}class wt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new wt(F.min(),M.empty(),-1)}static max(){return new wt(F.max(),M.empty(),-1)}}function Ap(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==bp)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,r)=>{t(e)})}static reject(e){return new R((t,r)=>{r(e)})}static waitFor(e){return new R((t,r)=>{let s=0,o=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&t()},d=>r(d))}),a=!0,o===s&&t()})}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next(s=>s?R.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,o)=>{r.push(t.call(this,s,o))}),this.waitFor(r)}static mapArray(e,t){return new R((r,s)=>{const o=e.length,a=new Array(o);let l=0;for(let d=0;d<o;d++){const p=d;t(e[p]).next(E=>{a[p]=E,++l,l===o&&r(a)},E=>s(E))}})}static doWhile(e,t){return new R((r,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):r()};o()})}}function Sp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function yn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}gs.oe=-1;function _s(n){return n==null}function Yr(n){return n===0&&1/n==-1/0}function Cp(n){return typeof n=="number"&&Number.isInteger(n)&&!Yr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=nc(e)),e=kp(n.get(t),e);return nc(e)}function kp(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":t+="";break;case"":t+="";break;default:t+=o}}return t}function nc(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ll(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.comparator=e,this.root=t||ge.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ge.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cr(this.root,e,this.comparator,!0)}}class Cr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ge{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??ge.RED,this.left=s??ge.EMPTY,this.right=o??ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new ge(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const e=this.left.check();if(e!==this.right.check())throw x();return e+(this.isRed()?0:1)}}ge.EMPTY=null,ge.RED=!0,ge.BLACK=!1;ge.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(e,t,r,s,o){return this}insert(e,t,r){return new ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sc(this.data.getIterator())}getIteratorFrom(e){return new sc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class sc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.fields=e,e.sort(_e.comparator)}static empty(){return new xe([])}unionWith(e){let t=new fe(_e.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return an(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Vl("Invalid base64 string: "+o):o}}(e);return new ye(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const Np=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function At(n){if(J(!!n),typeof n=="string"){let e=0;const t=Np.exec(n);if(J(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function bt(n){return typeof n=="string"?ye.fromBase64String(n):ye.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ys(n){const e=n.mapValue.fields.__previous_value__;return to(e)?ys(e):e}function Wn(n){const e=At(n.mapValue.fields.__local_write_time__.timestampValue);return new de(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,t,r,s,o,a,l,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=p}}class Kn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Kn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Kn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?to(n)?4:Vp(n)?9007199254740991:Lp(n)?10:11:x()}function ze(n,e){if(n===e)return!0;const t=Rt(n);if(t!==Rt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Wn(n).isEqual(Wn(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=At(s.timestampValue),l=At(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return bt(s.bytesValue).isEqual(bt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return oe(s.geoPointValue.latitude)===oe(o.geoPointValue.latitude)&&oe(s.geoPointValue.longitude)===oe(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return oe(s.integerValue)===oe(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=oe(s.doubleValue),l=oe(o.doubleValue);return a===l?Yr(a)===Yr(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return an(n.arrayValue.values||[],e.arrayValue.values||[],ze);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(rc(a)!==rc(l))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(l[d]===void 0||!ze(a[d],l[d])))return!1;return!0}(n,e);default:return x()}}function Qn(n,e){return(n.values||[]).find(t=>ze(t,e))!==void 0}function cn(n,e){if(n===e)return 0;const t=Rt(n),r=Rt(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return function(o,a){const l=oe(o.integerValue||o.doubleValue),d=oe(a.integerValue||a.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1}(n,e);case 3:return ic(n.timestampValue,e.timestampValue);case 4:return ic(Wn(n),Wn(e));case 5:return H(n.stringValue,e.stringValue);case 6:return function(o,a){const l=bt(o),d=bt(a);return l.compareTo(d)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const l=o.split("/"),d=a.split("/");for(let p=0;p<l.length&&p<d.length;p++){const E=H(l[p],d[p]);if(E!==0)return E}return H(l.length,d.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const l=H(oe(o.latitude),oe(a.latitude));return l!==0?l:H(oe(o.longitude),oe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return oc(n.arrayValue,e.arrayValue);case 10:return function(o,a){var l,d,p,E;const I=o.fields||{},b=a.fields||{},S=(l=I.value)===null||l===void 0?void 0:l.arrayValue,D=(d=b.value)===null||d===void 0?void 0:d.arrayValue,L=H(((p=S==null?void 0:S.values)===null||p===void 0?void 0:p.length)||0,((E=D==null?void 0:D.values)===null||E===void 0?void 0:E.length)||0);return L!==0?L:oc(S,D)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Pr.mapValue&&a===Pr.mapValue)return 0;if(o===Pr.mapValue)return 1;if(a===Pr.mapValue)return-1;const l=o.fields||{},d=Object.keys(l),p=a.fields||{},E=Object.keys(p);d.sort(),E.sort();for(let I=0;I<d.length&&I<E.length;++I){const b=H(d[I],E[I]);if(b!==0)return b;const S=cn(l[d[I]],p[E[I]]);if(S!==0)return S}return H(d.length,E.length)}(n.mapValue,e.mapValue);default:throw x()}}function ic(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=At(n),r=At(e),s=H(t.seconds,r.seconds);return s!==0?s:H(t.nanos,r.nanos)}function oc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=cn(t[s],r[s]);if(o)return o}return H(t.length,r.length)}function ln(n){return Si(n)}function Si(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=At(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return bt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=Si(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Si(t.fields[a])}`;return s+"}"}(n.mapValue):x()}function xr(n){switch(Rt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ys(n);return e?16+xr(e):16;case 5:return 2*n.stringValue.length;case 6:return bt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+xr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Bt(r.fields,(o,a)=>{s+=o.length+xr(a)}),s}(n.mapValue);default:throw x()}}function Ci(n){return!!n&&"integerValue"in n}function no(n){return!!n&&"arrayValue"in n}function ac(n){return!!n&&"nullValue"in n}function cc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ur(n){return!!n&&"mapValue"in n}function Lp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function qn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Bt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=qn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Vp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ur(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qn(t)}setAll(e){let t=_e.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const d=this.getFieldsMap(t);this.applyChanges(d,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=qn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());Ur(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ur(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Bt(t,(s,o)=>e[s]=o);for(const s of r)delete e[s]}clone(){return new Ne(qn(this.value))}}function Ol(n){const e=[];return Bt(n.fields,(t,r)=>{const s=new _e([t]);if(Ur(r)){const o=Ol(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new xe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t,r,s,o,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new be(e,0,F.min(),F.min(),F.min(),Ne.empty(),0)}static newFoundDocument(e,t,r,s){return new be(e,1,t,F.min(),r,s,0)}static newNoDocument(e,t){return new be(e,2,t,F.min(),F.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new be(e,3,t,F.min(),F.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t){this.position=e,this.inclusive=t}}function lc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),t.key):r=cn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function uc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ze(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t="asc"){this.field=e,this.dir=t}}function Op(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{}class ue extends Ml{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new xp(e,t,r):t==="array-contains"?new Bp(e,r):t==="in"?new qp(e,r):t==="not-in"?new jp(e,r):t==="array-contains-any"?new $p(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Up(e,r):new Fp(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(cn(t,this.value)):t!==null&&Rt(this.value)===Rt(t)&&this.matchesComparison(cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class He extends Ml{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new He(e,t)}matches(e){return xl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function xl(n){return n.op==="and"}function Ul(n){return Mp(n)&&xl(n)}function Mp(n){for(const e of n.filters)if(e instanceof He)return!1;return!0}function Pi(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+ln(n.value);if(Ul(n))return n.filters.map(e=>Pi(e)).join(",");{const e=n.filters.map(t=>Pi(t)).join(",");return`${n.op}(${e})`}}function Fl(n,e){return n instanceof ue?function(r,s){return s instanceof ue&&r.op===s.op&&r.field.isEqual(s.field)&&ze(r.value,s.value)}(n,e):n instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&Fl(a,s.filters[l]),!0):!1}(n,e):void x()}function Bl(n){return n instanceof ue?function(t){return`${t.field.canonicalString()} ${t.op} ${ln(t.value)}`}(n):n instanceof He?function(t){return t.op.toString()+" {"+t.getFilters().map(Bl).join(" ,")+"}"}(n):"Filter"}class xp extends ue{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Up extends ue{constructor(e,t){super(e,"in",t),this.keys=ql("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Fp extends ue{constructor(e,t){super(e,"not-in",t),this.keys=ql("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ql(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class Bp extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return no(t)&&Qn(t.arrayValue,this.value)}}class qp extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qn(this.value.arrayValue,t)}}class jp extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Qn(this.value.arrayValue,t)}}class $p extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!no(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Qn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,t=null,r=[],s=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function hc(n,e=null,t=[],r=[],s=null,o=null,a=null){return new zp(n,e,t,r,s,o,a)}function ro(n){const e=B(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Pi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),_s(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ln(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ln(r)).join(",")),e.ue=t}return e.ue}function so(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Op(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Fl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!uc(n.startAt,e.startAt)&&uc(n.endAt,e.endAt)}function ki(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t=null,r=[],s=[],o=null,a="F",l=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Hp(n,e,t,r,s,o,a,l){return new vs(n,e,t,r,s,o,a,l)}function jl(n){return new vs(n)}function dc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gp(n){return n.collectionGroup!==null}function jn(n){const e=B(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new fe(_e.comparator);return a.filters.forEach(d=>{d.getFlattenedFilters().forEach(p=>{p.isInequality()&&(l=l.add(p.field))})}),l})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new es(o,r))}),t.has(_e.keyField().canonicalString())||e.ce.push(new es(_e.keyField(),r))}return e.ce}function Be(n){const e=B(n);return e.le||(e.le=Wp(e,jn(n))),e.le}function Wp(n,e){if(n.limitType==="F")return hc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new es(s.field,o)});const t=n.endAt?new Zr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Zr(n.startAt.position,n.startAt.inclusive):null;return hc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ni(n,e,t){return new vs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Es(n,e){return so(Be(n),Be(e))&&n.limitType===e.limitType}function $l(n){return`${ro(Be(n))}|lt:${n.limitType}`}function Qt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Bl(s)).join(", ")}]`),_s(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>ln(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>ln(s)).join(",")),`Target(${r})`}(Be(n))}; limitType=${n.limitType})`}function Ts(n,e){return e.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,s){for(const o of jn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,d){const p=lc(a,l,d);return a.inclusive?p<=0:p<0}(r.startAt,jn(r),s)||r.endAt&&!function(a,l,d){const p=lc(a,l,d);return a.inclusive?p>=0:p>0}(r.endAt,jn(r),s))}(n,e)}function Kp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function zl(n){return(e,t)=>{let r=!1;for(const s of jn(n)){const o=Qp(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Qp(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(o,a,l){const d=a.data.field(o),p=l.data.field(o);return d!==null&&p!==null?cn(d,p):x()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Bt(this.inner,(t,r)=>{for(const[s,o]of r)e(s,o)})}isEmpty(){return Ll(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=new re(M.comparator);function tt(){return Jp}const Hl=new re(M.comparator);function Fn(...n){let e=Hl;for(const t of n)e=e.insert(t.key,t);return e}function Gl(n){let e=Hl;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Lt(){return $n()}function Wl(){return $n()}function $n(){return new qt(n=>n.toString(),(n,e)=>n.isEqual(e))}const Xp=new re(M.comparator),Yp=new fe(M.comparator);function z(...n){let e=Yp;for(const t of n)e=e.add(t);return e}const Zp=new fe(H);function em(){return Zp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yr(e)?"-0":e}}function Kl(n){return{integerValue:""+n}}function tm(n,e){return Cp(e)?Kl(e):io(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this._=void 0}}function nm(n,e,t){return n instanceof ts?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&to(o)&&(o=ys(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof Jn?Jl(n,e):n instanceof Xn?Xl(n,e):function(s,o){const a=Ql(s,o),l=fc(a)+fc(s.Pe);return Ci(a)&&Ci(s.Pe)?Kl(l):io(s.serializer,l)}(n,e)}function rm(n,e,t){return n instanceof Jn?Jl(n,e):n instanceof Xn?Xl(n,e):t}function Ql(n,e){return n instanceof ns?function(r){return Ci(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class ts extends Is{}class Jn extends Is{constructor(e){super(),this.elements=e}}function Jl(n,e){const t=Yl(e);for(const r of n.elements)t.some(s=>ze(s,r))||t.push(r);return{arrayValue:{values:t}}}class Xn extends Is{constructor(e){super(),this.elements=e}}function Xl(n,e){let t=Yl(e);for(const r of n.elements)t=t.filter(s=>!ze(s,r));return{arrayValue:{values:t}}}class ns extends Is{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function fc(n){return oe(n.integerValue||n.doubleValue)}function Yl(n){return no(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function sm(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Jn&&s instanceof Jn||r instanceof Xn&&s instanceof Xn?an(r.elements,s.elements,ze):r instanceof ns&&s instanceof ns?ze(r.Pe,s.Pe):r instanceof ts&&s instanceof ts}(n.transform,e.transform)}class im{constructor(e,t){this.version=e,this.transformResults=t}}class qe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qe}static exists(e){return new qe(void 0,e)}static updateTime(e){return new qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ws{}function Zl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new oo(n.key,qe.none()):new tr(n.key,n.data,qe.none());{const t=n.data,r=Ne.empty();let s=new fe(_e.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new jt(n.key,r,new xe(s.toArray()),qe.none())}}function om(n,e,t){n instanceof tr?function(s,o,a){const l=s.value.clone(),d=mc(s.fieldTransforms,o,a.transformResults);l.setAll(d),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof jt?function(s,o,a){if(!Fr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=mc(s.fieldTransforms,o,a.transformResults),d=o.data;d.setAll(eu(s)),d.setAll(l),o.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(n,e,t):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function zn(n,e,t,r){return n instanceof tr?function(o,a,l,d){if(!Fr(o.precondition,a))return l;const p=o.value.clone(),E=gc(o.fieldTransforms,d,a);return p.setAll(E),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),null}(n,e,t,r):n instanceof jt?function(o,a,l,d){if(!Fr(o.precondition,a))return l;const p=gc(o.fieldTransforms,d,a),E=a.data;return E.setAll(eu(o)),E.setAll(p),a.convertToFoundDocument(a.version,E).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,e,t,r):function(o,a,l){return Fr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function am(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=Ql(r.transform,s||null);o!=null&&(t===null&&(t=Ne.empty()),t.set(r.field,o))}return t||null}function pc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&an(r,s,(o,a)=>sm(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class tr extends ws{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class jt extends ws{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function eu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function mc(n,e,t){const r=new Map;J(n.length===t.length);for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,l=e.data.field(o.field);r.set(o.field,rm(a,l,t[s]))}return r}function gc(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,nm(o,a,e))}return r}class oo extends ws{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cm extends ws{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&om(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=zn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=zn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Wl();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(s.key)?null:l;const d=Zl(a,l);d!==null&&r.set(s.key,d),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),z())}isEqual(e){return this.batchId===e.batchId&&an(this.mutations,e.mutations,(t,r)=>pc(t,r))&&an(this.baseMutations,e.baseMutations,(t,r)=>pc(t,r))}}class ao{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){J(e.mutations.length===r.length);let s=function(){return Xp}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new ao(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae,G;function dm(n){switch(n){default:return x();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function tu(n){if(n===void 0)return et("GRPC error has no .code"),C.UNKNOWN;switch(n){case ae.OK:return C.OK;case ae.CANCELLED:return C.CANCELLED;case ae.UNKNOWN:return C.UNKNOWN;case ae.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ae.INTERNAL:return C.INTERNAL;case ae.UNAVAILABLE:return C.UNAVAILABLE;case ae.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ae.NOT_FOUND:return C.NOT_FOUND;case ae.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ae.ABORTED:return C.ABORTED;case ae.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ae.DATA_LOSS:return C.DATA_LOSS;default:return x()}}(G=ae||(ae={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=new yt([4294967295,4294967295],0);function _c(n){const e=fm().encode(n),t=new bl;return t.update(e),new Uint8Array(t.digest())}function yc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new yt([t,r],0),new yt([s,o],0)]}class co{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Bn(`Invalid padding: ${t}`);if(r<0)throw new Bn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Bn(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=yt.fromNumber(this.Te)}de(e,t,r){let s=e.add(t.multiply(yt.fromNumber(r)));return s.compare(pm)===1&&(s=new yt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=_c(e),[r,s]=yc(t);for(let o=0;o<this.hashCount;o++){const a=this.de(r,s,o);if(!this.Ee(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new co(o,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Te===0)return;const t=_c(e),[r,s]=yc(t);for(let o=0;o<this.hashCount;o++){const a=this.de(r,s,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Bn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t,r,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,nr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new As(F.min(),s,new re(H),tt(),z())}}class nr{constructor(e,t,r,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new nr(r,t,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class nu{constructor(e,t){this.targetId=e,this.me=t}}class ru{constructor(e,t,r=ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class vc{constructor(){this.fe=0,this.ge=Ec(),this.pe=ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=z(),t=z(),r=z();return this.ge.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:x()}}),new nr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Ec()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class mm{constructor(e){this.Be=e,this.Le=new Map,this.ke=tt(),this.qe=kr(),this.Qe=kr(),this.Ke=new re(H)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:x()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((r,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,r=e.me.count,s=this.Ye(t);if(s){const o=s.target;if(ki(o))if(r===0){const a=new M(o.path);this.We(t,a,be.newNoDocument(a,F.min()))}else J(r===1);else{const a=this.Ze(t);if(a!==r){const l=this.Xe(e),d=l?this.et(l,e,a):1;if(d!==0){this.He(t);const p=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,p)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=t;let a,l;try{a=bt(r).toUint8Array()}catch(d){if(d instanceof Vl)return on("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new co(a,s,o)}catch(d){return on(d instanceof Bn?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.Te===0?null:l}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Be.getRemoteKeysForTarget(t);let s=0;return r.forEach(o=>{const a=this.Be.nt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.We(t,o,null),s++)}),s}it(e){const t=new Map;this.Le.forEach((o,a)=>{const l=this.Ye(a);if(l){if(o.current&&ki(l.target)){const d=new M(l.target.path);this.st(d).has(a)||this.ot(a,d)||this.We(a,d,be.newNoDocument(d,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let r=z();this.Qe.forEach((o,a)=>{let l=!0;a.forEachWhile(d=>{const p=this.Ye(d);return!p||p.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const s=new As(e,t,this.Ke,this.ke,r);return this.ke=tt(),this.qe=kr(),this.Qe=kr(),this.Ke=new re(H),s}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new vc,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new fe(H),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new fe(H),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new vc),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function kr(){return new re(M.comparator)}function Ec(){return new re(M.comparator)}const gm={asc:"ASCENDING",desc:"DESCENDING"},_m={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ym={and:"AND",or:"OR"};class vm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Di(n,e){return n.useProto3Json||_s(e)?e:{value:e}}function rs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function su(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Em(n,e){return rs(n,e.toTimestamp())}function je(n){return J(!!n),F.fromTimestamp(function(t){const r=At(t);return new de(r.seconds,r.nanos)}(n))}function lo(n,e){return Li(n,e).canonicalString()}function Li(n,e){const t=function(s){return new te(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function iu(n){const e=te.fromString(n);return J(uu(e)),e}function Vi(n,e){return lo(n.databaseId,e.path)}function hi(n,e){const t=iu(e);if(t.get(1)!==n.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(au(t))}function ou(n,e){return lo(n.databaseId,e)}function Tm(n){const e=iu(n);return e.length===4?te.emptyPath():au(e)}function Oi(n){return new te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function au(n){return J(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Tc(n,e,t){return{name:Vi(n,e),fields:t.value.mapValue.fields}}function Im(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:x()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(p,E){return p.useProto3Json?(J(E===void 0||typeof E=="string"),ye.fromBase64String(E||"")):(J(E===void 0||E instanceof Buffer||E instanceof Uint8Array),ye.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(p){const E=p.code===void 0?C.UNKNOWN:tu(p.code);return new O(E,p.message||"")}(a);t=new ru(r,s,o,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=hi(n,r.document.name),o=je(r.document.updateTime),a=r.document.createTime?je(r.document.createTime):F.min(),l=new Ne({mapValue:{fields:r.document.fields}}),d=be.newFoundDocument(s,o,a,l),p=r.targetIds||[],E=r.removedTargetIds||[];t=new Br(p,E,d.key,d)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=hi(n,r.document),o=r.readTime?je(r.readTime):F.min(),a=be.newNoDocument(s,o),l=r.removedTargetIds||[];t=new Br([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=hi(n,r.document),o=r.removedTargetIds||[];t=new Br([],o,s,null)}else{if(!("filter"in e))return x();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new hm(s,o),l=r.targetId;t=new nu(l,a)}}return t}function wm(n,e){let t;if(e instanceof tr)t={update:Tc(n,e.key,e.value)};else if(e instanceof oo)t={delete:Vi(n,e.key)};else if(e instanceof jt)t={update:Tc(n,e.key,e.data),updateMask:Dm(e.fieldMask)};else{if(!(e instanceof cm))return x();t={verify:Vi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof ts)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Jn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Xn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ns)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw x()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Em(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x()}(n,e.precondition)),t}function Am(n,e){return n&&n.length>0?(J(e!==void 0),n.map(t=>function(s,o){let a=s.updateTime?je(s.updateTime):je(o);return a.isEqual(F.min())&&(a=je(o)),new im(a,s.transformResults||[])}(t,e))):[]}function bm(n,e){return{documents:[ou(n,e.path)]}}function Rm(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ou(n,s);const o=function(p){if(p.length!==0)return lu(He.create(p,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(p){if(p.length!==0)return p.map(E=>function(b){return{field:Jt(b.field),direction:Pm(b.dir)}}(E))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Di(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{ct:t,parent:s}}function Sm(n){let e=Tm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){J(r===1);const E=t.from[0];E.allDescendants?s=E.collectionId:e=e.child(E.collectionId)}let o=[];t.where&&(o=function(I){const b=cu(I);return b instanceof He&&Ul(b)?b.getFilters():[b]}(t.where));let a=[];t.orderBy&&(a=function(I){return I.map(b=>function(D){return new es(Xt(D.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(b))}(t.orderBy));let l=null;t.limit&&(l=function(I){let b;return b=typeof I=="object"?I.value:I,_s(b)?null:b}(t.limit));let d=null;t.startAt&&(d=function(I){const b=!!I.before,S=I.values||[];return new Zr(S,b)}(t.startAt));let p=null;return t.endAt&&(p=function(I){const b=!I.before,S=I.values||[];return new Zr(S,b)}(t.endAt)),Hp(e,s,a,o,l,"F",d,p)}function Cm(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function cu(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Xt(t.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xt(t.unaryFilter.field);return ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Xt(t.unaryFilter.field);return ue.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Xt(t.unaryFilter.field);return ue.create(a,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(t){return ue.create(Xt(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return He.create(t.compositeFilter.filters.map(r=>cu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(t.compositeFilter.op))}(n):x()}function Pm(n){return gm[n]}function km(n){return _m[n]}function Nm(n){return ym[n]}function Jt(n){return{fieldPath:n.canonicalString()}}function Xt(n){return _e.fromServerFormat(n.fieldPath)}function lu(n){return n instanceof ue?function(t){if(t.op==="=="){if(cc(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NAN"}};if(ac(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(cc(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NOT_NAN"}};if(ac(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jt(t.field),op:km(t.op),value:t.value}}}(n):n instanceof He?function(t){const r=t.getFilters().map(s=>lu(s));return r.length===1?r[0]:{compositeFilter:{op:Nm(t.op),filters:r}}}(n):x()}function Dm(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function uu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t,r,s,o=F.min(),a=F.min(),l=ye.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(e){return new ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.ht=e}}function Vm(n){const e=Sm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ni(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.ln=new Mm}addToCollectionParentIndex(e,t){return this.ln.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(wt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(wt.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Mm{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new fe(te.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new fe(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Pe{static withCacheSize(e){return new Pe(e,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe.DEFAULT_COLLECTION_PERCENTILE=10,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pe.DEFAULT=new Pe(41943040,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pe.DISABLED=new Pe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new un(0)}static Qn(){return new un(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc([n,e],[t,r]){const s=H(n,t);return s===0?H(e,r):s}class xm{constructor(e){this.Gn=e,this.buffer=new fe(wc),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();wc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Um{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){V("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yn(t)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await _n(t)}await this.Yn(3e5)})}}class Fm{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return R.resolve(gs.oe);const r=new xm(t);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Ic)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ic):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,s,o,a,l,d,p;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),s=this.params.maximumSequenceNumbersToCollect):s=I,a=Date.now(),this.nthSequenceNumber(e,s))).next(I=>(r=I,l=Date.now(),this.removeTargets(e,r,t))).next(I=>(o=I,d=Date.now(),this.removeOrphanedDocuments(e,r))).next(I=>(p=Date.now(),Kt()<=$.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-E}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(d-l)+`ms
	Removed ${I} documents in `+(p-d)+`ms
Total Duration: ${p-E}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:I})))}}function Bm(n,e){return new Fm(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(){this.changes=new qt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&zn(r.mutation,s,xe.empty(),de.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=z()){const s=Lt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(o=>{let a=Fn();return o.forEach((l,d)=>{a=a.insert(l,d.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Lt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,z()))}populateOverlays(e,t,r){const s=[];return r.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let o=tt();const a=$n(),l=function(){return $n()}();return t.forEach((d,p)=>{const E=r.get(p.key);s.has(p.key)&&(E===void 0||E.mutation instanceof jt)?o=o.insert(p.key,p):E!==void 0?(a.set(p.key,E.mutation.getFieldMask()),zn(E.mutation,p,E.mutation.getFieldMask(),de.now())):a.set(p.key,xe.empty())}),this.recalculateAndSaveOverlays(e,o).next(d=>(d.forEach((p,E)=>a.set(p,E)),t.forEach((p,E)=>{var I;return l.set(p,new jm(E,(I=a.get(p))!==null&&I!==void 0?I:null))}),l))}recalculateAndSaveOverlays(e,t){const r=$n();let s=new re((a,l)=>a-l),o=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(d=>{const p=t.get(d);if(p===null)return;let E=r.get(d)||xe.empty();E=l.applyToLocalView(p,E),r.set(d,E);const I=(s.get(l.batchId)||z()).add(d);s=s.insert(l.batchId,I)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),p=d.key,E=d.value,I=Wl();E.forEach(b=>{if(!o.has(b)){const S=Zl(t.get(b),r.get(b));S!==null&&I.set(b,S),o=o.add(b)}}),a.push(this.documentOverlayCache.saveOverlays(e,p,I))}return R.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):R.resolve(Lt());let l=-1,d=o;return a.next(p=>R.forEach(p,(E,I)=>(l<I.largestBatchId&&(l=I.largestBatchId),o.get(E)?R.resolve():this.remoteDocumentCache.getEntry(e,E).next(b=>{d=d.insert(E,b)}))).next(()=>this.populateOverlays(e,p,o)).next(()=>this.computeViews(e,d,p,z())).next(E=>({batchId:l,changes:Gl(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let s=Fn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=Fn();return this.indexManager.getCollectionParents(e,o).next(l=>R.forEach(l,d=>{const p=function(I,b){return new vs(b,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,d.child(o));return this.getDocumentsMatchingCollectionQuery(e,p,r,s).next(E=>{E.forEach((I,b)=>{a=a.insert(I,b)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s))).next(a=>{o.forEach((d,p)=>{const E=p.getKey();a.get(E)===null&&(a=a.insert(E,be.newInvalidDocument(E)))});let l=Fn();return a.forEach((d,p)=>{const E=o.get(d);E!==void 0&&zn(E.mutation,p,xe.empty(),de.now()),Ts(t,p)&&(l=l.insert(d,p))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return R.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:je(s.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:Vm(s.bundledQuery),readTime:je(s.readTime)}}(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(){this.overlays=new re(M.comparator),this.dr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Lt();return R.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,o)=>{this.Tt(e,t,o)}),R.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.dr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.dr.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const s=Lt(),o=t.length+1,a=new M(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const d=l.getNext().value,p=d.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===o&&d.largestBatchId>r&&s.set(d.getKey(),d)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new re((p,E)=>p-E);const a=this.overlays.getIterator();for(;a.hasNext();){const p=a.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>r){let E=o.get(p.largestBatchId);E===null&&(E=Lt(),o=o.insert(p.largestBatchId,E)),E.set(p.getKey(),p)}}const l=Lt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((p,E)=>l.set(p,E)),!(l.size()>=s)););return R.resolve(l)}Tt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.dr.get(s.largestBatchId).delete(r.key);this.dr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new um(t,r));let o=this.dr.get(t);o===void 0&&(o=z(),this.dr.set(t,o)),this.dr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.Er=new fe(pe.Ar),this.Rr=new fe(pe.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const r=new pe(e,t);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new pe(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new M(new te([])),r=new pe(t,e),s=new pe(t,e+1),o=[];return this.Rr.forEachInRange([r,s],a=>{this.gr(a),o.push(a.key)}),o}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new M(new te([])),r=new pe(t,e),s=new pe(t,e+1);let o=z();return this.Rr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new pe(e,0),r=this.Er.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pe{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return M.comparator(e.key,t.key)||H(e.br,t.br)}static Vr(e,t){return H(e.br,t.br)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new fe(pe.Ar)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new lm(o,t,r,s);this.mutationQueue.push(a);for(const l of s)this.vr=this.vr.add(new pe(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return R.resolve(a)}lookupMutationBatch(e,t){return R.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Fr(r),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pe(t,0),s=new pe(t,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([r,s],a=>{const l=this.Cr(a.br);o.push(l)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new fe(H);return t.forEach(s=>{const o=new pe(s,0),a=new pe(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,a],l=>{r=r.add(l.br)})}),R.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new pe(new M(o),0);let l=new fe(H);return this.vr.forEachWhile(d=>{const p=d.key.path;return!!r.isPrefixOf(p)&&(p.length===s&&(l=l.add(d.br)),!0)},a),R.resolve(this.Mr(l))}Mr(e){const t=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){J(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return R.forEach(t.mutations,s=>{const o=new pe(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Bn(e){}containsKey(e,t){const r=new pe(t,0),s=this.vr.firstAfterOrEqual(r);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this.Nr=e,this.docs=function(){return new re(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():be.newInvalidDocument(t))}getEntries(e,t){let r=tt();return t.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():be.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=tt();const a=t.path,l=new M(a.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:p,value:{document:E}}=d.getNext();if(!a.isPrefixOf(p.path))break;p.path.length>a.length+1||Ap(wp(E),r)<=0||(s.has(E.key)||Ts(t,E))&&(o=o.insert(E.key,E.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(e,t,r,s){x()}Br(e,t){return R.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Qm(this)}getSize(e){return R.resolve(this.size)}}class Qm extends qm{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),R.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.persistence=e,this.Lr=new qt(t=>ro(t),so),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.kr=0,this.qr=new uo,this.targetCount=0,this.Qr=un.qn()}forEachTarget(e,t){return this.Lr.forEach((r,s)=>t(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),R.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new un(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Un(t),R.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.Lr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Lr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.Lr.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),R.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),R.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,t){this.Kr={},this.overlays={},this.$r=new gs(0),this.Ur=!1,this.Ur=!0,this.Wr=new Gm,this.referenceDelegate=e(this),this.Gr=new Jm(this),this.indexManager=new Om,this.remoteDocumentCache=function(s){return new Km(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new Lm(t),this.jr=new zm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Hm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new Wm(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const s=new Xm(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(o=>this.referenceDelegate.Jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Yr(e,t){return R.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class Xm extends Rp{constructor(e){super(),this.currentSequenceNumber=e}}class ho{constructor(e){this.persistence=e,this.Zr=new uo,this.Xr=null}static ei(e){return new ho(e)}get ti(){if(this.Xr)return this.Xr;throw x()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),R.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.ti.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.ti,r=>{const s=M.fromPath(r);return this.ni(e,s).next(o=>{o||t.removeEntry(s,F.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return R.or([()=>R.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class ss{constructor(e,t){this.persistence=e,this.ri=new qt(r=>Pp(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Bm(this,t)}static ei(e,t){return new ss(e,t)}Hr(){}Jr(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return R.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(o=>o?R.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.Br(e,a=>this.ir(e,a,t).next(l=>{l||(r++,o.removeEntry(a,F.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),R.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=xr(e.data.value)),t}ir(e,t,r){return R.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=s}static zi(e,t){let r=z(),s=z();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new fo(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Qd()?8:Sp(Re())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.Xi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.es(e,t,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Ym;return this.ts(e,t,a).next(l=>{if(o.result=l,this.Hi)return this.ns(e,t,a,l.size)})}).next(()=>o.result)}ns(e,t,r,s){return r.documentReadCount<this.Ji?(Kt()<=$.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Qt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),R.resolve()):(Kt()<=$.DEBUG&&V("QueryEngine","Query:",Qt(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Kt()<=$.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Qt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Be(t))):R.resolve())}Xi(e,t){if(dc(t))return R.resolve(null);let r=Be(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ni(t,null,"F"),r=Be(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=z(...o);return this.Zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(d=>{const p=this.rs(t,l);return this.ss(t,p,a,d.readTime)?this.Xi(e,Ni(t,null,"F")):this.os(e,p,t,d)}))})))}es(e,t,r,s){return dc(t)||s.isEqual(F.min())?R.resolve(null):this.Zi.getDocuments(e,r).next(o=>{const a=this.rs(t,o);return this.ss(t,a,r,s)?R.resolve(null):(Kt()<=$.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qt(t)),this.os(e,a,t,Ip(s,-1)).next(l=>l))})}rs(e,t){let r=new fe(zl(e));return t.forEach((s,o)=>{Ts(e,o)&&(r=r.add(o))}),r}ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ts(e,t,r){return Kt()<=$.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Qt(t)),this.Zi.getDocumentsMatchingQuery(e,t,wt.min(),r)}os(e,t,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t,r,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new re(H),this.cs=new qt(o=>ro(o),so),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $m(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function tg(n,e,t,r){return new eg(n,e,t,r)}async function du(n,e){const t=B(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let d=z();for(const p of s){a.push(p.batchId);for(const E of p.mutations)d=d.add(E.key)}for(const p of o){l.push(p.batchId);for(const E of p.mutations)d=d.add(E.key)}return t.localDocuments.getDocuments(r,d).next(p=>({Ts:p,removedBatchIds:a,addedBatchIds:l}))})})}function ng(n,e){const t=B(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),o=t.hs.newChangeBuffer({trackRemovals:!0});return function(l,d,p,E){const I=p.batch,b=I.keys();let S=R.resolve();return b.forEach(D=>{S=S.next(()=>E.getEntry(d,D)).next(L=>{const N=p.docVersions.get(D);J(N!==null),L.version.compareTo(N)<0&&(I.applyToRemoteDocument(L,p),L.isValidDocument()&&(L.setReadTime(p.commitVersion),E.addEntry(L)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(d,I))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let d=z();for(let p=0;p<l.mutationResults.length;++p)l.mutationResults[p].transformResults.length>0&&(d=d.add(l.batch.mutations[p].key));return d}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function fu(n){const e=B(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function rg(n,e){const t=B(n),r=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const l=[];e.targetChanges.forEach((E,I)=>{const b=s.get(I);if(!b)return;l.push(t.Gr.removeMatchingKeys(o,E.removedDocuments,I).next(()=>t.Gr.addMatchingKeys(o,E.addedDocuments,I)));let S=b.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(I)!==null?S=S.withResumeToken(ye.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):E.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(E.resumeToken,r)),s=s.insert(I,S),function(L,N,j){return L.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(b,S,E)&&l.push(t.Gr.updateTargetData(o,S))});let d=tt(),p=z();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(o,E))}),l.push(sg(o,a,e.documentUpdates).next(E=>{d=E.Is,p=E.ds})),!r.isEqual(F.min())){const E=t.Gr.getLastRemoteSnapshotVersion(o).next(I=>t.Gr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(E)}return R.waitFor(l).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,d,p)).next(()=>d)}).then(o=>(t.us=s,o))}function sg(n,e,t){let r=z(),s=z();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=tt();return t.forEach((l,d)=>{const p=o.get(l);d.isFoundDocument()!==p.isFoundDocument()&&(s=s.add(l)),d.isNoDocument()&&d.version.isEqual(F.min())?(e.removeEntry(l,d.readTime),a=a.insert(l,d)):!p.isValidDocument()||d.version.compareTo(p.version)>0||d.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(d),a=a.insert(l,d)):V("LocalStore","Ignoring outdated watch update for ",l,". Current version:",p.version," Watch version:",d.version)}),{Is:a,ds:s}})}function ig(n,e){const t=B(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function og(n,e){const t=B(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Gr.getTargetData(r,e).next(o=>o?(s=o,R.resolve(s)):t.Gr.allocateTargetId(r).next(a=>(s=new ft(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function Mi(n,e,t){const r=B(n),s=r.us.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!yn(a))throw a;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Ac(n,e,t){const r=B(n);let s=F.min(),o=z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(d,p,E){const I=B(d),b=I.cs.get(E);return b!==void 0?R.resolve(I.us.get(b)):I.Gr.getTargetData(p,E)}(r,a,Be(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,l.targetId).next(d=>{o=d})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?s:F.min(),t?o:z())).next(l=>(ag(r,Kp(e),l),{documents:l,Es:o})))}function ag(n,e,t){let r=n.ls.get(e)||F.min();t.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ls.set(e,r)}class bc{constructor(){this.activeTargetIds=em()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cg{constructor(){this._o=new bc,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new bc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nr=null;function di(){return Nr===null?Nr=function(){return 268435456+Math.round(2147483648*Math.random())}():Nr++,"0x"+Nr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="WebChannelConnection";class dg extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${s}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Oo(t,r,s,o,a){const l=di(),d=this.No(t,r.toUriEncodedString());V("RestConnection",`Sending RPC '${t}' ${l}:`,d,s);const p={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(p,o,a),this.Lo(t,d,p,s).then(E=>(V("RestConnection",`Received RPC '${t}' ${l}: `,E),E),E=>{throw on("RestConnection",`RPC '${t}' ${l} failed with error: `,E,"url: ",d,"request:",s),E})}ko(t,r,s,o,a,l){return this.Oo(t,r,s,o,a)}Bo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),s&&s.headers.forEach((o,a)=>t[a]=o)}No(t,r){const s=ug[t];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,r,s){const o=di();return new Promise((a,l)=>{const d=new Rl;d.setWithCredentials(!0),d.listenOnce(Sl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Mr.NO_ERROR:const E=d.getResponseJson();V(we,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(E)),a(E);break;case Mr.TIMEOUT:V(we,`RPC '${e}' ${o} timed out`),l(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case Mr.HTTP_ERROR:const I=d.getStatus();if(V(we,`RPC '${e}' ${o} failed with status:`,I,"response text:",d.getResponseText()),I>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const S=b==null?void 0:b.error;if(S&&S.status&&S.message){const D=function(N){const j=N.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(j)>=0?j:C.UNKNOWN}(S.status);l(new O(D,S.message))}else l(new O(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new O(C.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{V(we,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(s);V(we,`RPC '${e}' ${o} sending request:`,s),d.send(t,"POST",p,r,15)})}qo(e,t,r){const s=di(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=kl(),l=Pl(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(d.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Bo(d.initMessageHeaders,t,r),d.encodeInitMessageHeaders=!0;const E=o.join("");V(we,`Creating RPC '${e}' stream ${s}: ${E}`,d);const I=a.createWebChannel(E,d);let b=!1,S=!1;const D=new hg({Eo:N=>{S?V(we,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(b||(V(we,`Opening RPC '${e}' stream ${s} transport.`),I.open(),b=!0),V(we,`RPC '${e}' stream ${s} sending:`,N),I.send(N))},Ao:()=>I.close()}),L=(N,j,W)=>{N.listen(j,K=>{try{W(K)}catch(ne){setTimeout(()=>{throw ne},0)}})};return L(I,Un.EventType.OPEN,()=>{S||(V(we,`RPC '${e}' stream ${s} transport opened.`),D.So())}),L(I,Un.EventType.CLOSE,()=>{S||(S=!0,V(we,`RPC '${e}' stream ${s} transport closed`),D.Do())}),L(I,Un.EventType.ERROR,N=>{S||(S=!0,on(we,`RPC '${e}' stream ${s} transport errored:`,N),D.Do(new O(C.UNAVAILABLE,"The operation could not be completed")))}),L(I,Un.EventType.MESSAGE,N=>{var j;if(!S){const W=N.data[0];J(!!W);const K=W,ne=(K==null?void 0:K.error)||((j=K[0])===null||j===void 0?void 0:j.error);if(ne){V(we,`RPC '${e}' stream ${s} received error:`,ne);const le=ne.status;let P=function(f){const y=ae[f];if(y!==void 0)return tu(y)}(le),_=ne.message;P===void 0&&(P=C.INTERNAL,_="Unknown error status: "+le+" with message "+ne.message),S=!0,D.Do(new O(P,_)),I.close()}else V(we,`RPC '${e}' stream ${s} received:`,W),D.vo(W)}}),L(l,Cl.STAT_EVENT,N=>{N.stat===Ri.PROXY?V(we,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Ri.NOPROXY&&V(we,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.bo()},0),D}}function fi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(n){return new vm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t,r=1e3,s=1.5,o=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=s,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,t,r,s,o,a,l,d){this.li=e,this.Yo=r,this.Zo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new pu(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(et(t.toString()),et("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===t&&this.I_(r,s)},r=>{e(()=>{const s=new O(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.d_(s)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.d_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fg extends mu{constructor(e,t,r,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=Im(this.serializer,e),r=function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?je(a.readTime):F.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=Oi(this.serializer),t.addTarget=function(o,a){let l;const d=a.target;if(l=ki(d)?{documents:bm(o,d)}:{query:Rm(o,d).ct},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=su(o,a.resumeToken);const p=Di(o,a.expectedCount);p!==null&&(l.expectedCount=p)}else if(a.snapshotVersion.compareTo(F.min())>0){l.readTime=rs(o,a.snapshotVersion.toTimestamp());const p=Di(o,a.expectedCount);p!==null&&(l.expectedCount=p)}return l}(this.serializer,e);const r=Cm(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=Oi(this.serializer),t.removeTarget=e,this.c_(t)}}class pg extends mu{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return J(!!e.streamToken),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=Am(e.writeResults,e.commitTime),r=je(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=Oi(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>wm(this.serializer,r))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Oo(e,Li(t,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(C.UNKNOWN,o.toString())})}ko(e,t,r,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.ko(e,Li(t,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(C.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class gg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(et(t),this.C_=!1):V("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{$t(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(d){const p=B(d);p.k_.add(4),await rr(p),p.K_.set("Unknown"),p.k_.delete(4),await Rs(p)}(this))})}),this.K_=new gg(r,s)}}async function Rs(n){if($t(n))for(const e of n.q_)await e(!0)}async function rr(n){for(const e of n.q_)await e(!1)}function gu(n,e){const t=B(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),_o(t)?go(t):vn(t).s_()&&mo(t,e))}function po(n,e){const t=B(n),r=vn(t);t.L_.delete(e),r.s_()&&_u(t,e),t.L_.size===0&&(r.s_()?r.a_():$t(t)&&t.K_.set("Unknown"))}function mo(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}vn(n).V_(e)}function _u(n,e){n.U_.xe(e),vn(n).m_(e)}function go(n){n.U_=new mm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),vn(n).start(),n.K_.F_()}function _o(n){return $t(n)&&!vn(n).i_()&&n.L_.size>0}function $t(n){return B(n).k_.size===0}function yu(n){n.U_=void 0}async function yg(n){n.K_.set("Online")}async function vg(n){n.L_.forEach((e,t)=>{mo(n,e)})}async function Eg(n,e){yu(n),_o(n)?(n.K_.O_(e),go(n)):n.K_.set("Unknown")}async function Tg(n,e,t){if(n.K_.set("Online"),e instanceof ru&&e.state===2&&e.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.L_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.L_.delete(l),s.U_.removeTarget(l))}(n,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await is(n,r)}else if(e instanceof Br?n.U_.$e(e):e instanceof nu?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(F.min()))try{const r=await fu(n.localStore);t.compareTo(r)>=0&&await function(o,a){const l=o.U_.it(a);return l.targetChanges.forEach((d,p)=>{if(d.resumeToken.approximateByteSize()>0){const E=o.L_.get(p);E&&o.L_.set(p,E.withResumeToken(d.resumeToken,a))}}),l.targetMismatches.forEach((d,p)=>{const E=o.L_.get(d);if(!E)return;o.L_.set(d,E.withResumeToken(ye.EMPTY_BYTE_STRING,E.snapshotVersion)),_u(o,d);const I=new ft(E.target,d,p,E.sequenceNumber);mo(o,I)}),o.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await is(n,r)}}async function is(n,e,t){if(!yn(e))throw e;n.k_.add(1),await rr(n),n.K_.set("Offline"),t||(t=()=>fu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Rs(n)})}function vu(n,e){return e().catch(t=>is(n,t,e))}async function Ss(n){const e=B(n),t=St(e);let r=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;Ig(e);)try{const s=await ig(e.localStore,r);if(s===null){e.B_.length===0&&t.a_();break}r=s.batchId,wg(e,s)}catch(s){await is(e,s)}Eu(e)&&Tu(e)}function Ig(n){return $t(n)&&n.B_.length<10}function wg(n,e){n.B_.push(e);const t=St(n);t.s_()&&t.f_&&t.g_(e.mutations)}function Eu(n){return $t(n)&&!St(n).i_()&&n.B_.length>0}function Tu(n){St(n).start()}async function Ag(n){St(n).w_()}async function bg(n){const e=St(n);for(const t of n.B_)e.g_(t.mutations)}async function Rg(n,e,t){const r=n.B_.shift(),s=ao.from(r,e,t);await vu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ss(n)}async function Sg(n,e){e&&St(n).f_&&await async function(r,s){if(function(a){return dm(a)&&a!==C.ABORTED}(s.code)){const o=r.B_.shift();St(r).__(),await vu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Ss(r)}}(n,e),Eu(n)&&Tu(n)}async function Sc(n,e){const t=B(n);t.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=$t(t);t.k_.add(3),await rr(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Rs(t)}async function Cg(n,e){const t=B(n);e?(t.k_.delete(2),await Rs(t)):e||(t.k_.add(2),await rr(t),t.K_.set("Unknown"))}function vn(n){return n.W_||(n.W_=function(t,r,s){const o=B(t);return o.b_(),new fg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Ro:yg.bind(null,n),mo:vg.bind(null,n),po:Eg.bind(null,n),R_:Tg.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),_o(n)?go(n):n.K_.set("Unknown")):(await n.W_.stop(),yu(n))})),n.W_}function St(n){return n.G_||(n.G_=function(t,r,s){const o=B(t);return o.b_(),new pg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:Ag.bind(null,n),po:Sg.bind(null,n),p_:bg.bind(null,n),y_:Rg.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Ss(n)):(await n.G_.stop(),n.B_.length>0&&(V("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,l=new yo(e,t,a,s,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vo(n,e){if(et("AsyncQueue",`${e}: ${n}`),yn(n))return new O(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{static emptySet(e){return new Zt(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=Fn(),this.sortedSet=new re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Zt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Zt;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(){this.z_=new re(M.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):x():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class hn{constructor(e,t,r,s,o,a,l,d,p){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=p}static fromInitialDocuments(e,t,r,s,o){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new hn(e,t,Zt.emptySet(t),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Es(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class kg{constructor(){this.queries=Pc(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const s=B(t),o=s.queries;s.queries=Pc(),o.forEach((a,l)=>{for(const d of l.J_)d.onError(r)})})(this,new O(C.ABORTED,"Firestore shutting down"))}}function Pc(){return new qt(n=>$l(n),Es)}async function Ng(n,e){const t=B(n);let r=3;const s=e.query;let o=t.queries.get(s);o?!o.Y_()&&e.Z_()&&(r=2):(o=new Pg,r=e.Z_()?0:1);try{switch(r){case 0:o.H_=await t.onListen(s,!0);break;case 1:o.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=vo(a,`Initialization of query '${Qt(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,o),o.J_.push(e),e.ea(t.onlineState),o.H_&&e.ta(o.H_)&&Eo(t)}async function Dg(n,e){const t=B(n),r=e.query;let s=3;const o=t.queries.get(r);if(o){const a=o.J_.indexOf(e);a>=0&&(o.J_.splice(a,1),o.J_.length===0?s=e.Z_()?0:1:!o.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Lg(n,e){const t=B(n);let r=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const l of a.J_)l.ta(s)&&(r=!0);a.H_=s}}r&&Eo(t)}function Vg(n,e,t){const r=B(n),s=r.queries.get(e);if(s)for(const o of s.J_)o.onError(t);r.queries.delete(e)}function Eo(n){n.X_.forEach(e=>{e.next()})}var xi,kc;(kc=xi||(xi={})).na="default",kc.Cache="cache";class Og{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=hn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==xi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e){this.key=e}}class wu{constructor(e){this.key=e}}class Mg{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=z(),this.mutatedKeys=z(),this.Va=zl(e),this.ma=new Zt(this.Va)}get fa(){return this.Ea}ga(e,t){const r=t?t.pa:new Cc,s=t?t.ma:this.ma;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const d=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,p=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((E,I)=>{const b=s.get(E),S=Ts(this.query,I)?I:null,D=!!b&&this.mutatedKeys.has(b.key),L=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let N=!1;b&&S?b.data.isEqual(S.data)?D!==L&&(r.track({type:3,doc:S}),N=!0):this.ya(b,S)||(r.track({type:2,doc:S}),N=!0,(d&&this.Va(S,d)>0||p&&this.Va(S,p)<0)&&(l=!0)):!b&&S?(r.track({type:0,doc:S}),N=!0):b&&!S&&(r.track({type:1,doc:b}),N=!0,(d||p)&&(l=!0)),N&&(S?(a=a.add(S),o=L?o.add(E):o.delete(E)):(a=a.delete(E),o=o.delete(E)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const E=this.query.limitType==="F"?a.last():a.first();a=a.delete(E.key),o=o.delete(E.key),r.track({type:1,doc:E})}return{ma:a,pa:r,ss:l,mutatedKeys:o}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const o=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((E,I)=>function(S,D){const L=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return L(S)-L(D)}(E.type,I.type)||this.Va(E.doc,I.doc)),this.wa(r),s=s!=null&&s;const l=t&&!s?this.Sa():[],d=this.Ra.size===0&&this.current&&!s?1:0,p=d!==this.Aa;return this.Aa=d,a.length!==0||p?{snapshot:new hn(this.query,e.ma,o,a,e.mutatedKeys,d===0,p,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Cc,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=z(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new wu(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new Iu(r))}),t}va(e){this.Ea=e.Es,this.Ra=z();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return hn.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class xg{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Ug{constructor(e){this.key=e,this.Fa=!1}}class Fg{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new qt(l=>$l(l),Es),this.Oa=new Map,this.Na=new Set,this.Ba=new re(M.comparator),this.La=new Map,this.ka=new uo,this.qa={},this.Qa=new Map,this.Ka=un.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Bg(n,e,t=!0){const r=Pu(n);let s;const o=r.xa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Ca()):s=await Au(r,e,t,!0),s}async function qg(n,e){const t=Pu(n);await Au(t,e,!0,!1)}async function Au(n,e,t,r){const s=await og(n.localStore,Be(e)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let l;return r&&(l=await jg(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&gu(n.remoteStore,s),l}async function jg(n,e,t,r,s){n.Ua=(I,b,S)=>async function(L,N,j,W){let K=N.view.ga(j);K.ss&&(K=await Ac(L.localStore,N.query,!1).then(({documents:_})=>N.view.ga(_,K)));const ne=W&&W.targetChanges.get(N.targetId),le=W&&W.targetMismatches.get(N.targetId)!=null,P=N.view.applyChanges(K,L.isPrimaryClient,ne,le);return Dc(L,N.targetId,P.ba),P.snapshot}(n,I,b,S);const o=await Ac(n.localStore,e,!0),a=new Mg(e,o.Es),l=a.ga(o.documents),d=nr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),p=a.applyChanges(l,n.isPrimaryClient,d);Dc(n,t,p.ba);const E=new xg(e,t,a);return n.xa.set(e,E),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),p.snapshot}async function $g(n,e,t){const r=B(n),s=r.xa.get(e),o=r.Oa.get(s.targetId);if(o.length>1)return r.Oa.set(s.targetId,o.filter(a=>!Es(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Mi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&po(r.remoteStore,s.targetId),Ui(r,s.targetId)}).catch(_n)):(Ui(r,s.targetId),await Mi(r.localStore,s.targetId,!0))}async function zg(n,e){const t=B(n),r=t.xa.get(e),s=t.Oa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),po(t.remoteStore,r.targetId))}async function Hg(n,e,t){const r=Yg(n);try{const s=await function(a,l){const d=B(a),p=de.now(),E=l.reduce((S,D)=>S.add(D.key),z());let I,b;return d.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=tt(),L=z();return d.hs.getEntries(S,E).next(N=>{D=N,D.forEach((j,W)=>{W.isValidDocument()||(L=L.add(j))})}).next(()=>d.localDocuments.getOverlayedDocuments(S,D)).next(N=>{I=N;const j=[];for(const W of l){const K=am(W,I.get(W.key).overlayedDocument);K!=null&&j.push(new jt(W.key,K,Ol(K.value.mapValue),qe.exists(!0)))}return d.mutationQueue.addMutationBatch(S,p,j,l)}).next(N=>{b=N;const j=N.applyToLocalDocumentSet(I,L);return d.documentOverlayCache.saveOverlays(S,N.batchId,j)})}).then(()=>({batchId:b.batchId,changes:Gl(I)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,d){let p=a.qa[a.currentUser.toKey()];p||(p=new re(H)),p=p.insert(l,d),a.qa[a.currentUser.toKey()]=p}(r,s.batchId,t),await sr(r,s.changes),await Ss(r.remoteStore)}catch(s){const o=vo(s,"Failed to persist write");t.reject(o)}}async function bu(n,e){const t=B(n);try{const r=await rg(t.localStore,e);e.targetChanges.forEach((s,o)=>{const a=t.La.get(o);a&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Fa=!0:s.modifiedDocuments.size>0?J(a.Fa):s.removedDocuments.size>0&&(J(a.Fa),a.Fa=!1))}),await sr(t,r,e)}catch(r){await _n(r)}}function Nc(n,e,t){const r=B(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.xa.forEach((o,a)=>{const l=a.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const d=B(a);d.onlineState=l;let p=!1;d.queries.forEach((E,I)=>{for(const b of I.J_)b.ea(l)&&(p=!0)}),p&&Eo(d)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Gg(n,e,t){const r=B(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.La.get(e),o=s&&s.key;if(o){let a=new re(M.comparator);a=a.insert(o,be.newNoDocument(o,F.min()));const l=z().add(o),d=new As(F.min(),new Map,new re(H),a,l);await bu(r,d),r.Ba=r.Ba.remove(o),r.La.delete(e),To(r)}else await Mi(r.localStore,e,!1).then(()=>Ui(r,e,t)).catch(_n)}async function Wg(n,e){const t=B(n),r=e.batch.batchId;try{const s=await ng(t.localStore,e);Su(t,r,null),Ru(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await sr(t,s)}catch(s){await _n(s)}}async function Kg(n,e,t){const r=B(n);try{const s=await function(a,l){const d=B(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let E;return d.mutationQueue.lookupMutationBatch(p,l).next(I=>(J(I!==null),E=I.keys(),d.mutationQueue.removeMutationBatch(p,I))).next(()=>d.mutationQueue.performConsistencyCheck(p)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(p,E,l)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,E)).next(()=>d.localDocuments.getDocuments(p,E))})}(r.localStore,e);Su(r,e,t),Ru(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await sr(r,s)}catch(s){await _n(s)}}function Ru(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Su(n,e,t){const r=B(n);let s=r.qa[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function Ui(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||Cu(n,r)})}function Cu(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(po(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),To(n))}function Dc(n,e,t){for(const r of t)r instanceof Iu?(n.ka.addReference(r.key,e),Qg(n,r)):r instanceof wu?(V("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||Cu(n,r.key)):x()}function Qg(n,e){const t=e.key,r=t.path.canonicalString();n.Ba.get(t)||n.Na.has(r)||(V("SyncEngine","New document in limbo: "+t),n.Na.add(r),To(n))}function To(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new M(te.fromString(e)),r=n.Ka.next();n.La.set(r,new Ug(t)),n.Ba=n.Ba.insert(t,r),gu(n.remoteStore,new ft(Be(jl(t.path)),r,"TargetPurposeLimboResolution",gs.oe))}}async function sr(n,e,t){const r=B(n),s=[],o=[],a=[];r.xa.isEmpty()||(r.xa.forEach((l,d)=>{a.push(r.Ua(d,e,t).then(p=>{var E;if((p||t)&&r.isPrimaryClient){const I=p?!p.fromCache:(E=t==null?void 0:t.targetChanges.get(d.targetId))===null||E===void 0?void 0:E.current;r.sharedClientState.updateQueryState(d.targetId,I?"current":"not-current")}if(p){s.push(p);const I=fo.zi(d.targetId,p);o.push(I)}}))}),await Promise.all(a),r.Ma.R_(s),await async function(d,p){const E=B(d);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>R.forEach(p,b=>R.forEach(b.Wi,S=>E.persistence.referenceDelegate.addReference(I,b.targetId,S)).next(()=>R.forEach(b.Gi,S=>E.persistence.referenceDelegate.removeReference(I,b.targetId,S)))))}catch(I){if(!yn(I))throw I;V("LocalStore","Failed to update sequence numbers: "+I)}for(const I of p){const b=I.targetId;if(!I.fromCache){const S=E.us.get(b),D=S.snapshotVersion,L=S.withLastLimboFreeSnapshotVersion(D);E.us=E.us.insert(b,L)}}}(r.localStore,o))}async function Jg(n,e){const t=B(n);if(!t.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await du(t.localStore,e);t.currentUser=e,function(o,a){o.Qa.forEach(l=>{l.forEach(d=>{d.reject(new O(C.CANCELLED,a))})}),o.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await sr(t,r.Ts)}}function Xg(n,e){const t=B(n),r=t.La.get(e);if(r&&r.Fa)return z().add(r.key);{let s=z();const o=t.Oa.get(e);if(!o)return s;for(const a of o){const l=t.xa.get(a);s=s.unionWith(l.view.fa)}return s}}function Pu(n){const e=B(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=bu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gg.bind(null,e),e.Ma.R_=Lg.bind(null,e.eventManager),e.Ma.Wa=Vg.bind(null,e.eventManager),e}function Yg(n){const e=B(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Wg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Kg.bind(null,e),e}class os{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bs(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return tg(this.persistence,new Zm,e.initialUser,this.serializer)}ja(e){return new hu(ho.ei,this.serializer)}za(e){return new cg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}os.provider={build:()=>new os};class Zg extends os{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){J(this.persistence.referenceDelegate instanceof ss);const r=this.persistence.referenceDelegate.garbageCollector;return new Um(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Pe.withCacheSize(this.cacheSizeBytes):Pe.DEFAULT;return new hu(r=>ss.ei(r,t),this.serializer)}}class Fi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jg.bind(null,this.syncEngine),await Cg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kg}()}createDatastore(e){const t=bs(e.databaseInfo.databaseId),r=function(o){return new dg(o)}(e.databaseInfo);return function(o,a,l,d){return new mg(o,a,l,d)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,o,a,l){return new _g(r,s,o,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Nc(this.syncEngine,t,0),function(){return Rc.p()?new Rc:new lg}())}createSyncEngine(e,t){return function(s,o,a,l,d,p,E){const I=new Fg(s,o,a,l,d,p);return E&&(I.$a=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const o=B(s);V("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await rr(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Fi.provider={build:()=>new Fi};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):et("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ae.UNAUTHENTICATED,this.clientId=Dl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{V("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=vo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pi(n,e){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await du(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Lc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await n_(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Sc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Sc(e.remoteStore,s)),n._onlineComponents=e}async function n_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await pi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;on("Error using user provided cache. Falling back to memory cache: "+t),await pi(n,new os)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await pi(n,new Zg(void 0));return n._offlineComponents}async function ku(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Lc(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Lc(n,new Fi))),n._onlineComponents}function r_(n){return ku(n).then(e=>e.syncEngine)}async function s_(n){const e=await ku(n),t=e.eventManager;return t.onListen=Bg.bind(null,e.syncEngine),t.onUnlisten=$g.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=qg.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=zg.bind(null,e.syncEngine),t}function i_(n,e,t={}){const r=new vt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,d,p){const E=new e_({next:b=>{E.eu(),a.enqueueAndForget(()=>Dg(o,I)),b.fromCache&&d.source==="server"?p.reject(new O(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(b)},error:b=>p.reject(b)}),I=new Og(l,E,{includeMetadataChanges:!0,ua:!0});return Ng(o,I)}(await s_(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(n,e,t){if(!t)throw new O(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function o_(n,e,t,r){if(e===!0&&r===!0)throw new O(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Oc(n){if(!M.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Mc(n){if(M.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Io(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x()}function dn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Io(n);throw new O(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}o_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cs{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fp;switch(r.type){case"firstParty":return new _p(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Vc.get(t);r&&(V("ComponentProvider","Removing Datastore"),Vc.delete(t),r.terminate())}(this),Promise.resolve()}}function a_(n,e,t,r={}){var s;const o=(n=dn(n,Cs))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&on("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,d;if(typeof r.mockUserToken=="string")l=r.mockUserToken,d=Ae.MOCK_USER;else{l=jd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Ae(p)}n._authCredentials=new pp(new Nl(l,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ps(this.firestore,e,this._query)}}class De{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Et(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new De(this.firestore,e,this._key)}}class Et extends Ps{constructor(e,t,r){super(e,t,jl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new De(this.firestore,null,new M(e))}withConverter(e){return new Et(this.firestore,e,this._path)}}function c_(n,e,...t){if(n=Le(n),Du("collection","path",e),n instanceof Cs){const r=te.fromString(e,...t);return Mc(r),new Et(n,null,r)}{if(!(n instanceof De||n instanceof Et))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(te.fromString(e,...t));return Mc(r),new Et(n.firestore,null,r)}}function Lu(n,e,...t){if(n=Le(n),arguments.length===1&&(e=Dl.newId()),Du("doc","path",e),n instanceof Cs){const r=te.fromString(e,...t);return Oc(r),new De(n,null,new M(r))}{if(!(n instanceof De||n instanceof Et))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(te.fromString(e,...t));return Oc(r),new De(n.firestore,n instanceof Et?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new pu(this,"async_queue_retry"),this.fu=()=>{const r=fi();r&&V("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=fi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=fi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new vt;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!yn(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw et("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=yo.createAndSchedule(this,e,t,r,o=>this.Su(o));return this.Eu.push(s),s}pu(){this.Au&&x()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class ks extends Cs{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Uc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Uc(e),this._firestoreClient=void 0,await e}}}function l_(n,e){const t=typeof n=="object"?n:Il(),r=typeof n=="string"?n:"(default)",s=Zi(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Bd("firestore");o&&a_(s,...o)}return s}function Vu(n){if(n._terminated)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||u_(n),n._firestoreClient}function u_(n){var e,t,r;const s=n._freezeSettings(),o=function(l,d,p,E){return new Dp(l,d,p,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Nu(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new t_(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fn(ye.fromBase64String(e))}catch(t){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new fn(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=/^__.*__$/;class d_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new jt(e,this.data,this.fieldMask,t,this.fieldTransforms):new tr(e,this.data,t,this.fieldTransforms)}}function Mu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class Ro{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Ro(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Bu(e),s}Lu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return as(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Mu(this.Mu)&&h_.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class f_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||bs(e)}$u(e,t,r,s=!1){return new Ro({Mu:e,methodName:t,Ku:r,path:_e.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function p_(n){const e=n._freezeSettings(),t=bs(n._databaseId);return new f_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function m_(n,e,t,r,s,o={}){const a=n.$u(o.merge||o.mergeFields?2:0,e,t,s);Bu("Data must be an object, but it was:",a,r);const l=Uu(r,a);let d,p;if(o.merge)d=new xe(a.fieldMask),p=a.fieldTransforms;else if(o.mergeFields){const E=[];for(const I of o.mergeFields){const b=g_(e,I,t);if(!a.contains(b))throw new O(C.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);y_(E,b)||E.push(b)}d=new xe(E),p=a.fieldTransforms.filter(I=>d.covers(I.field))}else d=null,p=a.fieldTransforms;return new d_(new Ne(l),d,p)}function xu(n,e){if(Fu(n=Le(n)))return Bu("Unsupported field value:",e,n),Uu(n,e);if(n instanceof Ou)return function(r,s){if(!Mu(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let d=xu(l,s.ku(a));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,s){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tm(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=de.fromDate(r);return{timestampValue:rs(s.serializer,o)}}if(r instanceof de){const o=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rs(s.serializer,o)}}if(r instanceof Ao)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fn)return{bytesValue:su(s.serializer,r._byteString)};if(r instanceof De){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:lo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof bo)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.qu("VectorValues must only contain numeric values.");return io(l.serializer,d)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Io(r)}`)}(n,e)}function Uu(n,e){const t={};return Ll(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bt(n,(r,s)=>{const o=xu(s,e.Ou(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Fu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof Ao||n instanceof fn||n instanceof De||n instanceof Ou||n instanceof bo)}function Bu(n,e,t){if(!Fu(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Io(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function g_(n,e,t){if((e=Le(e))instanceof wo)return e._internalPath;if(typeof e=="string")return qu(n,e);throw as("Field path arguments must be of type string or ",n,!1,void 0,t)}const __=new RegExp("[~\\*/\\[\\]]");function qu(n,e,t){if(e.search(__)>=0)throw as(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new wo(...e.split("."))._internalPath}catch{throw as(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function as(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let d="";return(o||a)&&(d+=" (found",o&&(d+=` in field ${r}`),a&&(d+=` in document ${s}`),d+=")"),new O(C.INVALID_ARGUMENT,l+n+d)}function y_(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new v_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($u("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class v_ extends ju{data(){return super.data()}}function $u(n,e){return typeof e=="string"?qu(n,e):e instanceof wo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class T_{convertValue(e,t="none"){switch(Rt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Bt(e,(s,o)=>{r[s]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,s;const o=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>oe(a.doubleValue));return new bo(o)}convertGeoPoint(e){return new Ao(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ys(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Wn(e));default:return null}}convertTimestamp(e){const t=At(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=te.fromString(e);J(uu(r));const s=new Kn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(t)||et(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class w_ extends ju{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field($u("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class qr extends w_{data(e={}){return super.data(e)}}class A_{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Dr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new qr(this._firestore,this._userDataWriter,r.key,r,new Dr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const d=new qr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Dr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const d=new qr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Dr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let p=-1,E=-1;return l.type!==0&&(p=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),E=a.indexOf(l.doc.key)),{type:b_(l.type),doc:d,oldIndex:p,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function b_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}class R_ extends T_{constructor(e){super(),this.firestore=e}convertBytes(e){return new fn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,t)}}function S_(n){n=dn(n,Ps);const e=dn(n.firestore,ks),t=Vu(e),r=new R_(e);return E_(n._query),i_(t,n._query).then(s=>new A_(e,r,n,s))}function C_(n,e,t){n=dn(n,De);const r=dn(n.firestore,ks),s=I_(n.converter,e);return zu(r,[m_(p_(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,qe.none())])}function P_(n){return zu(dn(n.firestore,ks),[new oo(n._key,qe.none())])}function zu(n,e){return function(r,s){const o=new vt;return r.asyncQueue.enqueueAndForget(async()=>Hg(await r_(r),s,o)),o.promise}(Vu(n),e)}(function(e,t=!0){(function(s){gn=s})(mn),sn(new Mt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new ks(new mp(r.getProvider("auth-internal")),new vp(r.getProvider("app-check-internal")),function(p,E){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kn(p.options.projectId,E)}(a,s),a);return o=Object.assign({useFetchStreams:t},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),_t(tc,"4.7.6",e),_t(tc,"4.7.6","esm2017")})();var k_="firebase",N_="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t(k_,N_,"app");function So(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Hu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const D_=Hu,Gu=new Zn("auth","Firebase",Hu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new Xi("@firebase/auth");function L_(n,...e){cs.logLevel<=$.WARN&&cs.warn(`Auth (${mn}): ${n}`,...e)}function jr(n,...e){cs.logLevel<=$.ERROR&&cs.error(`Auth (${mn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(n,...e){throw Po(n,...e)}function Ue(n,...e){return Po(n,...e)}function Co(n,e,t){const r=Object.assign(Object.assign({},D_()),{[e]:t});return new Zn("auth","Firebase",r).create(e,{appName:n.name})}function Ot(n){return Co(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function V_(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ge(n,"argument-error"),Co(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Po(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Gu.create(n,...e)}function U(n,e,...t){if(!n)throw Po(e,...t)}function Je(n){const e="INTERNAL ASSERTION FAILED: "+n;throw jr(e),new Error(e)}function nt(n,e){n||Je(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function O_(){return Fc()==="http:"||Fc()==="https:"}function Fc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(O_()||Gd()||"connection"in navigator)?navigator.onLine:!0}function x_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t){this.shortDelay=e,this.longDelay=t,nt(t>e,"Short delay should be less than long delay!"),this.isMobile=$d()||Wd()}get(){return M_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(n,e){nt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=new ir(3e4,6e4);function No(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function En(n,e,t,r,s={}){return Ku(n,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=er(Object.assign({key:n.config.apiKey},a)).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const p=Object.assign({method:e,headers:d},o);return Hd()||(p.referrerPolicy="no-referrer"),Wu.fetch()(Qu(n,n.config.apiHost,t,l),p)})}async function Ku(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},U_),e);try{const s=new q_(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Lr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[d,p]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lr(n,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw Lr(n,"email-already-in-use",a);if(d==="USER_DISABLED")throw Lr(n,"user-disabled",a);const E=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw Co(n,E,p);Ge(n,E)}}catch(s){if(s instanceof rt)throw s;Ge(n,"network-request-failed",{message:String(s)})}}async function B_(n,e,t,r,s={}){const o=await En(n,e,t,r,s);return"mfaPendingCredential"in o&&Ge(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Qu(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?ko(n.config,s):`${n.config.apiScheme}://${s}`}class q_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ue(this.auth,"network-request-failed")),F_.get())})}}function Lr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ue(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(n,e){return En(n,"POST","/v1/accounts:delete",e)}async function Ju(n,e){return En(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $_(n,e=!1){const t=Le(n),r=await t.getIdToken(e),s=Do(r);U(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:Hn(mi(s.auth_time)),issuedAtTime:Hn(mi(s.iat)),expirationTime:Hn(mi(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function mi(n){return Number(n)*1e3}function Do(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return jr("JWT malformed, contained fewer than 3 sections"),null;try{const s=ml(t);return s?JSON.parse(s):(jr("Failed to decode base64 JWT payload"),null)}catch(s){return jr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Bc(n){const e=Do(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof rt&&z_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function z_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hn(this.lastLoginAt),this.creationTime=Hn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Yn(n,Ju(t,{idToken:r}));U(s==null?void 0:s.users.length,t,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Xu(o.providerUserInfo):[],l=W_(n.providerData,a),d=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!(l!=null&&l.length),E=d?p:!1,I={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new qi(o.createdAt,o.lastLoginAt),isAnonymous:E};Object.assign(n,I)}async function G_(n){const e=Le(n);await ls(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function W_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Xu(n){return n.map(e=>{var{providerId:t}=e,r=So(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K_(n,e){const t=await Ku(n,{},async()=>{const r=er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=Qu(n,s,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Wu.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Q_(n,e){return En(n,"POST","/v2/accounts:revokeToken",No(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=Bc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:o}=await K_(e,t);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:o}=t,a=new en;return r&&(U(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(U(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new en,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Xe{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,o=So(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new H_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new qi(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Yn(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $_(this,e)}reload(){return G_(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Xe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ls(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(Ot(this.auth));const e=await this.getIdToken();return await Yn(this,j_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,o,a,l,d,p,E;const I=(r=t.displayName)!==null&&r!==void 0?r:void 0,b=(s=t.email)!==null&&s!==void 0?s:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,D=(a=t.photoURL)!==null&&a!==void 0?a:void 0,L=(l=t.tenantId)!==null&&l!==void 0?l:void 0,N=(d=t._redirectEventId)!==null&&d!==void 0?d:void 0,j=(p=t.createdAt)!==null&&p!==void 0?p:void 0,W=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:K,emailVerified:ne,isAnonymous:le,providerData:P,stsTokenManager:_}=t;U(K&&_,e,"internal-error");const h=en.fromJSON(this.name,_);U(typeof K=="string",e,"internal-error"),ct(I,e.name),ct(b,e.name),U(typeof ne=="boolean",e,"internal-error"),U(typeof le=="boolean",e,"internal-error"),ct(S,e.name),ct(D,e.name),ct(L,e.name),ct(N,e.name),ct(j,e.name),ct(W,e.name);const f=new Xe({uid:K,auth:e,email:b,emailVerified:ne,displayName:I,isAnonymous:le,photoURL:D,phoneNumber:S,tenantId:L,stsTokenManager:h,createdAt:j,lastLoginAt:W});return P&&Array.isArray(P)&&(f.providerData=P.map(y=>Object.assign({},y))),N&&(f._redirectEventId=N),f}static async _fromIdTokenResponse(e,t,r=!1){const s=new en;s.updateFromServerResponse(t);const o=new Xe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ls(o),o}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];U(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Xu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),l=new en;l.updateFromIdToken(r);const d=new Xe({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new qi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(d,p),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=new Map;function Ye(n){nt(n instanceof Function,"Expected a class definition");let e=qc.get(n);return e?(nt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,qc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Yu.type="NONE";const jc=Yu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(n,e,t){return`firebase:${n}:${e}:${t}`}class tn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=$r(this.userKey,s.apiKey,o),this.fullPersistenceKey=$r("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new tn(Ye(jc),e,r);const s=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let o=s[0]||Ye(jc);const a=$r(r,e.config.apiKey,e.name);let l=null;for(const p of t)try{const E=await p._get(a);if(E){const I=Xe._fromJSON(e,E);p!==o&&(l=I),o=p;break}}catch{}const d=s.filter(p=>p._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new tn(o,e,r):(o=d[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async p=>{if(p!==o)try{await p._remove(a)}catch{}})),new tn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sh(e))return"Blackberry";if(ih(e))return"Webos";if(eh(e))return"Safari";if((e.includes("chrome/")||th(e))&&!e.includes("edge/"))return"Chrome";if(rh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zu(n=Re()){return/firefox\//i.test(n)}function eh(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function th(n=Re()){return/crios\//i.test(n)}function nh(n=Re()){return/iemobile/i.test(n)}function rh(n=Re()){return/android/i.test(n)}function sh(n=Re()){return/blackberry/i.test(n)}function ih(n=Re()){return/webos/i.test(n)}function Lo(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function J_(n=Re()){var e;return Lo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function X_(){return Kd()&&document.documentMode===10}function oh(n=Re()){return Lo(n)||rh(n)||ih(n)||sh(n)||/windows phone/i.test(n)||nh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(n,e=[]){let t;switch(n){case"Browser":t=$c(Re());break;case"Worker":t=`${$c(Re())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,l)=>{try{const d=e(o);a(d)}catch(d){l(d)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(n,e={}){return En(n,"GET","/v2/passwordPolicy",No(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=6;class ty{constructor(e){var t,r,s,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:ey,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,o,a,l;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,d),this.validatePasswordCharacterOptions(e,d),d.isValid&&(d.isValid=(t=d.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(s=d.containsLowercaseLetter)!==null&&s!==void 0?s:!0),d.isValid&&(d.isValid=(o=d.containsUppercaseLetter)!==null&&o!==void 0?o:!0),d.isValid&&(d.isValid=(a=d.containsNumericCharacter)!==null&&a!==void 0?a:!0),d.isValid&&(d.isValid=(l=d.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),d}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zc(this),this.idTokenSubscription=new zc(this),this.beforeStateQueue=new Y_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ye(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ju(this,{idToken:e}),r=await Xe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===l)&&(d!=null&&d.user)&&(s=d.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ls(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qe(this.app))return Promise.reject(Ot(this));const t=e?Le(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(Ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qe(this.app)?Promise.reject(Ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ye(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Z_(this),t=new ty(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Q_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ye(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[Ye(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,r,s);return()=>{a=!0,d()}}else{const d=e.addObserver(t);return()=>{a=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ah(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&L_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ns(n){return Le(n)}class zc{constructor(e){this.auth=e,this.observer=null,this.addObserver=nf(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ry(n){Vo=n}function sy(n){return Vo.loadJS(n)}function iy(){return Vo.gapiScript}function oy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(n,e){const t=Zi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(Jr(o,e??{}))return s;Ge(s,"already-initialized")}return t.initialize({options:e})}function cy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ye);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ly(n,e,t){const r=Ns(n);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=ch(e),{host:a,port:l}=uy(e),d=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${a}${d}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),hy()}function ch(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function uy(n){const e=ch(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:Hc(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Hc(a)}}}function Hc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function hy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,t){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(n,e){return B_(n,"POST","/v1/accounts:signInWithIdp",No(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="http://localhost";class Ut extends lh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ge("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,o=So(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Ut(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return nn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,nn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nn(e,t)}buildRequest(){const e={requestUri:dy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=er(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Oo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends or{constructor(){super("facebook.com")}static credential(e){return Ut._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";ut.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends or{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ut._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Oe.credential(t,r)}catch{return null}}}Oe.GOOGLE_SIGN_IN_METHOD="google.com";Oe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends or{constructor(){super("github.com")}static credential(e){return Ut._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.GITHUB_SIGN_IN_METHOD="github.com";ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends or{constructor(){super("twitter.com")}static credential(e,t){return Ut._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return dt.credential(t,r)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const o=await Xe._fromIdTokenResponse(e,r,s),a=Gc(r);return new pn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Gc(r);return new pn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Gc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends rt{constructor(e,t,r,s){var o;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,us.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new us(e,t,r,s)}}function uh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?us._fromErrorAndOperation(n,o,e,r):o})}async function fy(n,e,t=!1){const r=await Yn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return pn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function py(n,e,t=!1){const{auth:r}=n;if(Qe(r.app))return Promise.reject(Ot(r));const s="reauthenticate";try{const o=await Yn(n,uh(r,s,e,n),t);U(o.idToken,r,"internal-error");const a=Do(o.idToken);U(a,r,"internal-error");const{sub:l}=a;return U(n.uid===l,r,"user-mismatch"),pn._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ge(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function my(n,e,t=!1){if(Qe(n.app))return Promise.reject(Ot(n));const r="signIn",s=await uh(n,r,e),o=await pn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(o.user),o}function gy(n,e,t,r){return Le(n).onIdTokenChanged(e,t,r)}function _y(n,e,t){return Le(n).beforeAuthStateChanged(e,t)}function yy(n){return Le(n).signOut()}const hs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hs,"1"),this.storage.removeItem(hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=1e3,Ey=10;class dh extends hh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=oh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,d)=>{this.notifyListeners(a,d)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);X_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ey):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},vy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dh.type="LOCAL";const Ty=dh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh extends hh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fh.type="SESSION";const ph=fh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ds(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async p=>p(t.origin,o)),d=await Iy(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ds.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((l,d)=>{const p=Mo("",20);s.port1.start();const E=setTimeout(()=>{d(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(I){const b=I;if(b.data.eventId===p)switch(b.data.status){case"ack":clearTimeout(E),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(b.data.response);break;default:clearTimeout(E),clearTimeout(o),d(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return window}function Ay(n){$e().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function by(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ry(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Sy(){return mh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="firebaseLocalStorageDb",Cy=1,ds="firebaseLocalStorage",_h="fbase_key";class ar{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ls(n,e){return n.transaction([ds],e?"readwrite":"readonly").objectStore(ds)}function Py(){const n=indexedDB.deleteDatabase(gh);return new ar(n).toPromise()}function ji(){const n=indexedDB.open(gh,Cy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ds,{keyPath:_h})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ds)?e(r):(r.close(),await Py(),e(await ji()))})})}async function Wc(n,e,t){const r=Ls(n,!0).put({[_h]:e,value:t});return new ar(r).toPromise()}async function ky(n,e){const t=Ls(n,!1).get(e),r=await new ar(t).toPromise();return r===void 0?null:r.value}function Kc(n,e){const t=Ls(n,!0).delete(e);return new ar(t).toPromise()}const Ny=800,Dy=3;class yh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ji(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Dy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ds._getInstance(Sy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await by(),!this.activeServiceWorker)return;this.sender=new wy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ry()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ji();return await Wc(e,hs,"1"),await Kc(e,hs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ky(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Ls(s,!1).getAll();return new ar(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ny)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yh.type="LOCAL";const Ly=yh;new ir(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(n,e){return e?Ye(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends lh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Vy(n){return my(n.auth,new xo(n),n.bypassAuthState)}function Oy(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),py(t,new xo(n),n.bypassAuthState)}async function My(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),fy(t,new xo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,t,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vy;case"linkViaPopup":case"linkViaRedirect":return My;case"reauthViaPopup":case"reauthViaRedirect":return Oy;default:Ge(this.auth,"internal-error")}}resolve(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new ir(2e3,1e4);async function Uy(n,e,t){if(Qe(n.app))return Promise.reject(Ue(n,"operation-not-supported-in-this-environment"));const r=Ns(n);V_(n,e,Oo);const s=vh(r,t);return new Vt(r,"signInViaPopup",e,s).executeNotNull()}class Vt extends Eh{constructor(e,t,r,s,o){super(e,t,s,o),this.provider=r,this.authWindow=null,this.pollId=null,Vt.currentPopupAction&&Vt.currentPopupAction.cancel(),Vt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){nt(this.filter.length===1,"Popup operations only handle one event");const e=Mo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xy.get())};e()}}Vt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="pendingRedirect",zr=new Map;class By extends Eh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=zr.get(this.auth._key());if(!e){try{const r=await qy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}zr.set(this.auth._key(),e)}return this.bypassAuthState||zr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qy(n,e){const t=zy(e),r=$y(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function jy(n,e){zr.set(n._key(),e)}function $y(n){return Ye(n._redirectPersistence)}function zy(n){return $r(Fy,n.config.apiKey,n.name)}async function Hy(n,e,t=!1){if(Qe(n.app))return Promise.reject(Ot(n));const r=Ns(n),s=vh(r,e),a=await new By(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=10*60*1e3;class Wy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ky(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Th(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ue(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qc(e))}saveEventToCache(e){this.cachedEventUids.add(Qc(e)),this.lastProcessedEventTime=Date.now()}}function Qc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Th({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ky(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Th(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qy(n,e={}){return En(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xy=/^https?/;async function Yy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Qy(n);for(const t of e)try{if(Zy(t))return}catch{}Ge(n,"unauthorized-domain")}function Zy(n){const e=Bi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Xy.test(t))return!1;if(Jy.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=new ir(3e4,6e4);function Jc(){const n=$e().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function tv(n){return new Promise((e,t)=>{var r,s,o;function a(){Jc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jc(),t(Ue(n,"network-request-failed"))},timeout:ev.get()})}if(!((s=(r=$e().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=$e().gapi)===null||o===void 0)&&o.load)a();else{const l=oy("iframefcb");return $e()[l]=()=>{gapi.load?a():t(Ue(n,"network-request-failed"))},sy(`${iy()}?onload=${l}`).catch(d=>t(d))}}).catch(e=>{throw Hr=null,e})}let Hr=null;function nv(n){return Hr=Hr||tv(n),Hr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=new ir(5e3,15e3),sv="__/auth/iframe",iv="emulator/auth/iframe",ov={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},av=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cv(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ko(e,iv):`https://${n.config.authDomain}/${sv}`,r={apiKey:e.apiKey,appName:n.name,v:mn},s=av.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${er(r).slice(1)}`}async function lv(n){const e=await nv(n),t=$e().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:cv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ov,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=Ue(n,"network-request-failed"),l=$e().setTimeout(()=>{o(a)},rv.get());function d(){$e().clearTimeout(l),s(r)}r.ping(d).then(d,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hv=500,dv=600,fv="_blank",pv="http://localhost";class Xc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mv(n,e,t,r=hv,s=dv){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const d=Object.assign(Object.assign({},uv),{width:r.toString(),height:s.toString(),top:o,left:a}),p=Re().toLowerCase();t&&(l=th(p)?fv:t),Zu(p)&&(e=e||pv,d.scrollbars="yes");const E=Object.entries(d).reduce((b,[S,D])=>`${b}${S}=${D},`,"");if(J_(p)&&l!=="_self")return gv(e||"",l),new Xc(null);const I=window.open(e||"",l,E);U(I,n,"popup-blocked");try{I.focus()}catch{}return new Xc(I)}function gv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="__/auth/handler",yv="emulator/auth/handler",vv=encodeURIComponent("fac");async function Yc(n,e,t,r,s,o){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:mn,eventId:s};if(e instanceof Oo){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",tf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,I]of Object.entries({}))a[E]=I}if(e instanceof or){const E=e.getScopes().filter(I=>I!=="");E.length>0&&(a.scopes=E.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const E of Object.keys(l))l[E]===void 0&&delete l[E];const d=await n._getAppCheckToken(),p=d?`#${vv}=${encodeURIComponent(d)}`:"";return`${Ev(n)}?${er(l).slice(1)}${p}`}function Ev({config:n}){return n.emulator?ko(n,yv):`https://${n.authDomain}/${_v}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi="webStorageSupport";class Tv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ph,this._completeRedirectFn=Hy,this._overrideRedirectResult=jy}async _openPopup(e,t,r,s){var o;nt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Yc(e,t,r,Bi(),s);return mv(e,a,Mo())}async _openRedirect(e,t,r,s){await this._originValidation(e);const o=await Yc(e,t,r,Bi(),s);return Ay(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(nt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await lv(e),r=new Wy(e);return t.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gi,{type:gi},s=>{var o;const a=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[gi];a!==void 0&&t(!!a),Ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return oh()||eh()||Lo()}}const Iv=Tv;var Zc="@firebase/auth",el="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bv(n){sn(new Mt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;U(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ah(n)},p=new ny(r,s,o,d);return cy(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),sn(new Mt("auth-internal",e=>{const t=Ns(e.getProvider("auth").getImmediate());return(r=>new wv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(Zc,el,Av(n)),_t(Zc,el,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=5*60,Sv=yl("authIdTokenMaxAge")||Rv;let tl=null;const Cv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Sv)return;const s=t==null?void 0:t.token;tl!==s&&(tl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Pv(n=Il()){const e=Zi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ay(n,{popupRedirectResolver:Iv,persistence:[Ly,Ty,ph]}),r=yl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Cv(o.toString());_y(t,a,()=>a(t.currentUser)),gy(t,l=>a(l))}}const s=gl("auth");return s&&ly(t,`http://${s}`),t}function kv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ry({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const o=Ue("internal-error");o.customData=s,t(o)},r.type="text/javascript",r.charset="UTF-8",kv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bv("Browser");const Nv={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"energyteam-5fbd4.firebaseapp.com",projectId:"energyteam-5fbd4",storageBucket:"energyteam-5fbd4.firebasestorage.app",messagingSenderId:"176615851977",appId:"1:176615851977:web:9bc22eecdf948957544a18"},Ih=Tl(Nv),Uo=Pv(Ih),Fo=l_(Ih),Dv=async n=>{const e=Uo.currentUser;if(e){const t=n;try{await C_(Lu(Fo,e.email,n._id),t)}catch(r){console.log(r.message)}}},Lv=async n=>{const e=localStorage.getItem("user");if(e)try{await P_(Lu(Fo,e,n))}catch(t){console.log(t.message)}},wh=async()=>{const n=localStorage.getItem("user"),e=[];if(!n)return;(await S_(c_(Fo,n))).forEach(r=>{e.push(r.data())}),localStorage.setItem("favorites",JSON.stringify(e))};let rn=[];const Vr=JSON.parse(localStorage.getItem("favorites"));Vr!=null&&Vr.length&&rn.push(...Vr);function Vv(n){Dv(n),rn.push(n),localStorage.setItem("favorites",JSON.stringify(rn))}const Ah=n=>{Lv(n),rn=rn.filter(e=>e._id!==n),localStorage.setItem("favorites",JSON.stringify([...rn]))};function Ov(){document.querySelector(".filter-list-js").classList.add("hidden-form");const e=document.querySelector(".wrap-js"),t=document.createElement("p");t.className="favorite-text",e.appendChild(t),t.textContent="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."}function Mv(n){const e=document.querySelector(".filter-list-js");e.classList.remove("hidden-form"),n.length>6?e.classList.add("scroll"):e.classList.remove("scroll");const t=n.map(({_id:r,target:s,name:o,bodyPart:a,burnedCalories:l,time:d})=>`
  <li class="favourites_list_item" id=${r}>
    <div class="favourites_list_item_up">
      <div class="favourites_list_item_up_left">
        <span class="favourites_btn_workout">${Yt(s,6)}</span>
        <button id="btnTrash" class="favourites_btn_trash_icon favourites_btn_trash" data-id=${r}>
          <svg class="favourites_btn_trash_icon" width="16" height="16" aria-label="trash" data-id=${r}>
            <use class="favourites_btn_trash_icon" href="${ce}#icon-trash" data-id=${r}></use>
          </svg>
        </button>
      </div>
      <div class="favourites_list_item_up_right">
        <button class="favourites_btn_start" data-id=${r}>
          <p class="favourites_btn_start_text" data-id=${r}>start</p>
          <svg class="favourites_btn_start_icon" width="16" height="16" aria-label="arrow" data-id=${r}>
            <use href="${ce}#icon-arrow" data-id=${r}></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="favourites_list_item_middle">
      <div class="favourites_list_item_middle_icon">
        <svg class="favourites_list_item_middle_icon_svg">
          <use href="${ce}#icon-run-man"></use>
        </svg>
      </div>
      <h3 class="favourites_list_item_middle_title">${Yt(o,16)}</h3>
    </div>
    <div class="favourites_list_item_bottom">
      <ul class="favourites_list_item_bottom_list">
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Burned calories: <span>${l}/${d}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Body part: <span>${Yt(a,5)}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">Target: <span>${Yt(s,7)}</span></p>
        </li>
      </ul>
    </div>
  </li>`).join("");e.innerHTML=t}function fs(){wh();const n=JSON.parse(localStorage.getItem("favorites"));if(!(n!=null&&n.length)){Ov();return}Mv(n)}const xv=document.querySelector(".filter-list-js");let nl="";const Uv=["BUTTON","svg","use","P"];let rl,sl,il;async function Fv(n){n.preventDefault();const e=document.querySelector(".modal-get-raiting").dataset.id,r=document.querySelector(".rating-container-js").dataset.rating,s=document.querySelector(".raiting-form-field-input").value,o=document.querySelector(".raiting-form-field-comment").value,a={rate:Number(r),email:s,review:o};he.open();const l=await Ji.addExercisesRate(e,a);he.close(),l.message?It.error(`${l.message}`):(It.success(`Thank you for your mark - ${a.rate} for ${l.name}`),Kr.close())}async function Bv(){const n=document.querySelector(".modal-info").dataset.id;Kr.close(),Kr.open(Nd(n)),Dd(),il=document.querySelector(".raiting-form"),il.addEventListener("submit",Fv)}async function qv(){const n=document.querySelector(".refresh-button-js"),e=document.querySelector(".modal-info").dataset.id,r=window.location.href.endsWith("favorites.html");if(n.dataset.favorite==="false"){n.innerHTML=`
      <button class="add-favorite-js" type="button">
        <span class="remote-favorites">Remove from favorites</span>
        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
          <use href="${ce}#icon-trash"></use>
        </svg>
      </button>`,n.dataset.favorite="true",he.open();const s=await Ji.getOneExercises(e);he.close(),Vv(s),r&&fs()}else n.innerHTML=`
      <button class="add-favorite-js" type="button">
        <span>Add to favorites</span>
        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
          <use href="${ce}#icon-heart"></use>
        </svg>
      </button>`,n.dataset.favorite="false",Ah(e),r&&fs()}function jv({target:n}){const{nodeName:e,classList:t,dataset:r}=n;if(Uv.includes(e)&&!t.contains("favourites_btn_trash_icon")&&!t.contains("favourites_btn_workout"))return nl=r.id,$v(nl);if(t.contains("favourites_btn_trash_icon")){const s=r.id;Ah(s),fs()}}const $v=async n=>{he.open();const e=await Ji.getOneExercises(n);he.close();const t=localStorage.getItem("favorites");if(t){const s=JSON.parse(t).some(({_id:o})=>o===n);e.favorite=s}else e.favorite=!1;Kr.open(kd(e)),sl=document.querySelector(".refresh-button-js"),rl=document.querySelector(".add-rating"),rl.addEventListener("click",Bv),sl.addEventListener("click",qv)};xv.addEventListener("click",jv);const lt=class lt{open(){(!lt.loaderEl||lt.loaderEl.classList.contains("js-loader"))&&(lt.loaderEl.style.display="block")}close(){lt.loaderEl&&(lt.loaderEl.style.display="none")}};xn(lt,"loaderEl",document.querySelector(".js-loader"));let $i=lt;const ol=new $i;pt.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class zv{error(e){pt.error({title:"Error",message:e})}success(e){pt.success({title:"OK",message:e})}info(e){pt.info({title:"Info",message:e})}}const al=new zv,bh=document.querySelector("#subscribe-form"),_i=bh.querySelector("#email");bh.addEventListener("submit",Hv);async function Hv(n){n.preventDefault();const{value:e}=_i;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){al.info("Please provide a valid email address"),_i.value="";return}try{ol.open();const r=await Tt.addSubscription({email:e});ol.close(),al.success(r.message)}catch(r){console.log(r)}finally{_i.value=""}}const Gv=new Oe,Ft=document.getElementById("sign-in"),Vs=document.getElementById("sign-out"),Bo=document.getElementById("user");Bo.innerHTML=localStorage.getItem("user");const Wv=window.location.href.toString();localStorage.getItem("user")&&(Vs.classList.remove("display-none"),Ft.classList.add("display-none"),Ft.style.display="none");const Kv=async()=>{await Uy(Uo,Gv).then(n=>{Oe.credentialFromResult(n).accessToken;const t=n.user;localStorage.user=t.email,Bo.innerHTML=localStorage.getItem("user"),Vs.classList.remove("display-none"),Ft.classList.add("display-none"),Ft.style.display="none",wh()}).catch(n=>{const e=n.message;console.log(e),Oe.credentialFromError(n)})},Qv=async()=>{await yy(Uo).then(()=>{Bo.innerHTML="",localStorage.removeItem("user"),Wv.slice(-14)===favorites.html&&fs()}).catch(n=>{console.log(n.message)}),Vs.classList.add("display-none"),Ft.classList.remove("display-none"),Ft.style.display="flex",localStorage.removeItem("favorites")};Ft.addEventListener("click",Kv);Vs.addEventListener("click",Qv);const Rh=document.querySelector(".form-js"),Jv=document.querySelector(".pagination-numbers");Rh.addEventListener("submit",Xv);async function Xv(n){n.preventDefault();const e=n.target.elements.search.value.trim();if(!e)return;let{categoryName:t}=JSON.parse(localStorage.getItem("infoRequest")),r=t.toLocaleLowerCase().replaceAll(" ","");r==="bodyparts"&&(r="bodypart");const s={[r]:e,page:1,limit:10};try{he.open();const o=await Tt.getByFilterCategory(s);he.open(),o.results.length||It.info("Nothing was found for this query"),Jv.innerHTML="";const{totalPages:a}=o;Wi(a,s),Qi(1),Rh.reset(),Hi(o)}catch(o){console.log(o)}}const Sh=document.querySelector("#subscribe-form"),yi=Sh.querySelector("#email");Sh.addEventListener("submit",Yv);async function Yv(n){n.preventDefault();const{value:e}=yi;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){It.info("Enter the following sample email - 'test@gmail.com'"),yi.value="";return}try{he.open();const r=await Tt.addSubscription({email:e});he.close(),It.success(r.message)}catch(r){console.log(r)}finally{yi.value=""}}const ps={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",Zv);async function Zv(){const n=localStorage.getItem("quote");if(n){const e=new Date().toDateString(),{date:t,quote:r,author:s}=JSON.parse(n);e!==t?cl():(ps.quoteText.innerHTML=r,ps.quoteAuthor.innerHTML=s)}else cl()}async function cl(){he.open();const n=await Tt.getQuotes();he.close();const{author:e,quote:t}=n,r={author:e,quote:t,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(r)),ps.quoteText.innerHTML=t,ps.quoteAuthor.innerHTML=e}function eE(){const n=document.createElement("button");n.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const t=document.createElementNS("http://www.w3.org/2000/svg","use");t.setAttributeNS("http://www.w3.org/1999/xlink","href",`${ce}#icon-arrow`),e.appendChild(t),n.appendChild(e),n.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?n.classList.remove("hidden"):n.classList.add("hidden")}),document.body.appendChild(n)}eE();
