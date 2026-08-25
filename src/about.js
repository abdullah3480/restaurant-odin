export function AboutPage (){


    const content = document.querySelector('#content')

    function display(){
        content.textContent = ''
        const textBox = document.createElement('div')
        textBox.textContent = "Visit our restaurant to find out more"
        textBox.classList.add("textBox")

        content.append(textBox)
    }
    return display;
}