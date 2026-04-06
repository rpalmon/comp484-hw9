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
    dateContainer.innerHTML = formattedDate;
    
}

updateDate(); // Initial call to display the date immediately

//////////////////////////////////////////////
// Start of Conversion and Validation Section

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

function checkNan(value) {
    if(isNaN(value)) {
        return `${value} is not a valid number.`;
    } else {
        return `${value} is a valid number.`;
    }
}

function checkInt(value) {
    if(Number.isInteger(Number(value))) {
        return `This value: "${value}" is an integer.`;
    } else {
        return `This value: "${value}" is not an integer.`;
    }
}

function checkAverage(value) {
    if(value > 70) {
        return "Passing"
    } else {
        return "Not Passing"
    }
}

const blockList = []
// each block has a button, input, and result element
// conversion block
function addBlock(input, button, result, res) {
    blockList.push({
        input: input,
        button: button,
        result: result,
        res: res
    });
}

//add the blocks
addBlock('conversion-input', 'convert-button', 'conversion-result', 'conv-res');
addBlock('validation-input', 'validate-button', 'validation-result', 'val-res');
addBlock('math-input', 'math-button', 'math-result', 'math-res');
addBlock('number-formatting-input', 'format-button', 'number-formatting-result', 'format-res');

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
            //if conv value is nan, "This value is not a valid number"
            //if number is an integer, "This value is an integer"
            //if an average is 70 or higher, show Passing
            //otherwise show not passing
            
            //this is to show for conv-res 
            const res = document.getElementById(block.res);
            const checkNanResult = isNaN(Number(input.value));
            const checkIntResult = Number.isInteger(Number(input.value));
            const checkAverageResult = checkAverage(Number(input.value));

            res.innerHTML = ` <br> ${checkNan(input.value)} <br> ${checkInt(input.value)} <br> Average: ${checkAverageResult}`;
            

            //set the result
            setResult(block.result, newResult);
        });
    } catch (error) {
        console.error('Error occurred while adding click event:', error);
    } finally {
        console.log('Finished adding click event for block:', block);
    }
});

// END OF CONVERSION AND VALIDATION SECTION
///////////////////////////////////////////


//////////////////////////////////////////////////////
//Start of Number Formatting and Math Results Section

const form = document.getElementById('price-calculator-form');

function calculateTotalCost(price, taxRate, shippingCost) {
    //return {subtotal, taxAmount, totalCost}
    const taxAmount = price * (taxRate / 100);
    const totalCost = price + taxAmount + shippingCost;
    return {
        subtotal: price.toFixed(2),
        taxAmount: taxAmount.toFixed(2),
        totalCost: totalCost.toFixed(2),
        shippingCost: shippingCost.toFixed(2)
    }
}

function setDisplayResults(results) { 
    const subtotalDisplay = document.getElementById('subtotal-result');
    const taxAmountDisplay = document.getElementById('tax-result');
    const shippingCostDisplay = document.getElementById('shipping-result');
    const totalResultDisplay = document.getElementById('total-result');

    subtotalDisplay.textContent = `Subtotal: $${results.subtotal}`;
    taxAmountDisplay.textContent = `Tax Amount: $${results.taxAmount}`;
    shippingCostDisplay.textContent = `Shipping Cost: $${results.shippingCost}`;
    totalResultDisplay.textContent = `$${results.totalCost}`;

}

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    const price = parseFloat(document.getElementById('item-price').value);
    const taxRate = parseFloat(document.getElementById('tax-rate').value);
    const shippingCost = parseFloat(document.getElementById('shipping-cost').value);

    console.log(`Price: ${price}, Tax Rate: ${taxRate}, Shipping Cost: ${shippingCost}`);
    const results = calculateTotalCost(price, taxRate, shippingCost);
    setDisplayResults(results);
    console.log(results);
});
//END OF NUMBER FORMATTING AND MATH RESULTS SECTION
//////////////////////////////////////////////////////

//////////////////////////////////////////////////////
//Start of Extra Credit Section

//Add a fourth section that uses typeof to identify the type of at least five values

function identifyType(value) {
    //convert value to string and remove whitepsace
    const str = String(value).trim();

    // Check for undefined, boolean, number, object, and string types
    if (str === 'undefined') {
        return `The value "${value}" is undefined.`;
    }

    // Check for boolean values (true or false)
    if (str === 'true' || str === 'false') {
        return `The value "${value}" is a boolean.`;
    }

    // Check for number values (including integers and floats)
    if (!Number.isNaN(Number(str))) {
        if (str.includes('.')) {
            return `The value "${value}" is a float.`;
        }
        return `The value "${value}" is a number.`;
    }

    // Check for object values (excluding arrays and null)
    try {
        const parsed = JSON.parse(str);
        if (parsed !== null && typeof parsed === 'object' && !Array.isArray(parsed)) {
            return `The value "${value}" is an object.`;
        }
    } catch {}

    // If none of the above conditions are met, it's a string
    return `The value "${value}" is a string.`;
}

//add event listener to button to display result
const identifyTypeButton = document.getElementById('identify-type-button');
identifyTypeButton.addEventListener('click', () => {
    const inputValue = document.getElementById('extra-credit-input').value;
    const result = identifyType(inputValue);
    const resultDisplay = document.getElementById('extra-credit-result');
    resultDisplay.textContent = result;
});

//END OF EXTRA CREDIT SECTION
//////////////////////////////////////////////////////