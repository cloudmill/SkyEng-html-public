const openLink = () => {
    const allDropdown = document.querySelectorAll('.docs__dropdown');

    if (window.innerWidth <= 768) {
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

    if (window.innerWidth <= 768) {
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

    if (window.innerWidth > 768) {
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
        if (window.innerWidth > 768) {
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