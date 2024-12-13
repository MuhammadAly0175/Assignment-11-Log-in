"use strict"

const signupNameInput = document.querySelector('#exampleInputName2');
const signupEmailInput = document.querySelector('#exampleInputEmail2');
const signupPasswrodInput = document.querySelector('#exampleInputPassword2');
const signupBtn = document.querySelector('#signupBtn');
const success = document.querySelector('#success');
let accounts;

if (localStorage.getItem('accounts') > 0) {
    accounts = JSON.parse(localStorage.getItem('accounts'));
} else {
    accounts = [];
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

signupBtn.addEventListener('click', function () {
    let emailInUse;
    if (signupNameInput.value.length >= 2 && validateEmail(signupEmailInput.value) && signupPasswrodInput.value.length >= 6
        && signupPasswrodInput.value.includes(' ') != true) {
        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].email === signupEmailInput.value) {
                emailInUse = 'yes';
            }
        }
        if (emailInUse != 'yes') {
            let account = {
                name: signupNameInput.value,
                email: signupEmailInput.value,
                password: signupPasswrodInput.value
            };
            accounts.push(account);
            localStorage.setItem('accounts', JSON.stringify(accounts));
            signupNameInput.value = '';
            signupEmailInput.value = '';
            signupPasswrodInput.value = '';
            success.innerText = 'Your account has been registered.';
            signupNameInput.addEventListener('keydown', function () {
                success.innerText = '';
            });
            signupEmailInput.addEventListener('keydown', function () {
                success.innerText = '';
            });
            signupPasswrodInput.addEventListener('keydown', function () {
                success.innerText = '';
            });
        } else {
            alert('This email is already in use, please choose a different one.')
        }
    } else {
        alert('Make sure that:\n1-The name contains 2 letters or more.\n2-The email is valid.\n3-the password contains 6 characters or more excluding spaces');
    };
})