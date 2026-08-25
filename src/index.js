import "./style.css"
import { HomePage } from "./home.js"
import { menuPage } from "./menu.js";
import {AboutPage} from "./about.js"


function restaurant(){
    const displayHome = HomePage();
    const displayMenu = menuPage();
    const displayAbout = AboutPage();

    const menuButton = document.querySelector("#menuButton")
    const homeButton = document.querySelector("#homeButton")
    const aboutButton = document.querySelector("#aboutButton")
    displayHome();

    menuButton.addEventListener('click', displayMenu)
    homeButton.addEventListener('click',displayHome)
    aboutButton.addEventListener('click', displayAbout)



}


restaurant()