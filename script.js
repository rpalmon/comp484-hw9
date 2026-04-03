// Blink the referenced section when a navigation link is clicked
const dateContainer = document.getElementById('date-container');
const conversionContainer = document.getElementById('conversion-container');
const numberContainer = document.getElementById('number-container');

function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toString();
}

// Display the current date in the date container automatically updates every second
function updateDate() {
    //Today is MM/DD/YYYY
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const formattedDate = `Today is ${month}/${day}/${year}`;
    dateContainer.textContent = formattedDate;
    
}

updateDate(); // Initial call to display the date immediately

const results = {
    conversion : 'conversion-result',
    validation : 'validation-result',
    math : 'math-result',
    formatting : 'number-formatting-result'
}

function setResult(type, value) {
    const resultElement = document.getElementById(type);
    if (resultElement) {
        resultElement.textContent = value;
    } else{
        console.error(`Element with ID ${results[type]} not found.`);
    }
}

// setResult(results.conversion, 'test'); // Clear conversion result

//Conversion and Validation Section
function convert(value) {
    try {
        const number = Number(value);
        if (Number.isNaN(number)) {
            setResult(results.conversion, 'Invalid number');
        } else if (Number.isInteger(number)) {
            setResult(results.conversion, `Converted value: ${number}`);
        }    
        else {
            setResult(results.conversion, `Converted value: ${number}`);
        }
    } catch (error) {
        console.error('Error occurred while converting value:', error);
        setResult(results.conversion, 'Error occurred while converting value');

    }
}

const blockList = []
// each block has a button, input, and result element
// conversion block
function addBlock(input, button, result) {
    blockList.push({
        input: input,
        button: button,
        result: result
    });
}

addBlock('conversion-input', 'convert-button', 'conversion-result');
addBlock('validation-input', 'validate-button', 'validation-result');
addBlock('math-input', 'math-button', 'math-result');
addBlock('number-formatting-input', 'format-button', 'number-formatting-result');

console.log(blockList);
blockList.forEach(block => {
    const button = document.getElementById(block.button);
    console.log(document.getElementById(block.button));
    const input = document.getElementById(block.input);
    try {
        button.addEventListener('click', () => {
            console.log("successfully clicked ", block);
            //log what button clicked and value of input
            console.log(`Button ${block.button} clicked with input value: ${input.value}`);
        });
    } catch (error) {
        console.error('Error occurred while adding click event:', error);
    } finally {
        console.log('Finished adding click event for block:', block);
    }
});


// blocks.forEach(blockId => {
//     const button = document.getElementById(buttonId);
//     const input = document.getElementById(blockId);
//     console.log(button, input);
//     button.addEventListener('click', () => {
//         const value = input.value;
//         console.log(value);
//         setResult(blocks[blockId], value);
//     });
// });    
