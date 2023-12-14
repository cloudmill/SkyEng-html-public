(()=>{var e,t={720:(e,t,a)=>{"use strict";a(490);var r=a(638);r((function(){r(".select__select").each((function(){var e=r(this),t=e.closest(".select-wrapper"),a=getComputedStyle(t[0]),o=r(this).data("select-placeholder");"static"===a.position&&t.css("position","relative"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:o,dropdownAutoWidth:!0}),e.on("select2:open",(function(e){t.css("z-index","100000");var a="scroll.select2";r(e.target).parents().off(a),r(window).off(a);var o=t.find(".select2-dropdown");o.hide();var s=setTimeout((function(){o.slideDown({duration:500}),clearTimeout(s)}),0)})),e.on("select2:closing",(function(a){a.preventDefault();var r=t.find(".select2-dropdown"),s=setTimeout((function(){t.css("z-index","");var a=t.find(".select2");a.addClass("closing"),a.removeClass("select2-container--open"),r.slideUp(500,(function(){var a=setTimeout((function(){e.select2("destroy"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:o,dropdownAutoWidth:!0}),e.removeClass("closing"),t.css("z-index",""),clearTimeout(a)}),300)})),clearTimeout(s)}),0)}))}))}));a(563);var o=a(419),s=a.n(o),n=a(638);document.addEventListener("DOMContentLoaded",(function(){n("form").parsley(),s()({mask:"+7 (999) 999-99-99",showMaskOnHover:!1}).mask("[data-mask-phone]"),window.Parsley.addValidator("phoneRequired",{validateString:function(e){return null!=e&&11===e.replace(/\D/g,"").length},messages:{ru:"Пожалуйста, введите полный номер телефона."}}),n("[data-mask-phone]").attr("data-parsley-phone-required",""),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Введите адрес электронной почты",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Введите буквенно-цифровое значение"},notblank:"Это поле должно быть заполнено",required:"Заполните поле",pattern:"Только кириллица",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Минимум %s символов",maxlength:"Максимум %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Пароли не совпадают"}),Parsley.setLocale("ru");var e=document.querySelectorAll("[data-step-form]"),t=document.querySelectorAll("[data-steps-back]");function a(e,t){document.querySelector('[data-steps-text="'.concat(t,'"]')).textContent="Шаг ".concat(e," из 2")}e.forEach((function(e,t){e.addEventListener("submit",(function(t){t.preventDefault();var r=e.dataset.stepForm;r%2!=0?(n('[data-step-form="'.concat(r,'"]')).fadeOut(500),setTimeout((function(){n('[data-step-form="'.concat(+r+1,'"]')).fadeIn(500)}),500),a(2,r),n('[data-steps-back="'.concat(r,'"]')).removeClass("hidden")):(n('[data-step-form="'.concat(r,'"]')).fadeOut(500),n('[data-steps-top="'.concat(r,'"]')).fadeOut(500),setTimeout((function(){n('[data-from-check="'.concat(r,'"]')).removeClass("hidden")}),500),4==r&&(n("[data-pretext]").fadeOut(500),setTimeout((function(){n("[data-aftertext]").fadeIn(500)}),500)))}))})),t.forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset.stepsBack;n('[data-step-form="'.concat(+t+1,'"]')).fadeOut(500),setTimeout((function(){n('[data-step-form="'.concat(t,'"]')).fadeIn(500)}),500),a(1,t),e.classList.add("hidden")}))}))}));var i=a(904),c=a(90),d=a(638);document.addEventListener("DOMContentLoaded",(function(){var e,t=new i.Z(".text-slider",{speed:100,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,allowTouchMove:!1,loop:!0}),a=new i.Z(".img-slider",{modules:[c.W_,c.tl],speed:1e3,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,allowTouchMove:!0,loop:!0,breakpoints:{1024:{allowTouchMove:!1}},pagination:{el:".education-slider__pagination",type:"bullets",clickable:!0},navigation:{nextEl:".education-slider__btn.right",prevEl:".education-slider__btn.left"},on:{slideChange:function(){var r=a.realIndex;if(t.activeIndex=r,t.updateSlidesClasses(),t.update(),r>0)for(var o=0;o<r;)d(e[o]).addClass("swiper-pagination-bullet-active"),o+=1;0==r&&(d(e).each((function(){d(e[undefined]).removeClass("swiper-pagination-bullet-active")})),d(e[0]).addClass("swiper-pagination-bullet-active"))}}});e=d(".swiper-pagination-bullet")}));a(887);var l=a(667),u=a(357);l.p8.registerPlugin(u.i);var p,g=document.querySelector(".body"),m=document.querySelector(".bvi-open"),f=document.querySelectorAll("[data-gsap]");console.log(p),g.classList.contains("bvi-active")?setTimeout((function(){}),1e3):g.classList.contains("bvi-active")||(l.p8.from("[data-gsap=data-card1]",{scrollTrigger:{trigger:"[data-gsap=data-card1]",markers:!0,start:"-50% center"},scale:.8,opacity:0,transformOrigin:"center left",duration:.5,ease:"power1.out"}),l.p8.from("[data-gsap=data-card2]",{scrollTrigger:{trigger:"[data-gsap=data-card2]",markers:!0,start:"-50% center"},scale:.8,opacity:0,transformOrigin:"center right",duration:.5,ease:"power1.out"}),l.p8.from("[data-gsap=data-card3]",{scrollTrigger:{trigger:"[data-gsap=data-card3]",markers:!0,start:"-50% center"},scale:.8,opacity:0,transformOrigin:"center left",duration:.5,ease:"power1.out"}),l.p8.from("[data-gsap=data-card4]",{scrollTrigger:{trigger:"[data-gsap=data-card4]",markers:!0,start:"-50% center"},scale:.8,opacity:0,transformOrigin:"center right",duration:.5,ease:"power1.out"}),l.p8.from("[data-gsap=data-offer]",{scrollTrigger:{trigger:"[data-gsap=data-card4]",markers:!0,start:"50% center"},y:"60%",opacity:0,duration:.5,ease:"power1.out"}),l.p8.from("[data-gsap=data-premium-card]",{scrollTrigger:{trigger:"[data-gsap=data-premium-card]",markers:!0,start:"top center"},opacity:0,duration:1.5,ease:"power1.out"}),l.p8.from("[data-gsap=data-premium-img]",{scrollTrigger:{trigger:"[data-gsap=data-premium-card]",markers:!0,start:"top center"},x:"-50%",opacity:0,scale:0,duration:.5,ease:"power1.out"}),l.p8.from("[data-gsap=data-premium-title]",{scrollTrigger:{trigger:"[data-gsap=data-premium-card]",markers:!0,start:"top center"},x:"50%",opacity:0,scale:0,duration:.5,delay:.75,ease:"power1.out"}),l.p8.from("[data-gsap=data-premium-li]",{scrollTrigger:{trigger:"[data-gsap=data-premium-card]",markers:!0,start:"top center"},y:"50%",opacity:0,duration:.5,delay:1.5,ease:"power1.out",stagger:.25}),l.p8.from("[data-gsap=data-premium-btn]",{scrollTrigger:{trigger:"[data-gsap=data-premium-card]",markers:!0,start:"top center"},scale:0,opacity:0,duration:1.25,delay:2.75,ease:"bounce.out"}),m.addEventListener("click",(function(e){f.forEach((function(e){e.removeAttribute("data-gsap"),e.removeAttribute("style")}))})))},887:(e,t,a)=>{var r=a(638),o=r("[data-burger-btn]"),s=r("[data-mobile-menu]"),n=r(".body");o.on("click",(function(){o.toggleClass("show"),s.toggleClass("show"),n.toggleClass("lock")}))}},a={};function r(e){var o=a[e];if(void 0!==o)return o.exports;var s=a[e]={exports:{}};return t[e].call(s.exports,s,s.exports,r),s.exports}r.m=t,e=[],r.O=(t,a,o,s)=>{if(!a){var n=1/0;for(l=0;l<e.length;l++){for(var[a,o,s]=e[l],i=!0,c=0;c<a.length;c++)(!1&s||n>=s)&&Object.keys(r.O).every((e=>r.O[e](a[c])))?a.splice(c--,1):(i=!1,s<n&&(n=s));if(i){e.splice(l--,1);var d=o();void 0!==d&&(t=d)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[a,o,s]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var o,s,[n,i,c]=a,d=0;if(n.some((t=>0!==e[t]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var l=c(r)}for(t&&t(a);d<n.length;d++)s=n[d],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(l)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var o=r.O(void 0,[957,532],(()=>r(720)));o=r.O(o)})();