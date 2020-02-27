import { homeContent } from "./homeContent";
import header from "./header"; 

import home from "./homeContent";
import menu from "./menuContent";
import contact from "./contactContent";

const loadPage = () => {

    const docBody = document.querySelector("body");
    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = "";

    contentDiv.innerHTML += header;
    contentDiv.innerHTML += home;

}

export default loadPage;