"use strict"

const loginEmailInput = document.querySelector('#exampleInputEmail1');
const loginpasswordInput = document.querySelector('#exampleInputPassword1');
const loginBtn = document.querySelector('#loginBtn');
let verified;
let accounts;

if (localStorage.getItem('accounts')) {
    accounts = JSON.parse(localStorage.getItem('accounts'));
} else {
    accounts = [];
}

try {
    loginBtn.addEventListener('mouseup', function () {
        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].email === loginEmailInput.value && accounts[i].password === loginpasswordInput.value) {
                accounts[i].active = true;
                localStorage.setItem('accounts', JSON.stringify(accounts));
                window.open("./index3.html", '_self');
                verified = 'yes';
            }
        };
        if (verified != 'yes') {
            alert("The email doesn't exist or the password is wrong.");
        };
    });
}
catch {
}