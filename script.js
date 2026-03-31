//when i click on a button from the list it should blink the section its referencing
const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
    item.addEventListener('click', () => {
        const sectionId = item;
        const section = document.getElementById(sectionId);
        console.log("Clicked on: " + section);
        section.classList.add('blink');
        setTimeout(() => {
            section.classList.remove('blink');
        }
        , 1000); // Remove the blink class after 1 second
    });
});

