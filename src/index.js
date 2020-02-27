/*

-Give selected tabs a background color indication
-Rework dummy logo
-Center content on screen
-Give background image a transition on change

*/

import loadPage from "./pageLoad.js";

import home from "./homeContent";
import menu from "./menuContent";
import contact from "./contactContent";

const mainController = (() => {

    loadPage();

    const bodyElement = document.querySelector("body");
    const tabs = document.querySelectorAll(".navigation ul li");
    const pageInfoContainer = document.querySelector(".information");

    let images = [];

    const preloadImages = () => {

        console.log(tabs)
        
        const tabNames = Array.from(tabs).map(tab => tab.getAttribute("data-tab"));
        
        images = tabNames.map(tabName => {
            const img = new Image();
            img.src = `../dist/img/${tabName}-img.jpg`
            return img;
        })

        console.log(images)

        
    }

    // Changes the background image based on the `content` being displayed on the page
    const changeBackgroundImage = content => {
        bodyElement.style.backgroundImage = `url("../dist/img/${content}-img.jpg")`
    }

    // Clears the "Selected" class from the selected tab
    const clearTabSelected = () => {
        tabs.forEach(tab => tab.classList.remove("nav-selected"));
    }

    // Display new content based on the tab that was clicked
    const switchTab = e => {

        clearTabSelected();

        const tabClicked = e.target;
        const tabClickedID = tabClicked.getAttribute("id");

        tabClicked.classList.toggle("nav-selected")

        switch(tabClickedID) {
            case "nav-home":
                pageInfoContainer.innerHTML = home;
                changeBackgroundImage("home")
                break;
            case "nav-menu":
                pageInfoContainer.innerHTML = menu;
                changeBackgroundImage("menu")
                break;
            case "nav-contact":
                pageInfoContainer.innerHTML = contact;
                changeBackgroundImage("contact")
                break;
            default:
                console.log("error");
        }
    }

    tabs.forEach(tab => tab.addEventListener("click", switchTab));
    preloadImages();

})();