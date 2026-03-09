// show login Choice Popup
(() => {

    let isOpen = false;

    const loginButton = document.getElementById("loginButton");
    const logInPopup = document.getElementById("loginChoicePopup");

    loginButton.addEventListener("click", () => {
        if(!isOpen) {
            logInPopup.classList.remove("hidden");
            logInPopup.classList.add("flex");
            isOpen = true;
            return;
        }
        logInPopup.classList.add("hidden");
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