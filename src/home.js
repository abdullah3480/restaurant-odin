

function HomePage(){

    
    const content = document.querySelector("#content")
    const textBox = document.createElement('div');


    const homeButton = document.querySelector("homeButton")
    function display(){

         content.textContent = ''
          const textBox = document.createElement('div');

    textBox.textContent  = "Looking for the best sushi in town? You have come to just the right place!"
    textBox.classList.add("textBox")
        content.append(textBox)    

    }
    return display;
}

export {HomePage}