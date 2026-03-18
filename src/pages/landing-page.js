// show login Choice Popup
(() => {

    let isOpen = false;

    const loginButton = document.getElementById("loginButton");
    const logInPopup = document.getElementById("loginChoicePopup");

    loginButton.addEventListener("click", () => {
        if(!isOpen) {
            logInPopup.classList.remove("opacity-0");
            logInPopup.classList.add("opacity-100");
            isOpen = true;
            return;
        }
        logInPopup.classList.remove("opacity-100");
        logInPopup.classList.add("opacity-0");
        isOpen = false;
    });

}) ();

// login Choice Popup position
(() => {
    
    const loginButton = document.getElementById("loginButton");
    const logInPopup = document.getElementById("loginChoicePopup");

    const loginButtonHeight = loginButton.getBoundingClientRect().height;

    logInPopup.style.top = loginButtonHeight + 1 + "px";

}) ();