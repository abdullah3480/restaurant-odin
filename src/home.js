

function HomePage(){

    
    const content = document.querySelector("#contetn")
    const textBox = document.createElement('div');

    textBox.textContent  = "Looking for the best sudhi in town? You have to come to just the right place!"
    textBox.classList.add("textBox")

    const homeButton = document.querySelector("homeButton")
    function display(){
         content.textContent = ""
        content.append(textContent)    

    }
    return display();
}

export {HomePage}