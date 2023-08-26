const inputBoxes = document.querySelectorAll(".inputValue");


inputBoxes.forEach(inputBox => {
    inputBox.addEventListener("input", calculateSum);
});

function calculateSum() {
    let sum = 0;
    inputBoxes.forEach(inputBox => {
        const inputValue = parseFloat(inputBox.value);
        if (!isNaN(inputValue)) {
            sum += inputValue; 
        }
        return sum;
    });
    document.getElementById("result1").value = `${sum}`;
}

const inputBoxes2 = document.querySelectorAll(".inputValue2");

inputBoxes2.forEach(inputBox2 => {
    inputBox2.addEventListener("input", calculateSum2);
});

function calculateSum2() {
    let sum2 = 0;
    inputBoxes2.forEach(inputBox2 => {
        const inputValue2 = parseFloat(inputBox2.value);
        if (!isNaN(inputValue2)) {
            sum2 += inputValue2;
        }
    });
    document.getElementById("result2").value = `${sum2}`;
}        

const inputBoxes3 = document.querySelectorAll(".inputValue3");

inputBoxes3.forEach(inputBox3 => {
    inputBox3.addEventListener("input", calculateSum3);
});

function calculateSum3() {
    let sum3 = 0;
    inputBoxes3.forEach(inputBox3 => {
        const inputValue3 = parseFloat(inputBox3.value);
        if (!isNaN(inputValue3)) {
            sum3 += inputValue3;
        }
    });
    document.getElementById("result3").value = `${sum3}`;
}    
const inputBoxes4 = document.querySelectorAll(".inputValue4");

inputBoxes4.forEach(inputBox4 => {
    inputBox4.addEventListener("input", calculateSum4);
});

function calculateSum4() {
    let sum4 = 0;
    inputBoxes4.forEach(inputBox4 => {
        const inputValue4 = parseFloat(inputBox4.value);
        if (!isNaN(inputValue4)) {
            sum4 += inputValue4;
        }
    });
    document.getElementById("result4").value = `${sum4}`;
}                    



