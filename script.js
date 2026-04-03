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
    //if month or day is less than 10, add a leading zero
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedDate = `Today is ${formattedMonth}/${formattedDay}/${year}`;
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

// Example output idea
// Original value: "42" → Converted: 42 → isNaN: false → isInteger: true
// Original value: "19.75" → Converted: 19.75 → isNaN: false → isInteger: false
// Original value: "hello" → Converted: NaN → isNaN: true → isInteger: false

//Conversion and Validation Section
function convert(value) {
    try {
        const number = Number(value);
        const isNaNValue = isNaN(number);
        const isIntegerValue = Number.isInteger(number);
        return `Original value: "${value}" → Converted: ${number} → isNaN: ${isNaNValue} → isInteger: ${isIntegerValue}`;
        
    } catch (error) {
        console.error('Error occurred while converting value:', error);
        return `Error: ${error.message}`;
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

//add the blocks
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
            //do the conversion and validation
            const newResult = convert(input.value);
            console.log(newResult);
            

            //set the result
            setResult(block.result, newResult);
        });
    } catch (error) {
        console.error('Error occurred while adding click event:', error);
    } finally {
        console.log('Finished adding click event for block:', block);
    }
});

