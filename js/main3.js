"use strict"

const logoutBtn = document.querySelector('#logoutBtn');
let accountsArr = JSON.parse(localStorage.getItem("accounts"));

logoutBtn.addEventListener('mouseup', function () {
    for (let i = 0; i < accountsArr.length; i++) {
        delete accountsArr[i]['active'];
    }
    localStorage.setItem('accounts', JSON.stringify(accountsArr));
    window.open("./index.html", '_self');
})

for (let i = 0; i < accountsArr.length; i++) {
    if (accountsArr[i].active) {
        document.querySelector('h1').innerText = `Welcome, ${accountsArr[i].name}!`;
    }
}