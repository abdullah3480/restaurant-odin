export function menuPage(){
    const content = document.querySelector("#content")
    
    function display(){

         content.textContent = ''

    const textBox = document.createElement('div');


    textBox.textContent  = "Menu";
    textBox.classList.add("textBox")
        content.append(textBox)    

    }
    return display;
}