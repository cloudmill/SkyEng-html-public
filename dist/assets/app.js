(()=>{var e,a={720:(e,a,t)=>{"use strict";t(490);var r=t(638);r((function(){r(".select__select").each((function(){var e=r(this),a=e.closest(".select-wrapper"),t=getComputedStyle(a[0]),o=r(this).data("select-placeholder");"static"===t.position&&a.css("position","relative"),e.select2({dropdownParent:a,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:o,dropdownAutoWidth:!0}),e.on("select2:open",(function(e){a.css("z-index","100000");var t="scroll.select2";r(e.target).parents().off(t),r(window).off(t);var o=a.find(".select2-dropdown");o.hide();var s=setTimeout((function(){o.slideDown({duration:500}),clearTimeout(s)}),0)})),e.on("select2:closing",(function(t){t.preventDefault();var r=a.find(".select2-dropdown"),s=setTimeout((function(){a.css("z-index","");var t=a.find(".select2");t.addClass("closing"),t.removeClass("select2-container--open"),r.slideUp(500,(function(){var t=setTimeout((function(){e.select2("destroy"),e.select2({dropdownParent:a,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:o,dropdownAutoWidth:!0}),e.removeClass("closing"),a.css("z-index",""),clearTimeout(t)}),300)})),clearTimeout(s)}),0)}))}))}));t(563);var o=t(419),s=t.n(o),n=t(638);document.addEventListener("DOMContentLoaded",(function(){n("form").parsley(),s()({mask:"+7 (999) 999-99-99",showMaskOnHover:!1}).mask("[data-mask-phone]"),window.Parsley.addValidator("phoneRequired",{validateString:function(e){return null!=e&&11===e.replace(/\D/g,"").length},messages:{ru:"Пожалуйста, введите полный номер телефона."}}),n("[data-mask-phone]").attr("data-parsley-phone-required",""),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Введите адрес электронной почты",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Введите буквенно-цифровое значение"},notblank:"Это поле должно быть заполнено",required:"Заполните поле",pattern:"Только кириллица",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Минимум %s символов",maxlength:"Максимум %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Пароли не совпадают"}),Parsley.setLocale("ru");var e=document.querySelectorAll("[data-step-form]"),a=document.querySelectorAll("[data-steps-back]");function t(e,a){document.querySelector('[data-steps-text="'.concat(a,'"]')).textContent="Шаг ".concat(e," из 2")}e.forEach((function(e,a){e.addEventListener("submit",(function(a){a.preventDefault();var r=e.dataset.stepForm;r%2!=0?(n('[data-step-form="'.concat(r,'"]')).fadeOut(500),setTimeout((function(){n('[data-step-form="'.concat(+r+1,'"]')).fadeIn(500)}),500),t(2,r),n('[data-steps-back="'.concat(r,'"]')).removeClass("hidden")):(n('[data-step-form="'.concat(r,'"]')).fadeOut(500),n('[data-steps-top="'.concat(r,'"]')).fadeOut(500),setTimeout((function(){n('[data-from-check="'.concat(r,'"]')).removeClass("hidden")}),500),4==r&&(n("[data-pretext]").fadeOut(500),setTimeout((function(){n("[data-aftertext]").fadeIn(500)}),500)))}))})),a.forEach((function(e){e.addEventListener("click",(function(){var a=e.dataset.stepsBack;n('[data-step-form="'.concat(+a+1,'"]')).fadeOut(500),setTimeout((function(){n('[data-step-form="'.concat(a,'"]')).fadeIn(500)}),500),t(1,a),e.classList.add("hidden")}))}))}));var i=t(904),d=t(90),c=t(638);document.addEventListener("DOMContentLoaded",(function(){var e,a=new i.Z(".text-slider",{speed:100,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,allowTouchMove:!1,loop:!0}),t=new i.Z(".img-slider",{modules:[d.W_,d.tl],speed:1e3,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,allowTouchMove:!0,loop:!0,breakpoints:{1024:{allowTouchMove:!1}},pagination:{el:".education-slider__pagination",type:"bullets",clickable:!0},navigation:{nextEl:".education-slider__btn.right",prevEl:".education-slider__btn.left"},on:{slideChange:function(){var r=t.realIndex;if(a.activeIndex=r,a.updateSlidesClasses(),a.update(),r>0)for(var o=0;o<r;)c(e[o]).addClass("swiper-pagination-bullet-active"),o+=1;0==r&&(c(e).each((function(){c(e[undefined]).removeClass("swiper-pagination-bullet-active")})),c(e[0]).addClass("swiper-pagination-bullet-active"))}}});e=c(".swiper-pagination-bullet")}));t(887);var l=t(667),p=t(357);l.p8.registerPlugin(p.i);var u=document.querySelector(".body"),m=document.querySelector(".bvi-open"),g=document.querySelectorAll("[data-gsap]");u.classList.contains("bvi-active")?(console.info("ASUYDUYDUSYDUSYDUSDYSUDYSUDY"),l.p8.remove("[data-gsap=data-card1]"),l.p8.remove("[data-gsap=data-card2]"),l.p8.remove("[data-gsap=data-card3]"),l.p8.remove("[data-gsap=data-card4]"),l.p8.remove("[data-gsap=data-offer]"),l.p8.remove("[data-gsap=data-premium-card]"),l.p8.remove("[data-gsap=data-premium-img]"),l.p8.remove("[data-gsap=data-premium-title]"),l.p8.remove("[data-gsap=data-premium-li]"),l.p8.remove("[data-gsap=data-premium-btn]")):u.classList.contains("bvi-active")||(l.p8.from("[data-gsap=data-card1]",{scrollTrigger:{trigger:"[data-gsap=data-card1]",markers:!0,start:"-50% center"},scale:.8,opacity:0,transformOrigin:"center left",duration:.5,ease:"power1.out"}),l.p8.from("[data-gsap=data-card2]",{scrollTrigger:{trigger:"[data-gsap=data-card2]",markers:!0,start:"-50% center"},scale:.8,opacity:0,transformOrigin:"center right",duration:.5,ease:"power1.out"}),l.p8.from("[data-gsap=data-card3]",{scrollTrigger:{trigger:"[data-gsap=data-card3]",markers:!0,start:"-50% center"},scale:.8,opacity:0,transformOrigin:"center left",duration:.5,ease:"power1.out"}),l.p8.from("[data-gsap=data-card4]",{scrollTrigger:{trigger:"[data-gsap=data-card4]",markers:!0,start:"-50% center"},scale:.8,opacity:0,transformOrigin:"center right",duration:.5,ease:"power1.out"}),l.p8.from("[data-gsap=data-offer]",{scrollTrigger:{trigger:"[data-gsap=data-card4]",markers:!0,start:"50% center"},y:"60%",opacity:0,duration:.5,ease:"power1.out"}),l.p8.from("[data-gsap=data-premium-card]",{scrollTrigger:{trigger:"[data-gsap=data-premium-card]",markers:!0,start:"top center"},opacity:0,duration:1.5,ease:"power1.out"}),l.p8.from("[data-gsap=data-premium-img]",{scrollTrigger:{trigger:"[data-gsap=data-premium-card]",markers:!0,start:"top center"},x:"-50%",opacity:0,scale:0,duration:.5,ease:"power1.out"}),l.p8.from("[data-gsap=data-premium-title]",{scrollTrigger:{trigger:"[data-gsap=data-premium-card]",markers:!0,start:"top center"},x:"50%",opacity:0,scale:0,duration:.5,delay:.75,ease:"power1.out"}),l.p8.from("[data-gsap=data-premium-li]",{scrollTrigger:{trigger:"[data-gsap=data-premium-card]",markers:!0,start:"top center"},y:"50%",opacity:0,duration:.5,delay:1.5,ease:"power1.out",stagger:.25}),l.p8.from("[data-gsap=data-premium-btn]",{scrollTrigger:{trigger:"[data-gsap=data-premium-card]",markers:!0,start:"top center"},scale:0,opacity:0,duration:1.25,delay:2.75,ease:"bounce.out"}),m.addEventListener("click",(function(e){g.forEach((function(e){e.removeAttributeNS("data-gsap"),e.removeAttributeNS("style")}))})))},887:(e,a,t)=>{var r=t(638),o=r("[data-burger-btn]"),s=r("[data-mobile-menu]"),n=r(".body");o.on("click",(function(){o.toggleClass("show"),s.toggleClass("show"),n.toggleClass("lock")}))}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var s=t[e]={exports:{}};return a[e].call(s.exports,s,s.exports,r),s.exports}r.m=a,e=[],r.O=(a,t,o,s)=>{if(!t){var n=1/0;for(l=0;l<e.length;l++){for(var[t,o,s]=e[l],i=!0,d=0;d<t.length;d++)(!1&s||n>=s)&&Object.keys(r.O).every((e=>r.O[e](t[d])))?t.splice(d--,1):(i=!1,s<n&&(n=s));if(i){e.splice(l--,1);var c=o();void 0!==c&&(a=c)}}return a}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[t,o,s]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a}),a},r.d=(e,a)=>{for(var t in a)r.o(a,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={143:0,532:0};r.O.j=a=>0===e[a];var a=(a,t)=>{var o,s,[n,i,d]=t,c=0;if(n.some((a=>0!==e[a]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(d)var l=d(r)}for(a&&a(t);c<n.length;c++)s=n[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(l)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})();var o=r.O(void 0,[957,532],(()=>r(720)));o=r.O(o)})();