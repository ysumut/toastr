"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),toastr=function(){function e(t){return _classCallCheck(this,e),this.container=null,this.listener=null,this.toastId=0,this.toastType={error:"error",info:"info",success:"success",warning:"warning"},this.previousToast=void 0,this.options=t,this}return _createClass(e,[{key:"getContainer",value:function(e,t){return"undefined"==typeof e&&(e=this.getOptions()),this.container=document.getElementById(e.containerId),null!==this.container?this.container:(t&&(this.container=this.createContainer(e)),this.container)}},{key:"error",value:function(e,t,i){return this.notify({type:this.toastType.error,iconClass:this.getOptions().iconClasses.error,message:e,optionsOverride:i,title:t})}},{key:"info",value:function(e,t,i){return this.notify({type:this.toastType.info,iconClass:this.getOptions().iconClasses.info,message:e,optionsOverride:i,title:t})}},{key:"success",value:function(e,t,i){return this.notify({type:this.toastType.success,iconClass:this.getOptions().iconClasses.success,message:e,optionsOverride:i,title:t})}},{key:"warning",value:function(e,t,i){return this.notify({type:this.toastType.warning,iconClass:this.getOptions().iconClasses.warning,message:e,optionsOverride:i,title:t})}},{key:"subscribe",value:function(e){this.listener=e}},{key:"clear",value:function(e,t){var i=this.getOptions();null===this.container&&this.getContainer(i,!1),this.clearToast(e,i,t)||this.clearContainer(i)}},{key:"remove",value:function(e){var t=this.getOptions();return"undefined"==typeof this.container&&this.getContainer(t,!1),"undefined"==typeof e&&e.matches(":focus")?void this.removeToast(e):void(this.container.hasChildNodes()||this.container.remove())}},{key:"clearContainer",value:function(e){if(this.container)for(var t=this.container.children.length,i=t-1;i>=0;--i){var n=this.container.children[i];this.clearToast(n,e)}}},{key:"clearToast",value:function(e,t,i){if("undefined"!=typeof e){var n=i&&i.force?i.force:!1;if(n||!e.matches(":focus"))return this.removeToast(e),!0}return!1}},{key:"removeToast",value:function(e){"undefined"==typeof this.container&&(this.container=this.getContainer()),this.isElementVisible(e)||(e.parentNode.removeChild(e),e=null,0===this.container.childNodes.length&&this.container.parentNode&&(this.container.parentNode.removeChild(this.container),this.previousToast=void 0))}},{key:"createContainer",value:function(e){return this.container=document.createElement("div"),this.container.classList.add(e.positionClass),this.container.setAttribute("id",e.containerId),this.container.setAttribute("aria-live","polite"),this.container.setAttribute("role","alert"),document.querySelector(e.target).appendChild(this.container),this.container}},{key:"getDefaultOptions",value:function(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:1e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:"CLOSE",newestOnTop:!0,preventDuplicates:!1,progressBar:!1}}},{key:"publish",value:function(e){"undefined"!=typeof this.listener&&null!==this.listener&&this.listener(e)}},{key:"notify",value:function(e){function t(){o(y),r(L),c(x),l(H),u()}function i(){w.addEventListener("mouseover",v),w.addEventListener("mouseout",p),!g.onclick&&g.tapToDismiss&&w.click(h),g.closeButton&&H&&H.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),h(!0)}),g.onclick&&w.click(function(){g.onclick(),h()})}function n(){console.log("Appending toast to container.",w),a.call(this),"function"==typeof g.onShown&&g.onShown();var e=function(e){console.log("Toast animation in completed.",e),g.timeOut>0&&(T=setTimeout(h,g.timeOut),D.maxHideTime=parseFloat(g.timeOut),D.hideEta=(new Date).getTime()+D.maxHideTime,g.progressBar&&(D.intervalId=setInterval(m,10)))};s(w,e)}function s(e,t){var i=e.animate([{opacity:0},{opacity:1}],{duration:g.showDuration,iterations:1,delay:0});i.onfinish=t}function o(e){if("undefined"!=typeof g.iconClass){k.classList.add("toast-icon");var t="";switch(e){case"toast-info":t="<i class='fa fa-info-circle'></i>";break;case"toast-warn":t="<i class='fa fa-exclamation-triangle'></i>";break;case"toast-error":t="<i class='fa fa-exclamation-circle'></i>";break;case"toast-success":t="<i class='fa fa-check'></i>"}k.innerHTML=t,w.appendChild(k),w.classList.add(g.toastClass)}}function a(){var e=this.getContainer();if(g.newestOnTop){var t=e.firstChild;e.insertBefore(w,t)}else e.appendChild(w);this.container=e}function r(e){"undefined"!=typeof e&&(O.innerHTML=e,O.classList.add(g.titleClass),w.appendChild(O))}function c(e){if(console.log("message recv as",e),"undefined"!=typeof e){var t=document.createElement("div");t.innerHTML=e,b.appendChild(t),b.classList.add(g.messageClass),w.appendChild(b)}}function l(e){console.log(e),"undefined"!=typeof e&&(e.classList.add("toast-close-button"),e.setAttribute("role","button"),e.setAttribute("type","button"),w.appendChild(e))}function u(){"undefined"!=typeof g.progressBar&&g.progressBar&&(E.classList.add("toast-progress"),w.appendChild(E))}function d(e,t){if(e.preventDuplicates){if(t.message===this.previousToast)return!0;this.previousToast=t.message}return!1}function h(e){if(!w.matches(":focus")||e){clearTimeout(D.intervalId),console.log("Hiding toast now.",w);{this.removeToast}"function"==typeof g.onHidden&&g.onHidden();var t=function(e){console.log("Toast is now hiding.",e);var t=w.parentNode;null!==t&&(t.removeChild(w),t.hasChildNodes()||(C.parentNode.removeChild(C),this.previousToast=void 0)),w=null};f(w,t)}}function f(e,t){var i=e.animate([{opacity:1},{opacity:0}],{duration:g.hideDuration,iterations:1,delay:0});i.onfinish=t}function p(){(g.timeOut>0||g.extendedTimeOut>0)&&(T=setTimeout(h,g.extendedTimeOut),D.maxHideTime=parseFloat(g.extendedTimeOut),D.hideEta=(new Date).getTime()+D.maxHideTime)}function v(){clearTimeout(T),D.hideEta=0}function m(){var e=(D.hideEta-(new Date).getTime())/D.maxHideTime*100;E.style.width=e+"%"}var g=this.getOptions(),y=e.iconClass||g.iconClass;if("undefined"!=typeof e.optionsOverride&&(g=this.extend(g,e.optionsOverride),y=e.optionsOverride.iconClass||y),!d.call(this,g,e)){this.toastId++;var C=this.getContainer(g,!0),T=null,w=document.createElement("div");w.classList.add(y);var O=document.createElement("div"),b=document.createElement("div"),k=document.createElement("div"),E=document.createElement("div"),H=document.createElement("div");H.innerHTML=g.closeHtml;var x=e.message,L=e.title,D={intervalId:null,hideEta:null,maxHideTime:null},I={toastId:this.toastId,state:"visible",startTime:new Date,options:g,map:e};return t.call(this),n.call(this),i(),this.publish(I),g.debug&&console&&console.log(I),w}}},{key:"getOptions",value:function(){return this.extend(this.getDefaultOptions(),this.options)}},{key:"isElementVisible",value:function(e){return e.offsetWidth>0&&e.offsetHeight>0}},{key:"extend",value:function(e,t){var i,n={};for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}}]),e}();"undefined"!=typeof window&&(window.toastr=toastr);
//# sourceMappingURL=toastr.js.map