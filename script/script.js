"use strict";

const formRegistration = document.getElementById('form-registration');
const passwordRegistration = document.getElementById('password-registration');
const emailRegistration = document.getElementById('email-registration');
const checkboxRegistration = document.getElementById('checkbox1');

const buttonSwitchAuth = document.getElementById('switch-auth');
const buttonSwitchSignIn = document.getElementById('switch-sign-in');

const registration = document.getElementById('registration');
const signIn = document.getElementById('sign-in');
const formSignIn = document.getElementById('form-sign-in');
const emailSignIn = document.getElementById('email-sign-in');
const passwordSignIn = document.getElementById('password-sign-in');
const checkboxSignIn = document.getElementById('checkbox2');

//Форма Регистрация

function setErrorClass(element, errorMassage) {
    const parent = element.closest('.form-fieldset');
    const errorTextContainer = parent.querySelector('.error-message');
    parent.classList.add('validate-error');
    errorTextContainer.innerHTML = errorMassage;
};

function clearErrorClass(element) {
    const parent = element.closest('.form-fieldset');
    const errorTextContainer = parent.querySelector('.error-message');
    parent.classList.remove('validate-error');
    errorTextContainer.innerHTML = '';
};

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValue = re.test(String(email).toLowerCase());
    return isValue;
};

function checkAllLength(element) {
    if (element.length > 0) {
        return true;
    } else {
        return false;
    }
};

function checkPasswordLength(password) {
    if (password.length >= 8) {
        return true;
    } else {
        return false;
    }
};

formRegistration.addEventListener('submit', function (event) {
    event.preventDefault();
    let emailValid = false;
    let passValid = false;
    let confirmValid = false;

    if (!checkAllLength(emailRegistration.value)) {
        setErrorClass(emailRegistration, 'Поле обязательно для заполнения');
        emailValid = false;
    } else if (!validateEmail(emailRegistration.value)) {
        setErrorClass(emailRegistration, 'Email невалидный');
        emailValid = false;
    } else {
        clearErrorClass(emailRegistration);
        emailValid = true;
    };

    if (!checkAllLength(passwordRegistration.value)) {
        setErrorClass(passwordRegistration, 'Поле обязательно для заполнения');
        passValid = false;
    } else if (!checkPasswordLength(passwordRegistration.value)) {
        setErrorClass(passwordRegistration, 'Пароль должен содержать как минимум 8 символов');
        passValid = false;
    } else {
        clearErrorClass(passwordRegistration);
        passValid = true;

    };

    if (checkboxRegistration.checked) {
        clearErrorClass(checkboxRegistration);
        confirmValid = true;
    } else {
        setErrorClass(checkboxRegistration, 'Поле обязательно для заполнения');
        confirmValid = false;
    }

    if (emailValid && passValid && confirmValid) {
        const email = emailRegistration.value;
        const pass = passwordRegistration.value;
        console.log('успешная регистрация');
        localStorage.setItem('auth', JSON.stringify({ email, pass }));
    }
});

//Переключение форм

buttonSwitchAuth.addEventListener('click', function (event) {
    selfMakeInvisible(registration, signIn);

});

buttonSwitchSignIn.addEventListener('click', function (event) {
    selfMakeInvisible(signIn, registration);
});

function selfMakeInvisible(self, other) {
    self.classList.add('hide');
    other.classList.remove('hide');
};

//Форма Вход

formSignIn.addEventListener('submit', function (event) {
    event.preventDefault();

    let emailValid = false;
    let passValid = false;
    let confirmValid = false;

    if (!checkAllLength(emailSignIn.value)) {
        setErrorClass(emailSignIn, 'Поле обязательно для заполнения');
        passValid = false;
    } else {
        clearErrorClass(emailSignIn);
        passValid = true;

    };

    if (!checkAllLength(passwordSignIn.value)) {
        setErrorClass(passwordSignIn, 'Поле обязательно для заполнения');
        passValid = false;
    } else {
        clearErrorClass(passwordSignIn);
        passValid = true;

    };

    if (checkboxSignIn.checked) {
        clearErrorClass(checkboxSignIn);
        confirmValid = true;
    } else {
        setErrorClass(checkboxSignIn, 'Поле обязательно для заполнения');
        confirmValid = false;
    };

    const email = emailSignIn.value;
    const pass = passwordSignIn.value;

    const userData = localStorage.getItem('auth');
    const user = JSON.parse(userData);
    console.log(user);

    if (email === user.email && pass === user.pass) {
        location.replace('./user.html');
    } else if (!user || !(email === '' && pass === '')) {
        setErrorClass(emailSignIn, '');
        setErrorClass(passwordSignIn, 'Логин или Пароль неверный');
    };
});