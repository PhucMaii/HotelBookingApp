const toSignUpPageButton = document.querySelector("#signupButton");
const loginPage = document.querySelector('#loginPage');
const signupPage = document.querySelector('#signupPage');

toSignUpPageButton.addEventListener('click', () => {
    signupPage.style.translate = '0';
    loginPage.style.translate = '100%';
})

const toSignInPageButton = document.querySelector('#signinButton');

toSignInPageButton.addEventListener('click', () => {
    signupPage.style.translate = '-100%';
    loginPage.style.translate = '0';

})