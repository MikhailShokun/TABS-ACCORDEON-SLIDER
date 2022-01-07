// -------------tabs-------------

let tab = function() {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;
    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
};

tab();

// --------------accordeon------------------

let accord = function() {

    function initAccordeon() {
        let firstSectionBodyHeight = document.querySelector('.accordeon__item .accordeon__body > *').clientHeight

        document.querySelector('.accordeon__item .accordeon__body').style.maxHeight = firstSectionBodyHeight + 'px'
    }

    initAccordeon()

    let accordeonHeaderClickHandler = function(e) {
        document.querySelectorAll('.accordeon__item').forEach(function(section) {
            section.querySelector('.accordeon__body').style.maxHeight = '0px'
        })

        let accordeonItem = e.target.closest('.accordeon__item')
        let insideElHeight = accordeonItem.querySelector('.accordeon__body > *').clientHeight

        accordeonItem.querySelector('.accordeon__body').style.maxHeight = insideElHeight + 'px'
    }
    document.querySelectorAll('.accordeon__item').forEach(function(section) {
        section.addEventListener('click', accordeonHeaderClickHandler)
    })
};

accord();

// --------------slider-V1--------------


let images = document.querySelectorAll('.infinity-slider img');
let current = 0;


function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0');
}



document.querySelector('.slider__btn-right').onclick = function() {
    if (current + 1 == images.length) {
        current = 0;
    } else {
        current++;
    }
    slider();
};


document.querySelector('.slider__btn-left').onclick = function() {
    if (current - 1 == -1) {
        current = images.length - 1;
    } else {
        current--;
    }
    slider();
};



document.querySelector('.infinity-slider').onclick = function() {
    if (current + 1 == images.length) {
        current = 0;
    } else {
        current++;
    }
    slider();
};