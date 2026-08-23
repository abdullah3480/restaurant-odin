import "./style.css"
import { HomePage } from "./home.js"
import { menuPage } from "./menu.js";



function restaurant(){
    const displayHome = HomePage();
    const displayMenu = menuPage();

    const menuButton = document.querySelector("#menuButton")
    const homeButton = document.querySelector("#homeButton")
    displayHome();

    menuButton.addEventListener('click', displayMenu)
    homeButton.addEventListener('click',displayHome)


}


restaurant()