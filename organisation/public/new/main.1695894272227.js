const openLink = () => {
    const allDropdown = document.querySelectorAll('.docs__dropdown');

    if(window.innerWidth <= 768) {
        return
    }

    allDropdown.forEach(dropdown => {
        dropdown.onclick = () => {
            dropdown.classList.toggle('open');
            dropdown.parentElement.querySelector('.box__link').classList.toggle('open');
        }
    });

}

const openBlock = () => {
    const allLinks = document.querySelectorAll('.box__link');
    const items = document.querySelectorAll('.docs__body-item');
    const currentLink = document.querySelector('.breadcarms__current')

    if(window.innerWidth <= 768) {
        return
    }

    allLinks.forEach(link => {
        link.onclick = (e) => {
            e.preventDefault();
            document.querySelector('.docs__body').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            currentLink.innerText = link.innerText;
            items.forEach(el => el.style.display = 'none');
            const targetId = link.getAttribute('aria-details');
            const target = document.getElementById(targetId);
            target.style.display = 'block';
        }
    });
}

const mobileShow = () => {
    const links = document.querySelectorAll('.docs__menu-item');
    const breadcarms = document.querySelector('.breadcarms');
    const bodyBlock = document.querySelector('.docs__body');
    const items = document.querySelectorAll('.docs__body-item');
    const currentLink = document.querySelector('.breadcarms__current');
    const back = document.querySelector('.breadcarms__link');
    const menuBlock = document.querySelector('.docs__menu');

    if(window.innerWidth > 768) {
        return
    }

    back.onclick = (e) => {
        e.preventDefault();
        breadcarms.style.display = 'none';
        bodyBlock.style.display = 'none';
        menuBlock.style.display = 'block';
    }

    links.forEach(link => {
        link.onclick = (e) => {
            e.preventDefault();
            breadcarms.style.display = 'block';
            bodyBlock.style.display = 'block';
            document.querySelector('.docs__body').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            currentLink.innerText = link.innerText;
            items.forEach(el => el.style.display = 'none');
            const targetId = link.getAttribute('aria-details');
            const targets = document.querySelectorAll(`.${targetId}`);
            targets.forEach(el => el.style.display = 'block');  
            menuBlock.style.display = 'none';
        }
    });

    window.addEventListener("resize", function() {
        if(window.innerWidth > 768) {
            menuBlock.removeAttribute('style');
            bodyBlock.removeAttribute('style');
            back.onclick = (e) => {
                e.preventDefault();
            }
            links.forEach(link => {
                link.onclick = (e) => {
                    e.preventDefault();
                }
            });
            return
        } else {
            back.onclick = (e) => {
                e.preventDefault();
                breadcarms.style.display = 'none';
                bodyBlock.style.display = 'none';
                menuBlock.style.display = 'block';
            }

            links.forEach(link => {
                link.onclick = (e) => {
                    e.preventDefault();
                    breadcarms.style.display = 'block';
                    bodyBlock.style.display = 'block';
                    document.querySelector('.docs__body').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    currentLink.innerText = link.innerText;
                    items.forEach(el => el.style.display = 'none');
                    const targetId = link.getAttribute('aria-details');
                    const targets = document.querySelectorAll(`.${targetId}`);
                    targets.forEach(el => el.style.display = 'block');  
                    menuBlock.style.display = 'none';
                }
            });
        }
    });  
}
openLink();
openBlock();
mobileShow();

const changeWindowWidth = () => {
        openLink();
        openBlock();
        mobileShow()
}

window.onresize = changeWindowWidth;

    /*
 * jquery.dragscroll v1.0.0
 * author 735126858@qq.com
 * https://github.com/YuTingtao/dragscroll.js
 */
;(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($){
    var methods = {
        init: function(options) {
            var defaults = {
                direction: null,
                onStart: function($this) {},
                onMove: function($this) {},
                onEnd: function($this) {}
            };

            var opt = $.extend({}, defaults, options);

            return this.each(function() {
                var $this = $(this);
                var _dir = opt.direction;
                var _onStart = opt.onStart;
                var _onMove = opt.onMove;
                var _onEnd = opt.onEnd;

                var left0, top0, x0, y0, flag = false;
                // йј ж ‡з‚№е‡»
                $this.on('mousedown', function(e) {
                    e.preventDefault();
                    var e = e || window.event;
                    flag = true;
                    x0 = e.clientX;
                    y0 = e.clientY;
                    left0 = $(this).parent().scrollLeft();
                    top0 = $(this).parent().scrollTop();
                    _onStart && _onStart.call(this, $this);
                });

                // йј ж ‡з§»еЉЁ
                $this.on('mousemove', function(e) {
                    e.preventDefault();
                    var e = e || window.event;
                    if (flag) {
                        setTimeout(function() {
                            var moveX = e.clientX - x0;
                            var moveY = e.clientY - y0;
                            if (_dir == 'scrollLeft') {
                                $this.parent().scrollLeft(left0 - moveX);
                            } else if (_dir == 'scrollTop') {
                                $this.parent().scrollTop(top0 - moveY);
                            } else {
                                $this.parent().scrollLeft(left0 - moveX);
                                $this.parent().scrollTop(top0 - moveY);
                            }
                        }, 10);
                        _onMove && _onMove.call(this, $this);
                    }
                });

                // йј ж ‡жќѕејЂж€–з¦»ејЂ
                $this.on('mouseup mouseleave', function() {
                    if (flag) {
                        _onEnd && _onEnd.call(this, $this);
                    }
                    flag = false;
                });

                // з§»еЉЁз«Ї
                $this.on('touchstart', function(e) {
                    var e = e.originalEvent.targetTouches[0];
                    flag = true;
                    x0 = e.clientX;
                    y0 = e.clientY;
                    left0 = $(this).parent().scrollLeft();
                    top0 = $(this).parent().scrollTop();
                    _onStart && _onStart.call(this, $this);
                });
                $this.on('touchmove', function(e) {
                    e.stopPropagation();
                    var e = e.originalEvent.targetTouches[0];
                    if (flag) {
                        setTimeout(function() {
                            var moveX = e.clientX - x0;
                            var moveY = e.clientY - y0;
                            if (_dir == 'scrollLeft') {
                                $this.parent().scrollLeft(left0 - moveX);
                            } else if (_dir == 'scrollTop') {
                                $this.parent().scrollTop(top0 - moveY);
                            } else {
                                $this.parent().scrollLeft(left0 - moveX);
                                $this.parent().scrollTop(top0 - moveY);
                            }
                        }, 10);
                        _onMove && _onMove.call(this, $this);
                    }
                });
                $this.on('touchend', function(e) {
                    if (flag) {
                        _onEnd && _onEnd.call(this, $this);
                    }
                    flag = false;
                });
            });
        },
        destroy: function() {
            return $(this).each(function() {
                var $this = $(this);
                $this.off('mousedown mousemove mouseup mouseleave');
                $this.off('touchstart touchmove touchend')
            });
        }
    };

    $.fn.dragscroll = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('method ' + method + ' does not exist on jquery.dragscroll.js');
        }
    }
}));


$(function(){
    $('.docs__body-table table').dragscroll({
        direction:'scrollLeft'
    });
});
