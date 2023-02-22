
const selectSingle = document.querySelector('.__select');
const selectSingle_title = document.querySelectorAll('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.forEach(elem => {
    elem.addEventListener('click', (e) => {
        const parent = e.target.parentElement;
        if ('active' === parent.getAttribute('data-state')) {
            parent.setAttribute('data-state', '');
        } else {
            parent.setAttribute('data-state', 'active');
        }
    });
})

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
};

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Timer

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function CountdownTimer(elm, tl, mes) {
    this.initialize.apply(this, arguments);
}
CountdownTimer.prototype = {
    initialize: function (elm, tl, mes) {
        this.elem = document.getElementById(elm);
        this.tl = tl;
        this.mes = mes;
    }, countDown: function () {
        let timer = '';
        let today = new Date();
        let hour = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        let min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
        let sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
        let me = this;

        if ((this.tl - today) > 0) {
            timer += '<span class="number-wrapper"><div class="caption">Часов</div><span class="number hour">' + this.addZero(hour) + '</span></span>';
            timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">Минут</div><span class="number min">' + this.addZero(min) + '</span></span><span class="number-wrapper"><div class="line"></div><div class="caption">Секунд</div><span class="number sec">' + this.addZero(sec) + '</span></span>';
            this.elem.innerHTML = timer;
            tid = setTimeout(function () { me.countDown(); }, 10);
        } else {
            this.elem.innerHTML = this.mes;
            return;
        }
    }, addZero: function (num) { return ('0' + num).slice(-2); }
}
function CDT() {

    // Set countdown limit
    let timeLimitValue;
    if (getCookie('timerLimit')) {
        timeLimitValue = getCookie('timerLimit');
    } else {
        let сurrentTime = new Date();
        сurrentTime.setMinutes(сurrentTime.getMinutes() + 30);
        document.cookie = "timerLimit=" + сurrentTime + "; max-age=1800";
        timeLimitValue = сurrentTime;
    }
    let tl = new Date(timeLimitValue);

    // You can add time's up message here
    let timer = new CountdownTimer('CDT', tl, '<span class="number-wrapper number-wrapper_end"><div class="line"></div><span class="number end">Акция закончилась</span></span>');
    timer.countDown();
}
window.onload = function () {
    CDT();
}
